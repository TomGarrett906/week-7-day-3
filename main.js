//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//DOCUMENT THEME
const body = document.body;
body.style.backgroundColor = "black";
body.style.color = "white";

const hOne = document.querySelector("#main-heading");
console.log(hOne);

const themeButton = document.createElement("button");
themeButton.innerText = "Dark Mode";
body.append(themeButton);

themeButton.addEventListener("click", () => {
  if (body.style.backgroundColor === "black") {
    darkMode();
  } else {
    darkerMode();
  }
});
function darkMode() {
  body.style.backgroundColor = "#2b2b2b";
  body.style.color = "#bfbfbf";
  themeButton.innerText = "Darker Mode";
}

function darkerMode() {
  body.style.backgroundColor = "black";
  body.style.color = "white";
  themeButton.innerText = "Dark Mode";
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//CHECKBOX CONTAINER
const todoForm = document.getElementById("todo-form");
const checkboxContainer = document.getElementById("checkbox-container");

function createTodoItem(title, description) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const label = document.createElement("label");
  label.appendChild(document.createTextNode(`${title}: ${description}`));

  const removeTodo = document.createElement("button");
  removeTodo.innerText = "X";

  const todoTitle = document.createElement("li");
  todoTitle.appendChild(checkbox);
  todoTitle.appendChild(label);
  todoTitle.appendChild(removeTodo);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//EVENT LISTENER
  
  label.addEventListener("click", () => {
    todoTitle.classList.toggle("done");
    checkbox.checked = checkbox.checked;
  });

  removeTodo.addEventListener("click", () => {
    todoTitle.remove();
  });
  return todoTitle;
}
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  if (title) {
    const todoTitle = createTodoItem(title, description);
    checkboxContainer.appendChild(todoTitle);

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
  }
});
