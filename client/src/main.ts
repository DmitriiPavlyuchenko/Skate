import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/styles/style.css";

const app = createApp(App);

type Module = { [key: string]: any };
const COMS: Record<string, Module> = import.meta.globEager(
  "./components/ui/*.vue"
);
Object.keys(COMS).forEach((key) => {
  const match: RegExpMatchArray | null = key.match(/[\w]+(?=.vue)/);
  if (!match) return;
  const name: string = match[0];
  const component: Module = COMS[key].default;
  app.component(name, component);
});

app.use(createPinia());
app.use(router);

app.mount("#app");
