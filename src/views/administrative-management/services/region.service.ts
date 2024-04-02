import { HttpService } from "@/shared/services/Http.ts";
import { Paginate } from "@/shared/types/paginate.type.ts";
import { RegionListFilter } from "@/views/administrative-management/types/regionListFilter.type.ts";
import { Region } from "@/views/administrative-management/types/region.type.ts";
import { State } from "@/views/administrative-management/types/state.type.ts";

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
export const fetchAPIAllRegionByDistrictId = (districtId: string) => {
  return new HttpService(import.meta.env.VITE_BASE_ENDPOINT).get<Region[]>(
    `structure-organization/region/district/${districtId}`,
  );
};

export const fetchAPIAllState = (): State[] => {
  return [
    {
      stateId: "3eae8a17-7646-48fc-84cd-74bb7747b482",
      countryId: "BRA",
      name: "SERGIPE",
    },
    {
      stateId: "3a0d60f3-1c48-4ac5-8d61-dca486e727d4",
      countryId: "BRA",
      name: "PARAIBA",
    },
    {
      stateId: "b83c98c4-2d33-4649-95bb-0e04cdd7f05d",
      countryId: "BRA",
      name: "ALAGOAS",
    },
    {
      stateId: "7d398527-7d9c-4c41-94f6-d5de43999772",
      countryId: "BRA",
      name: "PIAUI",
    },
    {
      stateId: "252567a1-ebd9-4a6b-8a52-0dd6e331c32e",
      countryId: "BRA",
      name: "RIO DE JANEIRO",
    },
    {
      stateId: "9b079f5f-46ed-486b-80e7-2d6f42f4d895",
      countryId: "BRA",
      name: "SAO PAULO",
    },
    {
      stateId: "aabbf48a-53cb-4a15-8e1d-4f3c9854c41a",
      countryId: "BRA",
      name: "BAHIA",
    },
    {
      stateId: "f4b09ef7-ef98-4ec0-8b1f-52f1536c2564",
      countryId: "BRA",
      name: "TOCANTINS",
    },
    {
      stateId: "2e5cc6c6-4da5-4802-8a84-5571e5eb3625",
      countryId: "BRA",
      name: "CEARA",
    },
    {
      stateId: "2ba69ca2-ec5b-48a7-8ef0-d4aa2c3c7d8c",
      countryId: "BRA",
      name: "PARA",
    },
    {
      stateId: "bf0a1f76-16ea-47eb-8c70-9dfab6ccbbf9",
      countryId: "BRA",
      name: "GOIAS",
    },
    {
      stateId: "d4f601e6-7b6f-4b0a-89b8-8d6a3c25cbfc",
      countryId: "BRA",
      name: "DISTRITO FEDERAL",
    },
    {
      stateId: "573d9970-9946-4c64-8e23-ecc13553f8e6",
      countryId: "BRA",
      name: "RIO GRANDE DO NORTE",
    },
    {
      stateId: "9248c16f-2621-49b9-8c75-3e15e56bc6ef",
      countryId: "BRA",
      name: "RONDONIA",
    },
    {
      stateId: "4c6c99df-4799-40de-8a61-3a497ef8b7e9",
      countryId: "BRA",
      name: "MATO GROSSO DO SUL",
    },
    {
      stateId: "f92a61ac-8830-4b79-8c5e-bdab145a00ea",
      countryId: "BRA",
      name: "MATO GROSSO",
    },
    {
      stateId: "a6b0f491-7a5d-492a-8f11-d3a0b15a9775",
      countryId: "BRA",
      name: "ACRE",
    },
    {
      stateId: "2334b2cf-6d5b-4a76-8a92-7d89a319b71a",
      countryId: "BRA",
      name: "RIO GRANDE DO SUL",
    },
    {
      stateId: "24d3ea44-e7f8-4c14-8b2c-ecb04e6f2951",
      countryId: "BRA",
      name: "MINAS GERAIS",
    },
    {
      stateId: "e3e18a61-1414-48be-9e6d-e61801e7b2f1",
      countryId: "BRA",
      name: "RORAIMA",
    },
    {
      stateId: "2f167ff3-cc75-48e1-8a47-b94f7ed6b920",
      countryId: "BRA",
      name: "MARANHAO",
    },
    {
      stateId: "8e4ce94e-47b9-41e6-8a07-44ee56e3562e",
      countryId: "BRA",
      name: "PARANA",
    },
    {
      stateId: "7fa2d6e8-0f4b-49bf-8b1b-1e06c6f2425b",
      countryId: "BRA",
      name: "PERNAMBUCO",
    },
    {
      stateId: "34c4c042-d1d3-43e3-8b3e-9d49d6f8a2ab",
      countryId: "BRA",
      name: "AMAZONAS",
    },
    {
      stateId: "a52938ff-831c-4e70-8115-826b90ea86f0",
      countryId: "BRA",
      name: "AMAPA",
    },
    {
      stateId: "4e8289ff-93f9-41a2-8a08-d8a6b998839c",
      countryId: "BRA",
      name: "SANTA CATARINA",
    },
    {
      stateId: "50495d1d-5a69-4426-8a4e-c3a3f0f7bcf7",
      countryId: "BRA",
      name: "ESPIRITO SANTO",
    },
  ];
};
