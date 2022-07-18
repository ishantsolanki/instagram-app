export interface ProductInterface {
  id: string
  name: string
  image_url: string
}

export interface ProductInterfaceWithPrice extends ProductInterface {
  price: number
}
