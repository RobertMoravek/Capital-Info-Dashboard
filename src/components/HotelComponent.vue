<script setup lang="ts">
import type { Hotels } from '../types/HotelTypes';
import { ref, watch } from 'vue';
import moment from 'moment';
const rapidApiKey = import.meta.env.VITE_rapidApiKey;

const props = defineProps<{
    cityLat: number;
    cityLong: number;
}>();

let hotelsList = ref<Hotels | null>(null);
let hotelsResponse = ref<any>(null);

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

watch(hotelsResponse, async () => {
    // hotelsResponse.value = hotelsResponse.value.json();
    // console.log(await hotelsResponse.value);
    // console.log(Object.keys(await hotelsResponse).length);
    // if (Object.keys(await hotelsResponse.value).length > 1) {
    //     hotelsList.value = await hotelsResponse.value;
    //     console.log(hotelsList.value);
    // } else {
    //     console.log('Error when fetching hotels');
    // }
});

async function getHotels(): Promise<void> {
    let checkInDate = moment();
    let checkOutDate = moment().add(1, 'days');
    let formattedCheckInDate = checkInDate.format('YYYY-MM-DD');
    let formattedCheckOutDate = checkOutDate.format('YYYY-MM-DD');
    console.log(formattedCheckInDate, formattedCheckOutDate);

    try {
        let hotelsResponseRaw = await fetch(
            `https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates?checkout_date=${formattedCheckOutDate}&adults_number=2&checkin_date=${formattedCheckInDate}&units=metric&order_by=popularity&latitude=${props.cityLat}&locale=en-gb&room_number=1&filter_by_currency=EUR&longitude=${props.cityLong}&children_ages=5%2C0&include_adjacency=true&page_number=0&`,
            options
        );

        hotelsResponse.value = await hotelsResponseRaw.json();
        if (Object.keys(await hotelsResponse.value).length > 1) {
            hotelsList.value = await hotelsResponse.value;
            console.log(hotelsList.value);
        } else {
            console.log('Error when fetching hotels');
        }
    } catch (err) {
        console.log(err);
    }
}

getHotels();
</script>

<template>
    <div class="hotels bg-light rounded">
        <div class="hotel-list" v-if="hotelsList">
            <div class="hotel" v-for="n in 2" :key="n">
                <div class="hotel-image">
                    <img :src="hotelsList.result[n - 1].max_photo_url" alt="" />
                </div>
                <div class="hotel-text">
                    <h2>{{ hotelsList.result[n - 1].hotel_name }}</h2>
                    <p>{{ hotelsList.result[n - 1].min_total_price }} {{ hotelsList.result[n - 1].price_breakdown.currency }} / night</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.hotels {
    height: 100%;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 16;
    grid-row-end: 19;
    overflow: hidden;
    @media screen and (min-width: $mobile-breakpoint) {
        grid-column-start: 5;
        grid-column-end: 7;
        grid-row-start: 6;
        grid-row-end: 10;
    }
    @media screen and (min-width: $tablet-breakpoint) {
        grid-column-start: 10;
        grid-column-end: 12;
        grid-row-start: 1;
        grid-row-end: 6;
    }

    .hotel-list {
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        gap: 10px;
        @media screen and (min-width: $mobile-breakpoint) {
            gap: 0px;
            flex-direction: column;
        }
        @media screen and (min-width: $tablet-breakpoint) {
            gap: 0px;
            flex-direction: column;

        }

        .hotel {
            width: 50%;
            max-width: 50%;
            
            @media screen and (min-width: $mobile-breakpoint) {
                width: 100%;
                max-width: 100%;
                height: 50%;
                max-height: 50%;
            }
            @media screen and (min-width: $tablet-breakpoint) {
                max-width: 100%;
                width: 100%;
                height: 50%;
                max-height: 50%;
            }

            .hotel-image {
                height: 50%;
                width: 100%;
                overflow: hidden;

                img {
                    object-position: 50% 50%;
                    object-fit: cover;
                    height: 100%;
                    width: 100%;
                }
            }

            .hotel-text {
                padding: 20px;

                h2 {
                    white-space: nowrap;
                    padding-bottom: 10px;
                }
                p {
                    text-align: right;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;

                }
            }
        }
    }
}
</style>
