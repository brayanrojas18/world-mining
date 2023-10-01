<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="my-card2 column justify-around no-wrap">
      <q-card-section
        class="column items-center justify-center q-gutter-lg q-mt-sm"
      >
        <div class="text-white text-h6 text-weight-bold q-mt-none">
          Account Info
        </div>
        <div class="row q-col-gutter-md" style="min-height: 100px">
          <div class="col-12 col-md-6">
            <q-input
              standout="bg-accent"
              label="Email"
              class="input-login rounded-borders col-4 col-md-6"
              type="email"
              label-color="white"
              ref="email"
              autocomplete="off"
              v-model="client.user_info.email"
            />
          </div>
          <div class="col-12 col-md-6">
            <q-input
              standout="bg-accent"
              label="Password"
              class="input-login rounded-borders q-mb-md"
              label-color="white"
              :type="isPwd ? 'password' : 'text'"
              ref="password"
              v-model="account_info.password"
            >
              <template v-slot:append>
                <q-icon
                  color="white"
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <q-input
              standout="bg-accent"
              label="Repeat password"
              class="input-login rounded-borders"
              label-color="white"
              :type="isPwd2 ? 'password' : 'text'"
              ref="password2"
              v-model="account_info.password2"
            >
              <template v-slot:append>
                <q-icon
                  color="white"
                  :name="isPwd2 ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd2 = !isPwd2"
                />
              </template>
            </q-input>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <q-card-actions align="center">
          <q-btn class="modal-btn" label="Update" @click="onOKClick" />
          <q-btn class="modal-btn" label="Cancel" @click="onCancelClick" />
        </q-card-actions>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { useQuasar } from "quasar";
import { useClientStore } from "stores/client";

export default defineComponent({
  name: "ProfileSettingDialog",
  props: {
    // ...your custom props
  },

  emits: [
    // REQUIRED
    "ok",
    "hide",
  ],

  methods: {
    // following method is REQUIRED
    // (don't change its name --> "show")
    show() {
      this.$refs.dialog.show();
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide() {
      this.$refs.dialog.hide();
    },

    onDialogHide() {
      // required to be emitted
      // when QDialog emits "hide" event
      this.$emit("hide");
    },

    onOKClick() {
      // on OK, it is REQUIRED to
      // emit "ok" event (with optional payload)
      // before hiding the QDialog
      this.$emit("ok");
      // or with payload: this.$emit('ok', { ... })

      this.confirm();

      // then hiding dialog
      // this.hide();
    },

    onCancelClick() {
      // we just need to hide the dialog
      this.hide();
    },
  },

  setup() {
    const account_info = ref({});
    const confirmationDialog = ref(false);

    const $q = useQuasar();
    const client = useClientStore();

    function confirm() {
      $q.dialog({
        dark: true,
        title: "Update profile",
        message: "Are you sure you want to update your profile info?",
        cancel: true,
        persistent: true,
        ok: {
          label: "Yes",
        },
        class: "confirm-modal",
        style: "background-color:#222542",
      })
        .onOk(() => {
          this.hide();
          // console.log('>>>> OK')
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }

    return {
      account_info,
      confirmationDialog,
      isPwd: ref(true),
      isPwd2: ref(true),
      confirm,
      client,
    };
  },
});
</script>

<style>
.my-card2 {
  width: 50%;
  height: 60%;
  background-color: #222542;
  border-radius: 10px;
}

@media screen and (max-width: 460px) {
  .my-card2 {
    width: 90%;
  }
}

.input-login input {
  color: #fff;
}

.modal-btn {
  background-color: #f2c037;
}
.modal-btn span {
  color: #222542;
}

.confirm-modal button:last-child span {
  color: #222542;
}
</style>
