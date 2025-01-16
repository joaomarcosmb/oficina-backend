async function deleteTask(button) {
  const listItem = button.parentElement.parentElement;
  const taskId = listItem.getAttribute("data-id");

  try {
    const response = await fetch(`http://localhost:8000/tasks/${taskId}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Erro ao deletar a tarefa");

    listItem.remove();
  } catch (error) {
    console.error("Error:", error);
    alert("Erro ao deletar a tarefa");
  }
}
