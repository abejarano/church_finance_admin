import { HttpService } from "@/shared/services/Http.ts";
import { Paginate } from "@/shared/types/paginate.type.ts";
import { RegionListFilter } from "@/views/administrative-management/types/regionListFilter.type.ts";
import { Region } from "@/views/administrative-management/types/region.type.ts";

export const fetchAPIListRegion = (filter: RegionListFilter) => {
  return new HttpService(import.meta.env.VITE_BASE_ENDPOINT).get<
    Paginate<Region>
  >(`structure-organization/region`, { ...filter });
};

export const saveAPIRegion = (payload: any) => {
  return new HttpService(import.meta.env.VITE_BASE_ENDPOINT).post<{
    message: string;
    data: Region;
  }>(`structure-organization/region`, payload);
};
