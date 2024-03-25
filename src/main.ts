import "@/assets/styles.scss";

import { createApp } from "vue";
import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-green/theme.css";

import App from "./App.vue";
import { createPinia } from "pinia";

import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import router from "./router";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import SplitButton from "primevue/splitbutton";
import Dialog from "primevue/dialog";
import DataTable from "primevue/datatable";
import Card from "primevue/card";
import Divider from "primevue/divider";
import Column from "primevue/column";
import ConfirmationService from "primevue/confirmationservice";
import DialogService from "primevue/dialogservice";

import i18n from "./i18n";
import Toast from "primevue/toast";
import ConfirmDialog from "primevue/confirmdialog";

const pinia = createPinia();

const app = createApp(App);

app.use(createPinia());
app.use(ConfirmationService);
app.use(ToastService);
app.use(DialogService);
app.use(router);
app.use(pinia);
app.use(i18n);
app.use(PrimeVue, { ripple: true });
app.component("InputText", InputText);
app.component("Button", Button);
app.component("SplitButton", SplitButton);
app.component("Dialog", Dialog);
app.component("DataTable", DataTable);
app.component("Card", Card);
app.component("Divider", Divider);
app.component("Column", Column);
app.component("Toast", Toast);
app.component("ConfirmDialog", ConfirmDialog);

app.mount("#app");
