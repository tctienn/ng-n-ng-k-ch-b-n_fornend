<template>
  <v-navigation-drawer :width="250">
    <v-list-item title="admin" subtitle="name admin"></v-list-item>
    <!-- <v-divider></v-divider> -->

    <!-- <div>{{ data[0].tyle }}</div>
    <v-list-item
      link
      v-for="(e, i) in data[0].data"
      :title="e.name"
      :key="i"
    ></v-list-item>

    <div>{{ data[1].tyle }}</div>
    <v-list-item
      link
      v-for="(e, i) in data[1].data"
      :title="e.name"
      :key="i"
    ></v-list-item>

    <div>{{ data[2].tyle }}</div>
    <v-list-item
      link
      v-for="(e, i) in data[2].data"
      :title="e.name"
      :key="i"
    ></v-list-item> -->

    <v-list v-model:opened="open">
      <v-list-item
        prepend-icon="mdi-home"
        value="Home"
        title="Home"
      ></v-list-item>

      <v-list-group v-for="(e, i) in data" :key="i" :value="e.tyle">
        <template v-slot:activator="{ props }" v-if="e.data.length > 0">
          <v-list-item
            v-bind="props"
            :prepend-icon="e.icon"
            :title="e.tyle"
          ></v-list-item>
        </template>

        <v-list-item
          v-for="(item, index) in e.data"
          :key="index"
          :title="item.name"
          :prepend-icon="item.icon"
          :value="item.name"
        ></v-list-item>
      </v-list-group>

      <v-list-item
        v-for="(e, i) in data"
        v-show="e.data.length < 1"
        :key="i"
        :value="e.tyle"
        :prepend-icon="e.icon"
        :title="e.tyle"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
  
  <script>
import { ref } from "vue";
// import { ref } from 'vue';

export default {
  name: "MsEnu",
  setup() {
    const data = [
      {
        tyle: "ADMIN",
        icon: "mdi-view-dashboard",
        data: [
          {
            name: "Users",
            navigation: "",
            icon: "mdi-account-group",
          },
          {
            name: "Other",
            navigation: "",
            icon: "mdi-wrench",
          },
        ],
      },
      {
        tyle: "DOCTORS",
        icon: "mdi-doctor",
        data: [
          {
            name: "Appointment schedule",
            navigation: "",
            icon: "mdi-calendar-check",
          },
          {
            name: "plan",
            navigation: "",
            icon: "mdi-floor-plan",
          },
          {
            name: "Statistical",
            navigation: "",
            icon: "mdi-chart-areaspline",
          },
        ],
      },
      {
        tyle: "COUNSELORS",
        icon: "mdi-face-agent",
        data: [],
      },
    ];

    const open = ref([]);

    return {
      data,
      open,
    };
  },
};
</script>
