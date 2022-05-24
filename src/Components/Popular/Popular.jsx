import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Popular = () => {
  const [popular, setPopular] = useState([])
   const [time, setTime] = useState('day')
  useEffect(() => {
    axios(`https://api.themoviedb.org/3/trending/movie/${time}?language=ru-RUS&sort_by=popularity.desc&api_key=965e491cb037d6e93ee1d2dd3626fed2`)
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
        <h2>What's popular</h2>
            <button className="selector btn" onClick={() => setTime('day')}>Day</button>
            <button className="selector btn" onClick={() => setTime('week')}>Week</button>
      </div>
      <div className="scroller">
        {
          popular.map((item) => (
            <div className="movie-card" key={item.id}>
              <div className="card-img">
                <Link to={`/movie/${item.id}`}>
                  <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`} alt=""/>
                </Link>
                <div className="consensus">
                  88
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