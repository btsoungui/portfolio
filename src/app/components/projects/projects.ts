import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Projet {
  titre: string;
  description: string;
  tags: string[];
  lien: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  readonly projets: Projet[] = [
    {
      titre: "Feu d'artifice",
      description: 'Simulation interactive de feu d\'artifice avec Easter Eggs et animations fluides',
      tags: ['JavaScript', 'Canvas', 'Animation'],
      lien: 'https://github.com/btsoungui/Feu-d-artifice'
    },
    {
      titre: 'Site vitrine',
      description: 'Site responsive pour une association avec design moderne et UX optimisée',
      tags: ['HTML', 'CSS', 'Responsive'],
      lien: 'https://github.com/toi/projet2'
    },
    {
      titre: 'Ce portfolio',
      description: 'Portfolio personnel showcasant mes compétences avec Angular et design moderne',
      tags: ['Angular', 'SCSS', 'TypeScript'],
      lien: 'https://github.com/btsoungui/portfolio'
    }
  ];
}
