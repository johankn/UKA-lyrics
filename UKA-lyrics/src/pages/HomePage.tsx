import './HomePage.css'
import '../App.css'
import '../index.css'
<<<<<<< HEAD
=======
import BurgerMenu from '../assets/BurgerMenu';
>>>>>>> 1f0c0db (Adjusted the h1 size to scale based on the vp. Added the basic functionalities of a burger menu.)


function HomePage () {
  return (
    <>
      <div>
        <BurgerMenu/>
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
