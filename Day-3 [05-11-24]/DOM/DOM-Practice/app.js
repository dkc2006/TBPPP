const button = document.getElementById("btn");
const body = document.body;
console.log(body);

button.addEventListener("click", () => {
  const div = document.createElement("div");
  div.style.height = "100px";
  div.style.border = "2px solid black";
  body.appendChild(div);
});
