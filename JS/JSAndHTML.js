// let todo1 = "Buy groceries";
// let todo2 = "Walk the dog";
// let todo3 = "Read a book";

// let element = document.createElement("div");
// element.innerText = todo1;
// document.body.appendChild(element);

// element = document.createElement("div");
// element.innerText = todo2;
// document.body.appendChild(element);

// element = document.createElement("div");
// element.innerText = todo3;
// document.body.appendChild(element);
let todos = [
  { title: "Buy groceries", dueDate: "2023-10-01", id: 1 },
  { title: "Walk the dog", dueDate: "2023-10-02", id: 2 },
  { title: "Read a book", dueDate: "2023-10-03", id: 3 },
];
render();
function render() {
  todos.forEach(function addTodo(todoTitle) {
    let element = document.createElement("div");
    element.innerText = todoTitle.title + " - Due: " + todoTitle.dueDate;
    document.body.appendChild(element);

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.style.marginLeft = "10px";
    deleteButton.id = todoTitle.id; // Set the ID for the button
    deleteButton.onclick = deleteTodo;
    // deleteButton.addEventListener("click", function() {

    // });
    element.appendChild(deleteButton);
    localStorage.setItem("todos", JSON.stringify(todos));
     // Store the todos in localStorage
  });
}

function addTodoTitle() {
  let textbox = document.getElementById("todoTitle");
  let todoTitle = textbox.value;
  let datePicker = document.getElementById("todoDate");
  let todoDate = datePicker.value;
  let id = Math.floor(Math.random() * 1000); // Generate a random ID for the todo
  if (todoTitle) {
    document.getElementById("todoList").innerText = ""; // Clear the body to avoid duplication
    todos.push({
      title: todoTitle,
      dueDate: todoDate,
      id: id,
    });
    console.log(todos); // Add the new todo title to the array
    render();
    textbox.value = "";
    datePicker.value = "";
    // Clear the input field after adding
  } else {
    alert("Please enter a todo title.");
  }
}

function deleteTodo(event) {
  const deleteButton = event.target;
  const todoID = deleteButton.id; // Get the ID from the button

  todos = todos.filter(function (todo) {
    return todo.id != todoID; // Filter out the todo with the matching ID
  });
  document.getElementById("todoList").innerText = ""; // Clear the body to avoid duplication
  render(); // Re-render the updated todo list
  console.log(todos); // Log the updated todos array
}
