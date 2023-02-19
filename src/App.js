import "./App.css";
import MovieCard from "./Components/MovieCard";
import MovieList from "./Components/MovieList";
import Add from "./Components/Add";
import { useState } from "react";
import Filter from "./Components/Filter";
import { Routes, Route } from "react-router-dom";
import Details from './Components/Details';

const movieData = [
  {
    id: 1,
    title: "The Batman",
    rating: "7.8",
    description:
      "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg",
    trailer:
      "https://www.youtube.com/embed/mqqft2x_Aa4",
  },

  {
    id: 2,
    title: "Top Gun: Maverick",
    rating: "8.3",
    description:
      "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg",
    trailer:
      "https://www.youtube.com/embed/giXco2jaZ_4",
  },

  {
    id: 3,
    title: "My Hero Academia: World Heroes' Mission",
    rating: "7.1",
    description:
      "When a cult of terrorists ruins a city by releasing a toxin that causes people's abilities to spiral out of control, Japan's greatest heroes spread around the world in an attempt to track down the mastermind and put him to justice.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BOGFhZWJmZGQtZjYxNC00NTJjLWIzYjQtYWRiZTZlOWVkNWRjXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
    trailer:
      "https://www.youtube.com/embed/6_RxvJzbpmQ",
  },

  { 
    id:4,
    title: "Your Name.",
    rating: "8.4",
    description:
      "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_FMjpg_UX1000_.jpg",
    trailer:"https://www.youtube.com/embed/xU47nhruN-Q",
  },

  {
    id:5,
    title: "Dragon Ball Super: Broly",
    rating: "7.7",
    description:
      "Goku and Vegeta encounter Broly, a Saiyan warrior unlike any fighter they've faced before.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMjhhMDU5Y2QtMzcyZS00ZGE1LTg3ZjMtMTYyOTM0OTFlYTRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    trailer:"https://www.youtube.com/embed/FHgm89hKpXU"
  },
];

function App() {
  const [movieSearch, setMovieSearch] = useState("");
  const [movies, setMovies] = useState(movieData);
  const [newRating, setNewRating] = useState(1);

  const search = (test) => {
    setMovieSearch(test);
  };

  const searchRating = (rating) => {
    setNewRating(rating);
  };

  const addMovie = (movie) => {
    setMovies(movies.concat(movie));
  };

  return (
    <div className="App">
      <Filter
        search={search}
        searchRating={searchRating}
        newRating={newRating}
      />
      <Routes>
        <Route path="/" element={ <MovieList
          addMovie={addMovie}
          movies={movies.filter(
            (el) =>
              el.rating >= newRating &&
              el.title.toLowerCase().includes(movieSearch.toLowerCase())
          )}
        />}/>
        <Route path='/movie/:id' element={<Details movie={movies}/>}/> 
      </Routes>
    </div>
  );
}

export default App;
