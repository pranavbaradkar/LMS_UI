<template>
  <v-row style="padding-top: 96px; background-color: white" class="px-4 pb-4">
    <v-col>
      <div class="justify-space-between d-flex row">
        <div class="course-section">My Courses in Pedagogy</div>
        <div class="view-all">View All >></div>
      </div>
      <div class="mt-6 ml-n3 d-flex row justify-space-between" style="flex-wrap: nowrap;">
        <div v-for="(i) in 3" :key="i" style="max-width: 33%; width: 33%;">
          <course-card ></course-card>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import CourseCard from './CourseCard.vue';
export default {
  components: { CourseCard },};
</script>

<style>
.course-section {
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.87);
}
.view-all {
  font-weight: 500;
  font-size: 12px;
  line-height: 13px;
  color: #005b64;
}
</style>
