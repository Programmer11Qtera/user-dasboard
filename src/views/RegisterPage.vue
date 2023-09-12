<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";

const username = ref<string>();
const email = ref<string>();
const password = ref<string>();
const retypePassword = ref<string>();
const router = useRouter();

function register(): void {
  router.push({ name: "/dashboard" });
}
</script>
<template>
  <div id="register">
    <h1>Create a new account</h1>
    <p>Register your self!</p>
    <div class="link">
      <router-link activeClass="active" to="/login">Login</router-link>
      <router-link activeClass="active" to="/register">Register</router-link>
    </div>
    <form @submit.prevent="register()">
      <label class="p-input-icon-left">
        <i class="pi pi-user" />
        <InputText
          type="text"
          v-model="username"
          placeholder="Username"
          required
        />
      </label>
      <label class="p-input-icon-left">
        <Icon icon="ion:mail-outline" />
        <InputText type="email" v-model="email" placeholder="Email" required />
      </label>
      <label class="p-input-icon-left">
        <Icon icon="ri:lock-2-line" />
        <Password
          toggleMask
          :feedback="false"
          v-model="password"
          required
          placeholder="Password"
        />
      </label>
      <label class="p-input-icon-left">
        <Password
          toggleMask
          :feedback="false"
          v-model="retypePassword"
          required
          placeholder="Retype password"
        />
      </label>
      <Button label="Register" type="submit" />
    </form>
  </div>
</template>
<style scoped lang="scss">
#register {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 100px;

  h1 {
    font-size: x-large;
  }

  p {
    margin-bottom: 20px;
  }

  .link {
    border-radius: 10px;
    background: #f4f4f4;
    display: flex;
    gap: 10px;
    padding: 6px;
    margin-bottom: 30px;

    a {
      text-align: center;
      display: block;
      padding: 10px 28px;
      border-radius: 10px;
      text-decoration: none;
      text-transform: capitalize;
      color: #636363;
    }

    a.active {
      background-color: white;
      color: black;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
}
</style>
