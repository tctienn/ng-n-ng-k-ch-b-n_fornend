<template>
  <div class="home">
    <Header />

    <div class="poster" style="">
      <!-- <img
        src="@/assets/image/bookingcare-cover-4.jpg"
        style="width: 100%; height: 100%"
      /> -->
      <div class="poster_item1">
        <h2 style="color: white">
          NỀN TẢNG Y TẾ
          <br />
          <b>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</b>
        </h2>
        <div
          style="
            width: 300px;
            /* height: 50px; */
            background-color: yellow;
            display: flex;
            align-items: center;
            border-radius: 20px;
            padding: 4px 10px;
          "
        >
          <v-icon>mdi-magnify</v-icon>
          <input type="text" style="background-color: rgb(255, 255, 0)" />
        </div>
        <p
          style="
            width: 100%;
            /* border: solid black 1px; */
            display: flex;
            justify-content: space-around;
            padding: 5% 35%;
          "
        >
          <button style="width: 90px; aspect-ratio: 2/2">
            <img
              src="@/assets/image/google-play-badge.svg"
              style="width: 100%; height: 100%"
            />
          </button>
          <button style="width: 90px; aspect-ratio: 2/2">
            <img
              src="@/assets/image/app-store-badge-black.svg"
              style="width: 100%; height: 100%"
            />
          </button>
        </p>
      </div>
      <div class="poster_item2">
        <a
          v-for="(e, i) in itenPoster"
          :href="e.navigation"
          v-bind:key="i"
          style="
            width: 120px;
            /* border: solid black 1px; */
            height: 120px;
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            color: black;
          "
        >
          <div
            style="
              width: 40px;
              aspect-ratio: 2/2;
              border-radius: 50%;
              background-size: 100% 100%;
              /* border: solid black 1px; */
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: white;
              box-shadow: 0px 1px 0px 0px rgb(149, 149, 149);
            "
          >
            <div
              style="width: 50%; aspect-ratio: 2/2; background-size: 100% 100%"
              :style="{ 'background-image': 'url(' + e.img + ')' }"
            ></div>
          </div>
          <b>{{ e.name }}</b>
        </a>
      </div>
    </div>

    <div class="carousels_1">
      <v-sheet class="mx-auto" elevation="0" max-width="80%">
        <v-slide-group v-model="model" class="pa-4" show-arrows>
          <v-slide-group-item
            v-for="(e, i) in carouselsData1"
            :key="i"
            v-slot="{ toggle }"
          >
            <v-card
              color="white"
              :class="['ma-4']"
              height="400"
              width="300"
              elevation="0"
              @click="toggle"
            >
              <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                  <div class="carousel_item">
                    <div
                      style="
                        position: absolute;
                        background-color: rgb(229, 229, 12);
                        padding: 2px 4px;
                        left: 8px;
                        top: 8px;
                        border-radius: 4px;
                        font-size: 12px;
                      "
                    >
                      {{ e.loai }}
                    </div>
                    <img
                      v-bind:src="e.img"
                      style="width: 100%; aspect-ratio: 5/3"
                    />
                    <div>
                      <b>{{ e.name }}</b>
                      <ul
                        style="
                          list-style-position: inside;
                          /* border: solid black 1px; */
                          width: 90%;
                          margin-left: 5%;
                        "
                      >
                        <li v-for="(ee, ii) in e.option" :key="ii">{{ ee }}</li>
                      </ul>
                      <div style="margin-top: 5px; color: #45c3d2">
                        {{ e.nameNavigation }} >
                      </div>
                    </div>
                  </div>
                </v-scale-transition>
              </div>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </div>

    <div class="carousels_2">
      <Component_carousel :data="carouselsData2" :bgc="'#f5f5f5'" />
    </div>
    <div class="carousels_2">
      <Component_carousel :data="carouselsData3" :bgc="'white'" />
    </div>
    <div class="carousels_2">
      <Component_carousel :data="carouselsData2" :bgc="'#f5f5f5'" />
    </div>
  </div>
</template>
    
<script >
import { ref } from "vue";
import Header from "../components/header.vue";
import Component_carousel from "../components/Component_carousel.vue";
// import { URL } from "../config/url";
import {
  dataCarousel_1,
  dataPoster,
  dataCarousel_2,
  dataCarousel_3,
} from "../config/modelDemo";
// import ay from "@/assets/image/161905-iconkham-chuyen-khoa.png";

export default {
  name: "HomeS",
  components: {
    Header,
    Component_carousel,
  },
  setup() {
    const model = ref();
    // const url = "http://192.168.0.102:5173/src/assets/image/icon/";

    const itenPoster = dataPoster;
    const carouselsData1 = dataCarousel_1;
    const carouselsData2 = dataCarousel_2;
    const carouselsData3 = dataCarousel_3;

    return {
      // Header

      itenPoster,
      carouselsData1,
      carouselsData2,
      carouselsData3,
      model,
    };
  },
};
</script>
    
<style scoped>
.poster {
  width: 100%;
  aspect-ratio: 86/40;
  border: solid rgb(255, 255, 255) 1px;
  /* background-image: url('../assets/image/bookingcare-cover-4.jpg'); */
  /* background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 1) 240px,
      rgba(255, 255, 255, 1) 290px
    ),
    url(@/assets/image/bookingcare-cover-4.jpg) no-repeat; */

  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.226) 0%,
      rgba(0, 0, 0, 0) 50%,
      rgba(255, 255, 255, 1) 90%
    ),
    url(@/assets/image/bookingcare-cover-4.jpg) no-repeat;

  background-size: 100% 100%;
}

.poster_item1 {
  margin: auto;
  margin-top: 8%;
  width: 50%;
  /* border: solid black 1px; */

  display: flex;
  /* justify-items: center; */
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  height: 45%;
}
.poster_item2 {
  /* border: solid red 1px; */
  width: 88%;
  height: max-content;

  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.poster_item2_item {
  width: 5%;
  aspect-ratio: 2/2;
  border-radius: 20%;
  /* background-image: url(); */
  /* background-color: aqua; */
  background-size: 100% 100%;
}

.carousels_1 {
}
.carousel_item {
  width: 100%;
  height: 100%;
}
</style>