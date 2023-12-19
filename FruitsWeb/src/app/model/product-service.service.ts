import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private products: Product[] = [
      {
        id: 1,
        name: "Bananas",
        origin: "Kenya",
        instock: true,
        price: 100,
        description: "Sweet and creamy, bananas are a popular tropical fruit loved by humans and monkeys alike.",
        image: "assets/images/bananas.png",
        rating: 3.5
      },
      {
        id: 2,
        name: "Watermelons",
        origin: "Tanzania, Kenya, Uganda",
        instock: true,
        price: 400,
        description: "Juicy and refreshing, watermelons are large, red-fleshed fruits perfect for hot summer days.",
        image: "assets/images/watermelon2.jpg",
        rating: 5
      },
      {
        id: 3,
        name: "Apples",
        origin: "South Africa",
        instock: true,
        price: 30,
        description: "Crisp and slightly sweet, apples come in various colors and are packed with vitamins and fiber.",
        image: "assets/images/apples2.jpg",
        rating: 5
      },
      {
        id: 4,
        name: "Oranges",
        origin: "South Africa, Egypt",
        instock: true,
        price: 30,
        description: "Tangy and citrusy, oranges are renowned for their vitamin C content and refreshing flavor.",
        image: "assets/images/oranges.png",
        rating: 4
      },
      {
        id: 5,
        name: "Grapes",
        origin: "South Africa, Egypt",
        instock: true,
        price: 300,
        description: "Small, sweet, and seedless, grapes are often enjoyed fresh but are also used to make wine.",
        image: "assets/images/grapes2.jpg",
        rating: 4
      },
      {
        id: 6,
        name: "Dates",
        origin: "Egypt",
        instock: true,
        price: 150,
        description: "Sweet and chewy, dates are energy-packed fruits that grow on palm trees in arid regions.",
        image: "assets/images/dates2.jpg",
        rating: 4
      },
      {
        id: 7,
        name: "Mangoes",
        origin: "South Africa, Kenya, Uganda",
        instock: true,
        price: 30,
        description: "Juicy and tropical, mangoes are the 'king of fruits' celebrated for their rich flavor and nutritions.",
        image: "assets/images/food2.jpg",
        rating: 4
      },
      {
        id: 8,
        name: "Pineapples",
        origin: "Kenya, Uganda",
        instock: true,
        price: 150,
        description: "Sweet and tangy, pineapples are tropical fruits with a spiky, yellow exterior and juicy, fibrous interior.",
        image: "assets/images/pineapple2.jpg",
        rating: 5
      },
      {
        id: 9,
        name: "Sweet Corn",
        origin: "South Africa, Kenya, Uganda",
        instock: true,
        price: 200,
        description: "Sweet and crunchy, sweet corn is a popular vegetable that is eaten as a snack or cooked in meals.",
        image: "assets/images/sweet-corn.jpg",
        rating: 4
      },
      {
        id: 10,
        name: "Dragon Fruit",
        origin: "South Africa, Kenya, Uganda",
        instock: true,
        price: 300,
        description: "Dragon fruit is a tropical fruit known for its vibrant red skin and sweet, seed-speckled pulp.",
        image: "assets/images/dragon-fruit.jpg",
        rating: 4
      },
      {
        id: 11,
        name: "Pomegranate",
        origin: "South Africa, Kenya, Uganda",
        instock: true,
        price: 250,
        description: "Pomegranates are a vibrant red fruit packed with hundreds of seeds called arils.",
        image: "assets/images/Pomegranate.jpg",
        rating: 4
      },
      {
        id: 12,
        name: "Kiwi",
        origin: "South Africa",
        instock: true,
        price: 100,
        description: "Kiwi is a small, oval-shaped fruit with thin brown skin and a green or yellow flesh.",
        image: "assets/images/Kiwi-fruit.jpg",
        rating: 4
      },
      {
        id: 13,
        name: "Mushrooms",
        origin: "South Africa, Kenya, Uganda",
        instock: true,
        price: 100,
        description: "Mushrooms are edible fungi that come in many shapes and colors.",
        image: "assets/images/mushrooms.jpg",
        rating: 4
      },
      {
        id: 14,
        name:"Strawberries",
        origin: "South Africa, Kenya, Uganda",
        instock: true,
        price: 200,
        description: "Strawberries are bright red, juicy, and sweet. They're an excellent source of vitamin C and manganese and also contain decent amounts of folate (vitamin B9) and potassium.",
        image: "assets/images/straw-berries.jpg",
        rating: 4
      }
  ];
  constructor() { }
  getProductById(productId: number): Product | undefined {
    return this.products.find(product => product.id === productId) || undefined;
  }

}
