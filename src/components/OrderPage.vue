<script setup>
import { ref, reactive } from 'vue'
import { useAppStore } from '@/stores/AppStore'
import router from '@/router';
import Card from 'primevue/card';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import InputSwitch from 'primevue/inputswitch';
import ToggleButton from 'primevue/togglebutton';
import RadioButton from 'primevue/radiobutton';
import InputText from 'primevue/inputtext'; 

const appStore = useAppStore()

</script>
<template>
<h1>Оформление заказа</h1>
<Card style="margin: 10px;    display: flex;
    margin: 10px;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: stretch;
    justify-content: space-around;
    align-items: flex-start;">
    <template #header>
        <img alt="user header" src="https://s4.lm-cdn.ru/photo/stulya/dlya_kuhni/derevyannye/stul_dzhovanni/stul_dzhovanni_1994_1320_1_0_4871173.webp" width="500px">
    </template>
    <template #title>
        Стул
    </template>
    <template #content >
    <div style="display: flex; flex-direction: row; flex-wrap: nowrap; align-content: stretch; justify-content: space-around; align-items: flex-start;">
    <div>
        <p style="text-align: left !important;">
        Высота 92 см.<br>
        Ширина 46 см.<br>
        Глубина 47 см.</p>
        <p style="text-align: left !important;">
        В комплеке 2 изделия: <br>
        Каркас стула <br>
        Подушки
        </p>
        <p style="text-align: left !important;">
        Вес: 5 кг. <br>
        Монтаж: 7 мин. <br>
        </p>
    </div>
    <div>
    <h3>Цена</h3>
    <p style="text-align: left !important;">
    за 3 дня<br>
    05/02/24 - 07/02/24<br>
    </p>

    <p style="text-align: left !important;">
    Доступно ... шт.
    </p>
    </div>
    </div>
    </template>
    <template #footer>
      <InputText type="text" v-model="value" /> 
      <Button icon="pi pi-check" label="Добавить в корзину" />
    </template>
</Card>
  
</template>

<style>


</style>