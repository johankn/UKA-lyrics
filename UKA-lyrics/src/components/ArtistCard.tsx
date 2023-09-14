import { useQuery } from "react-query";
import { getAccessToken, getTopSongsOfArtist } from "./SpotifyAPI.tsx";

type Song = {
  id: string,
  name: string,
  album: Album
  external_urls: ExternalUrl
};

type Album = {
  images: Images[]
}

type Images = {
  url: string
}

type ExternalUrl = {
  spotify: string
}


interface ArtistCardProps {
  artistID: string;
}

const ArtistCard = ({ artistID }: ArtistCardProps) => {
  const { data: accessToken } = useQuery("spotifyAccessToken", getAccessToken);
  const { data: topSongs, isLoading } = useQuery<Song[], Error>(
    ["artistTopSongs", artistID, accessToken],
    () => getTopSongsOfArtist(artistID, accessToken!),
    { enabled: !!accessToken },
  );

  if (isLoading || !topSongs) return <div>Loading...</div>;

  return (
    <div>
      <h2>TopSongs</h2>
      <ul>
        {topSongs.map((song) => (
          <li key={song.id}>
            <img src={song.album.images[0].url || ''} alt={song.name} style={{ width: "50px", height: "50px", marginRight: "10px" }} />
            <a href={song.external_urls.spotify || '#' } target="_blank">{song.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistCard;
