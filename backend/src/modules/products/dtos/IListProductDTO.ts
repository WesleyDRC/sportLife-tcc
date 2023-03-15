export default interface IListProductsDTO {
  category?: string;
  filter?: {
    [key: string]: string;
  };
}
