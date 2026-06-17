import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ProjectDetail {
  readonly title: string;
  readonly repository: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly highlights: readonly string[];
  readonly link: string;
}

@Component({
  selector: 'app-projects-detail',
  imports: [RouterLink],
  templateUrl: './projects-detail.html',
  styleUrl: './projects-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsDetail {
  readonly projects: ProjectDetail[] = [
    {
      title: "Feu d'artifice",
      repository: 'btsoungui/Feu-d-artifice',
      description:
        "Simulation graphique d'un feu d'artifice avec animations interactives et effets visuels personnalises.",
      technologies: ['Python', 'Turtle', 'Animation'],
      highlights: [
        'Creation de formes animees pour simuler un rendu visuel dynamique.',
        'Organisation du code autour de comportements graphiques simples et reutilisables.',
        'Ajout d interactions et de details visuels pour enrichir le rendu final.',
      ],
      link: 'https://github.com/btsoungui/Feu-d-artifice',
    },
    {
      title: 'Portfolio',
      repository: 'btsoungui/portfolio',
      description:
        'Portfolio personnel developpe avec Angular pour presenter mon profil, mes competences, mon experience et mes projets.',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      highlights: [
        'Structuration du projet avec des composants Angular autonomes.',
        'Mise en place d une navigation claire entre la page principale et les pages detaillees.',
        'Travail sur le responsive design, les interactions et la coherence visuelle.',
      ],
      link: 'https://github.com/btsoungui/portfolio',
    },
    {
      title: 'Projet annuaire',
      repository: 'btsoungui/projet-annuaire',
      description:
        "Application en langage C permettant de gerer un annuaire avec les principales operations de consultation et de gestion des contacts.",
      technologies: ['C', 'Algorithmique', 'Gestion de donnees'],
      highlights: [
        'Manipulation de structures de donnees pour organiser les informations.',
        'Implementation d operations de recherche, d ajout et de consultation.',
        'Renforcement des bases en programmation procedurale et en logique applicative.',
      ],
      link: 'https://github.com/btsoungui/projet-annuaire',
    },
    {
      title: 'Petite rue',
      repository: 'btsoungui/petite-rue',
      description:
        "Modelisation graphique d'une rue en Python avec Turtle, integrant des formes simples et une composition visuelle structuree.",
      technologies: ['Python', 'Turtle', 'Graphisme'],
      highlights: [
        'Composition d une scene graphique a partir de formes simples.',
        'Utilisation de Turtle pour travailler le placement, les couleurs et les proportions.',
        'Approche progressive pour transformer une idee visuelle en rendu structure.',
      ],
      link: 'https://github.com/btsoungui/petite-rue',
    },
  ];

  readonly skills = ['Angular', 'TypeScript', 'SCSS', 'Python', 'C', 'Git', 'Responsive design'];
}
