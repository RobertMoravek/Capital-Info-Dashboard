<script setup lang="ts">
///////////////////////////////////////////
// IMPORTS

import { ref, reactive, onMounted, watch } from 'vue';
import type { CapitalsAndCountries } from './types/types';
import LoadingDashboard from './components/LoadingDashboard.vue';
import CapitalName from './components/CapitalName.vue';

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

    const cleanedRes = rawRes.filter((country: any) => 'capital' in country && country.capital.length > 0 && country.independent);
    // const cleanedRes = rawRes.map((country: any) => {
    //     if ('capital' in country) {
    //         return country;
    //     }
    // });
    console.log(cleanedRes);
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

    setInterval(choseRandomCountry, 20000);
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
            :capital-name="capitalsandCountries[currentCountryNumber].capital![0]"
            :country-name="capitalsandCountries[currentCountryNumber].name.common"
            :continent-name="capitalsandCountries[currentCountryNumber].continents[0]"
            :flag-url="capitalsandCountries[currentCountryNumber].flags.png"
        />
    </Transition>
</template>

<style>
/* Add styles in SCSS files */
</style>
