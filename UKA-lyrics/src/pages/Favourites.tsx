import BurgerMenu from "../assets/BurgerMenu";
import GoBackButton from "../assets/GoBackButton";
import FavouriteCard from "../components/FavouriteCard";
import "../App.css";
import "../index.css";
import "./Favourites.css";
import "./HomePage.css";

function Favourites() {
  const favourites = JSON.parse(localStorage.getItem("favorites") || "{}");
  console.log(favourites);

  return (
    <>
      <BurgerMenu />
      <GoBackButton />
      <div className="main">
        <h1>Dine favoritter</h1>
        <div className="favourites">
          {Object.entries(favourites).map(([songId, songName], index) => (
            <div
              className={
                index % 2 === 0 ? "pinkFavouritebutton" : "greenFavouritebutton"
              }
            >
              <FavouriteCard
                key={songId}
                songName={songName as string}
              ></FavouriteCard>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Favourites;
