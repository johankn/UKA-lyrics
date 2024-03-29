import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import "../HomePage/HomePage.css";
import "../../App.css";
import "../../index.css";
import "./Artists.css";
import GoBackButton from "../../components/GoBackButton/GoBackButton";

function Artists() {
  return (
    <>
      <BurgerMenu />
      <GoBackButton />
      <div className="mainDiv">
        <h1>Velg en artist</h1>
        <div className="artists">
          <button
            className="pinkArtistbutton"
            onClick={() =>
              (window.location.href =
                "/project1/artistsongs/3q7HBObVc0L8jNeTe5Gofh")
            }
          >
            50 cent
          </button>

          <button
            className="greenArtistbutton"
            onClick={() =>
              (window.location.href =
                "/project1/artistsongs/504cl42JQLRqlZddfZ3S4z")
            }
          >
            Cezinando
          </button>

          <button
            className="pinkArtistbutton"
            onClick={() =>
              (window.location.href =
                "/project1/artistsongs/46pSx5MtwhorubZuHbwM0Q")
            }
          >
            Arif
          </button>

          <button
            className="greenArtistbutton"
            onClick={() =>
              (window.location.href =
                "/project1/artistsongs/3AVfmawzu83sp94QW7CEGm")
            }
          >
            Astrid S
          </button>

          <button
            className="pinkArtistbutton"
            onClick={() =>
              (window.location.href =
                "/project1/artistsongs/0x3PXj1WnuW7YsBxQK57xM")
            }
          >
            Ruben
          </button>

          <button
            className="greenArtistbutton"
            onClick={() =>
              (window.location.href =
                "/project1/artistsongs/5r6ViSL3nacDRVBtnXlixL")
            }
          >
            Ramon
          </button>
        </div>
      </div>
    </>
  );
}

export default Artists;
