import React from 'react';
import './style.css';
import axios from 'axios';
import {useEffect, useState} from 'react'
import { Navigate } from 'react-router-dom';

const Movie = (props) => {
const [movieData, setMovieData] = useState({})
    useEffect(()=> {
        const fetchData= async ()=>{    
            if(props.movieId) {          //we changed the &s with &i because we used the parameter for id from the api
const response = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${props.movieId}`)
setMovieData(response.data)
            }else{
                Navigate('/')
            }
        }
        fetchData();
    }, [])
  return (
    <div>
        <h1>{movieData.Title ? movieData.Title : 'Unknown Title'}</h1>
        <p>{movieData.Title ? movieData.Title : "Unknown Title"}was published in {movieData.Year ? movieData.Year : "Unknown Title"} by {movieData.Director ? movieData.Director: "Unknown"} and was written by {movieData.Writer}</p>
    </div>
  )
}

export default Movie