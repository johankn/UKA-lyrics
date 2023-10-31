import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import FavouriteCard from "../../components/FavouriteCard/FavouriteCard";
import "../../App.css";
import "../../index.css";
import "./Favourites.css";
import "../HomePage/HomePage.css";

function Favourites() {
  const favourites : [string, string[]] = JSON.parse(localStorage.getItem("favorites") || "{}");
  console.log(favourites);

  return (
    <>
      <BurgerMenu />
      <GoBackButton />
      <div className="main">
        <h1>Dine favoritter</h1>
        <div className="favourites">
          {Object.entries(favourites).map(([songId, songInfo], index) => (
            <div
              className={
                index % 2 === 0 ? "pinkFavouritebutton" : "greenFavouritebutton"
              }
            >
              <FavouriteCard
                key={songId}
                songName={songInfo[0] as string}
                urlSpotify={songInfo[1] as string}
              ></FavouriteCard>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Favourites;
