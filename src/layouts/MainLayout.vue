<template>
  <q-layout view="hHh Lpr lff" class="background">
    <q-header class="q-pb-sm bg-accent">
      <Menu />
    </q-header>

    <Drawer />

    <q-page-container>
      <router-view />

      <!-- DIALOGS -->
      <q-dialog v-model="dialog_net" persistent>
        <q-card>
          <q-card-section>
            <div class="text-h6">Attention!</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            Please switch to BSC network.
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, onMounted, watch } from "vue";
import Drawer from "components/Drawer.vue";
import Menu from "components/Menu.vue";
import { useClientStore } from "stores/client";
import { useQuasar, Dialog, Notify } from "quasar";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "MainLayout",

  components: {
    Drawer,
    Menu,
  },

  setup() {
    const router = useRouter();
    const client = useClientStore();
    const $q = useQuasar();
    const dialog_net = ref(false);

    watch(() => {
      if (client.isLogged) {
        if (!client.isAvailableNetwork) dialog_net.value = true;
        else dialog_net.value = false;
      } else {
        router.push("/login");
      }
    });

    onMounted(() => {
      if (!client.isLogged) {
        router.push("/login");
      } else {
        client.setUserInfo();
      }
    });

    return { dialog_net };
  },
});
</script>

<style>
.background {
  background-color: #121428;
}
</style>
