<template>
  <v-container class="justify-space-between my-24">
    <v-row class="d-flex justify-center">
        <v-col
            v-for="(level, index) in levelsData" 
            :key="index" 
            class="mx-3 my-1 px-0 pb-6 card" 
            :class="{selectStyle : level.selected}"
            @click="boxClicked(index)">
            <v-row>
                <v-col class="d-flex justify-center pa-0 mb-6 mt-6" color="primary">
                    <div style="height: 48px; width: 48px; background-color: black;"></div>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="d-flex justify-center pa-0 mb-2" style="font-size: 14px; font-weight: 400;">
                    {{ level.levelName }}
                </v-col>
            </v-row>
            <v-row>
                <v-col class="d-flex justify-center pt-0" style="color: rgba(0, 0, 0, 0.6); font-size: 12px;">
                    {{ level.subtext}}
                </v-col>
            </v-row>
        </v-col>
    </v-row>
    <bottom-bar v-if="isAnyLevelSelected" @onClickContinue="onClick"></bottom-bar>
  </v-container>
</template>

<script>
import BottomBar from './BottomBar.vue';
export default {
    components: { BottomBar },
    emits: ['goToNext'],
    data () {
        return {
            levelsData: [
                {
                    img: "here goes image",
                    levelName:"Creche",
                    subtext: "(0-3) yrs",
                    selected: false,
                },
                {
                    img: "here goes image",
                    levelName:"ECCE",
                    subtext: "(3-6) yrs",
                    selected: false,
                },
                {
                    img: "here goes image",
                    levelName:"Lower Primary",
                    subtext: "(6-8) yrs",
                    selected: false,
                },
                {
                    img: "here goes image",
                    levelName:"Upper Primary",
                    subtext: "(6-8) yrs",
                    selected: false,
                },
                {
                    img: "here goes image",
                    levelName:"Middle",
                    subtext: "(11-14) yrs",
                    selected: false,
                },
                {
                    img: "here goes image",
                    levelName:"Secondary",
                    subtext: "(14-18) yrs",
                    selected: false,
                },

            ]
        }
    },
    methods: {
        boxClicked (index) {
            this.levelsData[index].selected = !this.levelsData[index].selected;
        },
        onClick () {
            this.$emit('goToNext');
        }
    },
    computed: {
        isAnyLevelSelected () {
            const filterData = this.levelsData.filter((item) => item.selected);
            return filterData.length === 0 ? false : true;
        }
    }
}
</script>

<style>
  .card {
    background-color: white; 
    border-radius: 8px;
    border: 1px solid white;
    max-width: 130px;
    min-width: 130px;
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