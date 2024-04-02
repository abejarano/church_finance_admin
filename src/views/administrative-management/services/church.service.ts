import { HttpService } from "@/shared/services/Http.ts";
import { Paginate } from "@/shared/types/paginate.type.ts";
import {
  Church,
  formChurch,
} from "@/views/administrative-management/types/church.type.ts";
import { ChurchListFilter } from "@/views/administrative-management/types/churchListFilter.type.ts";

export const fetchPaginateChurch = (filter: ChurchListFilter) => {
  return new HttpService(import.meta.env.VITE_BASE_ENDPOINT).get<
    Paginate<Church>
  >(`church`, { ...filter });
};

export const saveAPIChurch = (church: formChurch) => {
  return new HttpService(import.meta.env.VITE_BASE_ENDPOINT).post<any>(
    `church`,
    church,
  );
};
