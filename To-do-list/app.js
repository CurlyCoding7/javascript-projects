const inputField = document.querySelector(".input-field");
const btnAdd = document.querySelector(".btn-add");
const itemsBox = document.querySelector(".items-box");

function handleDeleteTask(task) {
  task.remove();
}

function handleAddTask() {
  if (inputField.value !== "") {
    let task = document.createElement("div");
    task.classList.add("item");
    task.innerHTML = `<p>${inputField.value}<p/>  <i class="bx bx-message-square-x"></i> `;
    itemsBox.appendChild(task);
    inputField.value = "";

    task
      .querySelector("i")
      .addEventListener("click", () => handleDeleteTask(task));
  }
}

btnAdd.addEventListener("click", handleAddTask);

// Thanks for watching....
