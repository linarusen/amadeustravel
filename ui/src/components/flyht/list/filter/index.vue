<template>
    <div class="flight-form">
        <v-form ref="form">
            <v-row>
                <v-col cols="6">
                    <Airport :value="model.fromAirport" label="Kalkış Havalimanı"></Airport>
                </v-col>
                <v-col cols="6">
                    <Airport :value="model.toAirport" label="İniş Havalimanı"></Airport>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="6">
                    <Datex :value="model.goDate" label="Kalkış Tarihi"></Datex>
                </v-col>
                <v-col v-if="!is.oneway" cols="6">
                    <Datex :value="model.backDate" label="Dönüş Tarihi"></Datex>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-switch v-model="is.oneway" label="Tek yönlü uçuş"></v-switch>
                </v-col>
                <v-col cols="12">
                    <v-btn color="large" block @click="searchFlights">Uçuş Ara</v-btn>
                </v-col>
            </v-row>
        </v-form>

    </div>
</template>

<style scoped>
.flight-form {
    margin: 20px;
}

.v-row {
    margin-bottom: 15px;
}

.v-col {
    max-width: 50%;
}
</style>

<script setup lang="ts">
import Airport from './airport/index.vue'
import Datex from './date/index.vue'
</script>

<script lang="ts">
export default {
    data: () => ({
        is: {
            oneway: false
        },
        model: {
            fromAirport: { value: null },
            toAirport: { value: null },
            goDate: { date: null },
            backDate: { date: null },
        },
    }),
    props: {
        value: {
            default: () => ({} as any)
        },
    },
    methods: {
        async searchFlights() {
            let x = await (this.$refs as any).form.validate()
            if (x.valid)
                this.$emit("search", this.model)
        }
    }
};  
</script>