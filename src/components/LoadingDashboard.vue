<script setup lang="ts">
import { ref } from 'vue';
</script>

<template>
    <div class="loading-screen flex-center rounded">
        <p>Loading</p>
    </div>
</template>

<style lang="scss" scoped>
.loading-screen {
    padding: 30px;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;

    border: 3px solid $mainLightColor;

    p {
        color: $mainLightColor;
    }
}
</style>
