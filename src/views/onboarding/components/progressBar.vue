<template>
  <v-row>
    <v-progress-linear class="rounded-xl" height="12" :value="percentageComplete" color="#82D2DA" background-color="rgba(0, 0, 0, 0.18)">
  </v-progress-linear>
  </v-row>
</template>

<script>
export default {
    props: ['percentageComplete'],
}
</script>

<style>

</style>