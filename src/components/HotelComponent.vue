<script setup lang="ts">
import { ref } from 'vue';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a7b45f348bmshd36343182cb0bbcp1b7909jsn5afec0a7583f',
        'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
    }
};

let hotelsList = await fetch(
    'https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates?checkout_date=2023-07-16&adults_number=2&checkin_date=2023-07-15&units=metric&order_by=popularity&latitude=52.52&locale=en-gb&room_number=1&filter_by_currency=EUR&longitude=13.4&children_ages=5%2C0&include_adjacency=true&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&page_number=0',
    options
);
hotelsList = await hotelsList.json();

console.log(hotelsList);
</script>

<template>
    <div></div>
</template>

<style lang="scss" scoped></style>
