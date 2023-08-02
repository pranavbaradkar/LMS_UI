<template>
  <v-card outlined width="100%" class="pb-4 mr-4">
    <v-img height="144" src="@/assets/child-development.png"></v-img>
    <v-card-text style="color: rgba(0, 0, 0, 0.87)" class="pb-2">
      Sub Unit 01
    </v-card-text>
    <div
      class="pb-0 pl-4"
      style="
        display: inline-block;
        width: 80%;
        font-size: 14px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.87);
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;"
    >
      Understanding the concept of growth & development in adolescence
    </div>
    <v-overlay
        v-if="false"
        absolute
        opacity="0.8"
        style="backdrop-filter: blur(2px);"
        >
        <v-img src="@/assets/fi_lock.svg" alt="lock icon"></v-img>
    </v-overlay>
  </v-card>
</template>

<script>
export default {};
</script>

<style></style>
