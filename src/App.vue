<script setup lang="ts">
///////////////////////////////////////////
// IMPORTS

import { ref, reactive, onMounted, watch } from 'vue';
import type { Countries } from './types/CountryTypes';
import type { Capitals } from './types/CapitalTypes';
import LoadingDashboard from './components/LoadingDashboard.vue';
import CapitalName from './components/CapitalName.vue';
import CityPictures from './components/CityPictures.vue';
import WeatherComponent from './components/WeatherComponent.vue';
import ClockComponent from './components/ClockComponent.vue';
import HotelComponent from './components/HotelComponent.vue';
import MapComponent from './components/MapComponent.vue';
import CurrencyComponent from './components/CurrencyComponent.vue';
import LanguageComponent from './components/LanguageComponent.vue';

// VARIABLES

let countryData: Countries;
let capitalData: Capitals | false;
let alreadyShownCountries: number[] = reactive([]);
let currentCountryNumber = ref<number | null>(null);
let timezoneOffset = ref<number | null>(null);
const showDashboard: boolean = false;

//////////////////////////////////////
//  FUNCTIONS

// Fetch the all countries and clean them
async function getCountryData(): Promise<Countries> {
    try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        const rawRes = await res.json();

        const cleanedRes = rawRes.filter((country: any) => 'capital' in country && country.capital.length > 0 && country.independent && country.capitalInfo);

        // console.log(cleanedRes.length);
        return cleanedRes;
    } catch (err) {
        console.log(err);
        return getCountryData();
    }
}

// Fetch the a capital
async function getCapitalData(city: string): Promise<false | Capitals> {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/capital/${city}`);
        const rawRes = await res.json();

        return rawRes;
    } catch (err) {
        console.log(err);
        return false;
    }
}

// Chose a random country
async function choseRandomCountry(): Promise<any> {
    let randomNumber: number = Math.floor(Math.random() * countryData.length);

    // If it's already in alreadyShownCountries, try again
    if (alreadyShownCountries.includes(randomNumber) && alreadyShownCountries.length < countryData.length) {
        choseRandomCountry();
    } else if (alreadyShownCountries.includes(randomNumber) && alreadyShownCountries.length >= countryData.length) {
        // console.log('else if', alreadyShownCountries);
        let tempCapitalData: false | Capitals = await getCapitalData(countryData[randomNumber].capital![0]);
        if (tempCapitalData) {
            alreadyShownCountries = [];
            alreadyShownCountries.push(randomNumber);
            currentCountryNumber.value = randomNumber;
            capitalData = tempCapitalData;
        } else {
            choseRandomCountry();
        }
    } else {
        // console.log(countryData[randomNumber].capital![0]);
        let tempCapitalData: false | Capitals = await getCapitalData(countryData[randomNumber].capital![0]);
        if (tempCapitalData) {
            alreadyShownCountries.push(randomNumber);
            currentCountryNumber.value = randomNumber;
            capitalData = tempCapitalData;
            // console.log(countryData[randomNumber]);
            // console.log(capitalData);
        } else {
            choseRandomCountry();
        }
    }
}

function setTimeZoneOffset(event: any) {
    timezoneOffset.value = event;
}

//////////////////////////////////////////
// CALLING THE FUNCTIONS

// On mount...
onMounted(async () => {
    // ...get the list of Capitals and Countries
    countryData = await getCountryData();

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
            :capitalName="countryData[currentCountryNumber].capital![0]"
            :countryName="countryData[currentCountryNumber].name.common"
            :flagUrl="countryData[currentCountryNumber].flags.png"
            :flagEmoji="countryData[currentCountryNumber].flag"
        />
    </Transition>
    <Suspense>
        <CityPictures
            v-if="currentCountryNumber"
            :capitalName="countryData[currentCountryNumber].capital![0]"
            :countryName="countryData[currentCountryNumber].name.common"
        />
    </Suspense>
    <Suspense>
        <WeatherComponent
            v-if="currentCountryNumber"
            :cityLat="countryData[currentCountryNumber].capitalInfo.latlng![0]"
            :cityLong="countryData[currentCountryNumber].capitalInfo.latlng![1]"
            @timezone-offset-received="setTimeZoneOffset($event)"
        />
    </Suspense>
    <Suspense>
        <ClockComponent v-if="currentCountryNumber" :timezoneOffset="timezoneOffset" />
    </Suspense>
    <!-- <Suspense>
        <HotelComponent v-if="currentCountryNumber" :cityLat="countryData[currentCountryNumber].capitalInfo.latlng![0]"
            :cityLong="countryData[currentCountryNumber].capitalInfo.latlng![1]" />
    </Suspense> -->

    <Suspense>
        <MapComponent
            v-if="currentCountryNumber"
            :capitalName="countryData[currentCountryNumber].capital![0]"
            :countryName="countryData[currentCountryNumber].name.common"
        />
    </Suspense>
    <CurrencyComponent v-if="currentCountryNumber" :currencyObject="countryData[currentCountryNumber].currencies" />
    <LanguageComponent v-if="currentCountryNumber" :languageObject="countryData[currentCountryNumber].languages" />
</template>

<style>
/* Add styles in SCSS files */
</style>
