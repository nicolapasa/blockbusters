import { Link } from "react-router-dom"


const Movie = ({movie}) => {
  return (
    <Link to={`/details/${movie.id}`}  >
    <div className="movie">
   
    <img src={ `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`   }  />
    <div className='footer-movie'>
    <h3>{movie.title}</h3>
     <small>{movie.release_date}</small>
    
    </div>
 
</div>
</Link> 
  )
}

export default Movie
