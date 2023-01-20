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
    console.log(currencyString);
}

extractCurrency();
</script>

<template>
    <div class="currency rounded flex-space-around">
        <img src="currency.png" alt="Currency" />
        <h2>{{ currencyString }}</h2>
    </div>
</template>

<style lang="scss" scoped>
.currency {
    flex-direction: column;
    background: $accentBGColorPink;
    padding: 15px;
    grid-column-start: 8;
    grid-column-end: 10;
    grid-row-start: 6;
    grid-row-end: 8;
    border: 7px solid $mainLightColor;

    @media screen and (max-width: $tablet-breakpoint) {
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 4;
        grid-row-end: 6;
        padding: 5px;
        border: 5px solid $mainLightColor;
    }

    @media screen and (max-width: $mobile-breakpoint) {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 4;
        grid-row-end: 6;
        padding: 5px;
        border: 5px solid $mainLightColor;
    }

    h2 {
        color: $mainLightColor;

        text-align: center;
        white-space: normal;

        @media screen and (max-width: $tablet-breakpoint) {
            font-size: 30px;
            line-height: 34px;
        }

        @media screen and (max-width: $mobile-breakpoint) {
            font-size: 30px;
            line-height: 34px;
        }
    }

    img {
        height: 40%;

        @media screen and (max-width: $tablet-breakpoint) {
            height: 60%;
        }

        @media screen and (max-width: $mobile-breakpoint) {
            height: 40%;
        }
    }
}
</style>
