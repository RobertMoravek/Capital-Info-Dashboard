<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    capitalName: string | undefined;
    countryName: string | undefined;
}>();

let url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAdHIW7wZ33VDUNtOe93ODteMrFhSmnW8I&q=${props.capitalName}, ${props.countryName}&zoom=2`;
</script>

<template>
    <iframe width="450" height="250" frameborder="0" style="border: 0" referrerpolicy="no-referrer-when-downgrade" :src="url" allowfullscreen> </iframe>
</template>

<style lang="scss" scoped></style>
