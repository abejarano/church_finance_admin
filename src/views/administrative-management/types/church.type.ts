export type Church = {
  address: string;
  churchId: string;
  city: string;
  createdAt: Date;
  email: string;
  name: string;
  number: string;
  openingDate: Date;
  postalCode: string;
  region: {
    regionId: string;
    name: string;
  };
  street: string;
};
