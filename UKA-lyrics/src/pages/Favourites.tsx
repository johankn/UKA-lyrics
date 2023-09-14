import BurgerMenu from "../assets/BurgerMenu";
import FavouriteCard from "../components/FavouriteCard";
import "../App.css";
import "../index.css";
import "./Favourites.css";

function Favourites () {
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