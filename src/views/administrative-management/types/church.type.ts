export type Church = {
  address: string;
  churchId: string;
  city: string;
  createdAt: Date;
  email: string;
  name: string;
  number: string;
  openingDate: string;
  postalCode: string;
  region: {
    regionId: string;
    name: string;
  };
  street: string;
};

export type formChurch = {
  name: string;
  city: string;
  address: string;
  street: string;
  number: string;
  postalCode: string;
  email: string;
  openingDate: string;
  regionId: string;
};
