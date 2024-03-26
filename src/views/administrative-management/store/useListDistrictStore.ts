import { defineStore } from "pinia";
import { District } from "@/views/administrative-management/types/district.type.ts";
import { DistrictListFilter } from "@/views/administrative-management/types/districtListFilter.type.ts";

type DistrictListStore = {
  districtList: District[];
  filter: DistrictListFilter;
};

export const useListDistrictStore = defineStore("useListDistrictStore", {
  state: (): DistrictListStore => ({
    districtList: [] as District[],
    filter: {
      perPage: 10,
      page: 1,
      name: "",
      stateId: "",
    },
  }),
  actions: {
    setDistrict(districtList: District[]) {
      this.districtList = [...this.districtList, ...districtList];
    },
    getDistrictList() {
      return this.districtList;
    },
    findDistrictById(districtId: string): District | undefined {
      return this.districtList.find(
        (district) => district.districtId === districtId,
      );
    },
    getFilters(): DistrictListFilter {
      return this.filter;
    },
    setFilters(filter: DistrictListFilter) {
      this.filter = filter;
    },
  },
});
