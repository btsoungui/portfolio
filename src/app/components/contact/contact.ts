import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  nom = '';
  email = '';
  message = '';

  envoyer() {
    console.log('Message de', this.nom, '-', this.email);
    // Plus tard tu pourras connecter un vrai service email (EmailJS, etc.)
    alert('Message envoyé !');
  }
}
