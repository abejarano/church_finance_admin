import { HttpService } from "@/shared/services/Http.ts";
import {
  FormOptionModule,
  OptionModule,
  SystemModule,
} from "@/views/security-system/types/systemModule.ts";

export const fetchListSystemModule = async () => {
  return await new HttpService(import.meta.env.VITE_BASE_ENDPOINT).get<any>(
    `security-system/modules`,
  );
};

export const createNewModuleService = async (data: SystemModule) => {
  return await new HttpService(import.meta.env.VITE_BASE_ENDPOINT).post<any>(
    `security-system/modules/create-module`,
    data,
  );
};

export const editModuleService = async (data: SystemModule) => {
  return await new HttpService(import.meta.env.VITE_BASE_ENDPOINT).put<any>(
    `security-system/modules/edit-module`,
    data,
  );
};

export const addOptionModuleService = async (
  data: FormOptionModule,
): Promise<OptionModule> => {
  const response = await new HttpService(
    import.meta.env.VITE_BASE_ENDPOINT,
  ).post<any>(
    `security-system/modules/add-options-module/${data.systemModuleId}`,
    data,
  );

  return response.data;
};
