 import "./FavouriteCard.css";
 
 type FavouriteCardProps = { // må oppdateres basert på hva som ligger i localstorage
    song: string;
    trackId: string;
  };
  
  
  function FavouriteCard ({song, trackId}: FavouriteCardProps) { //TODO: Legge til styling. Må sende med trackId så man routes rett til riktig sang.
    function handleClick() {
      // må finne ut hva som skjer her, navigere til artistSongs/trackId eller legge inn linken direkte?
    }
    return (
      <>
            <button onClick={handleClick}>{song}{trackId}</button>
      </>
    
    )
  }

  export default FavouriteCard