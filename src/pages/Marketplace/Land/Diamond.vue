<template>
  <q-page class="column q-pr-xs q-pb-xs">
    <div
      align="center"
      class="row q-gutter-sm col text-white text-weight-bold q-pt-sm"
    >
      <div class="col relative-position bg-container">
        <div class="bg-land-diamond absolute-full fit">
          <div
            class="text-white text-subtitle1 q-py-xs"
            style="background: #222542"
          >
            Land 0
          </div>
          <q-img
            src="/lands/mines/diamond.png"
            :ratio="1"
            fit="contain"
            width="100%"
            height="100%"
            class="absolute-center"
          />
          <q-btn
            label="BUY"
            class="absolute-bottom q-mb-xl q-mx-xl"
            style="background-color: #222542"
            ><q-tooltip>Coming soon</q-tooltip></q-btn
          >
        </div>
      </div>
      <div class="col relative-position bg-container">
        <div class="bg-land-diamond absolute-full fit">
          <div
            class="text-white text-subtitle1 q-py-xs"
            style="background: #222542"
          >
            Land 1
          </div>
          <q-img
            src="/lands/mines/diamond.png"
            :ratio="1"
            fit="contain"
            width="100%"
            height="100%"
            class="absolute-center"
          />
          <q-btn
            label="BUY"
            class="absolute-bottom q-mb-xl q-mx-xl"
            style="background-color: #222542"
            ><q-tooltip>Coming soon</q-tooltip></q-btn
          >
        </div>
      </div>
      <div class="col relative-position bg-container">
        <div class="bg-land-diamond absolute-full fit">
          <div
            class="text-white text-subtitle1 q-py-xs"
            style="background: #222542"
          >
            Land 2
          </div>
          <q-img
            src="/lands/mines/diamond.png"
            :ratio="1"
            fit="contain"
            width="100%"
            height="100%"
            class="absolute-center"
          />
          <q-btn
            label="BUY"
            class="absolute-bottom q-mb-xl q-mx-xl"
            style="background-color: #222542"
            ><q-tooltip>Coming soon</q-tooltip></q-btn
          >
        </div>
      </div>
      <div class="col relative-position bg-container">
        <div class="bg-land-diamond absolute-full fit">
          <div
            class="text-white text-subtitle1 q-py-xs"
            style="background: #222542"
          >
            Land 3
          </div>
          <q-img
            src="/lands/mines/diamond.png"
            :ratio="1"
            fit="contain"
            width="100%"
            height="100%"
            class="absolute-center"
          />
          <q-btn
            label="BUY"
            class="absolute-bottom q-mb-xl q-mx-xl"
            style="background-color: #222542"
            ><q-tooltip>Coming soon</q-tooltip></q-btn
          >
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Diamond",

  setup() {
    return {};
  },
});
</script>

<style>
.bg-container {
  background-color: #222542;
  list-style: none;
}
.bg-land-diamond {
  background-image: url("/lands/backgrounds/diamond.png");
  background-size: cover;
  background-position: center;
}
</style>
