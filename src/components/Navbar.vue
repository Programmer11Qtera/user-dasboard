<script setup lang="ts">
import { computed, ref } from "vue";
import { useStore } from "vuex";
import UserMenu from "@/components/UserMenu.vue";

const searchQuery = ref<string>();
const store = useStore();
const username = computed(() => store.state.auth.username);
const email = "kurnia@gmail.com";

const menu = ref([
  {
    label: "Profile",
    icon: "pi pi-user",
    route: "/profile",
  },
  {
    label: "Setting",
    icon: "pi pi-cog",
    route: "/setting",
  },
]);
</script>

<template>
  <nav>
    <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <InputText v-model="searchQuery" placeholder="Search" />
    </span>
    <div class="right-menus">
      <button>
        <i class="pi pi-cog" style="width: 24px" />
      </button>
      <button>
        <i class="pi pi-bell" v-badge="2" style="width: 24px" />
      </button>
      <div class="user">
        <div class="user__wrapper">
          <Avatar
            :label="username[0].toUpperCase()"
            shape="circle"
            style="width: 44px; height: 44px"
          />
          <div class="user__detail">
            <span class="user__detail__name">{{ username }}</span>
            <span class="user__detail__email">{{ email }}</span>
          </div>
          <i class="pi pi-chevron-down" />
        </div>
        <!-- <Menu :model="menu" /> -->
        <!-- <Menu :model="menu">
          <template #start>
            <div class="user__wrapper">
              <Avatar
                :label="username[0].toUpperCase()"
                shape="circle"
                style="width: 44px; height: 44px"
              />
              <div class="user__detail">
                <span class="user__detail__name">{{ username }}</span>
                <span class="user__detail__email">{{ email }}</span>
              </div>
              <i class="pi pi-chevron-down" />
            </div>
          </template>
          <template #item="{ item, label, props }">
            <router-link :to="item.route">
              <i v-bind="props.icon" />
              {{ label }}
            </router-link>
          </template>
          <template #end>
            <button
              class="w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround"
            >
              <i class="pi pi-sign-out" />
              <span class="ml-2">Log Out</span>
            </button>
          </template>
        </Menu> -->
      </div>
    </div>
  </nav>
</template>
<style scoped lang="scss">
nav {
  display: flex;
  width: 100%;
  padding: 20px 36px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #f1f1f4;
  background: var(--grey-0, #fff);

  .p-inputtext {
    padding: 0.5rem 0.75rem;
  }

  .p-input-icon-left > .p-inputtext {
    padding-left: 2.5rem;
  }

  .right-menus {
    display: flex;
    align-items: center;
    gap: 1rem;

    .user {
      .user__wrapper {
        display: flex;
        align-items: center;
        gap: 0.7rem;

        .user__detail {
          display: flex;
          flex-direction: column;
          align-items: start;
          .user__detail__name {
            color: var(--grey-900, #16161d);
            font-size: 1rem;
            font-style: normal;
            font-weight: 700;
            line-height: 140%; /* 22.4px */
          }

          .user__detail__email {
            color: var(--grey-500, #6e6e91);
            font-size: 0.8rem;
            font-style: normal;
            font-weight: 400;
            line-height: 140%; /* 16.8px */
          }
        }
      }
    }
  }

  button {
    all: unset;
    cursor: pointer;
    color: #8b8ba7;
  }
}
</style>
