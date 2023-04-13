import axios from "axios";

const apiFilmes = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzdlY2U2ZDVmMjYyMTAwNmMwYTliMGVmYWNlZWFiZCIsInN1YiI6IjY0MzVlMDczNjUxZmNmMDA3NzM4ZmEwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.99lAf03cSkevEOG86h2uqrOcRN9NMBDaM_Uur0QTNhY",
  },
});

export default apiFilmes;
