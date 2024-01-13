export const userProfileRoutes = [
  {
    path: "",
    name: "profileList",
    component: () => import("@/views/security-system/profile/ProfileList.vue"),
  },
  {
    path: "/security-system/profile/edit/:profileId",
    name: "editProfile",
    component: () =>
      import("@/views/security-system/profile/AddOrEditProfile.vue"),
  },
  {
    path: "/security-system/profile/create",
    name: "addNewProfile",
    component: () =>
      import("@/views/security-system/profile/AddOrEditProfile.vue"),
  },
];
