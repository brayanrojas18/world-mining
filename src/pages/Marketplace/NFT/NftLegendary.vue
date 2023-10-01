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
        <div class="bg-nft-legendary absolute-full fit">
          <div
            class="text-white text-subtitle1 q-py-xs"
            style="background: #222542"
          >
            Miner 0
          </div>
          <q-img
            src="/NFT/avatars/ElonMusk.png"
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
        <div class="bg-nft-legendary absolute-full fit">
          <div
            class="text-white text-subtitle1 q-py-xs"
            style="background: #222542"
          >
            Miner 1
          </div>
          <q-img
            src="/NFT/avatars/Ironman.png"
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
        <div class="bg-nft-legendary absolute-full fit">
          <div
            class="text-white text-subtitle1 q-py-xs"
            style="background: #222542"
          >
            Miner 2
          </div>
          <q-img
            src="/NFT/avatars/ElonMusk.png"
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
        <div class="bg-nft-legendary absolute-full fit">
          <div
            class="text-white text-subtitle1 q-py-xs"
            style="background: #222542"
          >
            Miner 3
          </div>
          <q-img
            src="/NFT/avatars/Luisito.png"
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
        <div class="bg-nft-legendary absolute-full fit">
          <div
            class="text-white text-subtitle1 q-py-xs"
            style="background: #222542"
          >
            Car 0
          </div>
          <q-img
            src="/cars/cars/car5.png"
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
        <div class="bg-nft-legendary absolute-full fit">
          <div
            class="text-white text-subtitle1 q-py-xs"
            style="background: #222542"
          >
            Car 1
          </div>
          <q-img
            src="/cars/cars/car6.png"
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
        <div class="bg-nft-legendary absolute-full fit">
          <div
            class="text-white text-subtitle1 q-py-xs"
            style="background: #222542"
          >
            Car 2
          </div>
          <q-img
            src="/cars/cars/car7.png"
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
        <div class="bg-nft-legendary absolute-full fit">
          <div
            class="text-white text-subtitle1 q-py-xs"
            style="background: #222542"
          >
            Car 3
          </div>
          <q-img
            src="/cars/cars/car8.png"
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
  name: "NftLegendary",

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
.bg-nft-legendary {
  background-image: url("/NFT/background/legendary.png");
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
