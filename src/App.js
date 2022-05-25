
import './App.css';
import Home from './components/Home';
import Movie from './components/Movie';
import { Route, Routes, useNavigate} from 'react-router-dom';
import { useState } from 'react';




function App() {
  const [movieID, setMovieId] = useState('')
  const Navigate = useNavigate();
  const setIdAndLink = (id)=> {
    setMovieId(id);
    Navigate('/movie');
  }
  return (
    <div className="App">
     <Routes>
     {/* we are setting it here and using it down */}
       <Route path="/" element={<Home setId={setIdAndLink}/>}/>   
       <Route path="/movie" element ={<Movie movieId={movieID} />}/>
      </Routes>
    </div>
  );
}

export default App;
