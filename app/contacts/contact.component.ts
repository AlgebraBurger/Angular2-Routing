import { Component } from '@angular/core';
@Component({

  templateUrl: 'app/contacts/contact.component.html'
})
export class ContactComponent {
  title = 'Contact';
  contact:Contact = {
      fullName: "Julius",
      email: "juliusbacosa@gmail.com"    
  }
  onSubmit(){
      alert("xxx");
  }
}

export class Contact{
    fullName:string;
    email:string;    
}

