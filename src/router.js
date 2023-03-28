import { createWebHistory, createRouter } from "vue-router";
import Colchones from "./components/ColchonesView.vue";
import Almohadas from "./components/AlmohadasView.vue";
import Sillones from "./components/SillonesView.vue";
import Sommier from "./components/SommierView.vue"
import Accesorios from "./components/Almohadas&AccesoriosView.vue"

const routes = [
  {
    path: "/almohadas",
    component: Almohadas,
    name:"almohadas"
  },
  {
    path: "/almohadas-accesorios",
    component: Accesorios,
    name:"accesorios-almohadas"
  },
  {
    path: "/sillones",
    component: Sillones,
    name:"sillones"
  },
  {
    path: "/colchones",
    component: Colchones,
    name: "colchones"
  },
  {
    path: "/sommmier",
    component: Sommier,
    name: "sommier"
  },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
