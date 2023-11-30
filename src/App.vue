<script>
import axios from "axios";
import { store } from "./store.js";
import AppHeader from './components/AppHeader.vue';
import AppList from './components/AppList.vue';


export default {
    components: { AppHeader, AppList },
    data() {
        return {
            store,
        };
    },
    methods: {
        search() {
            axios.get("https://api.themoviedb.org/3/search/movie", {
                params: {
                    api_key: "6d528e53b247ff47c3c0b248b11a367e",
                    query: this.store.searchText,
                },
            })
            .then((resp) => {
                this.store.moviesList = resp.data.results;
            });
        },
    },
};
</script>
<template>
    <h2>ciao</h2>
    <AppHeader @psearch="search()"/>
    <AppList />
</template>

<style lang="scss">
@use"./style/general.scss";
</style>