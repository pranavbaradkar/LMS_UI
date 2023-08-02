<template>
  <v-card
    style="
      /* background: linear-gradient(114deg, #fbf5f2 0%, #faf8ee 100.05%); */
      background-color: white;
      border: 1px solid rgba(0, 0, 0, 0.12);
    "
  >
    <v-card-text class="pb-0" style="color: black"> SUB-UNIT 01 </v-card-text>
    <v-card-title class="pt-1" style="line-height: 18px">
      Process of Growth and Development from Infancy to Toddlerhood
    </v-card-title>
    <v-card-subtitle class="mt-8" style="color: black">
      <v-progress-linear
        background-color="#D9D9D9"
        height="6"
        rounded
        class="mb-4"
      ></v-progress-linear>
      <div class="d-flex" style="justify-content: space-between">
        <div class="d-flex align-center">LOs Completed: 0 / 5</div>
        <div>
          <v-rating value="3" readonly dense>
            <template v-slot:item="props">
              <v-icon small :color="props.isFilled ? 'green darken-4' : ''"
                >mdi-circle</v-icon>
            </template>
          </v-rating>
        </div>
      </div>
    </v-card-subtitle>
    <v-card-actions class="pt-4">
      <v-btn text color="#6C367E"> START </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {};
</script>

<style></style>
