import Actions from "../actions/Actions";
//const $ = window.jQuery;

class API {
  searchMovies(movie) {
    // $.ajax({
    //   url: "https://omdbapi.com/?apikey=YOURAPIKEY&s=" + movie.title,
    //   dataType: "json",
    //   cache: false,
    //   success(data) {
    //     let movies = data.Search ? data.Search : [];
    //     Actions.showMovieResults(movies);
    //   },
    //   error(xhr, status, err) {
    //     alert(err);
    //   }
    // });

    fetch("https://omdbapi.com/?i=tt3896198&apikey=e130dc55&s=" + movie.title, {
      method: "GET",
      cache: "no-store"
    })
      .then(response => {
        debugger;
        if (response.ok) {
          response
            .json()
            .then(data => {
              let movies = data.Search ? data.Search : [];
              Actions.showMovieResults(movies);
            })
            .catch(error => {
              debugger;
              alert(error);
            });
        } else {
          alert("Response not received");
        }
      })
      .catch(error => {
        debugger;
        alert(error);
      });
  }
}
export default new API();
