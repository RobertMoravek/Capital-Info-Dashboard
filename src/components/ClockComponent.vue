<script setup lang="ts">
import { ref, watch } from 'vue';
import moment from 'moment';

let clockRunning: ReturnType<typeof setInterval> | null = null;

const props = defineProps<{
    timezoneOffset: number | null;
}>();

watch(
    () => props.timezoneOffset,
    () => {
        calculateTime();
    }
);

let newDate = ref<string>();

function calculateTime() {
    if (props.timezoneOffset != null) {
        // let date = moment.utc().utcOffset(60);

        let date = moment.utc();
        newDate.value = date.add(props.timezoneOffset, 'seconds').format('HH:mm:ss');
        if (!clockRunning) {
            clockRunning = setInterval(calculateTime, 1000);
        }
    }
}
</script>

<template>
    <div class="mini-component rounded flex-space-between flex-rows border-light">
        <img src="/time.png" alt="Time" />
        <h1>{{ newDate }}</h1>
    </div>
</template>

<style lang="scss" scoped>
.mini-component {
    background: $accentBGColorBlue;
    grid-column-start: 10;
    grid-column-end: 12;
    grid-row-start: 6;
    grid-row-end: 8;

    @media screen and (max-width: $tablet-breakpoint) {
        grid-column-start: 5;
        grid-column-end: 7;
        grid-row-start: 5;
        grid-row-end: 6;
    }

    @media screen and (max-width: $mobile-breakpoint) {
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 9;
        grid-row-end: 10;
    }
}
</style>
