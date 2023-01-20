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
    // if (Object.keys(props.languageObject).length > 1) {
    //     languageString += ' & others';
    // }
    console.log(languageString);
}

extractCurrency();
</script>

<template>
    <div class="language rounded flex-space-around">
        <img src="language.png" alt="Currency" />
        <h2>{{ languageString }}</h2>
    </div>
</template>

<style lang="scss" scoped>
.language {
    flex-direction: column;
    background: $accentBGColorGreen;
    padding: 15px;
    grid-column-start: 6;
    grid-column-end: 8;
    grid-row-start: 6;
    grid-row-end: 8;
    border: 7px solid $mainLightColor;

    @media screen and (max-width: $tablet-breakpoint) {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 4;
        grid-row-end: 6;
        padding: 5px;
        border: 5px solid $mainLightColor;
    }

    @media screen and (max-width: $mobile-breakpoint) {
        padding: 5px;

        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 4;
        grid-row-end: 6;
        border: 3px solid $mainLightColor;
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
