<template>
  <q-drawer
    v-model="leftDrawerOpen"
    show-if-above
    :mini="$route.meta.drawer ? false : true"
    class="drawer q-pr-sm"
    :width="238"
  >
    <div v-if="$route.meta.drawer && $route.meta.id == 'profile'">
      <div class="profile-photo">
        <div align="center" class="q-pt-lg">
          <q-avatar size="160px" class="q-mb-sm cursor-pointer">
            <q-img src="/profile-photo.png" />
          </q-avatar>
        </div>
      </div>
      <div>
        <q-btn
          flat
          round
          icon="settings"
          color="blue-grey-5"
          @click="confirm"
        />
      </div>
    </div>
    <div v-if="$route.meta.drawer">
      <q-list class="menu-list text-center text-white text-weight-bold">
        <q-item
          clickable
          v-ripple
          class="shadow-up-5"
          v-if="$route.meta.id == 'profile'"
        >
          <q-item-section> Player 1 </q-item-section>
        </q-item>
        <div v-for="(item, i) in menu" :key="i">
          <q-item
            clickable
            v-ripple
            :active="$route.meta.id_children == item.id_children ? true : false"
            active-class="bg-accent text-white"
            :class="
              $route.meta.id_children !== item.id_children ? 'shadow-up-5' : ''
            "
            :to="item.to"
            :disable="item.disable"
            v-if="!item.expantion"
          >
            <q-item-section> {{ item.name }} </q-item-section>
            <q-tooltip v-if="item.disable">Coming soon</q-tooltip>
          </q-item>
          <q-expansion-item
            :default-opened="item.default_opened"
            expand-separator
            :label="item.name"
            dense-toggle
            v-else
          >
            <div v-for="(child, e) in item.children" :key="e">
              <q-item
                clickable
                v-ripple
                :active="
                  $route.meta.id_children == child.id_children ? true : false
                "
                active-class="bg-accent text-white"
                style="background-color: rgba(255, 255, 255, 0.2)"
                :to="child.to"
                :disable="child.disable"
              >
                <q-item-section> {{ child.name }} </q-item-section>
                <q-tooltip v-if="child.disable">Coming soon</q-tooltip>
              </q-item>
            </div>
          </q-expansion-item>
        </div>
      </q-list>
    </div>
  </q-drawer>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { useGeneralStore } from "stores/general";
import { useRoute } from "vue-router";
import { useQuasar } from "quasar";
import ProfileSettingDialog from "components/ProfileSettingDialog.vue";

export default defineComponent({
  name: "Menu",
  components: {},

  setup() {
    const $q = useQuasar();
    const general = useGeneralStore();
    const route = useRoute();
    const menu = ref([]);

    // WATCH
    watch(() => {
      if (route.meta.id == "profile") menu.value = general.menu_profile;
      if (route.meta.id == "marketplace") menu.value = general.menu_marketplace;
    });

    function confirm() {
      $q.dialog({
        component: ProfileSettingDialog,
      })
        .onOk(() => {
          // console.log(">>>> OK");
        })
        .onCancel(() => {
          // console.log(">>>> Cancel");
        })
        .onDismiss(() => {
          // console.log("I am triggered on both OK and Cancel");
        });
    }

    return {
      leftDrawerOpen: ref(true),
      menu,
      confirm,
    };
  },
});
</script>

<style>
.toolbar {
  background-color: #222542;
}
.drawer {
  background-color: #121428;
}
.profile-photo {
  background-color: #222542;
  height: 200px;
}
.menu-list {
  background-color: #222542;
}
</style>
