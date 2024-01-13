export const userSecuritySystemRoutes = [
  {
    path: "",
    name: "userList",
    component: () =>
      import("../views/security-system/user/listUser/ListUser.vue"),
  },
  {
    path: "/security-system/users/create",
    name: "addNewUser",
    component: () => import("../views/security-system/user/AddOrEditUser.vue"),
  },
  {
    path: "/security-system/users/edit/:userId",
    name: "editUser",
    component: () => import("../views/security-system/user/AddOrEditUser.vue"),
  },
  {
    path: "/security-system/system-modules",
    name: "systemModules",
    component: () =>
      import("../views/security-system/systemModules/SystemModules.vue"),
  },
];
