import { QueryClient, QueryClientProvider } from "react-query";
import ArtistCard from "../components/ArtistCard";
import { useParams } from "react-router-dom";
import "../index.css";
import GoBackButton from "../assets/GoBackButton";

function ArtistSongs() {
  const { artistID } = useParams<{ artistID: string }>();

  const queryClient = new QueryClient();

  if (!artistID) {
    return <div>Artist ID is missing!</div>;
  }

  return (
    <>
      <GoBackButton />

      <QueryClientProvider client={queryClient}>
        <h1>Artist songs Page</h1>
        <ArtistCard artistID={artistID} />
      </QueryClientProvider>
    </>
  );
}

export default ArtistSongs;
