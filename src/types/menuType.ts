export interface Counter {
  name: string;
  price: number;
  img: string;
}

export interface Menus extends Counter {
  id: number;
  isArchive: boolean;
}
