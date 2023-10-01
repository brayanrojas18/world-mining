const routes = [
  // LOGIN
  {
    path: "/login",
    component: () => import("layouts/Login.vue"),
  },

  // USER MENU
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/dashboard",
        component: () => import("pages/Dashboard/Index.vue"),
        meta: {
          id: "dashboard",
          drawer: false,
        },
      },
      {
        path: "/profile/my-account",
        component: () => import("pages/Profile/MyAccount.vue"),
        meta: {
          id: "profile",
          id_children: "my-account",
          drawer: true,
        },
      },
      {
        path: "/profile/inventory",
        component: () => import("pages/Profile/Inventory.vue"),
        meta: {
          id: "profile",
          id_children: "inventory",
          drawer: true,
        },
      },
      {
        path: "/marketplace/nft/common",
        component: () => import("pages/Marketplace/NFT/NftCommon.vue"),
        meta: {
          id: "marketplace",
          id_children: "nftCommon",
          drawer: true,
        },
      },
      {
        path: "/marketplace/nft/legendary",
        component: () => import("pages/Marketplace/NFT/NftLegendary.vue"),
        meta: {
          id: "marketplace",
          id_children: "nftLegendary",
          drawer: true,
        },
      },
      {
        path: "/marketplace/land/coal",
        component: () => import("pages/Marketplace/Land/Coal.vue"),
        meta: {
          id: "marketplace",
          id_children: "landCoal",
          drawer: true,
        },
      },
      {
        path: "/marketplace/land/silver",
        component: () => import("pages/Marketplace/Land/Silver.vue"),
        meta: {
          id: "marketplace",
          id_children: "landSilver",
          drawer: true,
        },
      },
      {
        path: "/marketplace/land/gold",
        component: () => import("pages/Marketplace/Land/Gold.vue"),
        meta: {
          id: "marketplace",
          id_children: "landGold",
          drawer: true,
        },
      },
      {
        path: "/marketplace/land/diamond",
        component: () => import("pages/Marketplace/Land/Diamond.vue"),
        meta: {
          id: "marketplace",
          id_children: "landDiamond",
          drawer: true,
        },
      },
      {
        path: "/marketplace/supriseOre/coal",
        component: () => import("pages/Marketplace/SupriseOre/Coal.vue"),
        meta: {
          id: "marketplace",
          id_children: "supriseOreCoal",
          drawer: true,
        },
      },
      {
        path: "/marketplace/supriseOre/silver",
        component: () => import("pages/Marketplace/SupriseOre/Silver.vue"),
        meta: {
          id: "marketplace",
          id_children: "supriseOreSilver",
          drawer: true,
        },
      },
      {
        path: "/marketplace/supriseOre/gold",
        component: () => import("pages/Marketplace/SupriseOre/Gold.vue"),
        meta: {
          id: "marketplace",
          id_children: "supriseOreGold",
          drawer: true,
        },
      },
      {
        path: "/marketplace/supriseOre/diamond",
        component: () => import("pages/Marketplace/SupriseOre/Diamond.vue"),
        meta: {
          id: "marketplace",
          id_children: "supriseOreDiamond",
          drawer: true,
        },
      },
      {
        path: "/pvp",
        component: () => import("pages/Pvp/Index.vue"),
        meta: {
          id: "pvp",
          drawer: false,
        },
      },
      {
        path: "/farming",
        component: () => import("pages/Farming/Index.vue"),
        meta: {
          id: "farming",
          drawer: false,
        },
      },
      {
        path: "/train",
        component: () => import("pages/Train/Index.vue"),
        meta: {
          id: "train",
          drawer: false,
        },
      },
      {
        path: "/scholarship",
        component: () => import("pages/Scholarship/Index.vue"),
        meta: {
          id: "scholarship",
          drawer: false,
        },
      },
      {
        path: "/collaborate",
        component: () => import("pages/Collaborate/Index.vue"),
        meta: {
          id: "collaborate",
          drawer: false,
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
