<template>
  <VueDatePicker />
</template>
    
<script >
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  name: "DemoDate",
  components: { VueDatePicker },
};
</script>
    
<style>
</style>

<!-- <template>
  <appdate-picker
    :full-month-name="true"
    input-class="customClass"
    placeholder="YYYY-MM-DD"
    :typeable="true"
    :hideInput="false"
  >
  </appdate-picker>
</template>
  
  <script >
  import { ref } from 'vue';
  export default {
    name:'DemoDate',
    setup(){
       
      const dateSelected = ref(new Date())
      /**
         * Handler for select-day function
         */
        // function handleValue(payload: Date): void {
        //   console.log('handleValue', payload);
        // }
      return {
        dateSelected,
        handleValue
      }
    }
  }
  <script> -->