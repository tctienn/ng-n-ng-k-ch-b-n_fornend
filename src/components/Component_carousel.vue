<template>
  <div class="carousel" :style="'backGround-Color: ' + bgc">
    <div style="width: 85%; margin: auto">
      <p style="position: relative">
        <b style="font-size: 22px">{{ data.title }} </b>
        <button
          style="
            position: absolute;
            top: 0;
            right: 0;
            background-color: rgb(199, 199, 199);
            color: gray;
            padding: 2px 5px;
            font-size: 14px;
          "
        >
          xem thêm
        </button>
      </p>
    </div>
    <v-sheet class="mx-auto" elevation="0" max-width="95%" :color="bgc">
      <v-slide-group v-model="model" class="pa-4" show-arrows>
        <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ toggle }">
          <v-card
            :color="bgc"
            :class="['ma-4']"
            height="185"
            width="278"
            @click="toggle"
            elevation="0"
          >
            <div class="d-flex fill-height align-center justify-center">
              <v-scale-transition>
                <div>
                  <div
                    class="item_carousel"
                    v-for="(e, i) in data.data"
                    :key="i"
                  >
                    <v-icon style="position: absolute; top: 4px; left: 4px">{{
                      e.iconName
                    }}</v-icon>
                    <img style="width: 100%; height: 85%" :src="e.img" />
                    <small>{{ e.name }}</small>
                  </div>
                </div>
              </v-scale-transition>
            </div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>
    
<script >
import { ref } from "vue";
export default {
  name: "ComponentCarousel",
  props: ["data", "bgc"],
  setup(props) {
    const model = ref();
    const data = props.data;
    const bgc = props.bgc;

    return {
      model,
      data,
      bgc,
    };
  },
};
</script>
    
<style scoped>
.carousel {
  width: 100%;
  height: max-content;
  /* border: solid black 1px; */
  padding-top: 20px;
}
.item_carousel {
  width: 100%;
  height: 100%;
}
</style>