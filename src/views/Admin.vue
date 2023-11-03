<template>
<!-- <div style="display: flex">
    <Component_menuVue />
    <div>s</div>
  </div> -->

<v-app>
    <Component_menuVue @ay="ham" />

    <v-main>
        <component v-bind:is="componenet_headerAdminVue" />
        <component v-bind:is="navigation"  />

    </v-main>

</v-app>
</template>

<script>
import componenet_headerAdminVue from "../components/componenet_headerAdmin.vue";
import Component_menuVue from "../components/Component_menu.vue";
import Admin_home from "../components/Admin_home.vue";
import {
    ref
} from "vue";

import Admin_manageDoctor from "../components/Admin_manageDoctor.vue";

export default {
    name: "AdmIn",
    components: {
        Component_menuVue,
        componenet_headerAdminVue,
        Admin_home,
        Admin_manageDoctor,

    },
    setup() {
        const navigation = ref('Admin_home')
        const ham = (data) => {
            console.log('chạy emit' + data)
            navigation.value = data
            console.log('data', navigation)

        }
        return {
            componenet_headerAdminVue,
            Admin_home,
            ham,
            navigation,

        };
    },
};
</script>

<style>
</style>
