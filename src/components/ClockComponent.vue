<script setup lang="ts">
import { ref, watch } from 'vue';
import moment from 'moment';

const props = defineProps<{
    timezoneOffset: number | null;
}>();

watch(
    () => props.timezoneOffset,
    () => {
        console.log('i watched');
        calculateTime();
    }
);

function calculateTime() {
    if (props.timezoneOffset != null) {
        // let date = moment.utc().utcOffset(60);

        let date = moment.utc();
        let newDate = date.add(props.timezoneOffset, 'seconds');
        console.log(newDate.format());


    }
}
</script>

<template>
    <div></div>
</template>

<style lang="scss" scoped></style>
