<template>
  <v-app>
    <v-card class="fill-height px-4" style="background-color: #faf8ee">
      <navigation-drawer></navigation-drawer>
      <v-content style="margin-left: 36px" class="mt-4">
        <top-bar v-if="activeElement !== 'InfoGraphics'"></top-bar>
        <keep-alive>
          <component :is="activeElement"></component>
        </keep-alive>
      </v-content>
    </v-card>
  </v-app>
</template>

<script>
import TopBar from "./components/TopBar.vue";
import NavigationDrawer from "./components/NavigationDrawer.vue";
import HomePage from "./components/HomePage.vue";
import EnrolledCourses from "./EnrolledCourses/EnrolledCourses.vue";
import MyCourses from './MyCourses/MyCourses.vue';
import InfoGraphics from "./InfoGraphics/InfoGraphics.vue";
import CoursePDP from "./CoursePDP/CoursePDP.vue";
export default {
  components: { NavigationDrawer, TopBar, HomePage, EnrolledCourses, MyCourses, InfoGraphics, CoursePDP },
  data () {
    return {
      activeElement: 'CoursePDP',
    }
  }
};
</script>

<style></style>
