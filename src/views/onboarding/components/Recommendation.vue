<template>
<v-container>
  <v-row>
    <v-col>
  <v-expansion-panels>
    <v-expansion-panel class="rounded-lg" style="border: 1px solid rgba(0, 0, 0, 0.18);">
        <v-expansion-panel-header>
            <template v-slot:default>
            <v-row>
                <v-col cols="2">

                </v-col>
                <v-col>
                    <v-row class="pb-0">
                        <v-col class="pb-2 text-h5">
                            Teacher Training Certification
                        </v-col>
                    </v-row>
                    <v-row class="pb-0">
                        <v-col style="max-width: 140px;" class="pr-0 pb-2 pt-0">
                            <div>
                                <v-icon v-for="index in 5" :key="index">mdi-star</v-icon>
                            </div>
                        </v-col>
                        <v-col class="pl-2 d-flex pb-2 pt-0" style="align-items: center;i">
                            4.0 <span style="color: rgba(0, 0, 0, 0.6);"> (445)</span>
                        </v-col>
                        <v-col>

                        </v-col>
                    </v-row>
                    <v-row style="color: rgba(0, 0, 0, 0.6);" class="mb-2">
                        <v-col cols="2" class="pt-0">
                            1 Master Courses
                        </v-col>
                        <v-col cols="2" class="pt-0">
                            6 Months
                        </v-col>
                        <v-col cols="2" class="pt-0">
                            300 Learners
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-row v-for="n in 3" :key="n">
                <v-col cols="2" style="max-width: 120px;">

                </v-col>
                <v-col>
                    <v-row class="ml-n16">
                        <v-col>
                            <div style="height: 1px; background-color: rgba(0, 0, 0, 0.18);"></div>
                        </v-col>
                    </v-row>
                    <v-row class="pb-0">
                        <v-col class="pb-2">
                            Teacher Training Certification
                        </v-col>
                    </v-row>
                    <v-row class="pb-0">
                        <v-col style="max-width: 140px;" class="pr-0 pb-2 pt-0">
                            <div>
                                <v-icon v-for="index in 5" :key="index">mdi-star</v-icon>
                            </div>
                        </v-col>
                        <v-col class="pl-2 d-flex pb-2 pt-0" style="align-items: center;i">
                            4.0 <span style="color: rgba(0, 0, 0, 0.6);"> (445)</span>
                        </v-col>
                        <v-col>

                        </v-col>
                    </v-row>
                    <v-row style="color: rgba(0, 0, 0, 0.6); font-size: 12px;" class="mb-0">
                        <v-col cols="2" class="pt-0">
                            8 hours
                        </v-col>
                        <v-col cols="2" class="pt-0">
                            3 modules
                        </v-col>
                        <v-col cols="2" class="pt-0">
                            Beignner
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</v-col>
</v-row>
</v-container>
</template>

<script>
export default {
    emits: ['goToNext'],
}
</script>

<style>
    .v-expansion-panel-content__wrap {
        padding-right: 0px;
    }
</style>