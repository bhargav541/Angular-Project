import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

searchText='';
  id=null;
  public hdate=new Date();
  public name ='Krishna';
  public message = 'welcome to angular';
  public characters = ['Krishna', 'Govindaa', 'Achyutha', 'Madhava', 'Janardhana', 'Vasudeva', 'Anantha'];

  public person =  {
    fname: 'Radhe',
    lname: 'Krishna'};

public val=5.678;

  @Input() greetMessage! : String;
  @Output() valueChange = new EventEmitter();

   counter=0;
   valueChanged(){
     this.counter=this.counter + 1;
     this.valueChange.emit(this.counter);
   }

  constructor() { }
  name1="krishna";

  product={
    title: "cricket bat",
    price:500
  }

  btnheight=100;
  btnwidth=100;

  addProduct(){
    console.log("Product added")

  }
  ngOnInit(){
    this.products = this.getProducts(); 
  }
  products: {
    id: string;
    title: string;
    price: number;
    stock: number;
  }[] = [];
  getProducts(){​​​
    return[
          {​​​'id':'1','title':'Screw Driver', 'price':400,'stock':15}​​​,
          {​​​'id':'2','title':'Nut Volt', 'price':9,'stock':35}​​​,
          {​​​'id':'3','title':'Resistor', 'price':8,'stock':100}​​​,
          {​​​'id':'4','title':'Capacitor', 'price':80,'stock':3}​​​,
          {​​​'id':'5','title':'Adapter', 'price':1000,'stock':5}​​​
        ]
      }​​​
  
      value = "";
  handleInput(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
  }

}