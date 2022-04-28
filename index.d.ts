type TProductID = string;

type Url = string;

type TProductAttributes = {
  description: string;
  tipo: string;
  presentacion: string;
  contenido: string;
};

type TProduct = {
  name: string;
  id: TProductID;
  sku: string;
  price: number;
  image: Url;
  attributes: TProductAttributes;
};
