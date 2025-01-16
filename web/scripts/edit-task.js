function attachEventListeners(taskElement) {
  const editBtn = taskElement.querySelector(".edit-btn");
  if (editBtn) {
    editBtn.addEventListener("click", () => editTask(editBtn));
  }
}

async function editTask(button) {
  const li = button.closest(".todo-item");
  const taskId = li.dataset.id;
  const titleSpan = li.querySelector(".task-title");
  const editInput = li.querySelector(".edit-input");
  const editIcon = button.querySelector(".material-symbols-outlined");
  const isCompleted = li.classList.contains("completed");

  const checkbox = li.querySelector("input[type='checkbox']");
  const deleteButton = li.querySelector(".delete-btn");

  if (editIcon.textContent === "edit") {
    checkbox.style.display = "none";
    deleteButton.style.display = "none";

    titleSpan.style.display = "none";
    editInput.style.display = "inline-block";
    editInput.focus();
    editIcon.textContent = "save";
  } else {
    const newTitle = editInput.value.trim();
    if (!newTitle) {
      alert("O título da tarefa não pode ser vazio");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/tasks/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTitle,
          completed: isCompleted,
        }),
      });

      if (!response.ok) throw new Error("Erro ao editar a tarefa");

      checkbox.style.display = "inline";
      deleteButton.style.display = "inline";

      titleSpan.textContent = newTitle;
      titleSpan.style.display = "inline";
      editInput.style.display = "none";
      editIcon.textContent = "edit";
    } catch (error) {
      console.error("Error:", error);
      alert("Erro ao editar a tarefa");
    }
  }
}
