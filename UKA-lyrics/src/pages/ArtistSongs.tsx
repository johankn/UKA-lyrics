import { QueryClient, QueryClientProvider } from "react-query";
import ArtistCard from "../components/ArtistCard";
import { useParams } from "react-router-dom";

function ArtistSongs() {
  const { artistID } = useParams<{ artistID: string }>();

  const queryClient = new QueryClient();

  if (!artistID) {
    return <div>Artist ID is missing!</div>;
  }

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
