import "./FavouriteCard.css";

type FavouriteCardProps = {
  songName: string;
};

function FavouriteCard({ songName }: FavouriteCardProps) {

  return (
    <>
      <div className="favouritecard">
        {songName}
      </div>
    </>
  );
}

export default FavouriteCard;
