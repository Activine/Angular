export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface ApiProduct extends Product {
  description: string,
  author: string,
  createdAt: string,
  updatedAt: string,
}

export interface User {
  username: string,
  password: number
}

export interface AuthResponse {
  access_token: string
}
