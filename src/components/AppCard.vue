<script>
export default {
    props: {
        movieObj: Object,
    },
    data() {
        return {
            flags: ["en" , "it" , "es", "fr","ru"],
        };
    },
    methods: {
        getImagePath(img) {
            //console.log(img);
            return new URL(`../assets/img/${img}.png`, import.meta.url).href;
        },
    },
    computed: {
        vote() {
            return Math.ceil(parseInt(this.movieObj.vote_average) / 2);
        }
    }
};
</script>
<template>
<div class="card">
    <div class="poster">
        <img :src="`https://image.tmdb.org/t/p/w342/${movieObj.poster_path}`" alt="">
    </div>
        <h2>{{ movieObj.title ? movieObj.title : movieObj.name }}</h2>
        <h3>{{ movieObj.original_title ? movieObj.original_title : movieObj.original.name }}</h3>
        <img class="flag" :src="getImagePath(movieObj.original_language)" alt="" v-if="flags.includes(movieObj.original_language)">
        <p v-else>{{ movieObj.original_language }}</p>
        <p>{{ movieObj.vote_average }}</p>
</div>
</template>
<style scoped lang="scss">
.flag {
    width: 80px;
}
</style>