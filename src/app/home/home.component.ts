import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   intialTxt:string="Kamal Thakur"
   noOfContact:number
   contacts =[]

  constructor() { }

  ngOnInit() {
    this.noOfContact=this.contacts.length;
  }

  addConatct(){
   this.contacts.push(this.intialTxt);

   this.noOfContact=this.contacts.length;
  }

}
