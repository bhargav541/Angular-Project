import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'AngularSample';
  message = "I am parent";
  childMessage='I am passed to the child component';
  ngOnInit(){};

  displayCounter(count : any){
    console.log(count);
  }

}



