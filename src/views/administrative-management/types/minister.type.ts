export enum MinisterType {
  REVERED = "Reverendo",
  DEACON = "Diácono",
  WORKERS = "Obrero",
}

export type Minister = {
  ministerId: string;
  name: string;
  email: string;
  phone: string;
  dni: string;
  ministerType: MinisterType;
  regionId: string;
};
