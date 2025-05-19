import requests from '../../utils/requests';
import axios from '../../utils/Axios';
import { useEffect, useState } from 'react';
import './banner.css'

function Banner  ()  {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        // console.log(request);

        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  function truncate(str,n) {
      return str?.length>n? str.substr(0,n-1)+"...":str
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center",
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner_title'>
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div>
            <button className='banner_button play'>play</button>
            <button className='banner_button'>My List</button>
        </div>
        <div className='banner__description'>
             {truncate(movie.overview,150)}
        </div>
        </div> 
    </div>
  );
};

export default Banner;
