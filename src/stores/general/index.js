import { defineStore } from "pinia";

export const useGeneralStore = defineStore("general", {
  state: () => ({
    // menu of each moudlo for the drawer
    menu_profile: [
      {
        name: "My Account",
        id_children: "my-account",
        to: "/profile/my-account",
      },
      {
        name: "Inventory",
        id_children: "inventory",
        to: "/profile/inventory",
      },
      {
        name: "Scholars",
        id_children: "scholars",
        to: "/profile/scholars",
        disable: true,
      },
      {
        name: "Stream",
        id_children: "stream",
        to: "/profile/stream",
        disable: true,
      },
      {
        name: "Clan",
        id_children: "clan",
        to: "/profile/clan",
        disable: true,
      },
    ],
    menu_marketplace: [
      {
        name: "NFT",
        expantion: true,
        default_opened: true,
        children: [
          {
            name: "Common",
            to: "/marketplace/nft/common",
            id_children: "nftCommon",
          },
          {
            name: "Legendary",
            to: "/marketplace/nft/legendary",
            id_children: "nftLegendary",
          },
        ],
      },
      {
        name: "Land",
        expantion: true,
        default_opened: false,
        children: [
          {
            name: "Coal",
            to: "/marketplace/land/coal",
            id_children: "landCoal",
          },
          {
            name: "Silver",
            to: "/marketplace/land/silver",
            id_children: "landSilver",
          },
          {
            name: "Gold",
            to: "/marketplace/land/gold",
            id_children: "landGold",
          },
          {
            name: "Diamond",
            to: "/marketplace/land/diamond",
            id_children: "landDiamond",
          },
        ],
      },
      {
        name: "Skin",
        id_children: "skin",
        to: "/marketplace/skin",
        disable: true,
      },
      {
        name: "Emojis",
        id_children: "emojis",
        to: "/marketplace/emojis",
        disable: true,
      },
      {
        name: "Surprise ore",
        expantion: true,
        default_opened: false,
        children: [
          {
            name: "Coal",
            to: "/marketplace/supriseOre/coal",
            id_children: "supriseOreCoal",
          },
          {
            name: "Silver",
            to: "/marketplace/supriseOre/silver",
            id_children: "supriseOreSilver",
          },
          {
            name: "Gold",
            to: "/marketplace/supriseOre/gold",
            id_children: "supriseOreGold",
          },
          {
            name: "Diamond",
            to: "/marketplace/supriseOre/diamond",
            id_children: "supriseOreDiamond",
          },
        ],
      },
      {
        name: "Accessories",
        id_children: "accessories",
        to: "/marketplace/accessories",
        disable: true,
      },
    ],
  }),
  getters: {},
  actions: {},
});
