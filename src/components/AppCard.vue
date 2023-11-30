<script>
export default {
    props: {
        movieObj: Object,
    },
    data() {
        return {
            flags: ["en" , "it" , "es", "fr"],
        };
    },
    methods: {
        getImagePath(img) {
            //console.log(img);
            return new URL(`../assets/img/${img}.png`, import.meta.url).href;
        },
    }
};
</script>
<template>
<div class="card">
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