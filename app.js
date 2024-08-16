let key = "d3a8cf20"
let searchİnput = document.querySelector(".searchİnput")
let movieTitle = document.querySelector(".movieTitle")
let movieİmdb = document.querySelector(".movieİmdb")
let movieYear = document.querySelector(".movieYear")
let movieMin = document.querySelector(".movieMin")
let movieTypeBox1 = document.querySelector(".movieTypeBox1")
let movieTypeBox2 = document.querySelector(".movieTypeBox2")
let movieTypeBox3 = document.querySelector(".movieTypeBox3")
let movieİmage = document.querySelector(".movieİmage")
let movieStoryP = document.querySelector(".movieStoryP")
let movieActorsP = document.querySelector(".movieActorsP")
document.querySelector(".searchButton").addEventListener("click", () => {
    if (searchİnput.value.trim() == "") {
        alert("Arama Alanını Boş Bırakamazsınız")
    } else {
        fetch(`http://www.omdbapi.com/?apikey=${key}&t=${searchİnput.value}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.Error == "Movie not found!") {
                    alert("Film Bulunamadı")
                } else {
                    movieUIWrite(data)
                }
            })
    }
})
function movieUIWrite(data) {
    movieTitle.textContent = data.Title
    movieİmdb.textContent = data.imdbRating
    movieYear.textContent = data.Year
    movieMin.textContent = data.Runtime
    let arrayType = data.Genre.split(", ")
    movieTypeBox1.textContent = arrayType[0]
    movieTypeBox2.textContent = arrayType[1]
    movieTypeBox3.textContent = arrayType[2]
    movieİmage.src = data.Poster
    movieStoryP.textContent = data.Plot
    movieActorsP.textContent = data.Actors
}
