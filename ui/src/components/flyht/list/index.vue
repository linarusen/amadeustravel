<template>
    <div>
        <v-alert text="Data görüntülemek için 11 Şubat seçiniz :)" color="info"></v-alert>
        <Filter @search="search"></Filter>
        <Sort :value="model.sort" v-if="items.length"></Sort>
        <div v-else-if="is.searched"> Belirtilen Tarihlerde Uçuş Bulunamadı</div>
        <v-progress-linear indeterminate color="blue" v-if="is.loading"></v-progress-linear>
        <div style="display: flex; flex-wrap: wrap;" v-else>
            <div v-for="(item, i) in sortedItems" :key="i" class="d-flex ma-2">
                <Item :value="item">
                </Item>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Filter from './filter/index.vue'
import Sort from './sort/index.vue'
import Item from '../item/index.vue'
</script>

<script lang="ts">
import api from '@/store/api';
export default {
    data: () => ({
        items: [

        ],
        is: {
            loading: false,
            searched : false
        },
        model: {
            sort: {value  : 0}
        },
    }),
    methods: {
        async search(filter: any) {
            this.is.loading = true
            await api.post("flights", filter).then(t => this.items = t)
            this.is.loading = false
            this.is.searched = true
        }
    },
    computed: {
        sortedItems() {
            return this.items.sort((a, b) => {

                return this.model.sort.value == 0 ? (new Date(a.departure_time) > new Date(b.departure_time) ? -1 : 1)
                : this.model.sort.value == 1 ? (new Date(a.arrival_time) > new Date(b.arrival_time) ? -1 : 1)
                : this.model.sort.value == 2 ? ((a.price) > (b.price) ? -1 : 1) 
                // : this.model.sort.value == 3 ? (new Date(a.duration) > new Date(b.duration) ? -1 : 1)

                    : 1
            })
        }
    }
};  
</script>