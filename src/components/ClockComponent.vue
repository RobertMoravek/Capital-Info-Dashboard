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
        newDate.value = date.add(props.timezoneOffset, 'seconds').format('hh:mm:ss');
        if (!clockRunning) {
            clockRunning = setInterval(calculateTime, 1000);
        }
    }
}
</script>

<template>
    <div class="time rounded flex-space-around flex-rows">
        <img src="time.png" alt="Currency" />
        <h2>{{ newDate }}</h2>
    </div>
</template>

<style lang="scss" scoped>
.time {
    background: $accentBGColorBlue;
    padding: 15px;
    grid-column-start: 10;
    grid-column-end: 12;
    grid-row-start: 6;
    grid-row-end: 8;
    border: 7px solid $mainLightColor;

    @media screen and (max-width: $tablet-breakpoint) {
        grid-column-start: 5;
        grid-column-end: 7;
        grid-row-start: 4;
        grid-row-end: 6;
        padding: 5px;
        border: 5px solid $mainLightColor;
    }

    @media screen and (max-width: $mobile-breakpoint) {
        padding: 5px;

        grid-column-start: 3;
        grid-column-end: 4;
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
