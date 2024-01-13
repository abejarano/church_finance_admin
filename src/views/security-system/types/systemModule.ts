export enum OptionModuleMethodsType {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export type OptionModule = {
  optionModuleId: string;
  name: string;
  description: string;
  isActive: boolean;
  URL: string;
  method: OptionModuleMethodsType;
};

export type SystemModule = {
  name: string;
  description: string;
  isActive: boolean;
  systemModuleId?: string;
  options?: OptionModule[];
};

export type FormOptionModule = OptionModule & {
  systemModuleId: string;
};
