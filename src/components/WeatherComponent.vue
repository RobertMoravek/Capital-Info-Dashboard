<script setup lang="ts">
import type { Weather } from '../types/WeatherTypes';
import { ref, watch } from 'vue';
const openWeatherMapKey = import.meta.env.VITE_openWeatherMapKey;

let weatherData = ref<Weather | null>(null);

const props = defineProps<{
    cityLat: number;
    cityLong: number;
}>();

const emit = defineEmits<{
    (e: 'timezone-offset-received', timezone_offset: any): void;
}>();

async function getWeatherData(lat: number, long: number) {
    try {
        let tempWeatherData = await fetch(
            `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly,daily,alerts&units=metric&appid=${openWeatherMapKey}`
        );
        weatherData.value = await tempWeatherData.json();
        emit('timezone-offset-received', weatherData.value!.timezone_offset);
    } catch (err) {
        console.log(err);
    }
}

function createIconUrl(): string {
    if (weatherData.value) {
        return `http://openweathermap.org/img/wn/${weatherData.value.current.weather[0].icon}@2x.png`;
    } else {
        return '';
    }
}

watch(
    () => [props.cityLat, props.cityLong],
    () => {
        getWeatherData(props.cityLat, props.cityLong);
    }
);

getWeatherData(props.cityLat, props.cityLong);

function createWindDeg(): string {
    if (weatherData.value) {
        return weatherData.value.current.wind_deg + 'deg';
    } else {
        return '';
    }
}
</script>

<template>
    <div></div>
    <div class="weather rounded bg-light" v-if="weatherData">
        <h2 class="temp">{{ weatherData.current.temp }} °C</h2>
        <img :src="createIconUrl()" alt="" class="drop-shadow weather-icon" />

        <h2 class="windspeed">{{ weatherData.current.wind_speed }} m/s</h2>
        <img src="/wind-direction.png" alt="wind direction" class="wind-direction drop-shadow" />
    </div>
</template>

<style lang="scss" scoped>
.weather {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 10;
    grid-row-end: 12;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 33%);

    height: 100%;
    box-sizing: content-box;

    @media screen and (min-width: $mobile-breakpoint) {
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 6;
        grid-row-end: 7;
    }
    @media screen and (min-width: $tablet-breakpoint) {
        grid-column-start: 6;
        grid-column-end: 10;
        grid-row-start: 1;
        grid-row-end: 3;
    }

    .temp {
        grid-column: 1/3;
        grid-row: 1/2;
        align-self: flex-end;
        justify-self: center;
    }

    .weather-icon {
        grid-column: 1/3;
        grid-row: 2/4;
        height: 100%;
        align-self: center;
        justify-self: center;
    }

    .windspeed {
        grid-column: 3/5;
        grid-row: 1/2;
        align-self: flex-end;
        justify-self: center;
    }

    .wind-direction {
        grid-column: 3/5;
        grid-row: 2/4;
        align-self: center;
        justify-self: center;
        height: 50%;
        transform: rotate(v-bind(createWindDeg()));
    }
}
</style>
