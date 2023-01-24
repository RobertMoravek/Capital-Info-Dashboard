<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
    languageObject: any;
}>();

let languageString: string = '';

watch(
    () => props.languageObject,
    () => {
        extractCurrency();
    }
);

function extractCurrency() {
    languageString = props.languageObject[Object.keys(props.languageObject)[0]];
}

extractCurrency();
</script>

<template>
    <div class="mini-component rounded flex-space-between border-light">
        <img src="/language.png" alt="Currency" />
        <h1>{{ languageString }}</h1>
    </div>
</template>

<style lang="scss" scoped>
.mini-component {
    background: $accentBGColorGreen;
    grid-column-start: 6;
    grid-column-end: 8;
    grid-row-start: 6;
    grid-row-end: 8;

    @media screen and (max-width: $tablet-breakpoint) {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 5;
        grid-row-end: 6;
    }

    @media screen and (max-width: $mobile-breakpoint) {
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 7;
        grid-row-end: 8;
    }
    h1 {
        height: auto;
        @media screen and (min-width: $mobile-breakpoint) {
            height: auto;
        }

        @media screen and (min-width: $tablet-breakpoint) {
            height: 50px;
        }
    }
}
</style>
