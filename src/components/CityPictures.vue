<script setup lang="ts">
import type { PhotosWithTotalResults, ErrorResponse } from 'pexels';
import { onMounted, ref, watch } from 'vue';
import { createClient } from 'pexels';

const pexelsKey = import.meta.env.VITE_pexelsKey;
const client = createClient(pexelsKey);

const props = defineProps<{
    capitalName: string | undefined;
    countryName: string | undefined;
}>();

let currentPicture = ref<number>(0);
let photoResponse = ref<PhotosWithTotalResults | ErrorResponse | null>(null);
let photos = ref<PhotosWithTotalResults | null>(null);
let slideShowRunning = ref<boolean>(false);
onMounted(() => getPexelPhotos());

watch(
    () => props.capitalName,
    () => {
        getPexelPhotos();
    }
);

watch(photoResponse, () => {
    if (photoResponse && !('error' in photoResponse!.value!)) {
        photos.value = photoResponse.value;
        startSlideShow();
    }
});

async function getPexelPhotos() {
    try {
        let query: string = props.capitalName + ' ' + props.countryName;
        photoResponse.value = await client.photos.search({ query, per_page: 10, size: 'small', orientation: 'landscape' });
    } catch (err) {
        console.log(err);
    }
}

function startSlideShow(): void {
    if (slideShowRunning.value == false) {
        slideShowRunning.value = true;
        currentPicture.value = 0;
        setInterval(() => {
            if (currentPicture.value < 10) {
                // console.log(currentPicture.value);
                currentPicture.value++;
            } else {
                currentPicture.value = 0;
            }
        }, 7000);

    }
}
</script>

<template>
    <div class="photos rounded bg-light" v-if="photos">
        <TransitionGroup appear>
            <img :src="photo.src.medium" alt="" v-for="(photo, index) in photos!.photos" :key="index" v-show="index == currentPicture" />
        </TransitionGroup>
    </div>
</template>

<style lang="scss" scoped>
.photos {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 7;
    overflow: hidden;
    width: 100%;
    height: 100%;

    img {
        object-position: 50% 50%;
        object-fit: cover;
        height: 100%;
        width: 100%;
    }

    @media screen and (min-width: $mobile-breakpoint) {
        grid-column-start: 1;
        grid-column-end: 7;
        grid-row-start: 2;
        grid-row-end: 5;
    }
    @media screen and (min-width: $tablet-breakpoint) {
        grid-column-start: 1;
        grid-column-end: 6;
        grid-row-start: 1;
        grid-row-end: 6;
    }
}
</style>
