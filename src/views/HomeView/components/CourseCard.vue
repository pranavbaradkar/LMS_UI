<template>
  <v-card outlined width="100%" class="pb-4 mr-4">
    <v-img
      height="144"
      src="@/assets/child-development.png"
    ></v-img>
    <v-card-title class="pb-0">
        Child Development
    </v-card-title>
    <v-card-text style="color: rgba(0, 0, 0, 0.87);" class="pb-2">
        By Deepali Joshi
    </v-card-text>
    <div style="width: 90%;">
        <v-progress-linear height="12" class="mx-4 rounded-xl"></v-progress-linear>
    </div>
    <v-card-text class="py-0 progress mt-1">
        progress
    </v-card-text>
  </v-card>
</template>

<script>
export default {
}
</script>

<style>
    .progress {
        font-weight: 500;
font-size: 10px;
line-height: 11px;
color: rgba(0, 0, 0, 0.54);

    }
</style>