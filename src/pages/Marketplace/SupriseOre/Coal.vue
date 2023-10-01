<template>
  <q-page class="column q-pr-xs q-pb-xs">
    <div
      align="center"
      class="row q-gutter-sm col text-white text-weight-bold q-pt-sm"
    >
      <div class="col relative-position bg-container-suprise">
        <div class="absolute-full fit">
          <div
            class="text-white text-subtitle1 q-py-xs"
            style="background: #222542"
          >
            Coal 0
          </div>
          <q-img
            src="/minerals/coal.png"
            :ratio="4 / 3"
            fit="contain"
            width="100%"
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
      <div class="col relative-position bg-container-suprise">
        <div class="absolute-full fit">
          <div
            class="text-white text-subtitle1 q-py-xs"
            style="background: #222542"
          >
            Coal 1
          </div>
          <q-img
            src="/minerals/coal.png"
            :ratio="4 / 3"
            fit="contain"
            width="100%"
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
      <div class="col relative-position bg-container-suprise">
        <div class="absolute-full fit">
          <div
            class="text-white text-subtitle1 q-py-xs"
            style="background: #222542"
          >
            Coal 2
          </div>
          <q-img
            src="/minerals/coal.png"
            :ratio="4 / 3"
            fit="contain"
            width="100%"
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
      <div class="col relative-position bg-container-suprise">
        <div class="absolute-full fit">
          <div
            class="text-white text-subtitle1 q-py-xs"
            style="background: #222542"
          >
            Coal 3
          </div>
          <q-img
            src="/minerals/coal.png"
            :ratio="4 / 3"
            fit="contain"
            width="100%"
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
  name: "Coal",

  setup() {
    return {};
  },
});
</script>

<style>
.bg-container-suprise {
  border: 3px solid #222542;
}
</style>
