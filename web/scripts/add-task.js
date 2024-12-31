async function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  try {
    const response = await fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: taskText }),
    });

    if (!response.ok) throw new Error("Erro ao criar a tarefa");

    const task = await response.json();
    const todoList = document.getElementById("todoList");
    const li = document.createElement("li");
    li.className = "todo-item";
    li.dataset.id = task.id;

    li.innerHTML = `
      <input type="checkbox" onchange="toggleTask(this)" ${
        task.completed ? "checked" : ""
      }>
      <span>${task.title}</span>
      <input type="text" class="edit-input" value="${task.title}" style="display: none;">
      <div class="actions">
        <button class="edit-btn" onclick="editTask(this)">
          <span class="material-symbols-outlined">edit</span>
        </button>
        <button class="delete-btn" onclick="deleteTask(this)">
          <span class="material-symbols-outlined">
            close
          </span>
        </button>
      </div>
    `;

    todoList.appendChild(li);
    input.value = "";
  } catch (error) {
    console.error("Error:", error);
    alert("Erro ao criar a tarefa");
  }
}

document.getElementById('taskInput').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});