import "./HomePage.css";
import "../App.css";
import "../index.css";
import BurgerMenu from "../assets/BurgerMenu";

function HomePage() {
  return (
    <>
      <div>
        <BurgerMenu />
        <div id="title">
          <h1>Velkommen</h1>
          <h1>til</h1>
          <h1>UKA-Lyrics</h1>
        </div>
        <div className="btn">
          <button onClick={() => (window.location.href = "/project1/artists")}>
            VELG ARTIST
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
