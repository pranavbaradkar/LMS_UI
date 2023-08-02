<template>
  <v-row>
    <v-col class="pt-0 px-0">
      <v-btn-toggle class="course-app-bar" v-model="section" tile mandatory>
        <v-container>
          <v-row>
            <v-col class="pa-0">
              <v-btn
                width="25%"
                elevation="0"
                v-for="item in sections"
                :key="item"
                style="background-color: #82d2da; border-radius: 0px"
                :value="item"
              >
                {{ item }}
              </v-btn>
            </v-col>
          </v-row>
          <keep-alive>
            <component :is="section"></component>
          </keep-alive>
        </v-container>
      </v-btn-toggle>
    </v-col>
  </v-row>
</template>

<script>
import Rating from "./components/Rating.vue";
import About from "./components/About.vue";
import Curriculam from "./components/Curriculam.vue";
export default {
  components: { Curriculam, About, Rating },
  data() {
    return {
      section: "Curriculam",
      sections: ["Curriculam", "About", "Rating", "Certification"],
    };
  },
  methods: {},
};
</script>

<style>
.course-app-bar.theme--light.v-btn-toggle:not(.v-btn-toggle--group)
  .v-btn.v-btn {
  border-color: rgba(0, 0, 0, 0.12) !important;
  border-width: 0px;
}
.v-btn-toggle {
  display: block;
}
</style>
