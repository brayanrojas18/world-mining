<template>
  <q-page class="column q-mr-xs q-pb-xs">
    <div class="col relative-position bg-container">
      <q-img
        src="/coming-soon.png"
        :ratio="4 / 3"
        fit="contain"
        width="50%"
        class="absolute-center"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Pvp",
});
</script>

<style>
.bg-container {
  background-color: #222542;
}
</style>
