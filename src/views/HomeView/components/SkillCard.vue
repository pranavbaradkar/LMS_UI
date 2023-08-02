<template>
  <v-card max-width="25%" class="card-style mr-4" outlined>
    <v-list-item>
        <v-list-item-avatar
        tile
        size="40"
        color="grey"
        style="top: -24px"
      ></v-list-item-avatar>
        <v-list-item-content>
            <div class="heading">
                Pedagogy
            </div>
            <div class="subHeading mt-1">
                By Deepali Joshi
            </div>
            <div class="extraInfo mt-3">
                <span>
                    <v-icon x-small color="#FFCD3C">mdi-star</v-icon>
                </span>
                <span>
                    4.0
                </span>
                <span>
                    (445)
                </span>
            </div>
            <div class="extraInfo mt-4">
                <span style="text-align: center; align-content: center;">
                        <v-icon x-small color="rgba(0, 0, 0, 0.6)">mdi-receipt</v-icon>
                        7
                </span>
                <span>
                        <v-icon x-small color="rgba(0, 0, 0, 0.6)">mdi-clock-outline</v-icon>
                        120 Hrs
                </span>
            </div>
        </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {

}
</script>

<style> 
   .card-style {
    border: 2px solid #82D2DA !important;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.18) !important;
    bottom: -16px;
   }
   .heading {
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
   }
   .subHeading {
    font-size: 12px;
    font-weight: 500;
    line-height: 13px;
    color: rgba(0, 0, 0, 0.54);
   }
   .extraInfo {
    font-size: 10px;
    font-weight: 400;
    line-height: 11px;
    align-items: center;
    color: rgba(0, 0, 0, 0.54);
   }
   .v-sheet.v-card {
    border-radius: 8px;
   }
</style>