import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import './People.css'
const People = () => {
  const [people, setPeople] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    const people = await axios(
      `https://api.themoviedb.org/3/person/popular?api_key=965e491cb037d6e93ee1d2dd3626fed2`
    )
    setPeople(people.data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return 'loading'
  }
  return (
    <div>
      <div className="container">
        <h2>Popular People</h2>
        <div className="row">
          {
            people.results.map((item) => (
              <div className="col-4 people-box" key={item.id}>
                <div className="">
                  <div className="item profile card width">
                    <div className="image-content">
                      <Link to={`/person/${item.id}`}>
                        <img src={`https://www.themoviedb.org/t/p/w470_and_h470_face/${item.profile_path}`} alt=""/>
                      </Link>
                    </div>
                    <div className="meta">
                      <p>{item.name}</p>
                      {
                        item.known_for.map((known) =>(
                          <div className="sub" key={known.id}>
                            <p>{known.original_title}</p>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default People;