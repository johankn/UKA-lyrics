import { QueryClient, QueryClientProvider } from "react-query";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import { useParams } from "react-router-dom";
import "../../index.css";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import "../../components/ArtistCard/ArtistCard.css";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";

function ArtistSongs() {
  const { artistID } = useParams<{ artistID: string }>();

  const queryClient = new QueryClient();

  if (!artistID) {
    return <div>Artist ID is missing!</div>;
  }

  return (
    <>
      <GoBackButton />
      <BurgerMenu />
      <QueryClientProvider client={queryClient}>
        <ArtistCard artistID={artistID} />
      </QueryClientProvider>
    </>
  );
}

export default ArtistSongs;
