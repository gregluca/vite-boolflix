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
        getPoster() {
            if(this.movieObj.poster_path) {
                return `https://image.tmdb.org/t/p/w342/${this.movieObj.poster_path}`;
            } else {
                return "../assets/img/no-image.png";
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
<div class="card">
    <div class="poster">
        <img :src="getPoster()" alt="poster">
    </div>
    <div class="show">
        <h2>{{ movieObj.title ? movieObj.title : movieObj.name }}</h2>
        <h3>{{ movieObj.original_title ? movieObj.original_title : movieObj.original_name }}</h3>
        <img class="flag" :src="getImagePath(movieObj.original_language)" alt="" v-if="flags.includes(movieObj.original_language)">
        <p v-else>{{ movieObj.original_language }}</p>
        <div>
            <i v-for="i in fStar" class="fa-solid fa-star"></i>
            <i v-for="i in eStar" class="fa-regular fa-star"></i>
        </div>
    </div>
</div>  
</template>
<style scoped lang="scss">
.card {
    height: 100%;
    width: 200px;
    background-color:rgb(20 20 20) ;
    color: white;
    padding: 10px;

    .flag {
        width: 30px;
    }
    
    .show {
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