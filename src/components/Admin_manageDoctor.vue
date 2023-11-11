<template>
  <div
    class="view_body pa-2"
    style="
      clear: right;
      /* border: solid 1px black; */
      margin: auto;
      /* background-color: aqua; */
      width: 95%;
      height: 98%;
    "
  >
    <h1 style="float: left; color: rgb(106, 106, 106)" class="ma-4">
      Manage Doctor
      <v-btn
        elevation="0"
        style="position: absolute; right: 10%; top: 12%"
        prepend-icon="mdi-plus-circle"
        color="blue"
        class="text-lowercase"
      >
        Add new
      </v-btn>
    </h1>

    <v-card style="clear: both; border-radius: 10px" elevation="2">
      <div
        style="
          width: 100%;
          height: 50px;
          padding: 10px 0 0 20px;

          background-color: rgb(236, 236, 236);
          color: rgb(54, 91, 255);
          font-size: 20px;
        "
      >
        List of doctors
      </div>
      <!-- <hr style="width: 98%; margin: auto" /> -->
      <div class="pa-5">
        <table
          style="
            border-collapse: collapse;
            width: 100%;
            border-color: rgb(201, 201, 201);
            color: rgb(163, 163, 163);
          "
          border="1"
        >
          <tr>
            <th style="width: 5%">ID</th>
            <th style="width: 20%">Name</th>
            <th style="width: 20%">Specialist</th>
            <th style="width: 20%">Clinic</th>
            <th style="width: 10%">Status</th>
            <th style="width: 20%">Actions</th>
          </tr>
          <tr v-for="(e, i) in data" :key="i">
            <td>{{ e.id }}</td>
            <td>{{ e.name }}</td>
            <td>ay</td>
            <td>ay</td>
            <td>ay</td>
            <td style="text-align: center">
              <v-icon class="mr-4">mdi-information-slab-circle</v-icon>
              <v-icon>mdi-pencil</v-icon>
              <v-icon>mdi-trash-can</v-icon>
            </td>
          </tr>
        </table>
        <br />
        <span>
          <v-btn elevation="2"> &lt; </v-btn>

          <v-btn elevation="2"> &gt; </v-btn>
        </span>
      </div>
    </v-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { get_doctor } from "../config/api";

export default {
  name: "ManagerDoctoc",
  components: {},

  setup() {
    const data = ref();
    data.value = get_doctor();
    var ay2;
    const ay = async () => {
      ay2 = await get_doctor();
      data.value = ay2.data.doctors;
      console.log("a : ", ay2);
    };
    ay();
    return {
      // headers,
      // desserts,
      // itemsPerPage

      data,
    };
  },
};
</script>

<style scoped>
td {
  padding: 10px;
}

th {
  text-align: left;
  padding: 10px;
  font-weight: 600;
}
</style>
