export interface IParams<T> {
  resource: string;
  baseUrl: string;
  payload: T;
  queryParams?: string[];
}
