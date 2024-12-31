async function toggleTask(checkbox) {
  const listItem = checkbox.parentElement;
  const taskId = listItem.dataset.id;

  try {
    const response = await fetch(`http://localhost:8000/tasks/${taskId}/toggle`, {
      method: "PUT",
    });

    if (!response.ok) throw new Error("Erro ao marcar a tarefa como concluída");

    if (checkbox.checked) {
      listItem.classList.add("completed");
    } else {
      listItem.classList.remove("completed");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Erro ao marcar a tarefa como concluída");
    checkbox.checked = !checkbox.checked;
  }
}
