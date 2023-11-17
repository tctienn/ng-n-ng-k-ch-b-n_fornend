<template>
  <div v-if="doctor ? true : false">
    <headerr />
    <br />
    <v-card style="padding: 0 10%; width: 100%; display: flex">
      <div style="width: 20%">
        <img
          :src="Url + doctor.avatar"
          style="border-radius: 50%; width: 95%; aspect-ratio: 2/2"
        />
        <h4>
          {{ doctor.name }}
        </h4>
      </div>
      <div style="display: flex; align-items: center; font-size: 18px">
        chuyên gia: {{ doctor.specializationName }}
        <br />
        Send comments after going to the doctor
      </div>
    </v-card>
    <div style="padding: 0 10%; width: 100%; display: flex">
      <div style="width: 50%; font-size: 18px; margin-right: 40px">
        <h2>Specialist in internal medicine</h2>
        Main article: Internal medicine
        <br />
        <p>
          Around the world the term physician refers to a specialist in internal
          medicine or one of its many sub-specialties (especially as opposed to
          a specialist in surgery). This meaning of physician conveys a sense of
          expertise in treatment by drugs or medications, rather than by the
          procedures of surgeons.[4] This term is at least nine hundred years
          old in English: physicians and surgeons were once members of separate
          professions, and traditionally were rivals. The Shorter Oxford English
          Dictionary, third edition, gives a Middle English quotation making
          this contrast, from as early as 1400: "O Lord, whi is it so greet
          difference betwixe a cirugian and a physician."[5] Henry VIII granted
          a charter to the London Royal College of Physicians in 1518. It was
          not until 1540 that he granted the Company of Barber-Surgeons
          (ancestor of the Royal College of Surgeons) its separate charter. In
          the same year, the English monarch established the Regius
          Professorship of Physic at the University of Cambridge.[6] Newer
          universities would probably describe such an academic as a professor
          of internal medicine. Hence, in the 16th century, physic meant roughly
          what internal medicine does now. Currently, a specialist physician in
          the United States may be described as an internist. Another term,
          hospitalist, was introduced in 1996,[7] to describe US specialists in
          internal medicine who work largely or exclusively in hospitals. Such
          'hospitalists' now make up about 19% of all US general internists,[8]
          who are often called general physicians in Commonwealth countries.
          This original use, as distinct from surgeon, is common in most of the
          world including the United Kingdom and other Commonwealth countries
          (such as Australia, Bangladesh, India, New Zealand, Pakistan, South
          Africa, Sri Lanka, and Zimbabwe), as well as in places as diverse as
          Brazil, Hong Kong, Indonesia, Japan, Ireland, and Taiwan. In such
          places, the more general English terms doctor or medical practitioner
          are prevalent, describing any practitioner of medicine (whom an
          American would likely call a physician, in the broad sense).[9] In
          Commonwealth countries, specialist pediatricians and geriatricians are
          also described as specialist physicians who have sub-specialized by
          age of patient rather than by organ system. Physician and surgeon
          Around the world, the combined term "physician and surgeon" is used to
          describe either a general practitioner or any medical practitioner
          irrespective of specialty.[4][5] This usage still shows the original
          meaning of physician and preserves the old difference between a
          physician, as a practitioner of physic, and a surgeon. The term may be
          used by state medical boards in the United States, and by equivalent
          bodies in Canadian provinces, to describe any medical practitioner.
        </p>
      </div>
      <v-card style="width: 40%; position: relative; top: -60px" elevation="4">
        <div
          class="pa-4"
          style="
            background-color: rgb(37, 240, 244);
            color: white;
            font-size: 18px;
            font-weight: 4px;
          "
        >
          LÊN LỊCH KIỂM TRA
        </div>
        <div class="pa-4">
          <!-- <div style="border: solid 1px black">
            <datepicker v-model="picked" />
          </div> -->
          <VueDatePicker />
          Doctor "Doctor - Nguyễn Nhật Thành" không có cuộc hẹn trên Sunday -
          12/11/2023. Vui lòng chọn lịch thi tiếp theo.
        </div>
      </v-card>
    </div>
  </div>
</template>
    
<script >
import { ref } from "vue";
import { post_detailDoctor } from "../config/api";
import { useRoute } from "vue-router";
// import router from "../router";
import { url } from "../config/modelDemo";
import headerr from "../components/header.vue";

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
// import Datepicker from "../src/datepicker/Datepicker.vue";
// import Datepic

// import Datepicker from "vue3-datepicker";
// import Datepicker
export default {
  name: "Detail_Doctor",
  components: {
    headerr,
    VueDatePicker,
    // Datepicker,
    // Datepicker,
  },
  setup() {
    const doctor = ref();
    const Url = url + "icon/";
    // const ay = new window.location.href();
    const router = useRoute();
    // console.log(router.params.id);
    post_detailDoctor(router.params.id).then((data) => {
      doctor.value = data.data.doctor;
      console.log(doctor.value);
    });
    const selectedDate = null;
    const picked = new Date();

    return {
      doctor,
      Url,
      selectedDate,
      picked,
    };
  },
};
</script>
    
<style>
</style>