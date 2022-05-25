import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Trends = () => {
  const [trends, setTrends] = useState([])
  const [mediaType,setMediaType] = useState("movie")
  useEffect(() => {
    axios(`https://api.themoviedb.org/3/discover/${mediaType}?&language=en&api_key=965e491cb037d6e93ee1d2dd3626fed2`)
      .then((res) => setTrends(res.data.results))
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
        <h2>What's popular</h2>
        <button className="selector btn" onClick={() => setMediaType('movie')}>Online</button>
        <button className="selector btn" onClick={() => setMediaType('tv')}>On Tv</button>
      </div>
      <div className="scroller">
        {
          trends.map((item) => (
            <div className="movie-card" key={item.id}>
              <div className="card-img">
                <Link to={`/movie/${item.id}`}>
                  <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`} alt=""/>
                </Link>
                <div className="consensus">
                  {item.vote_average}
                </div>
              </div>
              <div className="card-content">
                <Link to={`/movie/${item.id}`}>
                  <h5 className="card-title">{item.title || item.name}</h5>
                </Link>
                <span className="card-year">{item.release_date?formatDate(item.release_date)|| formatDate(item.last_air_date): ""}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Trends;