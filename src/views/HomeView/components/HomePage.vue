<template>
  <v-row>
    <v-col cols="9">
      <banner></banner>
      <course-view></course-view>
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
import ActionCard from "./ActionCard.vue";
import Banner from "./Banner.vue";
import CourseView from "./CourseView.vue";
export default {
  components: { Banner, CourseView, ActionCard },
};
</script>

<style></style>
