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
  {
    path: "church/new",
    name: "addNewChurch",
    component: () =>
      import("../views/administrative-management/church/AddOrEditChurch.vue"),
  },
  {
    path: "church/:churchId",
    name: "editChurch",
    component: () =>
      import("../views/administrative-management/church/AddOrEditChurch.vue"),
  },
  {
    path: "ministers",
    name: "ministerList",
    component: () =>
      import("@/views/administrative-management/minister/Ministers.vue"),
  },
];
