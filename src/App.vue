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
            // chiamata per film 
            axios.get(this.store.apiUrl + this.store.movieSearch, {
                params: {
                    api_key: "98fdd68cbd38cb8b6f04eb3fddbf88d8",
                    query: this.store.searchText,
                },
            })
            .then((resp) => {
                this.store.moviesList = resp.data.results;
            });

            // chiamata per serie 
            axios.get(this.store.apiUrl + this.store.tvSeriesSearch, {
                params: {
                    api_key: "98fdd68cbd38cb8b6f04eb3fddbf88d8",
                    query: this.store.searchText,
                },
            })
            .then((resp) => {
                this.store.seriesList = resp.data.results;
            });

        },
    },
};
</script>
<template>
    <AppHeader @psearch="search()"/>
    <AppList />
</template>

<style lang="scss">
@use"./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>