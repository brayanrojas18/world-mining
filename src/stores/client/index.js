import { defineStore } from "pinia";
import { api } from "boot/axios";

export const useClientStore = defineStore("client", {
  state: () => ({
    wallet_id: null,
    network: null,
    user_info: null,
  }),
  getters: {
    isLogged: (state) => (state.wallet_id ? true : false),
    walletAvailable: (state) => typeof window.ethereum !== "undefined",
    isAvailableNetwork: (state) => state.network == "0x38",
  },
  actions: {
    async connectWallet() {
      await ethereum.request({ method: "eth_requestAccounts" });
      await this.setWallet();
      return ethereum.selectedAddress;
    },
    async setWallet() {
      this.network = await ethereum.request({ method: "eth_chainId" });
      this.wallet_id = ethereum.selectedAddress;
    },
    async setUserInfo() {
      const user = await api.get(
        "usuarios?filter=" +
          JSON.stringify({
            where: {
              wallet: this.wallet_id,
            },
            limit: 1,
          })
      );
      this.user_info = { ...user[0] };
    },
  },
});
