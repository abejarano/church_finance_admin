import { defineStore } from "pinia";
import { Region } from "@/views/administrative-management/types/region.type.ts";
import { RegionListFilter } from "@/views/administrative-management/types/regionListFilter.type.ts";

type ListRegionStore = {
  listRegion: Region[];
  filter: RegionListFilter;
};

export const useListRegionStore = defineStore("useListRegionStore", {
  state: (): ListRegionStore => ({
    listRegion: [] as Region[],
    filter: {
      districtId: "",
      perPage: 10,
      page: 1,
    },
  }),
  actions: {
    clearList() {
      this.listRegion = [];
    },
    setRegion(listRegion: Region[]) {
      this.listRegion = [...this.listRegion, ...listRegion];
    },
    getRegionList() {
      return this.listRegion;
    },
    findRegionById(regionId: string): Region | undefined {
      return this.listRegion.find((region) => region.regionId === regionId);
    },
    getFilters(): RegionListFilter {
      return this.filter;
    },
    setFilters(filter: RegionListFilter) {
      this.filter = filter;
    },
    setNextPage(page: number) {
      this.filter.page = page;
    },
  },
});
