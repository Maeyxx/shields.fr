import {
  createRouter,
  createWebHashHistory
} from "vue-router";
import HomeView from "../views/Home.vue";
import Shop from "../views/Shop.vue"
import Members from "../views/privateMembers.vue"
import OfficeMembers from "../views/OfficeMembers.vue"
import Competitions from "../views/Competitions.vue"
import CompetitionsTeam from "../views/CompetitionsTeam.vue"


const routes = [{
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/members",
    name: "members",
    component: Members,
  },
  {
    path: "/office",
    name: "office",
    component: OfficeMembers,
  },
  {
    path: "/competitions",
    name: "competitions",
    component: Competitions,
  },
  {
    path: "/teamdls",
    name: "teamdls",
    component: CompetitionsTeam,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },

  {
    path: "/shop",
    name: "shop",
    component: Shop,
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;