<script>
export default {
    props: {
        movieObj: Object,
    },
    data() {
        return {
            showCard: false,
            flags: ["en" , "it" , "es", "fr","ru"],
        };
    },
    methods: {
        getImagePath(img) {
            //console.log(img);
            return new URL(`../assets/img/${img}.png`, import.meta.url).href;
        },
        getPoster() {
            if(this.movieObj.poster_path) {
                return `https://image.tmdb.org/t/p/w342/${this.movieObj.poster_path}`;
            } else {
                return new URL(`../assets/img/no-image.png`, import.meta.url).href;
            }
        }
    },
    computed: {
        fStar() {
            return Math.ceil(parseInt(this.movieObj.vote_average) / 2);
        },
        eStar() {
            return (5 - this.fStar);
        }
    }
};
</script>
<template>
<div class="card" @mouseover="showCard = true" @mouseleave="showCard = false">
    <div class="poster">
        <img :src="getPoster()" alt="poster">
    </div>
    <div class="show" v-show="showCard">
        <h2>Title: {{ movieObj.title ? movieObj.title : movieObj.name }}</h2>
        <h3>{{ movieObj.original_title ? movieObj.original_title : movieObj.original_name }}</h3>
        <img class="flag" :src="getImagePath(movieObj.original_language)" alt="" v-if="flags.includes(movieObj.original_language)">
        <p v-else> Language: {{ movieObj.original_language }}</p>
        <div>
            Voto:
            <i v-for="i in fStar" class="fa-solid fa-star"></i>
            <i v-for="i in eStar" class="fa-regular fa-star"></i>
        </div>
    </div>
</div>  
</template>
<style scoped lang="scss">
.card {
    // height: 100%;
    width: 300px;
    background-color:rgb(20 20 20) ;
    color: white;
    position: relative;

    .flag {
        width: 30px;
    }
    
    .show {
        position: absolute;
        background-color:#2D6E7E ;
        width: 100%;
        height: 100%;
        i {
            color: #ffd137;
        }
    }
}

.poster {
    img {
        height: 100%;
        width: 100%;
    }
}


</style>