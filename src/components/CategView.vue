<script setup>
import { ref, reactive } from 'vue'
import { useAppStore } from '@/stores/AppStore'
import router from '@/router';
import PanelMenu from 'primevue/panelmenu';
import 'primevue/resources/themes/lara-light-green/theme.css';
import Button from 'primevue/button';
import Card from 'primevue/card';

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
<div>
    <div class="card flex justify-content-center" style="position: sticky !important; width: max-content !important;">
        <PanelMenu :model="items" multiple class="w-full md:w-20rem" />
    </div>
    <div>
    </div>
 </div>   

</template>

<style>

</style>