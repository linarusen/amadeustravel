<template>
    <div>
        <v-menu>
            <template v-slot:activator="{props}">
                <v-text-field v-model:model-value="value.date" v-bind="props" variant="solo" :label="label" :rules="[x=>!!x || 'Zorunlu Alan']"></v-text-field>
            </template>
            <v-date-picker v-model="date" ></v-date-picker>
        </v-menu>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        value: {
            default: () => ({} as any)
        },
        label: {
            default: () => ("")
        }
    },
    data: () => ({
       date : null 
    }),
    watch : {
        date() {
            this.value.date= new Date(this.date).toDateString();
        }
    }
}
</script>