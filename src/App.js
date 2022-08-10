import "./App.css";
import { AddColor } from "./AddColor"; // named
import {useState} from "react";
import { Navigate,  Routes, Route, Link } from "react-router-dom";
import { MovieDetails } from "./MovieDetails";
import { UserList } from "./UserList";
import { Home } from "./Home";
import { NotFoundPage } from "./NotFoundPage";
import { MovieList } from "./MovieList";
import { AddMovie } from "./AddMovie";

const INTIAL_MOVIE_LIST = [
  {
    name: "RRR",
    poster:
      "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    rating: 8.8,
    summary:
      "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    trailer:"https://www.youtube.com/embed/f_vbAtFSEc0"
  },
  {
    name: "Doctor",
    poster:
      "https://thenewsbay.com/wp-content/uploads/2021/07/152952273_480719423108676_5068481369365641219_n-2-820x1024.jpg",
    rating: 7,
    summary:
      "When a military doctor tracks down his former fiancee's kidnapped niece, he discovers a complex human trafficking ring in Goa. He then weaves an intricate trap to capture the perpetrators.",
    trailer:"https://www.youtube.com/embed/hm1DN7DEvjQ"
  },
  {
    name: "Annabelle Sethupathi",
    poster:
      "https://images.news18.com/ibnlive/uploads/2021/09/annabelle-sethupathi.jpg",
    rating: 6,
    summary:
      "Rudra, a small-time burglar, finds herself in a palace that is full of ghosts. Along with the ghost, she finds out the mystery regarding the owner of the palace: Annabelle Sethupathi.",
    trailer:"https://www.youtube.com/embed/5ZjZbKI1m2s"
  },
  {
    name: "Jai Bhim",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    summary:
      "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    rating: 8.8,
    trailer:"https://www.youtube.com/embed/pVOd8HAQQZM"
  },
  {
    name: "The Avengers",
    rating: 8,
    summary:
      "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    poster:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    trailer:"https://www.youtube.com/embed/mbzjK3ykr-M"
    
  },
  {
    name: "Vikram",
    poster: "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    rating: 9.6,
    summary:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      trailer:"https://www.youtube.com/embed/Z4Vzjh6NHxY"
  },
  {
    name: "Baahubali",
    poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    rating: 8,
    summary:
      "Members of a black ops team must track and eliminate a gang of masked murderers.",
      trailer:"https://www.youtube.com/embed/64KCdvkgk2M"
  },
  {
    name: "Harry Potter 1",
    poster:
      "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg",
    rating: 8,
    summary:
      "This is the tale of Harry Potter (Daniel Radcliffe), an ordinary eleven-year-old boy serving as a sort of slave for his aunt and uncle who learns that he is actually a wizard and has been invited to attend the Hogwarts School for Witchcraft and Wizardry.",
    trailer:"https://www.youtube.com/embed/VyHV0BRtdxo"
  }
];

export default function App() {
  //Lifting the state up
  const [movieList, setMovieList] = useState(INTIAL_MOVIE_LIST);

  return (
    <div className="App">

    <nav>
      <ul>
        <li>
          {/* Link change page without refresh */}
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/movies">Movies</Link>        
        </li>
        <li>
        <Link to="/color-game">Color-game</Link>   
        </li>
        <li>
        <Link to="/movies/add">Add Movie</Link>   
        </li>
      </ul>
    </nav>
     {/* Router - to map the  URl with component*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList movieList={movieList} setMovieList={setMovieList}/>} />
        <Route path="/movies/:movieid" element={<MovieDetails movieList={movieList}/>} />
        <Route path="/movies/add" element={<AddMovie movieList={movieList} setMovieList={setMovieList} />} />
        <Route path="/color-game" element={<AddColor />} />
        <Route path="/users" element={<UserList />}/>    
        <Route path="/films" element={<Navigate replace to="/movies" />}  />  
        <Route path="/404" element={<NotFoundPage />}/>    
        <Route path="*" element={<Navigate replace to="/404" /> } />      
      </Routes> 
 
      </div>
  );
  //JSX ends
}

