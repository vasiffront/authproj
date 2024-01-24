<script setup>
import { ref } from 'vue'
import { useAppStore } from '@/stores/AppStore'
import router from '@/router';

const appStore = useAppStore();
const lgout = async() =>{
  await appStore.logOut()
  router.push('/login')
}

</script>

<template>
  <nav class="navbar navbar-expand navbar-light sticky-top">
    <div class="container">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <div class="collapse navbar-collapse" style="display: contents !important;">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/catalog" class="nav-link">Каталог</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/goods" class="nav-link">Товары</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">Доставка</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">О нас</router-link>
          </li>
          
        </ul>
        <ul class="navbar-nav ml-auto" v-if="!appStore.isAuthenticated">
          <li class="nav-item">
            <router-link to="/login" class="btn btn-light">Вход</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="btn btn-light">Регистрация</router-link>
          </li>
          <li class="nav-item"><li class="nav-item"><i class="fa fa-cart-plus" aria-hidden="true" style="font-size: 30px;"></i></li></li>
        </ul>
        
        <ul class="navbar-nav ml-auto" v-else>
          <li class="nav-item">
            <button class="btn btn-light" @click="lgout">Выход</button>
          </li>
          <li class="nav-item">
            <router-link to="/userpage" class="btn btn-light">Личный Кабинет</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>