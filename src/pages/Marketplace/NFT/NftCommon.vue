<template>
  <q-page class="column q-pr-xs q-pb-xs">
    <q-btn-group spread class="panel">
      <q-btn
        class="text-white"
        label="Avatars"
        @click="panel = 'avatars'"
        :class="panel == 'avatars' ? 'active' : ''"
      />
      <q-btn
        class="text-white"
        label="Cars"
        @click="panel = 'cars'"
        :class="panel == 'cars' ? 'active' : ''"
      />
    </q-btn-group>
    <div
      align="center"
      class="row q-gutter-sm col text-white text-weight-bold q-pt-sm"
      v-if="panel == 'avatars'"
    >
      <div class="col relative-position bg-container">
        <div class="bg-nft absolute-full fit">
          <div
            class="text-white text-subtitle1 q-py-xs"
            style="background: #222542"
          >
            Miner 0
          </div>
          <q-img
            src="/NFT/avatars/Minero1.png"
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
        <div class="bg-nft absolute-full fit">
          <div
            class="text-white text-subtitle1 q-py-xs"
            style="background: #222542"
          >
            Miner 1
          </div>
          <q-img
            src="/NFT/avatars/Minero2.png"
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
        <div class="bg-nft absolute-full fit">
          <div
            class="text-white text-subtitle1 q-py-xs"
            style="background: #222542"
          >
            Miner 2
          </div>
          <q-img
            src="/NFT/avatars/Minero3.png"
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
        <div class="bg-nft absolute-full fit">
          <div
            class="text-white text-subtitle1 q-py-xs"
            style="background: #222542"
          >
            Miner 3
          </div>
          <q-img
            src="/NFT/avatars/Minero4.png"
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
    <div
      align="center"
      class="row q-gutter-sm col text-white text-weight-bold q-pt-sm"
      v-if="panel == 'cars'"
    >
      <div class="col relative-position bg-container">
        <div class="bg-nft absolute-full fit">
          <div
            class="text-white text-subtitle1 q-py-xs"
            style="background: #222542"
          >
            Car 0
          </div>
          <q-img
            src="/cars/cars/car1.png"
            :ratio="1"
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
      <div class="col relative-position bg-container">
        <div class="bg-nft absolute-full fit">
          <div
            class="text-white text-subtitle1 q-py-xs"
            style="background: #222542"
          >
            Car 1
          </div>
          <q-img
            src="/cars/cars/car2.png"
            :ratio="1"
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
      <div class="col relative-position bg-container">
        <div class="bg-nft absolute-full fit">
          <div
            class="text-white text-subtitle1 q-py-xs"
            style="background: #222542"
          >
            Car 2
          </div>
          <q-img
            src="/cars/cars/car3.png"
            :ratio="1"
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
      <div class="col relative-position bg-container">
        <div class="bg-nft absolute-full fit">
          <div
            class="text-white text-subtitle1 q-py-xs"
            style="background: #222542"
          >
            Car 3
          </div>
          <q-img
            src="/cars/cars/car4.png"
            :ratio="1"
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
  name: "NftCommon",

  setup() {
    const panel = ref("avatars");

    return {
      panel,
    };
  },
});
</script>

<style>
.bg-container {
  background-color: #222542;
  list-style: none;
}
.bg-nft {
  background-image: url("/NFT/background/common.png");
  background-size: cover;
  background-position: center;
}
.panel {
  background-color: #222542;
}
.active {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
