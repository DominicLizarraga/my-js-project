const list = document.querySelector("#list-inline")
console.log(list)

fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
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

