<script setup lang="ts">
import { ref, watch } from 'vue';
import moment from 'moment';
const rapidApiKey = import.meta.env.VITE_rapidApiKey;

const props = defineProps<{
    cityLat: number;
    cityLong: number;
}>();

let hotelsList;

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': rapidApiKey,
        'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
    }
};

watch(
    () => [props.cityLat, props.cityLong],
    () => {
        getHotels();
    }
);

async function getHotels() {

    let checkInDate = moment();
    let checkOutDate = checkInDate.add(1, 'days');
    checkInDate.format("YYYY-MM-DD");
    checkOutDate.format("YYYY-MM-DD");
    

    try {
        hotelsList = await fetch(
            `https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates?checkout_date=${checkOutDate}&adults_number=2&checkin_date=${checkInDate}&units=metric&order_by=popularity&latitude=${props.cityLat}&locale=en-gb&room_number=1&filter_by_currency=EUR&longitude=${props.cityLong}&children_ages=5%2C0&include_adjacency=true&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&page_number=0`,
            options
        );
        hotelsList = await hotelsList.json();
        console.log(hotelsList);

    } catch (err) {
        console.log(err)
    }
}

getHotels();
</script>

<template>
    <div></div>
</template>

<style lang="scss" scoped></style>
