export const administrativeManagementRoute = [
  {
    path: "districts",
    name: "districtList",
    component: () =>
      import("@/views/administrative-management/district/Districts.vue"),
  },
  {
    path: "region",
    name: "regionList",
    component: () =>
      import("@/views/administrative-management/region/Regions.vue"),
  },
];
