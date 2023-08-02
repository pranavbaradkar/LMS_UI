<template>
  <v-expansion-panels class="mt-5">
    <v-expansion-panel v-for="(i) in 5" :key="i" class="rounded-lg">
      <v-expansion-panel-header
        class="courseList rounded-lg"
        style="background: #fbf5f2; border: 1px solid rgba(0, 0, 0, 0.12)"
      >
        <div style="flex-direction: column; max-width: 90%;" class="d-flex">
          <div>MODULE 01</div>
          <div
            class="mt-1"
            style="
              display: inline-block;
              width: 100%;
              font-size: 16px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            "
          >
            Growth and Development of the child
          </div>
        </div>
      </v-expansion-panel-header>
      <v-expansion-panel-content style="border:  1px solid rgba(0, 0, 0, 0.12);" class="pb-1"> 
        <v-list>
            <v-list-item>
                <div style="font-size: 14px; display: flex; flex-direction: row; line-height: 16px; flex-wrap: wrap; max-width: 100%;">
            <span
            style="
              /* display: inline-block; */
              width: 100%;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            ">Unit 01 : Lorem ipsum dolor sit amet. </span>
            (0-3) yrs
        </div>
            </v-list-item>
            <v-divider></v-divider>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {};
</script>

<style>
.courseList > .v-expansion-panel-header__icon {
  margin-top: -24px;
}
</style>
