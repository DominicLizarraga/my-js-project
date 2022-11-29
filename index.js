console.log("Hello from src/index.js!");

const btn = document.querySelector("#click-me")
console.log(btn)

btn.addEventListener("click", (event) => {
  console.log("i was clicked")
})
