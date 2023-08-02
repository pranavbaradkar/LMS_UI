<template>
  <v-row>
    <v-col
      cols="12"
      class="banner mt-3 pa-6"
      style="color: white; max-height: 268px"
    >
      <div class="text-h6">Teacher Training Programme</div>
      <div class="subtext">By Deepali Joshi</div>
      <div class="subtext">
        <span style="text-align: center; align-content: center">
          <v-icon color="white">mdi-receipt</v-icon>
          Skill
        </span>
        <span>
          <v-icon color="white">mdi-clock-outline</v-icon>
          120 hours
        </span>
        <span>
          <v-icon color="white">mdi-group</v-icon>
          300 Learners
        </span>
      </div>
      <div class="subtext" style="max-width: 720px">
        This course will provide you with in-depth knowledge of child
        development. It will take you through all of the developmental domains.
      </div>
      <div class="subtext d-flex">
        <v-progress-linear
          style="max-width: 600px; align-self: center"
          height="12"
          class="rounded-xl"
          background-color="#D9D9D9"
        ></v-progress-linear>
        <span class="ml-2">0% progress</span>
      </div>
      <div
        class="subtext d-flex row justify-space-between"
        style="flex-wrap: nowrap"
      >
        <skill-card></skill-card>
        <skill-card></skill-card>
        <skill-card></skill-card>
        <skill-card></skill-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import SkillCard from "./SkillCard.vue";
export default {
  components: { SkillCard },
};
</script>

<style>
.banner {
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.13) 0%,
      rgba(255, 255, 255, 0.75) 100%
    ),
    linear-gradient(
      103.76deg,
      #005b64 7.17%,
      #07616a 36.75%,
      #6c367e 85.45%,
      #6c367e 94.18%
    );
  backdrop-filter: blur(25px);
}
.subtext {
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1px;
  margin-top: 9px;
}
</style>
