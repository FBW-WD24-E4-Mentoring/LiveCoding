/* const btn = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.querySelector("ul"); */
/* btn.onclick = function () {
  console.log("hello world");
}; */
/* remove event listener onclick */
/* btn.onclick=null */

/* listen for click event */
/* btn.addEventListener("click", () => {
  // get value of the input field
  console.log(input.value);
  //create li element
  const li = document.createElement("li"); // <li></li>
  const span = document.createElement("span"); //<span></span>
  span.textContent = "X"; //<span>X</span>
  li.textContent = input.value; // <li>Breakfast</li>
  li.appendChild(span); // <li>Breakfast <span>X</span> </li>

  //append this li in the ul
  ul.appendChild(li);

  // clear input field
  input.value = "";
}); */

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

/* listen for submit event */
form.addEventListener("submit", (e) => {
  // stop default behavior of your form
  e.preventDefault(); // !IMPORTANT
  // get value of the input field
  console.log(input.value);
  if (input.value.trim() === "") return;
  //create li element
  const li = document.createElement("li"); // <li></li>
  const span = document.createElement("span"); //<span></span>
  span.textContent = "X"; //<span>X</span>
  li.textContent = input.value; // <li>Breakfast</li>
  li.appendChild(span); // <li>Breakfast <span>X</span> </li>

  /* process of events execution is called propogation  */
  // attach eventlistener to your li
  /*  li.addEventListener("click", (e) => {
    //event handler
    e.stopPropagation();
    li.style.backgroundColor = "green";
    console.log("li code");
  }); */

  //attach event listener on span to delete li
  /*   span.addEventListener("click", (e) => {
    e.stopPropagation();
    span.parentElement.remove();
    console.log("span code");
  }); */

  //append this li in the ul
  ul.appendChild(li);

  // clear input field
  /* input.value = ""; */
  // reset the form
  form.reset();
});

/* ul.addEventListener("click", () => {
  ul.style.backgroundColor = "red";
});
 */
/* appendChild it can take node or element but 1 at a time */
// btn.appendChild("Hello")
// btn.appendChild("div")

/* append takes only elements as an arguments */
// btn.append(span,i )

/* ul.insertAdjacentElement("beforebegin", li); */

/* event delegation */
/* technique to avoid using multiple event listeners , instead of that attach a single event listener to the parent */

ul.addEventListener("click", (e) => {
  console.dir(e.target);
  /* using e.target perform different operations */
  if (e.target.localName === "span") {
    e.target.parentElement.remove();
  }
  if (e.target.localName === "li") {
    e.target.style.backgroundColor = "green";
  }
});
