const API_KEY="75fa5e1b9b977041720513a8486d4e31";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/discover/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=1074`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
  };

  export default requests;
  