import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import FastAverageColor from "fast-average-color";
import addToList from "../../assets/Images/add-to-list.svg"
import axios from "axios";
import './MovieInfo.css'



const MovieInfo = () => {
  const {id} = useParams()
  const [film, setFilm] = useState({})
  const [credits, setCredits] = useState([])
  const [color, setColor] = useState('')
  const [filmLoader, setFilmLoader] = useState(true);
  const [creditLoader, setCreditLoader] = useState(true);

  function onImageLoad(e) {
    new FastAverageColor().getColorAsync(e.target).then((imgColor) => {
      setColor(imgColor.rgba)
      setColor(`rgba(${imgColor.value.slice(0, 3).join(',')}, 0.5`)
    })
  }

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/movie/${id}?api_key=965e491cb037d6e93ee1d2dd3626fed2`)
      .then((res) => {
        setFilm(res.data)
        setFilmLoader(false)
      })
    axios(`https://api.themoviedb.org/3/movie/${id}/credits?language=ru&api_key=965e491cb037d6e93ee1d2dd3626fed2`)
      //
      .then((res) => {
        setCredits(res.data)
        setCreditLoader(false)
      })
  }, [id])

  if (filmLoader || creditLoader) {
    return 'Loading.....'
  }

  return (
    <div className="background-info" style={{backgroundImage: `url(/t/p/w1920_and_h800_multi_faces/${film.backdrop_path})`}}>
      <div className="background-custom" style={{backgroundColor: color}}>
        <div className="container">
          <div className="poster">
            <div className="poster-wrapper">
              <div className="poster-wrapper-img">
                <img onLoad={onImageLoad}
                     crossOrigin="anonymous"
                  src={`/t/p/w600_and_h900_bestv2/${film.poster_path}`} alt=""
                  width={300}/>
              </div>
            </div>
            <div className="poster-info">
              <h2 className="poster-info-title">
              {film.title}
                <span>({film.release_date.slice(0,4)})</span>
              </h2>
              <div className="facts">
                <span className="certification">
                  PG-13
                </span>
                <span className="release">
                  {film.release_date.split('-').reverse().join('/')}
                  <span>({film.original_language}) </span>
                </span>
                <span className="genres">
                    • Fantasy,Action,Adventure
                </span>
                <span className="runtime">
                     • {film.runtime} min
                  {credits.name}
                </span>
              </div>
              <ul className="auto actions">
                <li className="chart">
                  <div className="chart-rating">
                    {film.vote_average}
                  </div>
                  <span>User <br/>
                    score</span>
                </li>
                <li className="addToList">

                  <Link to={"/"}>
                    <img src={addToList} alt="" width={16} height={16}/>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;