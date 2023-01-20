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
    currencyString = props.currencyObject[Object.keys(props.currencyObject)[0]].name
    if (Object.keys(props.currencyObject).length > 1) {
        currencyString += ' & others';
    }
    console.log(currencyString);
}

extractCurrency();
</script>

<template>
    <p>{{ currencyString }}</p>
</template>

<style lang="scss" scoped></style>
