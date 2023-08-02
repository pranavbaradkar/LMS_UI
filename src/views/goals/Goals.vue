<template>
    <v-app class="surface">
      <v-container style="padding-top: 110px;"  class="d-flex justify-center">
        <v-row class="d-flex justify-center align-center col-12" style="transform: translateX(-48px);">
          <v-col @click="goToPrev" cols="1" class="d-flex justify-end pa-0 pr-8 pointer">
            <v-icon color="primary">mdi-arrow-left</v-icon>
          </v-col>
          <v-col cols="11" class="d-flex justify-center align-center" style="font-size: 20px;">
            Set your daily goals
          </v-col>
        </v-row>
      </v-container>
        <form-field :h1="formDatas[onTheIndex].h1" :h2="formDatas[onTheIndex].h2">
        <keep-alive>
        <component :is="formDatas[onTheIndex].slot" @goToNext="goToNext"></component>
        </keep-alive>
        </form-field>
    </v-app>
  </template>
  
  <script>
import FormField from '../onboarding/components/FormField.vue';
import Primary from './Primary.vue';
  
  export default {
  components: { FormField, Primary },
      name: "Onboarding",
      data () {
          return {
            formDatas: [
              {
                id: 1,
                h1: 'How much time you are ready to spend on learning, each day?',
                h2: 'A few minutes a day is all that you need to spend to complete the course',
                slot: Primary,
              },
              {
                id: 2,
                h1: 'How much time you are ready to spend on learning, each day?A few minutes a day is all that you need to spend to complete the course',
                h2: "",
                slot: Primary,
              },
            ],
            onTheIndex: 0,
          }
      },
      methods: {
        goToNext () {
          this.onTheIndex = this.onTheIndex + 1;
        },
        goToPrev () {
          if (this.onTheIndex < 1) return;
          this.onTheIndex = this.onTheIndex - 1;
        }
      },
  }
  </script>
  
  <style>
  
  </style>