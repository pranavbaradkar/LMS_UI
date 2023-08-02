<template>
    <v-container class="d-flex justify-center pt-7">
      <v-row class="d-flex justify-center">
          <v-col  
              v-for="(board, index) in boardsData" 
              :key="index" 
              class="mx-3 mt-1 px-0 card" 
              :class="{selectStyle : board.selected}"
              @click="boxClicked(index)">
              <v-row>
                  <v-col class="d-flex justify-center pa-0 mb-6 mt-8" color="primary">
                      <div style="height: 48px; width: 48px; background-color: black;"></div>
                  </v-col>
              </v-row>
              <v-row>
                  <v-col class="d-flex justify-center pa-0 mb-8" style="font-size: 14px; font-weight: 500;">
                      {{ board.boardName }}
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
              boardsData: [
                  {
                      img: "here goes image",
                      boardName:"State Board",
                      selected: false,
                  },
                  {
                      img: "here goes image",
                      boardName:"CISCE",
                      selected: false,
                  },
                  {
                      img: "here goes image",
                      boardName:"CBSE",
                      selected: false,
                  },
                  {
                      img: "here goes image",
                      boardName:"CAIE",
                      selected: false,
                  },
              ]
          }
      },
      methods: {
          boxClicked (i) {
              if (this.boardsData[i].selected) {
                this.boardsData[i].selected = ! this.boardsData[i].selected;
                return;
              }
              this.boardsData.map((item, index) => {
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
    .card {
      background-color: white; 
      border-radius: 8px;
      border: 1px solid white;
      max-width: 131px;
      min-width: 131px;
      height: fit-content;
      border: 1px solid rgba(0, 0, 0, 0.12);
    }
    .card:hover {
      cursor: pointer;
      box-shadow: 0px 7px 11px rgba(0, 0, 0, 0.19);
      border: 2px solid #82D2DA;
    }
    .selectStyle {
        box-shadow: 0px 7px 11px rgba(0, 0, 0, 0.19);
        border: 2px solid #82D2DA;
    }
  </style>