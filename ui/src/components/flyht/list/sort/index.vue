<template>
    <div>
        <v-chip-group column v-model="value.value">
            <v-chip v-for="(item, i) in items" :key="i">
                {{ item }}
            </v-chip>
        </v-chip-group>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        value: {
            default:() => ({} as any)     
        }
    }, 
    data: () => ({
        items: [
            'Kalkış saati', 'Dönüş saati', 'Uçuş uzunluğu', 'Fiyata göre'
        ],

    })
};  
</script>