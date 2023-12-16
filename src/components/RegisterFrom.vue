<template>
    <form @submit.prevent="handleSubmit">
        <h3>Регистрация</h3>
        <div class="form-group">
            <label>Имя</label>
            <input type="text" class="form-control" v-model="first_name" placeholder="Имя"/>
        </div>
        <div class="form-group">
            <label>Фамилия</label>
            <input type="text" class="form-control" v-model="last_name" placeholder="Фамилия"/>
        </div>
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email"/>
        </div>
        <div class="form-group">
            <label>Пароль</label>
            <input type="password" class="form-control" v-model="password" placeholder="Пароль"/>
        </div>
        <div class="form-group">
            <label>Подтвердите пароль</label>
            <input type="password" class="form-control" v-model="password_confirm" placeholder="Подтвердите пароль"/>
        </div>
        
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
            <label class="form-check-label" for="flexRadioDefault1">
                Физ. лицо
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
            <label class="form-check-label" for="flexRadioDefault2">
                Юр. лицо
            </label>
        </div>

        <button @click="register" class="btn btn-primary btn-block">Регистрация</button>
    </form>
</template>

<script>
import axios from 'axios';

    

    export default {
        name: 'RegisterFrom',
        data(){
            return{
                first_name: '',

                last_name: '',

                email:'',

                password: '',

                password_confirm:''
            }

        },
        async register(){
            const account = {
                email:this.email,
                password: this.password,
                firstName:this.first_name,
                lastName:this.last_name
            }
            const result = await axios.post("/api/public/sign-up", account)
        }
    }
</script>