import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

interface ExperienceItem {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  private readonly router = inject(Router);

  readonly company = 'Stage full-stack chez AXOPEN';
  readonly period = 'Expérience professionnelle';

  readonly summary =
    'Pendant mon stage chez AXOPEN à Lyon, j’ai participé au développement full-stack d’applications web, avec une attention particulière portée à la qualité du code, à l’expérience utilisateur et au travail en équipe.';

  readonly missions: ExperienceItem[] = [
    {
      icon: 'fa-laptop-code',
      title: 'Développement full-stack',
      description:
        'Participation à la création d’interfaces, à l’intégration de fonctionnalités et à l’amélioration de parcours utilisateurs.',
    },
    {
      icon: 'fa-diagram-project',
      title: 'Travail en équipe',
      description:
        'Découverte du fonctionnement d’une équipe projet chez AXOPEN, avec échanges techniques et suivi des retours.',
    },
    {
      icon: 'fa-shield-halved',
      title: 'Qualité et maintenance',
      description:
        'Correction de bugs, clarification du code existant et vérification du comportement sur différents écrans.',
    },
  ];

  readonly skills = ['Angular', 'TypeScript', 'SCSS', 'Git', 'Responsive design'];

  openDetails(): void {
    void this.router.navigate(['/experience/stage']);
  }
}
