<template>
    <v-container class="d-flex justify-center pt-7">
      <v-row class="d-flex justify-center">
          <v-col  
              v-for="(point, index) in startPointData" 
              :key="index" 
              class="mx-3 mt-1 px-4 starting-card" 
              :class="{selectStyle : point.selected}"
              @click="boxClicked(index)">
              <v-row>
                  <v-col class="d-flex justify-center pa-0 mb-6 mt-8" color="primary">
                      <div style="height: 120px; width: 120px; background-color: black;"></div>
                  </v-col>
              </v-row>
              <v-row>
                  <v-col class="d-flex justify-center pa-0" style="font-size: 16px; font-weight: 500;">
                      {{ point.h1 }}
                  </v-col>
              </v-row>
              <v-row>
                <v-col class="d-flex justify-center mb-4 text-center" style="font-size: 14px; font-weight: 400; color: rgba(0, 0, 0, 0.6);">
                      {{ point.h2 }}
                  </v-col>
              </v-row>
          </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
     emits: ['goToNext'],
      data () {
          return {
              startPointData: [
                  {
                      img: "here goes image",
                      h1:"Start from scratch",
                      h2: "Start your learning in selected subjects from basics",
                      selected: false,
                  },
                  {
                      img: "Find my starting pivot",
                      h1:"Find my starting pivot",
                      h2: "Answer some questions to skip the basics you already know",
                      selected: false,
                  },
              ]
          }
      },
      methods: {
          boxClicked (i) {
              if (this.startPointData[i].selected) {
                this.startPointData[i].selected = ! this.startPointData[i].selected;
                return;
              }
              this.startPointData.map((item, index) => {
                if (i === index) {
                    item.selected = !item.selected;
                }
                else {
                    item.selected = false;
                }
              }) 
              this.$emit('goToNext')
          }
      },
  }
  </script>
  
  <style>
    .starting-card {
      background-color: white; 
      border-radius: 8px;
      border: 1px solid white;
      max-width: 239px;
      min-width: 239px;
      height: fit-content;
      border: 1px solid rgba(0, 0, 0, 0.12);
    }
    .starting-card:hover {
      cursor: pointer;
      box-shadow: 0px 7px 11px rgba(0, 0, 0, 0.19);
      border: 2px solid #82D2DA;
    }
    .selectStyle {
        box-shadow: 0px 7px 11px rgba(0, 0, 0, 0.19);
        border: 2px solid #82D2DA;
    }
  </style>