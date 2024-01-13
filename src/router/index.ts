import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "@/layouts/AppLayout.vue";
import { userSecuritySystemRoutes } from "@/router/userSecuritySystemRoutes.ts";
import { userProfileRoutes } from "@/router/userProfileRoutes.ts";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("../views/auth/LoginView.vue"),
    },
    {
      path: "/dashboard",
      component: AppLayout,
      children: [
        {
          path: "/dashboard",
          name: "home",
          component: () => import("../views/dashboard/Index.vue"),
        },
        {
          path: "/security-system/users",
          children: userSecuritySystemRoutes,
        },
        {
          path: "/security-system/profiles",
          children: userProfileRoutes,
        },
      ],
    },
  ],
});

export default router;
