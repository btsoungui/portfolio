import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CodeCompetence, COMPETENCES_BUT } from '../../data/competences-but';

interface Projet {
  titre: string;
  description: string;
  tags: string[];
  lien: string;
  competences: CodeCompetence[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  private readonly router = inject(Router);

  readonly competencesBut = COMPETENCES_BUT;

  readonly projets: Projet[] = [
    {
      titre: "Feu d'artifice",
      description:
        "Simulation graphique d'un feu d'artifice avec animations interactives et effets visuels personnalises.",
      tags: ['Python', 'Animation', 'Turtle'],
      lien: 'https://github.com/btsoungui/Feu-d-artifice',
      competences: ['C1', 'C2'],
    },
    {
      titre: 'Portfolio',
      description:
        'Portfolio personnel developpe avec Angular pour presenter mon profil, mes competences et mes projets.',
      tags: ['Angular', 'SCSS', 'TypeScript'],
      lien: 'https://github.com/btsoungui/portfolio',
      competences: ['C1', 'C2', 'C3', 'C5'],
    },
    {
      titre: 'Projet annuaire',
      description:
        "Application en langage C permettant de gerer un annuaire avec les principales operations de consultation et de gestion des contacts.",
      tags: ['C', 'Algorithmique', 'Gestion de donnees'],
      lien: 'https://github.com/btsoungui/projet-annuaire',
      competences: ['C1', 'C4', 'C5', 'C6'],
    },
    {
      titre: 'Petite rue',
      description:
        "Modelisation graphique d'une rue en Python avec Turtle, integrant des formes simples et une composition visuelle structuree.",
      tags: ['Python', 'Turtle', 'Graphisme'],
      lien: 'https://github.com/btsoungui/petite-rue',
      competences: ['C1', 'C2'],
    },
  ];

  openDetails(): void {
    void this.router.navigate(['/projects/detail']);
  }
}
