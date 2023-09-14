import BurgerMenu from "../assets/BurgerMenu";
import { useNavigate } from "react-router-dom";

function Favourites () {
  return (
    <>
      <BurgerMenu />
      <h1>Favourites</h1>
      <FavouriteCards></FavouriteCards>
    </>
  );
}

function FavouriteCards () {
  var favourites = new Array;
  for(var i=0, len=localStorage.length; i<len; i++) {
    var key = localStorage.key(i);
    if (key != null) {
      var value = localStorage.getItem(key);
      favourites.push([key, value]);
    }
}
console.log(favourites)
  return (
    <ul>
        {favourites.map((favourite) => (
            <FavouriteCard key={favourite[1]} song={favourite[0]} trackId={favourite[1]}></FavouriteCard>
        ))}
    </ul>
  );
}

type FavouriteCardProps = { // må oppdateres basert på hva som ligger i localstorage
  song: string;
  trackId: string;
};


function FavouriteCard ({song, trackId}: FavouriteCardProps) { //TODO: Legge til styling. Må sende med trackId så man routes rett til riktig sang.
  function handleClick() {
    // må finne ut hva som skjer her, navigere til artistSongs/trackId eller legge inn linken direkte?
  }
  return (
    <div className="btn">
          <button onClick={handleClick}>{song}{trackId}</button>
    </div>
  
  )
}

export default Favourites;