import { useQuery } from "react-query";
import { getAccessToken, getTopSongsOfArtist } from "../api/SpotifyAPI.tsx";
import "./ArtistCard.css";
import { useState } from "react";

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

  const { data: accessToken } = useQuery("spotifyAccessToken", getAccessToken);

  const { data: topSongs, isLoading } = useQuery<Song[], Error>(
    ["artistTopSongs", artistID, accessToken],
    () => getTopSongsOfArtist(artistID, accessToken!),
    { enabled: !!accessToken },
  );

  if (isLoading || !topSongs) return <div>Loading...</div>;

  console.log(topSongs);

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

  return (
    <div>
      <div className="header">
        <h2>Top 10 songs</h2>
      </div>

      <div className="">
        <div className="container" key={song.id}>
          <button onClick={handlePrevious} className="arrow-button">
            ←
          </button>
          <div className="album-image">
            {" "}
            <img
              src={song.album.images[0].url || ""}
              alt={song.name}
              className=""
            />
          </div>
          <div className="low-center">
            <a href={song.external_urls.spotify || "#"} target="_blank">
              {song.name}
            </a>
          </div>
          <button onClick={handleNext} className="arrow-button">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
