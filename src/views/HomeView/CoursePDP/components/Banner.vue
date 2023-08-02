<template>
  <v-row>
    <v-col cols="12" class="pa-0 mt-6">
      <v-card width="100%" max-width="100%" class="pa-4 course-banner pb-3">
        <v-row>
          <v-col cols="9" class="pa-0">
            <v-card-title
              class="mb-1"
              style="line-height: 26px; font-weight: 400"
            >
              Child Development
            </v-card-title>
            <v-card-subtitle style="font-weight: 500; line-height: 15px">
              By Deepali Joshi
            </v-card-subtitle>
            <v-card-subtitle
              class="mr-2 d-flex row align-center pl-6"
              style="line-height: 15px"
            >
              <v-rating
                background-color="rgba(0, 0, 0, 0.26)"
                half-increments
                readonly
                size="16"
                value="3.5"
                color="yellow"
                dense
                class="mr-2"
              ></v-rating>
              3.0 (224)
            </v-card-subtitle>
            <v-card-subtitle style="width: 400px; line-height: 15px">
              Test your knowledge, understanding and softskills to grow in your
              professional career
            </v-card-subtitle>
            <v-card-subtitle class="pt-0" style="line-height: 15px">
              <span
                style="text-align: center; align-content: center"
                class="mr-8"
              >
                <v-icon small class="mr-1">mdi-receipt</v-icon>
                Skill
              </span>
              <span class="mr-8">
                <v-icon small class="mr-1">mdi-clock-outline</v-icon>
                120 hours
              </span>
              <span class="mr-8">
                <v-icon small class="mr-1">mdi-clock-outline</v-icon>
                5 tests
              </span>
              <span class="mr-8">
                <v-icon small class="mr-1">mdi-group</v-icon>
                300 Learners
              </span>
            </v-card-subtitle>
            <v-card-actions class="pt-0 mt-2">
              <v-btn
                class="rounded-xl ml-2"
                style="
                  height: 48px;
                  width: 184px;
                  background-color: #6c367e !important;
                  color: white;
                "
              >
                START learning
              </v-btn>
            </v-card-actions>
          </v-col>
          <v-col cols="3" class="pa-0">
            <v-img height="289" width="177" src="@/assets/model.png" style="align-self: center;"></v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style>
.v-card.course-banner {
  background: linear-gradient(
      96.3deg,
      rgba(255, 255, 255, 0.6) 0%,
      rgba(255, 255, 255, 0.1) 100%
    ),
    linear-gradient(
      263.7deg,
      rgba(108, 54, 126, 0.1566) 17.4%,
      rgba(130, 210, 218, 0.1566) 94.08%
    );
  border-radius: 0px;
}
</style>
