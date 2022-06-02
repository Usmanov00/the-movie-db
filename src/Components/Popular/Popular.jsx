import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {API_BASE, IMAGES_BASE_URL} from "../Constants/Constants";

const Popular = () => {
  const [popular, setPopular] = useState([])
  const [mediaType, setMediaType] = useState('week')
  const [active, setActive] = useState(false)
  useEffect(() => {
    axios(`${API_BASE}/trending/movie/${mediaType}?language=ru-RUS&sort_by=popularity.desc&api_key=${process.env.REACT_APP_APIKEY}`)
      .then((res) => setPopular(res.data.results))
  }, [mediaType])

  const formatDate = (date) => {
    const month = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
    const reversedDate = date.split('-').reverse()
    reversedDate[1] = month[reversedDate[1] - 1]
    console.log(reversedDate)
    return reversedDate.join(' ')
  }

  return (
    <div className="container">
      <div className="column-header">
        <div className="selector-wrap">
          <h2>Trending</h2>
          <div className="selector">
            <button className={active ? "selector-btn active" : "selector-btn"}
                    onClick={() => setActive(!active) || setMediaType('day')}>Day
            </button>
            <button className={!active ? "selector-btn active" : "selector-btn"}
                    onClick={() => setActive(!active) || setMediaType('week')}>Week
            </button>
          </div>
        </div>
      </div>
      <div className="scroller">
        {
          popular.map((item) => (
            <div className="movie-card" key={item.id}>
              <div className="card-img">
                <Link to={`/movie/${item.id}`}>
                  <img src={`${IMAGES_BASE_URL}/w440_and_h660_face${item.poster_path}`} alt=""/>
                </Link>
                <div className="consensus">
                  {item.vote_average}
                </div>
              </div>
              <div className="card-content">
                <Link to={`/movie/${item.id - 1}`}>
                  <h5 className="card-title">{item.title}</h5>
                </Link>
                <span className="card-year">{formatDate(item.release_date)}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Popular;