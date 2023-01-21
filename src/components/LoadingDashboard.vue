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
    grid-row-start: 4;
    grid-row-end: 6;

    border: 3px solid $mainLightColor;
    @media screen and (min-width: $mobile-breakpoint) {
        grid-column-start: 2;
        grid-column-end: 6;
        grid-row-start: 2;
        grid-row-end: 4;
    }
    @media screen and (min-width: $tablet-breakpoint) {
        grid-column-start: 5;
        grid-column-end: 9;
        grid-row-start: 3;
        grid-row-end: 5;
    }

    p {
        color: $mainLightColor;
    }
}
</style>
