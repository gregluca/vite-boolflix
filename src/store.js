import { reactive } from "vue";

export const store = reactive ({
    moviesList: [],
    seriesList: [],
    searchText: "",
    apiUrl: "https://api.themoviedb.org/3",
    api_key:"98fdd68cbd38cb8b6f04eb3fddbf88d8",
    baseImgUrl: 'https://image.tmdb.org/t/p/w342',
    movieSearch: '/search/movie',
    tvSeriesSearch: '/search/tv',
});