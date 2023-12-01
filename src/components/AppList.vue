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
    <h2>MOVIES</h2>
    <div class="top">
        <div v-for="movie in store.moviesList">
            <AppCard :movieObj="movie" />
        </div>
    </div>
    <h2>SERIES</h2>
    <div class="bottom">
        <div v-for="serie in store.seriesList">
            <AppCard :movieObj="serie" />
        </div>
    </div>
</section>
</template>
<style scoped lang="scss">
section {
    color: white;

    h2 {
        text-align: center;
    }
}
.top {
    display: flex;
    overflow: scroll;
}
.bottom {
    display: flex;
    overflow: scroll;
}
</style>