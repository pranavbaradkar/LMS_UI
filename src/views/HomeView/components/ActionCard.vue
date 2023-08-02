<template>
    <v-card class="action pb-3">
      <v-list-item>
          <v-list-item-avatar
          tile
          size="40"
          color="grey"
          style="top: -22px"
        ></v-list-item-avatar>
          <v-list-item-content style="max-width: 195px;">
              <div class="a-heading" style="width: 150px;">
                Child development  > Growth & Development
              </div>
              <div class="a-subHeading mt-2">
                Principles of Growth and Development
              </div>
              <div class="a-subHeading mt-2" style="font-weight: 500;">
                Pre Baseline Test
              </div>
          </v-list-item-content>
      </v-list-item>
      <v-card-actions class="d-flex justify-center pb-3">
      <v-btn
        outlined
        rounded
        text
        color="#005B64"
        style="background-color: #82D2DA; width: 126px;"
      >
        Start Test
      </v-btn>
    </v-card-actions>
    <v-divider></v-divider>
    </v-card>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style> 
     .a-heading {
      font-size: 10px;
      font-weight: 500;
      line-height: 11px;
     }
     .a-subHeading {
      font-size: 14px;
      font-weight: 400;
      line-height: 15px;
      color: rgba(0, 0, 0, 0.87);
     }
     .action.v-sheet.v-card {
      border-radius: 0px;
     }
     .v-sheet.v-card:not(.v-sheet--outlined) {
    box-shadow: none;}
  </style>