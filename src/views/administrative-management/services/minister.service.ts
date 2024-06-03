import { MinisterListFilter } from "@/views/administrative-management/types/ministerListFilter.type.ts";
import { HttpService } from "@/shared/services/Http.ts";
import { Paginate } from "@/shared/types/paginate.type.ts";
import { Minister } from "@/views/administrative-management/types/minister.type.ts";

export const fetchAPIListMinisters = async (filter: MinisterListFilter) => {
  return new HttpService(import.meta.env.VITE_BASE_ENDPOINT).get<
    Paginate<Minister>
  >(`structure-organization/minister`, { ...filter });
};
