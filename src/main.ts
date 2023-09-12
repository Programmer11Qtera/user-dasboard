import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import InputText from "primevue/inputtext";
import "primeicons/primeicons.css";
import Password from "primevue/password";
import Button from "primevue/button";
import Avatar from "primevue/avatar";
import Menubar from "primevue/menubar";
import Menu from "primevue/menu";
import Chart from "primevue/chart";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

// createApp(App).use(store).use(router).mount('#app')
const app = createApp(App);
app.use(store);
app.use(router);
app.use(PrimeVue);

app.component("InputText", InputText);
app.component("Password", Password);
app.component("Button", Button);
app.component("Avatar", Avatar);
app.component("Menubar", Menubar);
app.component("Menu", Menu);
app.component("Chart", Chart);
app.component("DataTable", DataTable);
app.component("Column", Column);


app.mount("#app");
