<script setup lang="ts">
import { ref, watch } from 'vue';
const openWeatherMapKey = import.meta.env.VITE_openWeatherMapKey;
console.log(openWeatherMapKey);

const props = defineProps<{
    cityLat: number;
    cityLong: number;
}>();

async function getWeatherData(lat: number, long: number) {
    try {
        let weatherData = await fetch(
            `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly,daily,alerts&units=metric&appid=${openWeatherMapKey}`
        );
        weatherData = await weatherData.json();
        console.log(weatherData);
    } catch (err) {
        console.log(err);
    }
}

watch (() => [props.cityLat, props.cityLong], () => {
    getWeatherData(props.cityLat, props.cityLong);
})

getWeatherData(props.cityLat, props.cityLong);
</script>

<template>
    <div></div>
</template>

<style lang="scss" scoped></style>
