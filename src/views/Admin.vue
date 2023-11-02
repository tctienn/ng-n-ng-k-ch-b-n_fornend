<template>
  <!-- <div style="display: flex">
    <Component_menuVue />
    <div>s</div>
  </div> -->

  <v-app>
    <Component_menuVue />
    <v-main>
      <componenet_headerAdminVue />
      <div
        class="view_body pa-2"
        style="
          clear: right;
          border: solid 1px black;
          margin: auto;

          width: 95%;
          height: 98%;
        "
      >
        <h1 style="float: left">Overview</h1>
        <div
          style="
            width: 40%;
            border: solid 1px black;
            float: right;
            display: flex;
            justify-content: baseline;
            justify-content: space-between;
          "
        >
          <select style="width: 200px; border: solid 1px black" class="pl-2">
            <option>s</option>
            <option>s</option>
            <option>s</option>
          </select>
          <v-btn size="small">filter</v-btn>
        </div>

        <div
          class="pa-10"
          style="
            clear: both;
            height: 60%;
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            align-content: space-around;
          "
        >
          <v-card
            elevation="2"
            width="28%"
            height="max-content"
            style="font-size: 12px"
            class="pa-4 pt-4 pb-8"
          >
            <div class="d-flex justify-space-between">
              <div>
                TOTAL NUMBER OF PATIENTS
                <br />
                ay
              </div>
              <v-icon size="40">mdi-calendar-month</v-icon>
            </div>
          </v-card>
          <v-card
            elevation="2"
            width="28%"
            height="max-content"
            style="font-size: 12px"
            class="pa-4 pt-4 pb-8"
          >
            <div class="d-flex justify-space-between">
              <div>
                TOTAL NUMBER OF PATIENTS
                <br />
                ay
              </div>
              <v-icon size="40">mdi-calendar-month</v-icon>
            </div>
          </v-card>
          <v-card
            elevation="2"
            width="28%"
            height="max-content"
            style="font-size: 12px"
            class="pa-4 pt-4 pb-8"
          >
            <div class="d-flex justify-space-between">
              <div>
                TOTAL NUMBER OF PATIENTS
                <br />
                ay
              </div>
              <v-icon size="40">mdi-calendar-month</v-icon>
            </div>
          </v-card>

          <v-card
            elevation="2"
            width="35%"
            height="120px"
            style="font-size: 12px"
            class="pa-4 pt-4 pb-8"
          >
            <div class="d-flex justify-space-between">
              <div>
                TOTAL NUMBER OF PATIENTS
                <br />
                ay
              </div>
              <v-icon size="40">mdi-calendar-month</v-icon>
            </div>
          </v-card>
        </div>
      </div>
    </v-main>
  </v-app>
</template>
    
<script>
import componenet_headerAdminVue from "../components/componenet_headerAdmin.vue";
import Component_menuVue from "../components/Component_menu.vue";
export default {
  name: "AdmIn",
  components: {
    Component_menuVue,
    componenet_headerAdminVue,
  },
  setup() {
    return {};
  },
};
</script>
    
<style>
</style>