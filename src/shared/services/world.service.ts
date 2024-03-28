import { HttpService } from "@/shared/services/Http.ts";
import { State } from "@/shared/types/state.type.ts";

export const fetchStates = (countryId: string): Promise<State[]> => {
  return new HttpService(import.meta.env.VITE_BASE_ENDPOINT).get(
    `world/states/${countryId}`,
  );
};
