import React, {useState, useEffect} from 'react'
import axios from '../axios'
import './row.css'
import YouTube from 'react-youtube'


const base_url = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData();
    },[fetchUrl]);

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      }
    };


  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="row-posters">
            {movies.map(movie => (
                <img 
                key={movie.id}
                className={`row-poster ${isLargeRow && 'row-posterLarge'}`}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
            ))}
        </div>
        <YouTube videoId={trailerUrl} opts={opts}/>
    </div>
  )
}

export default Row