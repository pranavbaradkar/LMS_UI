<template>
<v-container class="justify-center">
    <v-row>
        <v-col cols="12" class="d-flex justify-center pb-0 text-h6" style="text-align: center;">
            {{ h1 }}
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" class="d-flex justify-center py-0" style="color: rgba(0, 0, 0, 0.6);text-align: center;">
            {{ h2 }}
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" class="d-flex justify-center pt-6" style="max-height: 100% ;">
            <slot></slot>
        </v-col>
    </v-row>
</v-container>
</template>
<script>
export default {
    name: "FormField",
    props: {
        h1: {
            type: String,
            default: "",
        },
        h2: {
            type: String,
            default: "",
        }
    }
}
</script>

<style>

</style>