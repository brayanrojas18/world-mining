<template>
  <q-layout view="lHh Lpr lFf" class="background-login">
    <div style="background-color: rgba(34, 37, 66, 0.5)" class="absolute fit" />
    <div style="background-color: rgba(0, 0, 0, 0.5)" class="absolute fit" />

    <div>
      <!-- <q-card class="my-card absolute-center">
        <q-card-section
          class="column items-center justify-center q-gutter-lg q-mt-sm"
        >
          <div style="width: 75%">
            <q-btn
              text-color="white"
              class="rounded-borders bg-accent full-width"
              no-caps
              align="left"
            >
              <q-icon left size="3em" name="img:/metamaks.svg.png" />
              <div class="text-subtitle2 text-white text-weight-bold q-pl-lg">
                Log in with Metamask
              </div>
            </q-btn>
          </div>
          <div class="text-white text-weight-bold">Or</div>
          <q-input
            standout="bg-accent"
            label="Email"
            class="input-login rounded-borders"
            type="email"
            label-color="white"
          />
          <q-input
            standout="bg-accent"
            label="Password"
            class="input-login rounded-borders"
            label-color="white"
            :type="isPwd ? 'password' : 'text'"
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
        </q-card-section>
        <q-card-section>
          <div align="center">
            <q-btn text-color="black" no-caps class="btn-login" label="Login" />
          </div>
          <div align="center" class="q-mt-md">
            <q-btn
              text-color="white"
              no-caps
              label="Forgot password?"
              flat
              align="center"
            />
          </div>
        </q-card-section>
      </q-card> -->
      <q-card class="my-card absolute-center">
        <div class="text-white text-weight-bolder text-center text-h5 q-pt-md">
          LOGIN
        </div>
        <div style="width: 75%" class="absolute-center">
          <q-btn
            text-color="white"
            class="rounded-borders bg-accent full-width"
            no-caps
            align="left"
            @click="login"
          >
            <q-icon left size="3em" name="img:/metamaks.svg.png" />
            <div class="text-subtitle2 text-white text-weight-bold q-pl-lg">
              Log in with Metamask
            </div>
          </q-btn>
        </div>
      </q-card>
    </div>

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

    <q-dialog v-model="dialog_account" persistent>
      <q-card class="my-card2">
        <q-card-section
          class="column items-center justify-center q-gutter-lg q-mt-sm"
        >
          <div class="text-white text-h6 text-weight-bold q-mt-none">
            Create Account
          </div>
          <q-input
            standout="bg-accent"
            label="Email"
            class="input-login rounded-borders"
            type="email"
            label-color="white"
            ref="email"
            v-model="form.email"
          />
          <q-input
            standout="bg-accent"
            label="Password"
            class="input-login rounded-borders"
            label-color="white"
            :type="isPwd ? 'password' : 'text'"
            ref="password"
            v-model="form.password"
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
            v-model="form.password2"
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
        </q-card-section>
        <q-card-section>
          <div align="center">
            <q-btn
              text-color="black"
              no-caps
              class="btn-login"
              label="CREATE"
              @click="saveUser"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import { defineComponent, ref, watch, onMounted } from "vue";
import { useClientStore } from "stores/client";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { api } from "boot/axios";

export default defineComponent({
  name: "Login",

  components: {},

  setup() {
    const router = useRouter();
    const client = useClientStore();
    const $q = useQuasar();
    const dialog_net = ref(false);
    const dialog_account = ref(false);
    const form = ref({});
    const email = ref(null);
    const password = ref(null);
    const password2 = ref(null);

    watch(async () => {
      if (client.isLogged) {
        if (!client.isAvailableNetwork) {
          dialog_net.value = true;
        } else {
          let validate = await validateUser();
          if (!Object.keys(validate).length) {
            dialog_account.value = true;
          } else {
            router.push("/dashboard");
          }
        }
      } else {
        if (!client.isAvailableNetwork) dialog_net.value = true;
        else dialog_net.value = false;
      }
    });

    // METHODS
    async function login() {
      if (client.walletAvailable) {
        await client.connectWallet();
        let validate = await validateUser();
        if (!Object.keys(validate).length) {
          dialog_account.value = true;
        } else {
          router.push("/dashboard");
        }
      } else {
        $q.dialog({
          title: "Attention!",
          message: "Please install Metamask",
          cancel: true,
        })
          .onOk(() => {
            window.location.href = "https://metamask.io/";
          })
          .onCancel(() => {});
      }
    }

    async function validateUser() {
      let res = await api.post("usuarios/validate_user", {
        wallet: client.wallet_id,
      });
      return res.result;
    }

    async function saveUser() {
      $q.loading.show();

      email.value.validate();
      password.value.validate();
      password2.value.validate();
      if (
        email.value.hasError ||
        password.value.hasError ||
        password2.value.hasError
      ) {
        $q.loading.hide();
        return $q.notify({
          message: "All fields are required",
          color: "negative",
        });
      }

      if (
        !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
          form.value.email
        )
      ) {
        $q.loading.hide();
        return $q.notify({
          message: "The email address is not valid",
          color: "negative",
        });
      }

      if (form.value.password !== form.value.password2) {
        $q.loading.hide();
        return $q.notify({
          message: "repeat the password, they do not match",
          color: "negative",
        });
      }

      var validar = false;
      if (form.value.password.length >= 8) {
        var uppercase = false;
        var lowerrcase = false;
        var number = false;
        var special_character = false;

        for (var i = 0; i < form.value.password.length; i++) {
          if (
            form.value.password.charCodeAt(i) >= 65 &&
            form.value.password.charCodeAt(i) <= 90
          ) {
            uppercase = true;
          } else if (
            form.value.password.charCodeAt(i) >= 97 &&
            form.value.password.charCodeAt(i) <= 122
          ) {
            lowerrcase = true;
          } else if (
            form.value.password.charCodeAt(i) >= 48 &&
            form.value.password.charCodeAt(i) <= 57
          ) {
            number = true;
          } else {
            special_character = true;
          }
        }
        if (
          uppercase == true &&
          lowerrcase == true &&
          special_character == true &&
          number == true
        ) {
          validar = true;
        }
      }
      if (!validar) {
        $q.loading.hide();
        return $q.notify({
          message:
            "The Password must have: Uppercase, Lowercase, special character and numbers",
          color: "negative",
        });
      }

      let res = await api.post("usuarios/save_user", {
        data: {
          wallet: client.wallet_id,
          email: form.value.email,
          password: form.value.password,
          role: "user",
        },
      });

      $q.loading.hide();
      //  router.push("/dashboard");
      router.push("/dashboard");
    }

    onMounted(async () => {
      if (client.isLogged) {
        let validate = await validateUser();
        if (!Object.keys(validate).length) {
          dialog_account.value = true;
        } else {
          router.push("/dashboard");
        }
      }
    });

    return {
      login,
      saveUser,
      dialog_net,
      dialog_account,

      isPwd: ref(true),
      isPwd2: ref(true),
      form,
      email,
      password,
      password2,
    };
  },
});
</script>

<style>
.background-login {
  background-image: url("/background-login.jpg");
  background-size: cover;
  background-position: center;
}
.my-card {
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 180px;
  background-color: #222542;
  border-radius: 10px;
}
.my-card2 {
  width: 50%;
  height: 60%;
  background-color: #222542;
  border-radius: 10px;
}
.header {
  background-color: #222542;
}
.input-login {
  background-color: #121428;
  width: 75%;
}
.input-login input {
  color: #fff;
}

.btn-login {
  background: linear-gradient(0.25turn, #ff9b31, #fff36b, #ff9b31);
  width: 70%;
}
.btn-login-metamaks {
  width: 70%;
}
</style>
