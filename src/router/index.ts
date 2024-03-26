import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "@/layouts/AppLayout.vue";
import { userSecuritySystemRoute } from "@/router/userSecuritySystem.route.ts";
import { userProfileRoute } from "@/router/userProfile.route.ts";
import { administrativeManagementRoute } from "@/router/administrative-management.route.ts";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("../views/auth/Login.vue"),
    },
    {
      path: "/dashboard",
      component: AppLayout,
      children: [
        {
          path: "",
          name: "home",
          component: () => import("../views/dashboard/Index.vue"),
        },
        {
          path: "/security-system/users",
          children: userSecuritySystemRoute,
        },
        {
          path: "/security-system/profiles",
          children: userProfileRoute,
        },
        {
          path: "/administrative-management",
          children: administrativeManagementRoute,
        },
      ],
    },
  ],
});

export default router;
