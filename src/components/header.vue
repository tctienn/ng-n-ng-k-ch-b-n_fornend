<script  >
import { ref } from "vue";
export default {
  name: "HeaDer",

  setup() {
    const dialog = ref(false);
    const list = [
      { name: "Trang chủ", value: "" },
      { name: "Cẩm nang", value: "" },
      { name: "Liên hệ hợp tác", value: "" },
      { name: "Sức khỏe doanh nghiệp", value: "" },
      { name: "gói chuyển đổi số doanh nghiệp", value: "" },
      { name: "tuyển dụng", value: "" },
      { name: "Trang chủ", value: "" },
      { name: "Trang chủ", value: "" },
      { name: "tuyển dụng", value: "" },
      { name: "Trang chủ", value: "" },
      { name: "Trang chủ", value: "" },
      { name: "tuyển dụng", value: "" },
      { name: "Trang chủ", value: "" },
      { name: "Trang chủ", value: "" },
      { name: "tuyển dụng", value: "" },
      { name: "Trang chủ", value: "" },
      { name: "Trang chủ", value: "" },
    ];

    return { dialog, list };
  },
};
</script>
<template>
  <div class="head_main">
    <div class="head_main_item1">
      <div class="text-center" style="height: 100%; width: 100%">
        <div
          style="
            display: flex;
            align-items: center;
            /* border: solid rgb(185, 183, 183) 1px; */
            width: 60%;
            height: 80%;
            justify-content: space-between;
          "
        >
          <v-icon size="large" color="rgb(185, 183, 183)">mdi-menu </v-icon>
          <img src="@/assets/image/bookingcare-2020.svg" style="width: 90%" />
        </div>
        <v-dialog
          fullscreen
          :scrim="true"
          transition="dialog-top-transition"
          id="ay"
          class="ma-0 pa-0"
          style="display: flex; justify-content: left; align-items: start"
          v-model="dialog"
          activator="parent"
        >
          <div class="hide_menu">
            <div class="hide_menu_item" v-for="(item, i) in list" :key="i">
              {{ item.name }}
            </div>
          </div>
        </v-dialog>
      </div>
    </div>
    <div class="head_main_item2">
      <div class="head_main_item2_1">
        <b>Chuyên khoa</b><br />
        <small>Tìm bác sĩ theo chuyên khoa</small>
      </div>
      <div class="head_main_item2_1">
        <b>Cơ sở y tế</b><br />
        <small>Chọn bệnh viện phòng khám</small>
      </div>
      <div class="head_main_item2_1">
        <b>bác sĩ</b><br />
        <small>Chọn bác sĩ giỏi</small>
      </div>
      <div class="head_main_item2_1">
        <b>Gói khám</b><br />
        <small>Khám sức khỏe tổng quát </small>
      </div>
    </div>
    <div
      class="head_main_item1"
      style="display: flex; justify-content: space-around"
    >
      <div
        style="
          height: 100%;
          /* border: solid black 1px; */
          display: flex;
          align-items: center;
          text-align: center;
        "
      >
        <v-icon color="#45c3d2">mdi-tray-arrow-down</v-icon>
        <b style="color: #45c3d2">Tải app</b>
      </div>
      <div
        style="
          display: flex;
          flex-direction: column;
          place-items: flex-end right;
        "
      >
        <p>
          <v-icon size="" color="#45c3d2">mdi-help-circle</v-icon>
          <b style="color: #9c9c9c">Hỗ trợ</b>
        </p>
        <a href="#" style="color: #45c3d2"> 024-7301-2468 </a>
      </div>
    </div>
  </div>
</template>
    

    
<style scoped>
.head_main_item1 {
  width: 22%;
  height: 80%;

  /* border: solid black 1px; */
}
.head_main_item2 {
  width: 50%;
  height: 80%;
  display: flex;
  /* border: solid black 1px; */
  justify-content: space-between;
}
.head_main_item2_1 {
  /* border: solid black 1px; */
  width: 25%;
  padding: 2px 10px;

  font-size: 12px;
}
.head_main {
  width: 100%;
  height: 14vh;
  /* background-color: aqua; */
  /* border: solid black 1px; */
  padding: 10px 4%;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hide_menu {
  /* width: 400px; */

  height: 100%;
  background-color: rgb(255, 255, 255);
  overflow: scroll;
}
.hide_menu_item {
  height: max-content;
  border: solid rgb(210, 210, 210) 1px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
}
</style>

<style >
#ay > .v-overlay__content {
  margin: 0;
  /* padding: 0; */
  /* display: none; */
  width: 40vh;
  border: solid black 1px;
}
</style>