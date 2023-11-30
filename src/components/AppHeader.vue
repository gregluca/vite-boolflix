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
        <label for="search">Cerca</label>
        <input type="search" id="search" v-model="store.searchText" />
        <button @click="$emit('psearch')">Cerca</button>
    </header>
</template>
<style scoped lang="scss">
</style>