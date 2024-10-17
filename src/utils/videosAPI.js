import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const RAPID_API_YOUTUBE_KEY =
  "7897065645msh7a9041d1c39bd72p10e7f3jsnd545f5b9822b";

const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": RAPID_API_YOUTUBE_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export async function fetchVideos(url) {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}
