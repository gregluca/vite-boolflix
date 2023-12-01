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
    <div v-for="movie in store.moviesList">
        <AppCard :movieObj="movie" />
    </div>
</section>
</template>
<style scoped lang="scss">
section {
    display: flex;
    flex-wrap: wrap;
}
</style>