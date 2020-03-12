document.addEventListener("DOMContentLoaded", function () {
    let btn = document.getElementById("btn")

    document.getElementById('txt').onkeydown = function (event) {
        if (event.keyCode == 13) {
            getMovieData();

        }
    }
    btn.addEventListener("click", getMovieData)
});

function getMovieData() {

    let txt = document.getElementById("txt");
    let apikey = '7fa242df'
    let url = "http://www.omdbapi.com/?apikey=" + apikey + "&t=" + txt.value;
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson);
            let Movies = document.getElementById("Movies");
            let MovieInfo = document.getElementById("MovieInfo");
            let title = myJson.Title;
            MovieInfo.innerHTML = title;
            MovieInfo.innerHTML += '<br>'
            MovieInfo.innerHTML += myJson.Plot;
            MovieInfo.innerHTML += '<br>'
            myJson.Actors.split(",").forEach(function (actor) {
                MovieInfo.innerHTML += actor + " | "
            })
            MovieInfo.innerHTML += '<br>'

            myJson.Ratings.forEach(function (rating) {
                MovieInfo.innerHTML += rating.Source + " : " + rating.Value + "<br>"
            })
            let link = document.createElement("a");
            link.href = "https://www.imdb.com/title/" + myJson.imdbID;
            let img = document.createElement("img");
            img.src = myJson.Poster;
            img.style.width = "25vw";
            link.appendChild(img);
            Movies.appendChild(link)
        });
}