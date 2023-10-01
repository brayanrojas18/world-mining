<template>
  <router-view />
  <eth-events />
</template>

<script>
import { defineComponent } from "vue";
import EthEvents from "components/EthEvents.vue";

export default defineComponent({
  name: "App",
  components: {
    EthEvents,
  },
});
</script>
