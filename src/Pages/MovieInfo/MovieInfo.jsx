import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import FastAverageColor from "fast-average-color";
import ReactPlayer from "react-player";
import addToList from '../../assets/Images/add-to-list.svg'
import favorite from '../../assets/Images/favorite.svg'
import bookmark from '../../assets/Images/bookmark.svg'
import star from '../../assets/Images/star.svg'
import play from '../../assets/Images/play.svg'
import facebook from '../../assets/Images/facebook.svg'
import instagram from '../../assets/Images/instagram.svg'
import twitter from '../../assets/Images/twitter.svg'
import homepage from '../../assets/Images/homepage.svg'
import axios from "axios";
import './MovieInfo.css'


const MovieInfo = () => {
  const {id} = useParams()
  const [film, setFilm] = useState({})
  const [credits, setCredits] = useState([])
  const [color, setColor] = useState('')
  const [trailer, setTrailer] = useState([])
  const [filmLoader, setFilmLoader] = useState(true);
  const [creditLoader, setCreditLoader] = useState(true);
  const [trailerLoader, setTrailerLoader] = useState(true)

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
      .then((res) => {
        setCredits(res.data)
        setCreditLoader(false)
      })
    axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=965e491cb037d6e93ee1d2dd3626fed2&language=en-US`)
      .then(({data}) => {
        setTrailer(data.results)
        setTrailerLoader(false)
      })
  }, [id])

  if (filmLoader || creditLoader || trailerLoader) {
    return 'Loading'
  }

  return (
    <>
      <div className="background-info"
           style={{backgroundImage: `url(/t/p/w1920_and_h800_multi_faces/${film.backdrop_path})`}}>
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
                  <span>({film.release_date.slice(0, 4)})</span>
                </h2>
                <div className="facts">
                <span className="certification">
                  PG-13
                </span>
                  <span className="release">
                  {film.release_date.split('-').reverse().join('/')}
                    <span>({film.original_language}) </span>
                </span>
                  <ul className="genres">•
                    {
                      film.genres.map((item) => (
                        <li key={item.id} className="genres-item">
                          {item.name}
                        </li>
                      ))
                    }
                  </ul>
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
                  <li className="configuration chart">
                    <Link to={"/"}>
                      <img src={addToList} alt="" width={16} height={16}/>
                    </Link>
                  </li>
                  <li className="configuration chart">
                    <Link to={"/"}>
                      <img src={favorite} alt="" width={16} height={16}/>
                    </Link>
                  </li>
                  <li className="configuration chart">
                    <Link to={"/"}>
                      <img src={bookmark} alt="" width={16} height={16}/>
                    </Link>
                  </li>
                  <li className="configuration chart">
                    <Link to={"/"}>
                      <img src={star} alt="" width={16} height={16}/>
                    </Link>
                  </li>
                  <li className="chart chart-play">
                    <Link to={"/"}>
                      <img src={play} alt="" width={23} height={23} color={'#fff'}/>
                    </Link>
                    <span>Play Trailer</span>
                  </li>
                </ul>
                <h3 className="poster-info-box tagline">
                  {film.tagline}
                </h3>
                <h3 className="overview">Overview</h3>
                <p>{film.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="white-column">
          <h3>Top Billed Cast</h3>
          <div className="scroller box">
            <ul className="scroller-wrapper people">
              {
                credits.cast.map((item) => (
                  <li className="person-card" key={item.id}>
                    <div>
                      <Link to={`/person/${item.id}`}>
                        <img src={`https://www.themoviedb.org/t/p/w276_and_h350_face/${item.profile_path}`} alt=""/>
                      </Link>
                      <p className="poster-card-name">{item.name}</p>
                      <p className="poster-card-character">{item.character}</p>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="right-column">
          <div>
            <div className="column">
              <section className="facts">
                <div className="social-links">
                  <div>
                    <a href="/" className="social-link">
                    <span>
                      <img src={facebook} alt=""/>
                    </span>
                    </a>
                  </div>
                  <div>
                    <a href="/" className="social-link">
                    <span>
                      <img src={twitter} alt=""/>
                    </span>
                    </a>
                  </div>
                  <div>
                    <a href="/" className="social-link">
                    <span>
                      <img src={instagram} alt=""/>
                    </span>
                    </a>
                  </div>
                  <div>
                    <a href="/" className="social-link homepage-link">
                    <span>
                      <img src={homepage} alt=""/>
                    </span>
                    </a>
                  </div>
                </div>
              </section>
              <div className="status">
                <div>
                  <p>
                    <strong>Status</strong>
                  </p>
                  <span>{film.status}</span>
                </div>
                <div>
                  <p>
                    <strong>Original Language</strong>
                  </p>
                  <span>{film.original_language}</span>
                </div>
                <div>
                  <p>
                    <strong>Budget</strong>
                  </p>
                  <span>${film.budget}</span>
                </div>
                <div>
                  <p>
                    <strong>Revenue</strong>
                  </p>
                  <span>${film.revenue}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={`https://www.themoviedb.org/3/movie/${id}/videos?language=ru&api_key=${trailer.key}`} alt=""/>
            {/*Здесь может быть ошибка в ключе*/}
          </div>
        </div>
      </div>
        <div className="container">
          <h2 style={{marginBottom:"20px"}}>Трейлер</h2>
          <div className="row">
            {
              trailer.map(el =>
                <ReactPlayer key={el.id} url={`https://www.youtube.com/watch?v=${el.key}`} className ="col-6"/>
              )
            }
          </div>

        </div>

    </>
  );
};

export default MovieInfo;