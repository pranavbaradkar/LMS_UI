<template>
  <v-row>
    <v-col class="my-courses d-flex" style="flex-direction: column">
      <div>
        <span class="path" style="color: #3366bb">HOME</span>
        <span class="path mx-4" style="color: #3366bb">></span>
        <span class="path">MY COURSES</span>
      </div>
      <div class="mt-5 d-flex row">
        <div v-for="i in 10" :key="i" style="width: 217px" class="mr-2 mb-2">
          <course-card></course-card>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import CourseCard from "../components/CourseCard.vue";
export default {
  components: { CourseCard },
};
</script>

<style>
.path {
  font-weight: 500;
  font-size: 10px;
  line-height: 11px;
}
</style>
