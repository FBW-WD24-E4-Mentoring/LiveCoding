const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const data = [];

function appendTasks(tasks) {
  ul.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li"); // <li></li>
    const span = document.createElement("span"); //<span></span>
    span.textContent = "X"; //<span>X</span>
    li.textContent = task.text; // <li>Breakfast</li>
    li.id = task.id;
    li.appendChild(span); // <li>Breakfast <span>X</span> </li>
    li.style.backgroundColor = task.status ? "green" : "gray";
    ul.append(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = { id: Date.now(), text: input.value, status: false };
  data.push(task);
  appendTasks(data);

  form.reset();
});

ul.addEventListener("click", (e) => {
  console.dir(e.target);
  /* using e.target perform different operations */
  if (e.target.localName === "span") {
    const id = e.target.parentElement.id;
    const index = data.indexOf((item) => item.id === id);
    data.splice(index - 1, 1);
    appendTasks(data);
  }
  if (e.target.localName === "li") {
    const id = e.target.id;
    console.log(id);
    console.log(data);
    const task = data.find((item) => item.id === Number(id));
    console.log(task);
    task.status = !task.status;
    appendTasks(data);
  }
});
