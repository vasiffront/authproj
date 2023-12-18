<template>
    <form @submit.prevent="handleSubmit" class="d-flex flex-column align-self-center bg-white p-5 rounded-5 text-start"
        style="width:35%">
        <h3>Вход</h3>

        <div class="form-group">
            <label>Email или телефон</label>
            <input type="text" class="form-control" v-model="auth.searchField" placeholder="email или телефон" />
        </div>

        <div class="form-group">
            <label>Пароль</label>
            <input type="password" class="form-control" v-model="auth.password" placeholder="Пароль" />
        </div>

        <button @click="loginUp" class="btn btn-primary btn-block">Вход</button>
    </form>
</template>

<script setup>
import { useAppStore } from '@/stores/AppStore'
import router from '@/router';
import { ref } from 'vue' 

const auth = ref({
    searchField: "",
    password: "",
})
const appStore = useAppStore()
const loginUp = async () => {
    const authUnboxed = auth.value
    await appStore.auth(authUnboxed)
    router.push("/userpage")
}
</script>