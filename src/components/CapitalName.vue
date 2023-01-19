<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    capitalName: string | undefined;
    countryName: string | undefined;
    continentName: string | undefined;
    flagUrl: string | undefined;
    flagEmoji: string | undefined;
}>();
</script>

<template>
    <div class="capital-name rounded flex-space-between bg-light">
        <p>{{ props.capitalName }}</p>
        <p>{{ props.countryName }}, {{ props.continentName }}</p>
        <img :src="props.flagUrl" :alt="flagEmoji" class="flag" />
    </div>
</template>

<style lang="scss" scoped>
.capital-name {
    padding: 15px 30px;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;

    border: 3px solid $mainLightColor;

    p {
        color: $mainColor;
    }

    .flag {
        height: 100%;
        // border: 2px solid black;
    }
}
</style>
