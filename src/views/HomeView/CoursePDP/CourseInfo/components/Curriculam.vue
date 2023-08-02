<template>
  <v-row>
    <v-col class="pa-8">
      <div v-for="(i) in 5" :key="i">  
        <div style="font-size: 20px;">Module 1: Growth & Development</div>
        <div @click="() => {}" class="py-5 px-4 my-4 rounded-lg d-flex row goToModule" style="background-color: #FBF5F2; font-size: 16px; line-height: 16px; justify-content: space-between;">
          <div style="text-align: center;">
            Unit 1: Understanding Growth & Development in Infancy & toddlerhood (0-3 years)
          </div>
          <div>
            <v-icon style="height: 10px;">mdi-chevron-right</v-icon>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style>
   .goToModule :hover {
    cursor: pointer;
   }
</style>
