// map function
import MovieCard from "./MovieCard"
import './MovieList.css'
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from "./Add";


const MovieList = ({movies,addMovie}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="listBody">
        <button className="btn btn-primary add" onClick={handleShow}>Add</button>
        <Add addMovie={addMovie} show={show} handleClose={handleClose} />
        <div className="box">
          {movies.map(el => <MovieCard movie={el} />)}
        </div>
      </div>
    </>
  )
}



export default MovieList

// movies.map((el)=>{return(
//     <MovieCard title={el.title} rating={el.rating}
//     description={el.description} posterURL={el.posterURL}/>
//   )})}

