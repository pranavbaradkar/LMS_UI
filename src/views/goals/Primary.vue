<template>
    <v-container class="justify-space-between my-24">
      <v-row class="d-flex justify-center">
          <v-col
              v-for="(level, index) in goalsData" 
              :key="index" 
              class="mx-3 my-1 px-0 pb-6 t-card" 
              :class="{selectStyle : level.selected}"
              @click="boxClicked(index)">
              <v-row>
                  <v-col class="d-flex justify-center pa-0 mb-6 mt-6" color="primary">
                      <div style="height: 48px; width: 48px;">
                        <v-img src="@/assets/clock.svg"></v-img>
                      </div>
                  </v-col>
              </v-row>
              <v-row>
                  <v-col class="d-flex justify-center pa-0 mb-2" style="font-size: 14px;">
                      {{ level.time }} minutes
                  </v-col>
              </v-row>
              <v-row>
                  <v-col class="d-flex justify-center pt-0" style="color: rgba(0, 0, 0, 0.6); font-size: 12px;">
                      {{ level.subtext}}
                  </v-col>
              </v-row>
          </v-col>
      </v-row>
      <bottom-bar v-if="isAnyLevelSelected" @onClickContinue="onClick"></bottom-bar>
    </v-container>
  </template>
  
  <script>
  import BottomBar from '../onboarding/components/BottomBar.vue';

  export default {
      components: { BottomBar },
      emits: ['goToNext'],
      data () {
          return {
              goalsData: [
                  {
                      img: "here goes image",
                      time:15,
                      subtext: "Curious Learner",
                      selected: false,
                  },
                  {
                      img: "here goes image",
                      time:30,
                      subtext: "Conventional Learner",
                      selected: false,
                  },
                  {
                      img: "here goes image",
                      time:45,
                      subtext: "Dedicated Learner",
                      selected: false,
                  },
                  {
                      img: "here goes image",
                      time:60,
                      subtext: "Zealous Learner",
                      selected: false,
                  },
              ],
          }
      },
      methods: {
          boxClicked (index) {
              this.goalsData[index].selected = !this.goalsData[index].selected;
          },
          onClick () {
              this.$emit('goToNext');
          }
      },
      computed: {
          isAnyLevelSelected () {
              const filterData = this.goalsData.filter((item) => item.selected);
              return filterData.length === 0 ? false : true;
          }
      }
  }
  </script>
  
  <style>
    .t-card {
      background-color: white; 
      border-radius: 8px;
      border: 1px solid white;
      max-width: 171px;
      min-width: 171px;
      height: fit-content;
      border: 1px solid rgba(0, 0, 0, 0.12);
    }
    .t-card:hover {
      cursor: pointer;
      box-shadow: 0px 7px 11px rgba(0, 0, 0, 0.19);
      border: 2px solid #82D2DA;
    }
    .selectStyle {
      box-shadow: 0px 7px 11px rgba(0, 0, 0, 0.19);
      border: 2px solid #82D2DA;
    }
  </style>