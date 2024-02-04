<template>
    <div>
        <v-card class="mx-auto" width="400" prepend-icon="mdi-home">
            <template v-slot:title>
                {{ value.airline }}
            </template>

            <v-card-text>
                <div class="d-flex">
                    <b>Süre : </b> {{ value.duration }}
                </div>
                <div class="d-flex">
                    <b>Kalkış Saati : </b> {{ value.departure_time }}
                </div>
                <div class="d-flex">
                    <b>Varış Saati : </b> {{ value.arrival_time }}
                </div>
                <div class="d-flex">
                    <b>Fiyat : </b> {{ value.price }}
                </div>
            </v-card-text>

        </v-card>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        value: {
            default: () => ({} as any)
        }
    },
}
</script>