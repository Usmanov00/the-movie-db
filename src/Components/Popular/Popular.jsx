import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {API_BASE, IMAGES_BASE_URL} from "../Constants/Constants";

const Popular = () => {
  const [popular, setPopular] = useState([])
   const [time, setTime] = useState('day')
  useEffect(() => {
    axios(`${API_BASE}/trending/movie/${time}?language=ru-RUS&sort_by=popularity.desc&api_key=${process.env.REACT_APP_APIKEY}`)
      .then((res) => setPopular(res.data.results))
  }, [time])

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
        <h2>Trending</h2>
            <button className="selector btn" onClick={() => setTime('day')}>Day</button>
            <button className="selector btn" onClick={() => setTime('week')}>Week</button>
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