import React ,{useEffect,useState}from 'react';
import axios from '../../../utils/Axios';
import './row.css'
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'

export default function Row({title,fetchUrl,isLargeRow}) {
     
    const[movie,setMovie]=useState([])
    const[trailer,setTrailerUrl]=useState("")
     const base_url="https://image.tmdb.org/t/p/original"

    useEffect(()=>{
        (async ()=>{
            try{
                // console.log(fetchUrl)
                const request=await axios.get(fetchUrl)
                //console.log(request)
                setMovie(request.data.results)
            }
            catch(err){
                console.log("err",err)
            }
        })();
    },[fetchUrl])

     const handleClick=(m)=>{
         if (trailer){
            setTrailerUrl("")
         }
         else{
            movieTrailer(m.title || m.original_title)

             .then((url)=>{
                console.log(url)
                const urlParams=new URLSearchParams(new URL(url).search)
               console.log(urlParams)
                console.log(urlParams.get('v'))
                setTrailerUrl(urlParams.get('v'))
            })
         } 
     }

    const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    autoplay: 1,
  },
};




  return (
    <div className='row'>
       <h1>{title}</h1>
       <div className='row_posters'>
          {movie?.map((m,index)=>(
            <img 
            onClick={() => handleClick(m)}

            key={index }src={`${base_url}${isLargeRow?m.poster_path:m.backdrop_path}`} alt={m.name} className={`row_poster ${isLargeRow && "row_posterLarge"}`} />
          ))}
       </div>  
       <div>
        {trailer && <YouTube videoId={trailer}  opts={opts}/>}
        </div>   
    </div>
  )
}




// import React, { useState, useEffect } from 'react';
// import './row.css';
// import axios from '../../../utils/axios';
// // import movieTrailer from 'movie-trailer';
// //import YouTube from 'react-youtube';

// function Row ({ title, fetchUrl})  {
//     const [movies, setMovie] = useState([]);
//     const [trailerUrl, setTrailerUrl] = useState("");

//     const base_url = "https://image.tmdb.org/t/p/original";

//     useEffect(() => {
//         (async () => {
//             try {
//                 console.log(fetchUrl);
//                 const request = await axios.get(fetchUrl);
//                 console.log(request);
//                 setMovie(request.data.results);
//             } catch (error) {
//                 console.log("error", error);
//             }
//         })();
//     }, [fetchUrl]);


    // const handleClick = (movie) => {
    //     if (trailerUrl) {
    //         setTrailerUrl('');
    //     } else {
    //         movieTrailer(movie?.title || movie?.name || movie?.original_name)
    //             .then((url) => {
    //                 if (!url) return;
    //                 const urlParams = new URLSearchParams(new URL(url).search);
    //                 setTrailerUrl(urlParams.get('v'));
    //             })
    //             .catch((error) => console.log("Trailer not found", error));
    //     }
    // };

    // const opts = {
    //     height: '390',
    //     width: '100%',
    //     playerVars: {
    //         autoplay: 1,
    //     },
   // };

   // return (
      //  <div className='row'>
            {/* <h1>{title}</h1>
            <div className='row_posters'>
                {movies?.map((movie, index) => (
                    <img
                        onClick={() => handleClick(movie)}
                        key={index}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        className={`row_poster ${isLargeRow ? "row_posterLarge" : ""}`}
                    />
                ))}
            </div>
            <div style={{ padding: '20px' }}>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div> */}

//             <p>jjjjjjjjjjjjj</p>
//         </div>
//     );
// };

// export default Row;

