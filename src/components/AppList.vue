<script>
import { store } from '../store';
import AppCard from "./AppCard.vue";

export default {
    data() {
        return {
            store
        }
    },
    components: {AppCard},
};
</script>
<template>
<section>
    <h2>movie</h2>
    <div v-for="movie in store.moviesList">
        <AppCard :movieObj="movie" />
    </div>
    <h2>serie</h2>
    <div v-for="serie in store.seriesList">
        <AppCard :movieObj="serie" />
    </div>
</section>
</template>
<style scoped lang="scss">
section {
    display: flex;
    width: 90%;
    margin: 0 auto;
}
</style>