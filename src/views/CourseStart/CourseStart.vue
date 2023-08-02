<template>
  <v-app>
    <v-card
      class="fill-height px-4 py-4"
      style="background-color: #faf8ee; border-radius: 0px"
    >
      <v-navigation-drawer
        app
        color="white"
        permanent
        style="border-radius: 0px; overflow-y: hidden"
        height="95%"
        width="280"
        class="courseNavigation px-4 ma-4 d-flex"
      >
        <course-progress-card></course-progress-card>
        <v-divider></v-divider>
        <course-list></course-list>
      </v-navigation-drawer>
      <v-content v-if="false" class="fill-height mb-4 ml-9 mt-3">
        <v-row class="fill-height" style="background-color: white">
          <v-col class="py-0">
            <v-row
              class="mt-0"
              style="box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18)"
            >
              <v-col class="d-flex">
                <div class="d-flex justify-center">
                  <v-icon color="#005B64">mdi-close</v-icon>
                </div>
                <div class="ml-8">
                  <div style="font-size: 12px">Module 1</div>
                  <div>Understaing Growth and Development</div>
                </div>
              </v-col>
            </v-row>
            <v-row class="mt-6">
              <v-col class="pl-6">
                <v-row class="d-flex" style="display: flex">
                  <v-col
                    style="width: max-content; max-width: 400px"
                    class="pa-2"
                    v-for="i in 3"
                    :key="i"
                    cols="4"
                  >
                    <sub-unit-card> </sub-unit-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-content>
      <v-content class="fill-height mb-4 ml-9 mt-3">
        <v-row class="fill-height" style="background-color: white">
          <v-col class="py-0">
            <v-row
              class="mt-0"
              style="box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18)"
            >
              <v-col class="d-flex">
                <div class="d-flex justify-center">
                  <v-icon color="#005B64">mdi-close</v-icon>
                </div>
                <div class="ml-8">
                  <div style="font-size: 12px">SUB-UNIT 01</div>
                  <div>Process of Growth and Development from Infancy to Toddlerhood</div>
                </div>
              </v-col>
            </v-row>
            <v-row style="margin-top: 13px;" class="fill-height">
              <v-col class="pl-3">
                <v-row class="d-flex">
                  <v-col class="pa-0">
                    <v-stepper
                      v-model="e1"
                      style="background-color: #FBF5F2; height: 48px; border-radius: 0px; box-shadow: none; border: solid 1px rgba(0, 0, 0, 0.12);"
                    >
                      <v-stepper-header style="height: 48px">
                        <template v-for="n in steps">
                          <v-stepper-step
                            :key="`${n}-step`"
                            editable
                            :complete="e1 > n"
                            :step="n"
                            class="pa-2"
                          >
                            Step {{ n }}
                          </v-stepper-step>
                          <v-divider
                            style="margin-left: 0px; margin-right: 0px"
                            v-if="n !== steps"
                            :key="n"
                          ></v-divider>
                        </template>
                      </v-stepper-header>
                    </v-stepper>
                    <div style="max-height: max-content; display: flex; min-height: 620px;">
                        <v-col class="pa-8 pr-6" cols="4" style="max-height: max-content;">
                            <div style="height: 180px; width: auto;background-color: blanchedalmond;"></div>
                            <div class="my-2" style="font-size: 16px; line-height: 18px ;font-weight: 500;color: rgba(0, 0, 0, 0.6)">
                                Process of Growth and Development from Infacy to Toddlerhood
                            </div>
                            <div style="font-size: 12px; line-height: 20px ;font-weight: 500;color: rgba(0, 0, 0, 0.6)">
                                6 videos  •  5 Learning Objectives  •  Last updated on Thu 18 Aug 2022
                            </div>
                        </v-col>
                        <v-col>
                            <v-divider vertical style="height: 100%; margin-top: -12px !important;"></v-divider>
                        </v-col>
                        <v-col cols="12" class="mt-4">
                            <v-row v-for="(n) in 5" :key="n">
                                <v-col cols="1 d-flex align-center">
                                    <div style="height: 56px; width: 100px; background-color: bisque;">

                                    </div>
                                </v-col>
                                <v-col cols="10" class="pa-0">
                                    <div style="font-size: 16px; line-height: 18px;" class="mt-4">01 - Introduction</div>
                                    <v-checkbox style="font-size: 14px; color: rgba(0, 0, 0, 0.38);" class="mt-2 ply-checkbox" label="To be Watched"></v-checkbox>
                                    <v-divider></v-divider>
                                </v-col>
                            </v-row>
                        </v-col>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-content>
    </v-card>
  </v-app>
</template>

<script>
import CourseProgressCard from "./components/CourseProgressCard.vue";
import CourseList from "./components/CourseList.vue";
import SubUnitCard from "./components/SubUnitCard.vue";
export default {
  components: { CourseProgressCard, CourseList, SubUnitCard },
  data() {
    return {
      e1: 3,
      steps: 4,
    };
  },
  watch: {
      steps (val) {
        if (this.e1 > val) {
          this.e1 = val
        }
      },
    },
};
</script>

<style>
.courseNavigation.theme--light.v-navigation-drawer:not(
    .v-navigation-drawer--floating
  )
  .v-navigation-drawer__border {
  background-color: white;
}
.courseNavigation.v-navigation-drawer__content {
  display: flex;
}
.ply-checkbox.v-input--selection-controls .v-input__slot>.v-label, .v-input--selection-controls .v-radio>.v-label {
    font-size: 14px;
}
</style>
