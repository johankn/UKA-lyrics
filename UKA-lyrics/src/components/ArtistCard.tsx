import { useQuery } from "react-query";
import { getAccessToken, getTopSongsOfArtist } from "../api/SpotifyAPI.tsx";
import "./ArtistCard.css";
import { useEffect, useState } from "react";
import BurgerMenu from "../assets/BurgerMenu";
import GoBackButton from "../assets/GoBackButton";

type Song = {
  id: string;
  name: string;
  album: Album;
  external_urls: ExternalUrl;
};

type Album = {
  images: Images[];
};

type Images = {
  url: string;
};

type ExternalUrl = {
  spotify: string;
};

interface ArtistCardProps {
  artistID: string;
}

const ArtistCard = ({ artistID }: ArtistCardProps) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const [clickedHearts, setClickedHearts] = useState<{
    [songId: string]: string;
  }>(JSON.parse(localStorage.getItem("favorites") || "{}"));

  const { data: accessToken } = useQuery("spotifyAccessToken", getAccessToken);

  const { data: topSongs, isLoading } = useQuery<Song[], Error>(
    ["artistTopSongs", artistID, accessToken],
    () => getTopSongsOfArtist(artistID, accessToken!),
    { enabled: !!accessToken },
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(clickedHearts));
  }, [clickedHearts]);

  if (isLoading || !topSongs) return <div>Loading...</div>;

  const handleNext = () => {
    if (currentSongIndex < topSongs.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    }
  };

  const song = topSongs[currentSongIndex];

  const isFavorited = Boolean(clickedHearts[song.id]);

  const handleHeartClick = (songId: string, songName: string) => {
    setClickedHearts((prevClickedHearts) => {
      if (prevClickedHearts[songId]) {
        const newHearts = { ...prevClickedHearts };
        delete newHearts[songId];
        return newHearts;
      } else {
        return {
          ...prevClickedHearts,
          [songId]: songName,
        };
      }
    });
  };

  return (
    <div>
      <BurgerMenu />
      <GoBackButton />
      <div className="header">
        <h2>Top 10 songs</h2>
      </div>

      <div className="">
        <div className="container" key={song.id}>
          <button 
            onClick={handlePrevious} 
            className={`arrow-button ${currentSongIndex === 0 ? 'hidden' : ''}`}>
            ←
          </button>
          <div className="album-image">
            <img
              src={song.album.images[0].url || ""}
              alt={song.name}
              className=""
            />
            <div
              className={`heart ${isFavorited ? "clicked" : ""}`}
              onClick={() => handleHeartClick(song.id, song.name)}
            >
              ❤️
            </div>
          </div>
          <div className="low-center">
            <a href={song.external_urls.spotify || "#"} target="_blank">
              {song.name}
            </a>
          </div>
          <button 
            onClick={handleNext} 
            className={`arrow-button ${currentSongIndex === topSongs.length - 1 ? 'hidden' : ''}`}>
            →
          </button>
        </div>
      </div>
    </div>
);

};

export default ArtistCard;
