import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import Contact from "../components/ContactPage.vue";
import ExperiencePage from "../components/ExperiencePage.vue";
import Portofolio from "../components/PortofolioPage.vue";
import DetailPage from "../components/DetailPage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/experience",
    name: "Experience",
    component: ExperiencePage,
  },
  {
    path: "/portofolio",
    name: "Portofolio",
    component: Portofolio,
  },
  {
    // path: "/detail/:id",
    path: "/detail",
    name: "DetailPage",
    component: DetailPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
