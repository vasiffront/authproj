<script setup>
import { ref } from 'vue'
import { useAppStore } from '@/stores/AppStore'

const appStore = useAppStore();

</script>

<template>
  <nav class="navbar navbar-expand navbar-light sticky-top">
    <div class="container">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <div class="collapse navbar-collapse" style="display: contents !important;">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Каталог</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">Товары</router-link>
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
            <router-link to="/login" class="nav-link">Вход</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Регистрация</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto" v-else>
          <li class="nav-item">
            <a href="javascript:void(0)" @click="handleClick" class="nav-link">Выход</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>