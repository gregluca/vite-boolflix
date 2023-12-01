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
        <h1>BOOLFLIX</h1>
        <label for="search">Cerca</label>
        <input type="search" id="search" v-model="store.searchText" />
        <button @click="$emit('psearch')">Cerca</button>
    </header>
</template>
<style scoped lang="scss">
header {
    background-color: black;

    h1 {
        color: red;
    }
}
</style>