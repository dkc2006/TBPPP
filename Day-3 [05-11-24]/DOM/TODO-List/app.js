const todoList = document.getElementById("todo-list");

// Add new To-Do
function addTodo() {
  const todoInput = document.getElementById("todo-input");
  const todoText = todoInput.value.trim();
  if (todoText === "") {
    alert("Please enter a task.");
    return;
  }

  const todoItem = document.createElement("li");

  const todoTextSpan = document.createElement("span");
  todoTextSpan.className = "todo-text";
  todoTextSpan.textContent = todoText;

  // Edit Button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.onclick = () => editTask(todoItem, todoTextSpan);

  // Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = () => todoList.removeChild(todoItem);

  // Append elements
  const actionBtns = document.createElement("div");
  actionBtns.className = "action-btns";
  actionBtns.append(editButton, deleteButton);

  todoItem.append(todoTextSpan, actionBtns);
  todoList.appendChild(todoItem);

  todoInput.value = ""; // Clear input field
}

// Edit Task
function editTask(todoItem, todoTextSpan) {
  const newTask = prompt("Edit your task:", todoTextSpan.textContent);
  if (newTask) {
    todoTextSpan.textContent = newTask.trim();
  }
}

// Delete All Tasks
function deleteAll() {
  todoList.innerHTML = "";
}

// Navigation buttons
function navigate(page) {
  window.location.href = page + ".html";
}
