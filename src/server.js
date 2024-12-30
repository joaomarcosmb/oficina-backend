import pool from "./db";

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8000;

/**
 * Rota de criação de uma tarefa
 */
app.post("/tasks", async (req, res) => {
  const { title } = req.body;
  try {
    const newTask = await pool.query(
      "INSERT INTO tasks (title) VALUES ($1) RETURNING *",
      [title]
    );
    res.status(201).json(newTask.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar tarefa." });
  }
});

/**
 * Rota de listagem de tarefas
 */
app.get("/tasks", async (req, res) => {
  try {
    const allTasks = await pool.query("SELECT * FROM tasks");
    res.json(allTasks.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar tarefas." });
  }
});

/**
 * Rota de edição de uma tarefa
 */
app.put("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {
    const updatedTask = await pool.query(
      "UPDATE tasks SET title = $1, completed = $2 WHERE id = $3 RETURNING *",
      [title, completed, id]
    );
    res.json(updatedTask.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao atualizar tarefa." });
  }
});

/**
 * Rota de deleção de uma tarefa
 */
app.delete("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
    res.json({ message: "Tarefa removida com sucesso." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao remover tarefa." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
