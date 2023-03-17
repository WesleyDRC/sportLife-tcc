export default interface IListProductsDTO {
  category?: string;
  orderBy?: string;
  filter?: {
    [key: string]: string;
  };
}
