<template>
    <div class="d-flex flex-column align-self-center bg-white p-5 rounded-5 text-start" style="width:100%; height: inherit;">
        <div class="card">
            <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">

                    <h4>{{ appStore.account?.firstName }}</h4>
                    <p class="text-secondary mb-1">{{ appStore.getNormalizedAccountType }}</p>
                </div>
            </div>
        </div>
        <div class="card mb-3">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Фамилия</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        {{appStore.account?.lastName}}
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        {{appStore.account?.email}}
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Телефон</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        {{appStore.account?.phone}}
                    </div>
                </div>
                <hr>
            </div>
        </div>
        <div class="card">
        <DataTable :value="tableData">
            <Column field="number" header="Номер"></Column>
            <Column field="time" header="Время"></Column>
            <Column field="category" header="Категория"></Column>
            <Column field="status" header="Статус"></Column>
        </DataTable>
    </div>
    </div> 

</template>

<script setup>
import { ref, reactive } from 'vue';
import { useAppStore } from '@/stores/AppStore';
import router from '@/router';                   
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup'; 
import Row from 'primevue/row';  


const appStore = useAppStore()
const tableData = ref([
    {
        number: '0001',
        time: '10:00',
        category: 'оборудование',
        status: 'создано'
    },
    {
        number: '0002',
        time: '12:00',
        category: 'посуда',
        status: 'принято'
    },
    {
        number: '0003',
        time: '13:30',
        category: 'оборудование',
        status: 'готово'
    }

])

</script>


<style>
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid transparent;
    border-radius: .25rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%);
}

.me-2 {
    margin-right: .5rem !important;
}
</style>
