import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import  "./style.css"

const Home = (props) => {

    

    const [movies, setMovies] = useState([])   //it has to be outside ot useEffect()
    const [userSearch, setUserSearch] = useState('')

    const fetchData = async () => {
        let response = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${userSearch}`)
       setMovies(response.data.Search)
        }
     console.log(movies) 
  return (
    <div>
        <h1>Home</h1>
        {/* // event listeners */}
        <input onChange={(event)=> setUserSearch(event.target.value)}/> 
       <button onClick ={()=> fetchData()}> Search</button> 
       
        {movies.map((movie, index)=>   //m. parameter short for movie
        <div key={index} className="movie-card">
            <h3>{movie.Title}</h3>
            <h5>type: {movie.Type}</h5>
            <h5>year: {movie.Year}</h5>
            <img src={movie.Poster}/>
            <button onClick={()=>{
                props.setId(movie.imdbID)}}>More info</button>
          
        </div>
        
        )}
        </div>
  );
}

export default Home
