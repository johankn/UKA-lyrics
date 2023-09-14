import BurgerMenu from "../assets/BurgerMenu";
import './HomePage.css'
import '../App.css'
import '../index.css'
import './Artists.css'


function Artists() {
  return (
    <>
    <BurgerMenu />
      <div className="mainDiv">
        <div className="wrapper">
        <div className="tilbakeKnapp">
            <img
              src="../public/tilbakeKnapp.png"
              alt="Tilbake button"
              onClick={() => {
                window.location.href = "/"; // Update the URL to your desired location
              }}
            />
        </div>
        </div>
        <div className="artists">
          <div className="pinkArtistbutton">
            <button
              onClick={(event) =>
                (window.location.href = "/artistsongs/3q7HBObVc0L8jNeTe5Gofh")
              }
            >
              50 cent
            </button>
          </div>
          <div className="greenArtistbutton">
            <button
              onClick={(event) =>
                (window.location.href = "/artistsongs/504cl42JQLRqlZddfZ3S4z")
              }
            >
              Cezinando
            </button>
          </div>
          <div className="pinkArtistbutton">
            <button
              onClick={(event) =>
                (window.location.href = "/artistsongs/46pSx5MtwhorubZuHbwM0Q")
              }
            >
              Arif
            </button>
          </div>
          <div className="greenArtistbutton">
            <button
              onClick={(event) =>
                (window.location.href = "/artistsongs/3AVfmawzu83sp94QW7CEGm")
              }
            >
              Astrid S
            </button>
          </div>
          <div className="pinkArtistbutton">
            <button
              onClick={(event) =>
                (window.location.href = "/artistsongs/0x3PXj1WnuW7YsBxQK57xM")
              }
            >
              Ruben
            </button>
          </div>
          <div className="greenArtistbutton">
            <button
              onClick={(event) =>
                (window.location.href = "/artistssongs/5r6ViSL3nacDRVBtnXlixL")
              }
            >
              Ramon
            </button>
          </div>
        </div>
      </div>
    </>
  );
}


export default Artists;
