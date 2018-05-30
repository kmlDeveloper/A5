import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../contact-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

 allContact=[];

  constructor(private contactService: ContactServiceService) { }

  ngOnInit() {
    this.contactService.getAllContact().subscribe(data =>this.allContact=data);
    console.log(this.allContact)
  }

}
