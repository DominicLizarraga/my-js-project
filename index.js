// GET request

// const list = document.querySelector(".list-inline")
// console.log(list)


// fetchMovies = (query) => {
//   fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
//     .then(response => response.json())
//     .then((data) => {
//       data.Search.forEach((result) => {
//         console.log(result.Title)
//           const movie = `<li class="list-inline-item">
//           <img src="${result.Poster}" alt="">
//           <p>${result.Title}</p>
//           </li>`
//           list.insertAdjacentHTML("beforeend", movie)
//     })
//   })
// };

// const form = document.getElementById("search-form")

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const input = event.currentTarget.querySelector(".form-control")
//   list.innerHTML = ""
//   fetchMovies(input.value)

// })


// POST request

const signUp = (event) => {
  event.preventDefault()
  const emailValue = document.getElementById("email").value
  const passwordValue = document.getElementById("password").value
  fetch("https://reqres.in/api/register", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({"email": emailValue, "password": passwordValue})
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data)
    })
}

const form = document.querySelector("#form")
form.addEventListener("submit", signUp)
