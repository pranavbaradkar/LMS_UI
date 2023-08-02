<template>
  <v-row>
    <v-col class="px-0">
      <v-card class="px-3">
        <v-list-item>
          <v-list-item-avatar
            style="border-radius: 12px; background-position: bottom"
          >
            <v-img src="@/assets/model.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>Christian F.</v-list-item-content>
        </v-list-item>
        <v-card-subtitle
          class="mr-2 d-flex row align-center pl-6 pb-1"
          style="line-height: 15px; color: black;"
        >
          <v-rating
            background-color="rgba(0, 0, 0, 0.26)"
            half-increments
            readonly
            size="16"
            value="3.5"
            color="yellow"
            dense
            class="mr-2"
          ></v-rating>
          Best Study material
        </v-card-subtitle>
        <v-card-subtitle class="pb-0" style="font-size: 12px;"> Reviewed on 10th June 2022 </v-card-subtitle>
        <v-card-subtitle style="max-width: 50%">
          This course is very insightful. It fulfilled my professional and
          personal needs. I am realy happy to take this course.
        </v-card-subtitle>
      </v-card>
      <v-divider></v-divider>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style></style>
