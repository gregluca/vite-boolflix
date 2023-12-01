<script>

import { store } from '../store';
export default {
 data(){
    return {
        store
    }
},
emits: ["psearch"]
}
</script>
<template>
    <header>
        <div class="right">
            <h1>BOOLFLIX</h1>
        </div>
        <div class="left">
            <label class="form-label" for="search"></label>
            <input class="form-control" type="search" id="search" v-model="store.searchText" />
            <button class="btn btn-light" @click="$emit('psearch')">Cerca</button>
        </div>
    </header>
</template>
<style scoped lang="scss">
header {
    display: flex; 
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
    background-color: black;
    color: white;
    h1 {
        color: red;
    }
    h1:hover {
        opacity: .4;
    }
    button {
        text-decoration: none;
        border: none;
    }
    .left {
        display: flex;
        margin: 10px;
    }
}

</style>