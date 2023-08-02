<template>
  <v-row>
    <v-col>
        <div class="page-headline">
            MY ENROLLED COURSES
        </div>
        <div>
          <course-card></course-card>
        </div>
    </v-col>
  </v-row>
</template>

<script>
import CourseCard from './components/CourseCard.vue'
export default {
  components: { CourseCard },

}
</script>

<style>
  .page-headline {
    font-weight: 500;
font-size: 14px;
line-height: 15px;
  }
</style>