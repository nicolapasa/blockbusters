import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTg3N2RhNjk1NWE3NmMyNmUxZDU1MWJkNDhkYTFiOCIsInN1YiI6IjY0ZThhOTBmMWZlYWMxMDBmZTVjOWVjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tlgNdSY9OtGbelBbWsCoU5qBd2VzhECRuhxr4yCPF20'
  }
};

const DetailsMovie = () => {
const [movie, setMovie] = useState({})
  const {id} =useParams('id')


  const getMovie=()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
    .then(res => res.json())
    .then(json => {
  console.log(json)
  setMovie(json)
    } )
    .catch(err => console.error('error:' + err));
  }

  useEffect(() => {
   getMovie()

  }, [id])
  
  return (
    <>
    <h1 className="title"> {movie.title}    (  {movie.release_date &&      movie.release_date.split('-')[0]})</h1>
    <div className="movieDetails">
       <img src={ `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`   }  />
       <div>
          <p>
            {movie.overview}
          </p>
       <p>
        Average vote: {movie.vote_average}
       </p>
     
       <a href={movie.homepage}>Watch</a>
       </div>
  
    </div>
    <div className="center">
       <Link className="button" to={'/'}>Back to Home</Link>
    </div>
 
    </>
  )
}

export default DetailsMovie
