export const administrativeManagementRoute = [
  {
    path: "districts",
    name: "districtList",
    component: () =>
      import("@/views/administrative-management/district/Districts.vue"),
  },
];
