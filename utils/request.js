const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const LANGUAGE = "&language=en-US";
const GENRES = "&with_genres";

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}${LANGUAGE}`,
  },

  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie/?api_key=${API_KEY}${GENRES}=28`,
  },

  fetchAnimatedMovies: {
    title: "Animated",
    url: `/discover/movie/?api_key=${API_KEY}${GENRES}=16`,
  },

  fetchDocumentaryMovies: {
    title: "Documentary",
    url: `/discover/movie/?api_key=${API_KEY}${GENRES}=99`,
  },

  fetchDramaMovies: {
    title: "Drama",
    url: `/discover/movie/?api_key=${API_KEY}${GENRES}=18`,
  },

  fetchFamilyMovies: {
    title: "Family",
    url: `/discover/movie/?api_key=${API_KEY}${GENRES}=10751`,
  },

  fetchFantasyMovies: {
    title: "Fantasy",
    url: `/discover/movie/?api_key=${API_KEY}${GENRES}=14`,
  },

  fetchHistoryMovies: {
    title: "History",
    url: `/discover/movie/?api_key=${API_KEY}${GENRES}=36`,
  },

  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie/?api_key=${API_KEY}${GENRES}=35`,
  },

  fetchWarMovies: {
    title: "War",
    url: `/discover/movie/?api_key=${API_KEY}${GENRES}=10752`,
  },

  fetchCrimeMovies: {
    title: "Crime",
    url: `/discover/movie/?api_key=${API_KEY}${GENRES}=80`,
  },

  fetchMusicMovies: {
    title: "Music",
    url: `/discover/movie/?api_key=${API_KEY}${GENRES}=10402`,
  },

  fetchMysteryMovies: {
    title: "Mystery",
    url: `/discover/movie/?api_key=${API_KEY}${GENRES}=9648`,
  },

  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie/?api_key=${API_KEY}${GENRES}=10749`,
  },

  fetchSciFiMovies: {
    title: "Sci-Fi",
    url: `/discover/movie/?api_key=${API_KEY}${GENRES}=878`,
  },

  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie/?api_key=${API_KEY}${GENRES}=27`,
  },

  fetchTVmovieMovies: {
    title: "TV movie",
    url: `/discover/movie/?api_key=${API_KEY}${GENRES}=10770`,
  },

  fetchThrillerMovies: {
    title: "Thriller",
    url: `/discover/movie/?api_key=${API_KEY}${GENRES}=53`,
  },

  fetchWesternMovies: {
    title: "Western",
    url: `/discover/movie/?api_key=${API_KEY}${GENRES}=37`,
  },

  fetchAdventureMovies: {
    title: "Adventure",
    url: `/discover/movie/?api_key=${API_KEY}${GENRES}=12`,
  },
};
