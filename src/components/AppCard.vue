<script>
export default {
    props: {
        movieObj: Object,
    },
};
</script>
<template>
<div class="card">
        <h2>{{ movieObj.title }}</h2>
        <h3>{{ movieObj.original_title }}</h3>
        <p>{{ movieObj.original_language }}</p>
        <p>{{ movieObj.vote_average }}</p>
</div>
</template>
<style scoped lang="scss">

</style>