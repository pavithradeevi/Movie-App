import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Counter } from "./Counter" // default
  ;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';

export function Movie({ movie, id }) {
  //conditional styling


  const styles = {
    color: movie.rating >= 8 ? "green" : "red"
  };

  const [show, setShow] = useState(true);

  //True =block
  //False - none
  //!show = false - !true = false
  const summaryStyles = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();

  return (
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} />
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name} - {id}
          <IconButton onClick={() => setShow(!show)}
            aria-label="Toggle description"
            color="primary">
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            {/* <ExpandLessIcon/>
             <ExpandMoreIcon/> */}
          </IconButton>
          <IconButton
            onClick={() => navigate(`/movies/${id}`)} color="primary">
            <InfoIcon />
          </IconButton>

        </h2>
        <p style={styles} className="movie-rating">⭐{movie.rating}</p>
      </div>
      {/* /movies/0 */}
      {/* <button onClick={() => navigate("/movies/" + id)}>Info</button> */}

      {/* <button onClick={() => setShow(!show) }>Toggle description</button>
            {/* <p style={summaryStyles} className="movie-summary">{movie.summary}</p> */}
      {/* //conditional rendering */}
      {show ? <p className="movie-summary">{movie.summary}</p> : null}
      <Counter />
    </div>
  );
}
