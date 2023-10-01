<template>
  <q-page class="column q-mr-xs q-pb-xs">
    <div class="col relative-position bg-container">
      <q-img
        src="/coming-soon.png"
        :ratio="4 / 3"
        fit="contain"
        width="25%"
        class="absolute-center"
      />
    </div>
    <div
      align="center"
      class="row q-gutter-sm col text-white text-weight-bold q-pt-sm"
    >
      <div class="col relative-position bg-container">
        <div class="absolute-full fit">
          <q-img
            src="/coming-soon.png"
            :ratio="4 / 3"
            fit="contain"
            width="55%"
            class="absolute-center"
          />
        </div>
      </div>
      <div class="col-5 relative-position bg-container">
        <div class="absolute-full fit">
          <q-img
            src="/coming-soon.png"
            :ratio="4 / 3"
            fit="contain"
            width="55%"
            class="absolute-center"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Index",
});
</script>

<style>
.bg-container {
  background-color: #222542;
}
</style>
-4
