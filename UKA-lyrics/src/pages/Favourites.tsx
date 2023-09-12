function Favourites () {
  const FavouritesList = [["50 cent", "Candy Shop", "/artistsongs"], ["60 cent", "Sandy Shop", "/artistsongs"], ["70 cent", "Kandy Shop", "/artistsongs"] ] //må se an hvordan API-et returnerer data
  const FavouriteCards = ({favouritesList}) => (
    <>
      {favouritesList.map(favourite => (
        <FavouriteCard artist={favourite[0]} song={favourite[1]} href={favourite[2]}></FavouriteCard> //bør lage en favourite-type eller noe annet som ser bedre ut enn en liste med strings
      ))}
    </>
  )
  return (
    <>
      <h1>Favourites Page</h1>
      <FavouriteCards favouritesList={FavouritesList}></FavouriteCards>
    </>
  );
}

type FavouriteCardProps = {
  artist: string;
  song: string;
  href: string;
};


function FavouriteCard ({artist, song, href}: FavouriteCardProps) { //TODO: Legge til styling
  return (
    <div className="btn">
          <button onClick={event => window.location.href=href}>{artist} {song}</button>
    </div>
  
  )
}

export default Favourites;