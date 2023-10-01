<template>
  <q-toolbar class="toolbar">
    <div style="background-color: #121428">
      <q-icon size="4em" name="img:/logo.ico" />
    </div>
    <q-btn
      stretch
      flat
      label="Dashboard"
      no-caps
      class="col"
      :class="$route.meta.id == 'dashboard' ? 'bg-accent' : ''"
      to="/dashboard"
    />
    <q-btn
      stretch
      flat
      label="Profile"
      no-caps
      class="col"
      :class="$route.meta.id == 'profile' ? 'bg-accent' : ''"
      to="/profile/my-account"
    />
    <q-btn
      stretch
      flat
      label="Marketplace"
      no-caps
      class="col"
      :class="$route.meta.id == 'marketplace' ? 'bg-accent' : ''"
      to="/marketplace/nft/common"
    />
    <q-btn
      stretch
      flat
      label="PVP"
      no-caps
      class="col"
      :class="$route.meta.id == 'pvp' ? 'bg-accent' : ''"
      to="/pvp"
    />
    <q-btn
      stretch
      flat
      label="Farming"
      no-caps
      class="col"
      :class="$route.meta.id == 'farming' ? 'bg-accent' : ''"
      to="/farming"
    />
    <q-btn
      stretch
      flat
      label="Train"
      no-caps
      class="col"
      :class="$route.meta.id == 'train' ? 'bg-accent' : ''"
      to="/train"
    />
    <q-btn
      stretch
      flat
      label="Scholarship"
      no-caps
      class="col"
      :class="$route.meta.id == 'scholarship' ? 'bg-accent' : ''"
      to="/scholarship"
    />
    <q-btn
      stretch
      flat
      label="Collaborate"
      no-caps
      class="col"
      :class="$route.meta.id == 'collaborate' ? 'bg-accent' : ''"
      to="/collaborate"
    />
  </q-toolbar>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Menu",
  components: {},

  setup() {
    return {};
  },
});
</script>

<style>
.toolbar {
  background-color: #222542;
  padding: 0px;
}
</style>
