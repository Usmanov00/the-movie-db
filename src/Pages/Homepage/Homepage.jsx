import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import './Homepage.css'
import Popular from "../../Components/Popular";
import Trends from "../../Components/Trends";


const Homepage = () => {
  let navigate = useNavigate();
  const [search,setSearch] = useState("")
  const handlerChange = (e) => setSearch((e.target.value))
  const handlerSearch = (e) => {
    if(e.key === "Enter") {
      navigate(`/search/${search}`)
      setSearch("")
    }
  }
  return (
    <>
      <div className="homepage">
        <div className="welcome">
          <div className="welcome-content">
            <div className="container welcome-container">
              <div className="welcome-title">
                <h2>Welcome.</h2>
                <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
              </div>
              <div className="search">
                <form action="">
                  <label>
                    <input type="text" onKeyPress ={handlerSearch} onChange={handlerChange} placeholder="Search for a movie, tv show, person....."/>
                  </label>
                  <input type="submit" value="Search" onClick={handlerSearch}/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Trends />
      <Popular />
    </>
  );
};

export default Homepage;