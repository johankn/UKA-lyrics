import { useQuery } from "react-query";
import { getAccessToken, getTopSongsOfArtist } from "../../api/SpotifyAPI.tsx";
import "./ArtistCard.css";
import { useEffect, useState } from "react";
import PopUp from "../PopUp/PopUp.tsx";
import "../../index.css";

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
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const initialSongIndex = Number(
    sessionStorage.getItem(`currentSongIndex-${artistID}`) || 0,
  );
  const [currentSongIndex, setCurrentSongIndex] = useState(initialSongIndex);

  const [clickedHearts, setClickedHearts] = useState<{
    [songId: string]: string[];
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

  useEffect(() => {
    sessionStorage.setItem(
      `currentSongIndex-${artistID}`,
      String(currentSongIndex),
    );
  }, [currentSongIndex, artistID]);

  if (isLoading || !topSongs) return <div>Loading...</div>;

  const handleNext = () => {
    if (currentSongIndex < topSongs.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
    }
    setShowPopup(false);
  };

  const handlePrevious = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    }
    setShowPopup(false);
  };

  const song = topSongs[currentSongIndex];

  const isFavorited = Boolean(clickedHearts[song.id]);

  const handleHeartClick = (songId: string, songName: string, urlSpotify: string) => {
    setClickedHearts((prevClickedHearts) => {
      if (prevClickedHearts[songId]) {
        const newHearts = { ...prevClickedHearts };
        delete newHearts[songId];
        setPopupMessage("Fjernet fra favoritter");
        setShowPopup(true);
        return newHearts;
      } else {
        setPopupMessage("Lagt til i favoritter");
        setShowPopup(true);
        return {
          ...prevClickedHearts,
          [songId]: [songName, urlSpotify],
        };
      }
    });
  };

  return (
    <div>
      <div className="">
        <div className="topTen">
          <h1>Topp 10 sanger</h1>
        </div>
        <div className="container" key={song.id}>
          <button
            onClick={handlePrevious}
            className={`arrow-button ${currentSongIndex === 0 ? "hidden" : ""}`}
          >
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
              onClick={() => handleHeartClick(song.id, song.name, song.external_urls.spotify)}
            >
              ❤️
            </div>
          </div>
          <div className="low-center">
            <a
              href={song.external_urls.spotify || "#"}
              target="_blank"
              className="low-center-a"
            >
              {song.name}
            </a>
          </div>
          <button
            onClick={handleNext}
            className={`arrow-button ${
              currentSongIndex === topSongs.length - 1 ? "hidden" : ""
            }`}
          >
            →
          </button>
        </div>
        <h2>Trykk på sangen for å få opp lyrics</h2>
      </div>
      <div className="list-of-songs">
        <ol>
          {topSongs.map((s, index) => (
            <li key={s.id}>
              <button onClick={() => setCurrentSongIndex(index)}>
                {index + 1}. {s.name}
              </button>
            </li>
          ))}
        </ol>
      </div>
      {showPopup && (
        <PopUp message={popupMessage} onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
};

export default ArtistCard;
