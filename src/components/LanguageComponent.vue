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
    if (Object.keys(props.languageObject).length > 1) {
        languageString += ' and others';
    }
    console.log(languageString);
}

extractCurrency();
</script>

<template>
    <p>{{ languageString }}</p>
</template>

<style lang="scss" scoped></style>
