import "./FavouriteCard.css";

type FavouriteCardProps = {
  songName: string;
};

function FavouriteCard({ songName }: FavouriteCardProps) {

  return (
    <>
      <button className="button">
        {songName}
      </button>
    </>
  );
}

export default FavouriteCard;
