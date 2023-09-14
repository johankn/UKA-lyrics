import './HomePage.css'
import '../App.css'
import '../index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link, useHistory } from 'react-router-dom';


function HomePage () {
  return (
    <>
      <div>
        <div id="title">
          <h1>Velkommen</h1>
          <h1>til</h1>
          <h1>UKA-Lyrics</h1>
        </div>
        <div className="btn">
          <button onClick={event =>  window.location.href='/artists'}>Velg artist</button>
        </div>
      </div>
    </>
  );
}

export default HomePage;