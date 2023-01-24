<script setup lang="ts">
import { ref } from 'vue';
</script>

<template>
    <div class="loading-screen rounded border-light">
        <p>Loading</p>
    </div>
</template>

<style lang="scss" scoped>
.loading-screen {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    p {
        padding: 30px;
        color: $mainLightColor;

    }
}
</style>
