import "./FavouriteCard.css";

type FavouriteCardProps = {
  songName: string;
  urlSpotify: string;
};

function FavouriteCard({ songName, urlSpotify }: FavouriteCardProps) {
  return (
    <div className="favouritecard">
      <a href={urlSpotify} target="_blank" className="low-center-a">
        {songName}
      </a>
    </div>
  );
}

export default FavouriteCard;
