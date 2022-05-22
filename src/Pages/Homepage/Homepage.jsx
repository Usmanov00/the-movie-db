import React from 'react';
import './Homepage.css'
import Popular from "../../Components/Popular";


const Homepage = () => {

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
                    <input type="text" placeholder="Search for a movie, tv show, person....."/>
                  </label>
                  <input type="submit" value="Search"/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Popular/>
      <Popular/>
    </>
  );
};

export default Homepage;