<script setup>
import { ref, reactive } from 'vue'
import { useAppStore } from '@/stores/AppStore'
import router from '@/router';

const appStore = useAppStore()

</script>
<template>
    <div>
        <h1 v-if="appStore.isAuthenticated">Hi, {{ appStore.account.firstName }} , {{ appStore.account.lastName }}</h1>
        <h1 v-else>not logged</h1>
    </div>
</template>