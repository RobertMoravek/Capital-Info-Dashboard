<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
    capitalName: string | undefined;
    countryName: string | undefined;
}>();

watch(
    () => props.capitalName,
    () => {
        updateUrl();
    }
);

let url = ref<string> (`https://www.google.com/maps/embed/v1/place?key=AIzaSyAdHIW7wZ33VDUNtOe93ODteMrFhSmnW8I&q=${props.capitalName}, ${props.countryName}&zoom=2`);

function updateUrl() {
    url = ref<string> (`https://www.google.com/maps/embed/v1/place?key=AIzaSyAdHIW7wZ33VDUNtOe93ODteMrFhSmnW8I&q=${props.capitalName}, ${props.countryName}&zoom=2`);
}


</script>

<template>
    <iframe class="map rounded" width="450" height="250" frameborder="0" style="border: 0" referrerpolicy="no-referrer-when-downgrade" :src="url" allowfullscreen> </iframe>
</template>

<style lang="scss" scoped>
.map {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 12;
    grid-row-end: 16;
    overflow: hidden;
    width: 100%;
    height: 100%;

    @media screen and (min-width: $mobile-breakpoint) {
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 7;
        grid-row-end: 10;
    }
    @media screen and (min-width: $tablet-breakpoint) {
        grid-column-start: 6;
        grid-column-end: 10;
        grid-row-start: 3;
        grid-row-end: 6;
    }
}
</style>
