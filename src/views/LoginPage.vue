<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const username = ref<string>();
const password = ref<string>();
const router = useRouter();
const store = useStore();

function login(): void {
  store.commit("SET_USER_NAME", username);
  store.commit("SET_LOGGEDIN", true);
  router.push({ name: "dashboard" });
}
</script>
<template>
  <div id="login">
    <h1>Welcome Back!</h1>
    <p>Please input your login details!</p>
    <div class="link">
      <router-link activeClass="active" to="/login">Login</router-link>
      <router-link activeClass="active" to="/register">Register</router-link>
    </div>
    <form @submit.prevent="login()">
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
        <Password
          toggleMask
          :feedback="false"
          v-model="password"
          required
          placeholder="Password"
        />
      </label>
      <Button label="Continue" type="submit" />
    </form>
  </div>
</template>
<style scoped lang="scss">
#login {
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
