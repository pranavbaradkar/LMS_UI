<template>
    <v-carousel hide-delimiter-background height="100%" class="fill-height">
    <v-carousel-item
      v-for="(color) in colors"
      :key="color"
    >
      <v-sheet
        :color="color"
        height="100%"
      >
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
    name: 'Carousel',
    props: ['colors'],
}
</script>

<style>

</style>