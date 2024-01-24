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
const appStore = useAppStore()


const items = ref([
    {
        label: 'категория1',
        icon: 'pi pi-file',
        items: [
            {
                label: 'подкатегория1',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'субкатегория1',
                        icon: 'pi pi-file-pdf',
                        items: [
                            {
                                label: 'подсубкатегория1',
                                icon: 'pi pi-stop'
                            },
                            {
                                label: 'подсубкатегория2',
                                icon: 'pi pi-check-circle'
                            }
                        ]
                    },
                    {
                        label: 'субкатегория2',
                        icon: 'pi pi-users'
                    }
                ]
            },
            {
                label: 'подкатегория2',
                 icon: 'pi pi-image',
                items: [
                    {
                        label: 'субкатегория1',
                        icon: 'pi pi-image'
                    }
                ]
            }
        ]
    },
    {
        label: 'категория2',
        icon: 'pi pi-cloud',
        items: [
            {
                label: 'подкатегория1',
                icon: 'pi pi-cloud-upload'
            },
            {
                label: 'подкатегория2',
                icon: 'pi pi-cloud-download'
            },
            {
                label: 'подкатегория3',
                icon: 'pi pi-refresh'
            }
        ]
    },
    {
        label: 'категория3',
        icon: 'pi pi-desktop',
        items: [
            {
                label: 'подкатегория1',
                icon: 'pi pi-mobile'
            },
            {
                label: 'подкатегория2',
                icon: 'pi pi-desktop'
            },
            {
                label: 'подкатегория3',
                icon: 'pi pi-tablet'
            }
        ]
    }
]);

</script>


<template>
    
    <h1>Товары</h1>
    <div style="    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
 
    align-items: center;">
<div>
    <div class="card flex justify-content-center" style="position: sticky !important; width: max-content !important;">
        <PanelMenu :model="items" multiple class="w-full md:w-20rem" />
    </div>
    <div>
    </div>
</div> 
<div style="display: flex;flex-direction: row; flex-wrap: wrap;
align-content: center; align-items: center;">  
<Card style="max-width: 400px; margin: 10px;;">
    <template #header>
        <img alt="user header" src="https://s4.lm-cdn.ru/photo/stulya/dlya_kuhni/derevyannye/stul_dzhovanni/stul_dzhovanni_1994_1320_1_0_4871173.webp" width="200px">
    </template>
    <template #title>
        Стул
    </template>
    <template #content >
        <p style="text-align: left !important;">
        Высота *************************<br>
        Ширина ************************<br>
        Цена**************************</p>
    </template>
    <template #footer>
        <Button icon="pi pi-check" label="Добавить" />
    </template>
</Card>
<Card style="max-width: 400px; margin: 10px;;">
    <template #header>
        <img alt="user header" src="https://s4.lm-cdn.ru/photo/stulya/dlya_kuhni/derevyannye/stul_dzhovanni/stul_dzhovanni_1994_1320_1_0_4871173.webp" width="200px">
    </template>
    <template #title>
        Стул
    </template>
    <template #content >
        <p style="text-align: left !important;">
        Высота *************************<br>
        Ширина ************************<br>
        Цена**************************</p>
    </template>
    <template #footer>
        <Button icon="pi pi-check" label="Добавить" />
    </template>
</Card>
<Card style="max-width: 400px; margin: 10px;;">
    <template #header>
        <img alt="user header" src="https://s4.lm-cdn.ru/photo/stulya/dlya_kuhni/derevyannye/stul_dzhovanni/stul_dzhovanni_1994_1320_1_0_4871173.webp" width="200px">
    </template>
    <template #title>
        Стул
    </template>
    <template #content >
        <p style="text-align: left !important;">
        Высота *************************<br>
        Ширина ************************<br>
        Цена**************************</p>
    </template>
    <template #footer>
        <Button icon="pi pi-check" label="Добавить" />
    </template>
</Card>
<Card style="max-width: 400px; margin: 10px;;">
    <template #header>
        <img alt="user header" src="https://s4.lm-cdn.ru/photo/stulya/dlya_kuhni/derevyannye/stul_dzhovanni/stul_dzhovanni_1994_1320_1_0_4871173.webp" width="200px">
    </template>
    <template #title>
        Стул
    </template>
    <template #content >
        <p style="text-align: left !important;">
        Высота *************************<br>
        Ширина ************************<br>
        Цена**************************</p>
    </template>
    <template #footer>
        <Button icon="pi pi-check" label="Добавить" />
    </template>
</Card>
<Card style="max-width: 400px; margin: 10px;;">
    <template #header>
        <img alt="user header" src="https://s4.lm-cdn.ru/photo/stulya/dlya_kuhni/derevyannye/stul_dzhovanni/stul_dzhovanni_1994_1320_1_0_4871173.webp" width="200px">
    </template>
    <template #title>
        Стул
    </template>
    <template #content >
        <p style="text-align: left !important;">
        Высота *************************<br>
        Ширина ************************<br>
        Цена**************************</p>
    </template>
    <template #footer>
        <Button icon="pi pi-check" label="Добавить" />
    </template>
</Card>
<Card style="max-width: 400px; margin: 10px;;">
    <template #header>
        <img alt="user header" src="https://s4.lm-cdn.ru/photo/stulya/dlya_kuhni/derevyannye/stul_dzhovanni/stul_dzhovanni_1994_1320_1_0_4871173.webp" width="200px">
    </template>
    <template #title>
        Стул
    </template>
    <template #content >
        <p style="text-align: left !important;">
        Высота *************************<br>
        Ширина ************************<br>
        Цена**************************</p>
    </template>
    <template #footer>
        <Button icon="pi pi-check" label="Добавить" />
    </template>
</Card>
<Card style="max-width: 400px; margin: 10px;;">
    <template #header>
        <img alt="user header" src="https://s4.lm-cdn.ru/photo/stulya/dlya_kuhni/derevyannye/stul_dzhovanni/stul_dzhovanni_1994_1320_1_0_4871173.webp" width="200px">
    </template>
    <template #title>
        Стул
    </template>
    <template #content >
        <p style="text-align: left !important;">
        Высота *************************<br>
        Ширина ************************<br>
        Цена**************************</p>
    </template>
    <template #footer>
        <Button icon="pi pi-check" label="Добавить" />
    </template>
</Card>
<Card style="max-width: 400px; margin: 10px;;">
    <template #header>
        <img alt="user header" src="https://s4.lm-cdn.ru/photo/stulya/dlya_kuhni/derevyannye/stul_dzhovanni/stul_dzhovanni_1994_1320_1_0_4871173.webp" width="200px">
    </template>
    <template #title>
        Стул
    </template>
    <template #content >
        <p style="text-align: left !important;">
        Высота *************************<br>
        Ширина ************************<br>
        Цена**************************</p>
    </template>
    <template #footer>
        <Button icon="pi pi-check" label="Добавить" />
    </template>
</Card>
<Card style="max-width: 400px; margin: 10px;;">
    <template #header>
        <img alt="user header" src="https://s4.lm-cdn.ru/photo/stulya/dlya_kuhni/derevyannye/stul_dzhovanni/stul_dzhovanni_1994_1320_1_0_4871173.webp" width="200px">
    </template>
    <template #title>
        Стул
    </template>
    <template #content >
        <p style="text-align: left !important;">
        Высота *************************<br>
        Ширина ************************<br>
        Цена**************************</p>
    </template>
    <template #footer>
        <Button icon="pi pi-check" label="Добавить" />
    </template>
</Card>
<Card style="max-width: 400px; margin: 10px;;">
    <template #header>
        <img alt="user header" src="https://s4.lm-cdn.ru/photo/stulya/dlya_kuhni/derevyannye/stul_dzhovanni/stul_dzhovanni_1994_1320_1_0_4871173.webp" width="200px">
    </template>
    <template #title>
        Стул
    </template>
    <template #content >
        <p style="text-align: left">
        Высота *************************<br>
        Ширина ************************<br>
        Цена**************************
  </p>
       
    </template>
    <template #footer>
        <Button icon="pi pi-check" label="Добавить" />
    </template>
</Card>
</div>
</div>
</template>

<style>

</style>