import { reactive } from "vue";

export const store = reactive ({
    moviesList: [],
    seriesList: [],
    searchText: "",
    apiUrl: "https://api.themoviedb.org/3",
    api_key:"6d528e53b247ff47c3c0b248b11a367e",
    baseImgUrl: 'https://image.tmdb.org/t/p/w342',
    movieSearch: '/search/movie',
    tvSeriesSearch: '/search/tv',
});