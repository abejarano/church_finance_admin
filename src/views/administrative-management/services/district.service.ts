import { HttpService } from "@/shared/services/Http.ts";
import { DistrictListFilter } from "@/views/administrative-management/types/districtListFilter.type.ts";
import { Paginate } from "@/shared/types/paginate.type.ts";
import { District } from "@/views/administrative-management/types/district.type.ts";

export const fetchListDistrict = (filter: DistrictListFilter) => {
  return new HttpService(import.meta.env.VITE_BASE_ENDPOINT).get<
    Paginate<District>
  >(`structure-organization/district`, { ...filter });
};

export const fetchAPIAllDistrict = (): Promise<District[]> => {
  return new HttpService(import.meta.env.VITE_BASE_ENDPOINT).get<District[]>(
    `structure-organization/district/all`,
  );
};

export const fetchListDistrictByState = (filter: DistrictListFilter) => {};
