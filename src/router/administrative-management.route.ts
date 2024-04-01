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
  {
    path: "region/:regionId",
    name: "editRegion",
    component: () =>
      import("../views/administrative-management/region/AddOrEditRegion.vue"),
  },
  {
    path: "region/new",
    name: "addNewRegion",
    component: () =>
      import("../views/administrative-management/region/AddOrEditRegion.vue"),
  },
  {
    path: "church",
    name: "churchList",
    component: () =>
      import("../views/administrative-management/church/Church.vue"),
  },
];
