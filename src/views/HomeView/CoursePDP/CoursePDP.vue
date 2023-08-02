<template>
    <v-row>
      <v-col cols="9">
        <div>
        <span class="path" style="color: #3366bb">HOME</span>
        <span class="path mx-4" style="color: #3366bb">></span>
        <span class="path">Course name</span>
       </div>
        <banner></banner>
        <course-info></course-info>
      </v-col>
      <v-col cols="3" class="pr-0">
        <div style="height: 254px; background-color: blue"></div>
        <div
          class="mt-3 pb-6"
          style="background-color: white; border-radius: 16px"
        >
          <div
            style="height: 48px; align-items: center"
            class="text-h6 d-flex pl-4"
          >
            My actions
          </div>
          <v-divider></v-divider>
          <div>
            <action-card></action-card>
          </div>
        </div>
      </v-col>
    </v-row>
  </template>
  
  <script>
  import ActionCard from "../components/ActionCard.vue";
import Banner from './components/Banner.vue';
import CourseInfo from './CourseInfo/CourseInfo.vue';
  export default {
    components: { ActionCard, Banner, CourseInfo},
  };
  </script>
  
  <style></style>
  