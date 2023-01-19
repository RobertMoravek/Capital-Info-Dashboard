<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { createClient } from 'pexels';

const pexelsKey = import.meta.env.VITE_pexelsKey;
const client = createClient(pexelsKey);

const props = defineProps<{
    capitalName: string | undefined;
    countryName: string | undefined;
}>();

let photoResponse = ref<any>();

onMounted(() => getPexelPhotos());

watch(
    () => props.capitalName,
    () => {
        getPexelPhotos();
    }
);

async function getPexelPhotos() {
    try {
        let query = props.capitalName + ' sights ' + props.countryName;
        let photos = await client.photos.search({ query, per_page: 10, size: 'small' });

        photoResponse.value = photos;
        console.log(photoResponse);
    } catch (err) {
        console.log(err);
    }
}
</script>

<template>
    <div></div>
</template>

<style lang="scss" scoped></style>
