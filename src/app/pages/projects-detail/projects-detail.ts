import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CodeCompetence, COMPETENCES_BUT } from '../../data/competences-but';

interface CompetenceDetail {
  readonly code: CodeCompetence;
  readonly justification: string;
}

interface ProjectDetail {
  readonly title: string;
  readonly repository: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly highlights: readonly string[];
  readonly link: string;
  readonly competences: readonly CompetenceDetail[];
}

@Component({
  selector: 'app-projects-detail',
  imports: [RouterLink],
  templateUrl: './projects-detail.html',
  styleUrl: './projects-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsDetail {
  readonly competencesBut = COMPETENCES_BUT;

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
      competences: [
        {
          code: 'C1',
          justification:
            "Conception et developpement d'une application graphique complete en Python, gerant l'animation, la logique d'affichage et la modularite du code.",
        },
        {
          code: 'C2',
          justification:
            "Travail sur la fluidite du rendu en ajustant le nombre de particules, les temporisations et la structure des boucles d'animation.",
        },
      ],
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
      competences: [
        {
          code: 'C1',
          justification:
            "Developpement complet d'une application web avec Angular, incluant la navigation, les composants reutilisables et la gestion du routing.",
        },
        {
          code: 'C2',
          justification:
            "Mise en oeuvre d'optimisations Angular (OnPush, lazy loading, gestion du bundle) pour ameliorer les performances et l'experience utilisateur.",
        },
        {
          code: 'C3',
          justification:
            "Deploiement de l'application sur un serveur web accessible en ligne, avec configuration de l'hebergement et gestion du domaine.",
        },
        {
          code: 'C5',
          justification:
            'Pilotage solo du projet de la conception a la mise en ligne, avec planification, choix d architecture et iterations successives.',
        },
      ],
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
      competences: [
        {
          code: 'C1',
          justification:
            "Realisation d'une application CLI en C couvrant la gestion memoire, les structures de donnees et la logique applicative.",
        },
        {
          code: 'C4',
          justification:
            "Mise en place d'un systeme de gestion de contacts avec operations de lecture, ajout, modification et suppression des donnees.",
        },
        {
          code: 'C5',
          justification:
            "Conduite d'un projet dans le cadre d'une SAe avec planification des fonctionnalites, repartition des taches et livraisons incrementales.",
        },
        {
          code: 'C6',
          justification:
            'Travail en equipe avec coordination des developpements, revue du code entre binomes et gestion collective des responsabilites.',
        },
      ],
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
      competences: [
        {
          code: 'C1',
          justification:
            "Creation d'une application graphique en Python structurant une scene visuelle a partir de formes geometriques assemblees avec Turtle.",
        },
        {
          code: 'C2',
          justification:
            'Organisation du code en fonctions reutilisables pour optimiser la composition visuelle et faciliter les ajustements de la scene.',
        },
      ],
    },
  ];

  readonly skills = ['Angular', 'TypeScript', 'SCSS', 'Python', 'C', 'Git', 'Responsive design'];
}
