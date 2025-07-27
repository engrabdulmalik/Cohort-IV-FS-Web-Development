let todos = JSON.parse(localStorage.getItem("todos")) || [
  { title: "Buy groceries", dueDate: "2023-10-01", id: 1 },
  { title: "Walk the dog", dueDate: "2023-10-02", id: 2 },
  { title: "Read a book", dueDate: "2023-10-03", id: 3 },
];

render();

function render() {
  const todoList = document.getElementById("todoList");
  todoList.innerText = ""; // Clear old list

  todos.forEach(function (todo) {
    // Create todo element
    let element = document.createElement("div");
    element.innerText = todo.title + " - Due: " + todo.dueDate;

    // Create delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.style.marginLeft = "10px";
    deleteButton.id = todo.id;
    deleteButton.onclick = deleteTodo;

    element.appendChild(deleteButton);
    todoList.appendChild(element);
  });

  // ✅ Save updated todos to localStorage
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodoTitle() {
  let textbox = document.getElementById("todoTitle");
  let todoTitle = textbox.value;
  let datePicker = document.getElementById("todoDate");
  let todoDate = datePicker.value;

  if (todoTitle) {
    let id = Math.floor(Math.random() * 100000);

    todos.push({
      title: todoTitle,
      dueDate: todoDate,
      id: id,
    });

    render();

    textbox.value = "";
    datePicker.value = "";
  } else {
    alert("Please enter a todo title.");
  }
}

function deleteTodo(event) {
  const todoID = event.target.id;

  todos = todos.filter((todo) => todo.id != todoID);

  render(); // Re-render updated list
}
