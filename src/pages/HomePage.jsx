import { useEffect, useState } from 'react'
import Movie from '../components/Movie';
const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTg3N2RhNjk1NWE3NmMyNmUxZDU1MWJkNDhkYTFiOCIsInN1YiI6IjY0ZThhOTBmMWZlYWMxMDBmZTVjOWVjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tlgNdSY9OtGbelBbWsCoU5qBd2VzhECRuhxr4yCPF20'
  }
};
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch
  } from "@fortawesome/free-solid-svg-icons";
const HomePage = () => {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    

    const getMovies=()=>{
      fetch(url, options)
      .then(res => res.json())
      .then(json => {
    console.log(json)
    setMovies(json.results)
      } )
      .catch(err => console.error('error:' + err));
    }
    
    
    
    
    useEffect(() => {
     
    getMovies()
    
    
    }, [])


  const handleSearch=(e)=>{
    e.preventDefault()
   if(search!=''){
    const urlSearch=`https://api.themoviedb.org/3/search/movie?query=${search}`       
    fetch(urlSearch, options)
    .then(res => res.json())
    .then(json => {
  setMovies(json.results)
    } )
    .catch(err => console.error('error:' + err));
   }
   else{
    window.location.reload()
   }
    


  }



  return (
    <>
         <div className="searchBar">
            <form onSubmit={handleSearch}> <input type="text"  className='inputSearch'  onChange={(e)=>setSearch(e.target.value)} />  <button type='submit' className="buttonSearch" ><FontAwesomeIcon icon={faSearch} /></button></form> 
         </div>
             
 
 
      <div className='movies'>
         { movies.map(movie=>{
          return (
            <>
          <Movie movie={movie} />
          
            </>
          )
         }) 
         }
      </div>
    

  
    </>
  )
}

export default HomePage
