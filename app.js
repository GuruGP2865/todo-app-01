//Selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listenor
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
document.addEventListener("DOMContentLoaded", getTodos);

//function
function addTodo() {
  //Prevent form from submitting
  event.preventDefault();
  //create div element
  const todoDiv = document.createElement("div");
  //add class to div element
  todoDiv.classList.add("todo");
  //
  //
  //create li element
  const newTodo = document.createElement("li");
  //add class to newtodo
  newTodo.classList.add("todo-item");
  //give value inside li element
  newTodo.innerText = todoInput.value;

  //add this li element as child to div element
  todoDiv.appendChild(newTodo);

  saveLocalTodos(todoInput.value);
  //add completed button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<li class="fa fa-check"></li>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<li class="fa fa-trash"></li>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //Append todo list
  todoList.appendChild(todoDiv);
  //after creating clear input button
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  //check if item is trash
  if (item.classList[0] === "trash-btn") {
    const parentItem = item.parentElement;
    parentItem.classList.add("fall");
    removeLocalTodos(parentItem);
    parentItem.addEventListener("transitionend", function () {
      parentItem.remove();
    });
  }

  //check if completed
  if (item.classList[0] === "complete-btn") {
    const parentItem = item.parentElement;
    parentItem.classList.toggle("completed");
    editLocalTodos(parentItem);
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalTodos(todo) {
  //check if already have anything

  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  let completedTodo;
  if (localStorage.getItem("completedTodo") === null) {
    completedTodo = [];
  } else {
    completedTodo = JSON.parse(localStorage.getItem("completedTodo"));
  }

  todos.forEach(function (todo) {
    const todoDiv = document.createElement("div");
    //add class to div element
    todoDiv.classList.add("todo");
    //
    //
    //create li element
    const newTodo = document.createElement("li");
    //add class to newtodo
    newTodo.classList.add("todo-item");
    //give value inside li element
    newTodo.innerText = todo;

    //add this li element as child to div element
    todoDiv.appendChild(newTodo);
    //add completed button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<li class="fa fa-check"></li>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<li class="fa fa-trash"></li>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //check if it is completed
    if (completedTodo.indexOf(todo) >= 0) {
      todoDiv.classList.toggle("completed");
    }

    //Append todo list
    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function editLocalTodos(todo) {
  let completedTodo;
  if (localStorage.getItem("completedTodo") === null) {
    completedTodo = [];
  } else {
    completedTodo = JSON.parse(localStorage.getItem("completedTodo"));
  }
  const comp = todo.children[0].innerText;
  const compIndex = completedTodo.indexOf(comp);
  if (compIndex >= 0) {
    completedTodo.splice(compIndex, 1);
    localStorage.setItem("completedTodo", JSON.stringify(completedTodo));
  } else {
    completedTodo.push(comp);
    localStorage.setItem("completedTodo", JSON.stringify(completedTodo));
  }
  localStorage.setItem("completedTodo", JSON.stringify(completedTodo));
}
