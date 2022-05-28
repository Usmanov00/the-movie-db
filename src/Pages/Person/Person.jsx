import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import './Person.css'
import instagram from '../../assets/Images/instagram.svg'
import twitter from '../../assets/Images/twitter.svg'
import facebook from '../../assets/Images/facebook.svg'

const Person = () => {
  const {id} = useParams()
  const [person, setPerson] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    const person = await axios(
      `https://api.themoviedb.org/3/person/${id}?api_key=965e491cb037d6e93ee1d2dd3626fed2`
    )
    setPerson(person.data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [id])

  if (isLoading) {
    return 'Loading...'
  }

  return (
    <div>
      <div className="content-wrapper">
        <div className="gray-column">
          <div className="images-content">
            <div className="images">
              <img src={`/t/p/w600_and_h900_bestv2/${person.profile_path}`} alt=""/>
            </div>
          </div>
         <div className="column">
           <div className="social-links">
             <a href="https://www.themoviedb.org/person/7499-jared-leto" className="social-link person-social-link">
                <span>
                <img src={facebook} alt=""/>
                </span>
             </a>
             <a href="https://www.themoviedb.org/person/7499-jared-leto" className="social-link">
                <span>
                <img src={twitter} alt=""/>
                </span>
             </a>
             <a href="https://www.themoviedb.org/person/7499-jared-leto" className="social-link">
                <span>
                <img src={instagram} alt=""/>
                </span>
             </a>
           </div>
           <div className="personal-info">
             <h3>Personal Info</h3>
             <div className="section">
               <p>
                 <strong>Known For</strong><br/>
                 {person.known_for_department}
               </p>
               <p>
                 <strong>Known Credits</strong><br/>
                 {person.known_for_department}
               </p>
               <p>
                 <strong>Gender</strong><br/>
                 {person.gender}
               </p>
               <p>
                 <strong>Birthday</strong><br/>
                 {person.birthday}
               </p>
               <p>
                 <strong>Place of Birth</strong><br/>
                 {person.place_of_birth}
               </p>
               <p>
                 <strong>Also Known As</strong><br/>
                 {person.also_known_as}
               </p>
             </div>
           </div>
         </div>
        </div>
        <div className="white-colum">
          <h2>
            {person.name}
          </h2>
          <h3>Biography</h3>
          <p>{person.biography}</p>
        </div>
      </div>
    </div>
  );
};

export default Person;