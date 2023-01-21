<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    capitalName: string | undefined;
    countryName: string | undefined;
    flagUrl: string | undefined;
    flagEmoji: string | undefined;
}>();
</script>

<template>
    <div class="capital-name rounded flex-space-between bg-light">
        <div class="flex-rows capital-text">
            <h1>{{ props.capitalName }}</h1>
            <h2>{{ props.countryName }}</h2>
        </div>
        <img :src="props.flagUrl" :alt="flagEmoji" class="flag box-shadow" />
    </div>
</template>

<style lang="scss" scoped>
.capital-name {
    padding: 15px 30px;
    grid-column-start: 1;
    grid-column-end: 6;
    grid-row-start: 6;
    grid-row-end: 8;

    @media screen and (max-width: $tablet-breakpoint) {
        padding: 15px 30px;
        grid-column-start: 1;
        grid-column-end: 7;
        grid-row-start: 1;
        grid-row-end: 2;
    }

    @media screen and (max-width: $mobile-breakpoint) {
        padding: 15px 30px;
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 3;
    }

    border: 3px solid $mainLightColor;

    p {
        color: $mainColor;
    }

    .capital-text {
        width: 60%;
    }

    .flag {
        max-width: 30%;
        max-height: 65%;
        // border: 2px solid black;
    }
}
</style>
