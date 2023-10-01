<template>
  <q-page class="column q-mr-xs q-pb-xs">
    <div
      class="
        row
        col
        q-gutter-md
        justify-between
        items-center
        bg-container
        q-mb-sm q-px-xl
      "
    >
      <div class="text-white text-h5 text-weight-bold">Mineral</div>
      <div class="row items-center text-subtitle1 q-gutter-xs text-white">
        <q-btn flat round>
          <q-icon size="2em" name="img:/minerals-icon/coal.png"
        /></q-btn>
        <div>50</div>
      </div>
      <div class="row items-center text-subtitle1 q-gutter-xs text-white">
        <q-btn flat round>
          <q-icon size="2em" name="img:/minerals-icon/silver.png"
        /></q-btn>
        <div>32</div>
      </div>
      <div class="row items-center text-subtitle1 q-gutter-xs text-white">
        <q-btn flat round>
          <q-icon size="2em" name="img:/minerals-icon/gold.png"
        /></q-btn>
        <div>0</div>
      </div>
      <div class="row items-center text-subtitle1 q-gutter-xs text-white">
        <q-btn flat round>
          <q-icon size="2em" name="img:/minerals-icon/diamond.png"
        /></q-btn>
        <div>0</div>
      </div>
    </div>
    <div align="center" class="row q-gutter-sm col text-white text-weight-bold">
      <div class="col bg-container">
        <p class="text-h6 q-pt-md">NFT</p>
        <p
          class="shadow-3 shadow-up-2 text-subtitle1 q-py-sm"
          style="background: rgba(255, 255, 255, 0.1)"
        >
          My nft
        </p>
        <q-infinite-scroll
          @load="onLoad"
          :offset="250"
          style="max-height: 405px; overflow: auto"
          class="scroll"
        >
          <div v-for="(nft, i) in nfts" :key="i" class="q-pt-sm">
            <q-card bordered class="my-card transparent cursor-pointer">
              <q-card-section>
                <q-img
                  :src="nft"
                  :ratio="1"
                  fit="contain"
                  spinner-color="white"
                />
              </q-card-section>
            </q-card>
          </div>
          <template v-slot:loading>
            <div class="row justify-center q-my-md" style="visibility: visible">
              <q-spinner-dots color="white" size="40px" />
            </div>
          </template>
        </q-infinite-scroll>
      </div>
      <div class="col bg-container">
        <p class="text-h6 q-pt-md">Land</p>
        <q-infinite-scroll
          :offset="250"
          style="max-height: 405px; overflow: auto"
          class="scroll"
        >
          <div v-for="(land, i) in lands" :key="i">
            <q-list class="rounded-borders">
              <q-expansion-item
                class="shadow-3 shadow-up-2 text-subtitle1"
                style="background: rgba(255, 255, 255, 0.1)"
                :label="land.name"
                :icon="land.icon"
              >
                <q-card
                  bordered
                  class="my-card-lands cursor-pointer"
                  style="background-color: rgba(255, 255, 255, 0.1)"
                >
                  <q-img
                    :src="land.src"
                    :ratio="1"
                    fit="contain"
                    spinner-color="white"
                  />
                  <q-separator />
                  <q-list bordered separator>
                    <q-item class="bg-container">
                      <q-item-section>
                        <q-item-label> {{ land.odditie }}</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item class="shadow-2">
                      <q-item-section>
                        <q-item-label
                          >Exploited Veins: {{ land.exploited }}</q-item-label
                        >
                      </q-item-section>
                    </q-item>
                    <q-item class="shadow-2">
                      <q-item-section>
                        <q-item-label
                          >Unexploited Veins:
                          {{ land.unexploited }}</q-item-label
                        >
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-card>
              </q-expansion-item>
            </q-list>
          </div>
          <template v-slot:loading>
            <div class="row justify-center q-my-md" style="visibility: visible">
              <q-spinner-dots color="white" size="40px" />
            </div>
          </template>
        </q-infinite-scroll>
      </div>
      <div class="col bg-container">
        <p class="text-h6 q-pt-md">Skin</p>
        <q-infinite-scroll
          :offset="250"
          style="max-height: 405px; overflow: auto"
          class="scroll"
        >
          <div v-for="(skin, i) in skins" :key="i">
            <q-list class="rounded-borders">
              <q-expansion-item
                :label="skin.name"
                icon="view_module"
                class="shadow-3 shadow-up-2 text-subtitle1"
                style="background: rgba(255, 255, 255, 0.1)"
              >
                <q-card
                  bordered
                  class="my-card-lands cursor-pointer"
                  style="background-color: rgba(255, 255, 255, 0.1)"
                >
                  <q-img
                    :src="skin.src"
                    :ratio="4 / 3"
                    fit="contain"
                    spinner-color="white"
                  />
                  <q-separator />
                  <q-list bordered separator>
                    <q-item class="shadow-2">
                      <q-item-section>
                        <q-item-label>Atack: {{ skin.atack }}</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item class="shadow-2">
                      <q-item-section>
                        <q-item-label>Defense: {{ skin.defense }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-card>
              </q-expansion-item>
            </q-list>
          </div>
          <template v-slot:loading>
            <div class="row justify-center q-my-md" style="visibility: visible">
              <q-spinner-dots color="white" size="40px" />
            </div>
          </template>
        </q-infinite-scroll>
      </div>
      <div class="col bg-container">
        <p class="text-h6 q-pt-md">Benefit</p>
        <p
          class="shadow-3 shadow-up-2 text-subtitle1 q-py-sm"
          style="background: rgba(255, 255, 255, 0.1)"
        >
          Surprise Ore
        </p>
        <q-infinite-scroll
          :offset="250"
          style="max-height: 405px; overflow: auto"
          class="scroll"
        >
          <div v-for="(mineral, i) in minerals" :key="i" class="q-pt-sm">
            <q-card bordered class="my-card transparent cursor-pointer">
              <q-card-section>
                <q-img
                  :src="mineral"
                  :ratio="4 / 3"
                  fit="contain"
                  spinner-color="white"
                />
              </q-card-section>
            </q-card>
          </div>
          <template v-slot:loading>
            <div class="row justify-center q-my-md" style="visibility: visible">
              <q-spinner-dots color="white" size="40px" />
            </div>
          </template>
        </q-infinite-scroll>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "Invenotry",

  setup() {
    const nfts = ref([
      "/cars/Drill.png",
      "/cars/Electroshot.png",
      "/cars/Gundron.png",
      "/cars/Shovelbomb.png",
    ]);
    const nfts_p = ref(["/cars/Gundron.png", "/cars/Shovelbomb.png"]);
    const lands = ref([
      {
        src: "/land.png",
        name: "Veta  Gold",
        odditie: "Common",
        exploited: 4,
        unexploited: 6,
        veins: 10,
        type: "gold",
        icon: "img:/minerals-icon/gold.png",
      },
      {
        src: "/land.png",
        name: "Veta  Gold",
        odditie: "Common",
        exploited: 8,
        unexploited: 2,
        veins: 10,
        type: "gold",
        icon: "img:/minerals-icon/gold.png",
      },
    ]);
    const skins = ref([
      {
        src: "/ring.png",
        name: "Ring",
        atack: 3,
        defense: 2,
      },
      {
        src: "/helmet.png",
        name: "Helmet",
        atack: 2,
        defense: 6,
      },
    ]);
    const minerals = ref(["/minerals/diamond.png", "/minerals/gold.png"]);

    // METHODS
    async function onLoad(index, done) {
      setTimeout(() => {
        nfts.value.push(...nfts_p.value);
        nfts_p.value = [];
        done();
      }, 2000);
    }

    return {
      nfts,
      nfts_p,
      lands,
      skins,
      minerals,
      onLoad,
    };
  },
});
</script>

<style>
.bg-container {
  background-color: #222542;
  list-style: none;
}
.my-card {
  width: 100%;
  max-width: 250px;
}
.my-card-lands {
  width: 100%;
  max-width: 250;
}

/* .scrollbar::-webkit-scrollbar {
  background-color: #222542;
}
.scrollbar::-webkit-scrollbar:vertical {
  width: 10px;
}
.scrollbar::-webkit-scrollbar:horizontal {
  height: 10px;
}
.scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
} */

.q-infinite-scroll.scroll::-webkit-scrollbar {
  width: 6px;
}
.q-infinite-scroll.scroll::-webkit-scrollbar-thumb {
  background-color: #393b55;
  border-radius: 20px;
  outline: 1px solid #666666;
}
.q-infinite-scroll.scroll::-webkit-scrollbar-track {
  background-color: #0000002e;
  box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
  border-radius: 20px;
}
</style>
