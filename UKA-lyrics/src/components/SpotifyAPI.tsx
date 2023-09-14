const CLIENT_ID = "3545891bea6e4e2ab208553b03750bfb";
const CLIENT_SECRET = "5230568b50ab4ce0b2855031c2979bc9";

export const getAccessToken = async (): Promise<string> => {
  const authParam = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body:
      "grant_type=client_credentials&client_id=" +
      CLIENT_ID +
      "&client_secret=" +
      CLIENT_SECRET,
  };
  const data = await fetch(
    "https://accounts.spotify.com/api/token",
    authParam,
  ).then((result) => result.json());

  return data.access_token;
};

export const getTopSongsOfArtist = async (
  artistId: string,
  accessToken: string,
) => {
  const searchParam = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + encodeURI(accessToken),
    },
  };
  const data = await fetch(
    "https://api.spotify.com/v1/artists/" + artistId + "/top-tracks?market=NO",
    searchParam,
  ).then((result) => result.json());
  console.log(data);

  return data.tracks;
};
