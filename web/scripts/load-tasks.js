async function loadTasks() {
  try {
    const response = await fetch("http://localhost:8000/tasks");
    if (!response.ok) throw new Error("Erro ao carregar as tarefas");

    const tasks = await response.json();
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";

    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.className = "todo-item";
      li.dataset.id = task.id;

      li.innerHTML = `
        <input type="checkbox" onchange="toggleTask(this)" ${
          task.completed ? "checked" : ""
        }>
        <span class="task-title">${task.title}</span>
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

      if (task.completed) {
        li.classList.add("completed");
      }

      todoList.appendChild(li);
    });
  } catch (error) {
    console.error("Error:", error);
    alert("Erro ao carregar as tarefas");
  }
}

document.addEventListener("DOMContentLoaded", loadTasks);
