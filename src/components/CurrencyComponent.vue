<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
    currencyObject: any;
}>();

let currencyString: string = '';

watch(
    () => props.currencyObject,
    () => {
        extractCurrency();
    }
);

function extractCurrency() {
    currencyString = props.currencyObject[Object.keys(props.currencyObject)[0]].symbol;
    if (Object.keys(props.currencyObject).length > 1) {
        currencyString += ' ';
    }
    // console.log(currencyString);
}

extractCurrency();
</script>

<template>
    <div class="mini-component rounded flex-space-between">
        <img src="/currency.png" alt="Currency" />
        <h1>{{ currencyString }}</h1>
    </div>
</template>

<style lang="scss" scoped>
.mini-component {
    background: $accentBGColorPink;
    grid-column-start: 8;
    grid-column-end: 10;
    grid-row-start: 6;
    grid-row-end: 8;


    @media screen and (max-width: $tablet-breakpoint) {
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 5;
        grid-row-end: 6;
    }

    @media screen and (max-width: $mobile-breakpoint) {
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 8;
        grid-row-end: 9;
    }
}
</style>
