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

function calculateTime() {
    if (props.timezoneOffset != null) {
        // let date = moment.utc().utcOffset(60);

        let date = moment.utc();
        let newDate = date.add(props.timezoneOffset, 'seconds');
        console.log(newDate.format());
        if (!clockRunning) {
            clockRunning = setInterval(calculateTime, 1000);
        }
    }
}
</script>

<template>
    <div></div>
</template>

<style lang="scss" scoped></style>
