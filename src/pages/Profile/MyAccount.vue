<template>
  <q-page class="column q-pr-xs q-pb-xs">
    <div align="center" class="row q-gutter-sm col text-white text-weight-bold">
      <div class="col relative-position bg-container">
        <div class="absolute-full fit">
          <p class="text-h5 q-pt-md">RANGO</p>
          <q-img src="/diamond5.png" :ratio="4 / 3" fit="contain" width="75%" />
        </div>
      </div>
      <div class="col relative-position bg-container">
        <div class="absolute-full fit">
          <p class="text-h5 q-pt-md q-mb-none">CLAN</p>
          <p class="text-subtitle1 shadow-up-3 q-mb-none">Player 1 clan</p>
          <!-- <div
            style="
              background-color: rgba(255, 255, 255, 0.2);
              max-height: 500px;
              height: 100%;
            "
            class="q-py-md"
          >
            <q-img src="/clan.png" :ratio="4 / 3" fit="contain" width="55%" />
          </div> -->
          <q-img
            src="/clan.png"
            :ratio="4 / 3"
            fit="contain"
            width="100%"
            height="60%"
            style="background-color: rgba(255, 255, 255, 0.2)"
          />
          <p class="q-pt-sm text-subtitle1 text-center 0verflow-auto">
            Clan members : 100
          </p>
        </div>
      </div>
      <div class="col relative-position bg-container">
        <div class="absolute-full fit">
          <p class="text-h5 q-pt-md q-mb-none">RANKING</p>
          <div
            style="background-color: rgba(255, 255, 255, 0.2); height: 8.5%"
            v-for="(rank, i) in ranks"
            :key="i"
            class="text-subtitle1"
          >
            <p :class="rank.color" class="text-left q-pl-lg">
              - {{ rank.label }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      align="center"
      class="row q-gutter-sm col text-white text-weight-bold q-pt-sm"
    >
      <div class="col relative-position bg-container">
        <div class="absolute-full fit">
          <p class="text-h5 q-pt-md">QR</p>
          <q-img src="/QR.png" :ratio="4 / 3" fit="contain" width="75%" />
        </div>
      </div>
      <div class="col relative-position bg-container">
        <div class="absolute-full fit">
          <p class="text-h5 q-pt-sm q-mb-none">BATTLE ARENA</p>
          <div class="text-subtitle1 q-pt-sm">
            <q-list bordered>
              <q-item clickable v-ripple class="shadow-up-5">
                <q-item-section>Statistics </q-item-section>
              </q-item>

              <q-item clickable v-ripple class="shadow-up-5">
                <q-item-section>Favorite </q-item-section>
              </q-item>

              <q-item clickable v-ripple class="shadow-up-5">
                <q-item-section>Game Repeat </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </div>
      <div class="col relative-position bg-container">
        <div class="absolute-full fit">
          <p class="text-h5 q-pt-sm q-mb-none">FRIENDS</p>
          <q-list bordered class="rounded-borders q-mt-sm">
            <q-expansion-item expand-separator>
              <template v-slot:header>
                <q-item-section avatar>
                  <q-icon color="positive" name="radio_button_checked" />
                </q-item-section>

                <q-item-section> Active </q-item-section>
              </template>
              <div
                class="text-left"
                style="background-color: rgba(255, 255, 255, 0.2)"
              >
                <li>
                  <ul>
                    Player1
                  </ul>
                  <ul>
                    Player2
                  </ul>
                  <ul>
                    Player3
                  </ul>
                </li>
              </div>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item expand-separator>
              <template v-slot:header>
                <q-item-section avatar>
                  <q-icon color="negative" name="radio_button_checked" />
                </q-item-section>

                <q-item-section> Inactive </q-item-section>
              </template>
              <div
                class="text-left"
                style="background-color: rgba(255, 255, 255, 0.2)"
              >
                <li>
                  <ul>
                    Player4
                  </ul>
                  <ul>
                    Player5
                  </ul>
                  <ul>
                    Player6
                  </ul>
                </li>
              </div>
            </q-expansion-item>
          </q-list>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MyAccount",

  setup() {
    return {
      ranks: ref([
        {
          label: "Victory",
          status: "victory",
          color: "text-yellow",
        },
        {
          label: "Victory",
          status: "victory",
          color: "text-yellow",
        },
        {
          label: "Defeact",
          status: "defeact",
          color: "text-red",
        },
        {
          label: "Defeact",
          status: "defeact",
          color: "text-red",
        },
        {
          label: "Victory",
          status: "victory",
          color: "text-yellow",
        },
        {
          label: "Defeact",
          status: "defeact",
          color: "text-red",
        },
        {
          label: "Victory",
          status: "victory",
          color: "text-yellow",
        },
        {
          label: "Victory",
          status: "victory",
          color: "text-yellow",
        },
      ]),
    };
  },
});
</script>

<style>
.bg-container {
  background-color: #222542;
  list-style: none;
}
</style>
