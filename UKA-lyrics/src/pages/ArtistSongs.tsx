import { QueryClient, QueryClientProvider } from "react-query";
import ArtistCard from "../components/ArtistCard";

interface ArtistSongsProps {
  artistID: string;
}

function ArtistSongs({ artistID }: ArtistSongsProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <>
        <h1>ArtistSongs Page</h1>
        <ArtistCard artistID={artistID} />
      </>
    </QueryClientProvider>
  );
}

export default ArtistSongs;
