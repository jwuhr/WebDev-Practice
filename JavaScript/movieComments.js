var movies = [{
        title: "Mad Max",
        watched: true,
        rating: 4
    },
    {
        title: "Harry Potter 1",
        watched: false,
        rating: 4.5
    },
    {
        title: "Spirited Away",
        watched: false,
        rating: 4.8
    }
]

movies.forEach(function(movie) {
    if (movie.watched) {
        console.log("You have watched \"" + movie.title + "\" - " + movie.rating + " stars");
    } else {
        console.log("You have not seen \"" + movie.title + "\" - " + movie.rating + " stars");
    }
});