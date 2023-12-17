<template>
    <form  @submit.prevent="handleSubmit" class="d-flex flex-column align-self-center bg-white p-5 rounded-5 text-start" style="width:35%">
        <h3>Вход</h3>

        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="email"/>
        </div>

        <div class="form-group">
            <label>Пароль</label>
            <input type="password" class="form-control" v-model="password" placeholder="Пароль"/>
        </div>

        <button class="btn btn-primary btn-block">Вход</button>
    </form>
</template>

<script>
    
    export default{

        name: 'LoginView',
        data(){
            return{
                email: '',
                password: ''
            }
        }
    }
</script>