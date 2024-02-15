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
    color: #C6DE41;

    h2 {
        text-align: center;
        margin: 60px;
    }
}
.top, .bottom {
    display: flex;
    overflow: auto;
    scrollbar-width: thin;  /* Per Firefox */
    scrollbar-color: transparent transparent;  /* Per Firefox */
    -ms-overflow-style: none;  /* Per IE e Edge */
}

.top::-webkit-scrollbar,
.bottom::-webkit-scrollbar {
    width: 12px;  /* Larghezza della barra di scorrimento */
}

.top::-webkit-scrollbar-thumb,
.bottom::-webkit-scrollbar-thumb {
    background-color: transparent;  /* Colore della parte mobile della barra di scorrimento */
}

.top::-webkit-scrollbar-track,
.bottom::-webkit-scrollbar-track {
    background-color: transparent;  /* Colore della parte fissa della barra di scorrimento */
}
</style>
