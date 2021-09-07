import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  getProducts(){
    return[
      {'id': '1','title': 'Screw Driver', 'price': 400,'stock': 15},
      {'id': '2','title': 'Nut Volt', 'price': 10,'stock': 35},
      {'id': '3','title': 'Resistor', 'price': 80,'stock': 100},
      {'id': '4','title': 'Capacitor', 'price': 80,'stock': 3},
      {'id': '5','title': 'Adapter', 'price': 1000,'stock': 5}
    ]
  }
  products: {
    id: string;
    title: string;
    price: number;
    stock: number;
  }[] = [];
  ngOnInit(){
    this.products = this.getProducts(); }

}
