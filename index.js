console.log("Hello from src/index.js!");

const btn = document.querySelector("#click-me")
console.log(btn)

btn.addEventListener("click", (event) => {
  console.log("i was clicked")
  // console.dir(event.currentTarget) this will display an object of all methods available from this event
  event.currentTarget.innerText = "hold tight!";
  event.currentTarget.setAttribute("disabled", "");

});
