<script setup>
import { RouterView } from 'vue-router';
import { onMounted } from 'vue'
import NavigationView from './components/NavigationView.vue';
import { useAppStore } from '@/stores/AppStore'
import router from './router';

const appStore = useAppStore()

onMounted(() => {
  if (!useAppStore.isAuthenticated && localStorage.getItem("refreshToken")) {
    useAppStore.refresh();
    console.log("authenticated")
  } else {
    console.log("not authenticated")
  }
  router.push("/")
})
</script>

<template>
  <div id="app">
    <NavigationView />
    <div class="auth-wrapper">
      <div class="auth-inner">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');

* {
  box-sizing: border-box;
}

.forgot-password a {
  color: #167bff;
}

.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7f7d7d;
  margin: 0;
}

.auth-wrapper h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

.custom-control-label {
  font-weight: 400;
}

.auth-wrapper .form-control:focus {
  border-color: #167bff;
  box-shadow: none;
}

.auth-inner {
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
}

.auth-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
}

.navbar-light {
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}

#app {
  text-align: center;
}

body {
  background: #1c8ef9 !important;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
  font-family: 'Fira Sans', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
label,
span {
  font-weight: 500;
  font-family: 'Fira Sans', sans-serif;
  text-align: center;
}

body,
html,
#app,
#root,
.auth-wrapper {
  width: 100%;
  height: 100%;
}

.form-group {
  margin: 15px;
}

.form-check {
  margin-bottom: 15px;
}
</style>
