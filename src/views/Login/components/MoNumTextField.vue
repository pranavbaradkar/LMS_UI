<template>
    <v-row class="mt-6 mx-1" width="100%">
              <vue-country-code
                class="phoneNo rounded-lg"
                enabledCountryCode
                disabled
                :preferredCountries="['in']"
                @onSelect="() => {}"
              ></vue-country-code>
              <v-text-field label="Phone number" class="ml-4" outlined :counter="10"></v-text-field>
    </v-row>
</template>

<script>
export default {
    name: 'MoNumTextField',
    data () {
        return {
            
        }
    }
}
</script>

<style>
.phoneNo {
    width: 96px;
    height: 56px;
    border: 1px solid rgba(0, 0, 0, 0.38);
    border-radius: 12px;
    padding: 0px;
}

.phoneNo > .dropdown {
    border-radius: 12px;
    padding: 0px;
}
</style>