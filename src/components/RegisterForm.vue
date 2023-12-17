<script setup>
import { ref, reactive } from 'vue'
import { useAppStore } from '@/stores/AppStore'
import router from '@/router';

const appStore = useAppStore()
const account = ref({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountType: 'PHYSICAL'
})

const register = async () => {
    const accountUnboxed = account.value
    if (accountUnboxed.password !== accountUnboxed.passwordConfirm || !accountUnboxed.accountType) {
        console.log(accountUnboxed)
        console.log("error");
        return;
    }
    await appStore.register(accountUnboxed)
    router.push("/")
}
</script>

<template>
    <div class="d-flex flex-column align-self-center bg-white p-5 rounded-5 text-start" style="width:35%">
        <h3>Регистрация</h3>
        <div class="form-group">
            <label>Имя</label>
            <input type="text" class="form-control" v-model="account.firstName" placeholder="Имя" />
        </div>
        <div class="form-group">
            <label>Фамилия</label>
            <input type="text" class="form-control" v-model="account.lastName" placeholder="Фамилия" />
        </div>
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="account.email" placeholder="Email" />
        </div>
        <div class="form-group">
            <label>Телефон</label>
            <input type="text" class="form-control" v-model="account.phone" placeholder="Phone" />
        </div>
        <div class="form-group">
            <label>Пароль</label>
            <input type="password" class="form-control" v-model="account.password" placeholder="Пароль" />
        </div>
        <div class="form-group">
            <label>Подтвердите пароль</label>
            <input type="password" class="form-control" v-model="account.passwordConfirm"
                placeholder="Подтвердите пароль" />
        </div>

        <div class="w-25 align-self-center">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked
                    value="PHYSICAL" v-model="account.accountType">
                <label class="form-check-label" for="flexRadioDefault1">
                    Физ. лицо
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                    value="ORGANIZATION" v-model="account.accountType">
                <label class="form-check-label" for="flexRadioDefault2">
                    Юр. лицо
                </label>
            </div>
        </div>

        <button @click="register" class="btn btn-primary btn-block">Регистрация</button>
</div></template>