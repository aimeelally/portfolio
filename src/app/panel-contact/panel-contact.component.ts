import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ContactService } from '../contact.service'; 

@Component({
  selector: 'app-panel-contact',
  templateUrl: './panel-contact.component.html',
  styleUrls: ['./panel-contact.component.scss']
})
export class PanelContactComponent {

  constructor(private contactService: ContactService){};

  contactForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    email:    new FormControl("", [
                                  Validators.required, 
                                  Validators.pattern('[a-zA-z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]+')
                                ]),
    message:  new FormControl("", [Validators.required])
  });

  get email(){
    return this.contactForm.get("email");
  }


  submitContactForm(){
    //debugger;
    this.contactService.sendMessage(JSON.stringify(this.contactForm.value));
    console.log(JSON.stringify(this.contactForm.value));
    //alert("The form was submitted");
    this.contactForm.reset();
  }

}
