<template>
    <form  @submit.prevent="handleSubmit">
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