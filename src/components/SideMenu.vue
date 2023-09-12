<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const router = useRouter();
const bottomMenus = ref([
  {
    label: "Setting",
    icon: "pi pi-cog",
    to: "/Setting",
  },
  {
    label: "Log Out",
    icon: "pi pi-power-off",
    command: () => {
      store.commit("SET_LOGGEDIN", false);
      router.push({ name: "login" });
    },
  },
]);

const dashboard = ref([
  {
    label: "Dasboard",
    icon: "pi pi-home",
    to: "/dashboard",
  },
]);

const analytics = ref([
  {
    label: "Analytics",
    items: [
      {
        label: "Performance",
        icon: "pi pi-chart-line",
        to: "/analytics/performance",
      },
    ],
  },
]);

const support = ref([
  {
    label: "Support",
    items: [
      {
        label: "Tickets",
        icon: "pi pi-ticket",
        to: "/support/tickets",
      },
      {
        label: "Agents",
        icon: "pi pi-users",
        to: "/support/agents",
      },
      {
        label: "Customer",
        icon: "pi pi-user",
        to: "/support/customer",
      },
    ],
  },
]);

const shop = ref([
  {
    label: "Shop",
    items: [
      {
        label: "Producs",
        icon: "pi pi-box",
        to: "/shop/products",
      },
      {
        label: "Orders",
        icon: "pi pi-cart-plus",
        to: "/shop/orders",
      },
      {
        label: "Reports",
        icon: "pi-file",
        to: "/shop/reports",
      },
    ],
  },
]);
</script>

<template>
  <aside>
    <div class="aside__top-menu">
      <div class="logo">
        <img
          src="https://primefaces.org/cdn/primevue/images/primevue-logo-dark.svg"
          alt=""
        />
      </div>
      <Menu
        :model="dashboard"
        style="border: none; border-bottom: 1px solid #f1f1f4"
      />
      <Menu
        :model="analytics"
        style="border: none; border-bottom: 1px solid #f1f1f4"
      />
      <Menu
        :model="support"
        style="border: none; border-bottom: 1px solid #f1f1f4"
      />
      <Menu
        :model="shop"
        style="border: none; border-bottom: 1px solid #f1f1f4"
      />
    </div>
    <div class="aside__bottom-menu">
      <Menu
        :model="bottomMenus"
        style="border: none; border-bottom: 1px solid #f1f1f4"
      />
    </div>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  display: flex;
  width: 251px;
  height: 1024px;
  padding: 32px 24px;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  height: max-content;
  align-items: center;
  flex-shrink: 0;
  gap: 1.2rem;
  background: white;
  height: 100vh;
  overflow: auto;

  > * {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
}
</style>
