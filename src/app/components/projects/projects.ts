import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projets = [
    {
      titre: 'Gestion de bibliothèque',
      description: 'Application Java avec base de données MySQL.',
      lien: 'https://github.com/toi/projet1'
    },
    {
      titre: 'Site vitrine',
      description: 'Site HTML/CSS responsive pour une association.',
      lien: 'https://github.com/toi/projet2'
    }
  ];
}