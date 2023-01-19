<script setup lang="ts">
///////////////////////////////////////////
// IMPORTS

import { ref, reactive, onMounted, watch } from 'vue';
import type { CapitalsAndCountries } from './types/types';
import LoadingDashboard from './components/LoadingDashboard.vue';
import CapitalName from './components/CapitalName.vue';
import CityPictures from './components/CityPictures.vue';
import WeatherComponent from './components/WeatherComponent.vue';

// VARIABLES

let capitalsandCountries: CapitalsAndCountries;
let alreadyShownCountries: number[] = reactive([]);
let currentCountryNumber = ref<number | null>(null);
const showDashboard: boolean = false;

//////////////////////////////////////
//  FUNCTIONS

// Fetch the Capitals and countries
async function getData(): Promise<CapitalsAndCountries> {
    // const res = await fetch('https://countriesnow.space/api/v0.1/countries/capital');
    const res = await fetch('https://restcountries.com/v3.1/all');
    const rawRes = await res.json();

    const cleanedRes = rawRes.filter((country: any) => 'capital' in country && country.capital.length > 0 && country.independent && country.capitalInfo);

    console.log(cleanedRes.length);
    return cleanedRes;
}

// Chose a random country
function choseRandomCountry(): void {
    let randomNumber: number = Math.floor(Math.random() * capitalsandCountries.length);

    // If it's already in alreadyShownCountries, try again
    if (alreadyShownCountries.includes(randomNumber) && alreadyShownCountries.length < capitalsandCountries.length) {
        choseRandomCountry();
    } else if (alreadyShownCountries.includes(randomNumber) && alreadyShownCountries.length >= capitalsandCountries.length) {
        alreadyShownCountries = [];
        alreadyShownCountries.push(randomNumber);
        // console.log('else if', alreadyShownCountries);
        currentCountryNumber.value = randomNumber;
    } else {
        alreadyShownCountries.push(randomNumber);
        // console.log('else', alreadyShownCountries);
        currentCountryNumber.value = randomNumber;
    }
}

//////////////////////////////////////////
// CALLING THE FUNCTIONS

// On mount...
onMounted(async () => {
    // ...get the list of Capitals and Countries
    capitalsandCountries = await getData();

    // Chose a random country out of it
    choseRandomCountry();

    setInterval(choseRandomCountry, 100000);
});

// Watch for a change in the currentCountryNumber
watch(currentCountryNumber, (newNum: number | null, oldNum: number | null) => {
    if (oldNum === null) {
        // Change props -> triggers API call in Components
        // Wait X amount of time
        // change showDashboard to true
    } else {
        // change showDashboard to false
        //  Change props -> triggers API call in Components
        // Wait X amount of time
        // change showDashboard to true
    }
});
</script>

<template>
    <Transition>
        <LoadingDashboard v-if="!currentCountryNumber" />
    </Transition>
    <Transition>
        <CapitalName
            v-if="currentCountryNumber"
            :capitalName="capitalsandCountries[currentCountryNumber].capital![0]"
            :countryName="capitalsandCountries[currentCountryNumber].name.common"
            :continentName="capitalsandCountries[currentCountryNumber].continents[0]"
            :flagUrl="capitalsandCountries[currentCountryNumber].flags.png"
            :flagEmoji="capitalsandCountries[currentCountryNumber].flag"
        />
    </Transition>
    <!-- <Suspense>
        <CityPictures
            v-if="currentCountryNumber"
            :capitalName="capitalsandCountries[currentCountryNumber].capital![0]"
            :countryName="capitalsandCountries[currentCountryNumber].name.common"
        />
    </Suspense> -->
    <Suspense>
        <WeatherComponent
            v-if="currentCountryNumber"
            :cityLat="capitalsandCountries[currentCountryNumber].capitalInfo.latlng![0]"
            :cityLong="capitalsandCountries[currentCountryNumber].capitalInfo.latlng![1]"

        />
    </Suspense>
</template>

<style>
/* Add styles in SCSS files */
</style>
