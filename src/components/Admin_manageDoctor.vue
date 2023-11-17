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

      <div class="text-center">
        <v-btn
          elevation="0"
          style="position: absolute; right: 10%; top: 12%"
          prepend-icon="mdi-plus-circle"
          color="blue"
          class="text-lowercase"
        >
          Add new

          <v-dialog v-model="dialog" activator="parent" width="100%">
            <v-card>
              <v-card-text>
                <h2>Add new Doctor</h2>
                <div
                  style="
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    align-content: space-around;
                    height: 100vh;
                  "
                >
                  <div style="width: 40%">
                    <label>Full name</label><br />
                    <input placeholder="Full" />
                  </div>
                  <div style="width: 40%">
                    <label>Phone number</label><br />
                    <input placeholder="Full" />
                  </div>
                  <div style="width: 40%">
                    <label>Email</label><br />
                    <input placeholder="Full" />
                  </div>
                  <div style="width: 40%">
                    <label>Password</label><br />
                    <input placeholder="Full" />
                  </div>
                  <div style="width: 40%">
                    <label>Belong to a clinic</label><br />
                    <input placeholder="Full" />
                  </div>
                  <div style="width: 40%">
                    <label>Specialist</label><br />
                    <input placeholder="Full" />
                  </div>
                  <div style="width: 90%">
                    <label>Address</label><br />
                    <input placeholder="Full" />
                  </div>
                  <div style="width: 90%">
                    <label>Description</label><br />
                    <textarea> </textarea>
                  </div>
                </div>
              </v-card-text>

              <div style="display: flex; justify-content: center">
                <v-card-actions>
                  <v-btn color="primary" block @click="dialog = false"
                    >tạo</v-btn
                  >
                </v-card-actions>

                <v-card-actions>
                  <v-btn color="primary" block @click="dialog = false"
                    >thoát</v-btn
                  >
                </v-card-actions>
              </div>
            </v-card>
          </v-dialog>
        </v-btn>
      </div>
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

    const dialog = ref(false);
    return {
      // headers,
      // desserts,
      // itemsPerPage

      data,
      dialog,
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

input {
  border: solid 1px rgb(121, 121, 121);
  border-radius: 4px;
  width: 100%;
  font-size: 14px;
  padding: 5px;
}
textarea {
  border: solid 1px rgb(121, 121, 121);
  border-radius: 4px;
  width: 100%;
  font-size: 14px;
  padding: 5px;
}
</style>
