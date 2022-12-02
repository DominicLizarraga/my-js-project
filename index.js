const list = document.querySelector(".list-inline")
console.log(list)


fetchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      data.Search.forEach((result) => {
        console.log(result.Title)
          const movie = `<li class="list-inline-item">
          <img src="${result.Poster}" alt="">
          <p>${result.Title}</p>
          </li>`
          list.insertAdjacentHTML("beforeend", movie)
    })
  })
};

const form = document.getElementById("search-form")

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector(".form-control")
  list.innerHTML = ""
  fetchMovies(input.value)

})


