export type Paginate<T> = {
  nextPage: number;
  totalRecord: number;
  results: Array<T>;
};
