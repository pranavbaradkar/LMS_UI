<template>
  <v-card class="mt-6 pa-8 rounded-lg" style="box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.26);">
    <v-row class="d-flex justify-space-between">
      <v-col cols="5">
        <div class="d-flex justify-start row mb-2">
          <div style="width: 128px; height: 86px"></div>
          <div>
            <div class="course-name mb-2">Child Development</div>
            <div class="author mb-2">By Deepali Joshi</div>
            <div class="author" style="font-weight: 400">4 Modules</div>
          </div>
        </div>
        <div class="course-info">
          This course provides you in-depth knowledge of child development,
          takes you through all the developmental domains.
        </div>
      </v-col>
      <v-col cols="2">
        <div class="d-flex" style="flex-direction: column;">
            <div class="mb-3" style="align-self: center;">
                <v-btn width="192" height="48" rounded style="color: white; background: #6C367E; box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.38);">START LEARNING</v-btn>
            </div>
            <div></div>
            <v-divider></v-divider>
            <div class="mt-1 d-flex align-center mx-5">
                <v-progress-linear rounded height="6" class="mr-3"></v-progress-linear>
                <span>0%</span>
            </div>
            <div style="align-self: center;">
                0/180 : LOs Completed 
            </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
.course-name {
  font-weight: 400;
  font-size: 24px;
  line-height: 26px;
  color: rgba(0, 0, 0, 0.87);
}
.author {
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  color: rgba(0, 0, 0, 0.6);
}
.course-info {
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.6);
}
</style>
