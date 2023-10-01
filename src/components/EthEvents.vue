<template></template>

<script>
import { useClientStore } from "stores/client";

export default {
  // name: 'ComponentName',
  setup() {
    const client = useClientStore();

    if (client.walletAvailable) {
      ethereum.on("accountsChanged", () => {
        client.setWallet();
      });

      ethereum.on("chainChanged", () => {
        client.setWallet();
      });

      ethereum.on("message", (message) => {
        console.log("message", message);
      });

      if (ethereum.isConnected()) {
        client.setWallet();
      }
    }

    return {};
  },
};
</script>
