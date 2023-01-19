<script setup lang="ts">
import { ref } from 'vue';
</script>

<template>
    <div class="loading-screen">
        <p>Loading</p>
    </div>
</template>

<style lang="scss" scoped>
.loading-screen {
    background-color: $mainBGColor;

    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
}
</style>
