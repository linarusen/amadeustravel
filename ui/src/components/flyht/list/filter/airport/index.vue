<template>
    <div>
        <v-autocomplete v-model="value.value" variant="solo" item-title="PortName" label="Autocomplete"
            :items="items" :rules="[x=>!!x || 'Zorunlu Alan']"></v-autocomplete>

    </div>
</template>

<script lang="ts">
import api from "@/store/api/index"
export default {
    props: {
        value: {
            default: () => ({} as any)
        },
    },

    data: () => ({
        items: [
        
        ]
    }),
    created() {
        api.get("airports").then(t => this.items = t)
    }
}
</script>