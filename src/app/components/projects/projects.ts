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
      titre: "Feu d'artifice",
      description: "Simulation de feu d'artifice avec des Easter Eggs",
      lien: 'https://github.com/btsoungui/Feu-d-artifice'
    },
    {
      titre: 'Site vitrine',
      description: 'Site HTML/CSS responsive pour une association.',
      lien: 'https://github.com/toi/projet2'
    }
  ];
}