export default interface IListProductsDTO {
  category?: string;
  order?: string;
  filter?: {
    [key: string]: string;
  };
}
