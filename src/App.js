import { useEffect } from 'react';
import MovieCard from './components/MovieCard';

// import './App.css';
import SearchIcon from './search.svg';



const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';

const movie1 = {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}

const App = () => {
 
    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        
        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    },[])

    return (
        <div className='app'>
            <h1>Netflix</h1>

            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value=''
                    onChange={() => {}}
                ></input>
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={() => {}}
                >
                </img>
            </div>

            <div className='container'>
                <MovieCard prop={movie1}/>
            </div>
        </div>
    );
};

export default App;