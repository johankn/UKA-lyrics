import BurgerMenu from "../assets/BurgerMenu";
import GoBackButton from "../assets/goBackButton";
import FavouriteCard from "../components/FavouriteCard";
import "../App.css";
import "../index.css";
import "./Favourites.css";
import "./HomePage.css";

function Favourites () {
  window.localStorage.setItem("hei", "heihei")
  window.localStorage.setItem("heii", "heihei")
  window.localStorage.setItem("heiii", "heihei")
  window.localStorage.setItem("heiiii", "heihei")
  window.localStorage.setItem("heiiiii", "heihei")
  var favourites = new Array;
  for(var i=0, len=localStorage.length; i<len; i++) {
    var key = localStorage.key(i);
    if (key != null) {
      var value = localStorage.getItem(key);
      favourites.push([key, value]);
    }
}
  return (
    <>
      <BurgerMenu />
      <GoBackButton />
      <div className="main">
        <h1>Dine favoritter</h1>
        <div className="favourites">
          {favourites.map((favourite, index) => (
            <div className={index % 2 === 0 ? 'pinkFavouritebutton' : 'greenFavouritebutton'}>
              <FavouriteCard key={index} song={favourite[0]} trackId={favourite[1]}></FavouriteCard>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Favourites;