import { useNavigate } from "react-router-dom";

function Favourites () {
  localStorage.setItem("Candy Shop", "100000")  
  localStorage.setItem("Sandy Shop", "200000")
  return (
    <>
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

type FavouriteCardProps = {
  song: string;
  trackId: string;
};


function FavouriteCard ({song, trackId}: FavouriteCardProps) { //TODO: Legge til styling. Må sende med trackId så man routes rett til riktig sang.
  const navigate = useNavigate();

  function handleClick() {
    navigate("/artistSongs/" + trackId);
  }
  return (
    <div className="btn">
          <button onClick={handleClick}>{song}{trackId}</button>
    </div>
  
  )
}

export default Favourites;