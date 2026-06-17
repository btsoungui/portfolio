import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface StageSection {
  readonly title: string;
  readonly description: string;
  readonly items: readonly string[];
}

@Component({
  selector: 'app-stage-detail',
  imports: [RouterLink],
  templateUrl: './stage-detail.html',
  styleUrl: './stage-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StageDetail {
  readonly technologies = ['Full-stack', 'Angular', 'TypeScript', 'SCSS', 'Git', 'Responsive design'];

  readonly sections: StageSection[] = [
    {
      title: 'Contexte',
      description:
        'J’ai réalisé mon stage chez AXOPEN à Lyon, dans un environnement professionnel orienté développement web full-stack.',
      items: [
        'Découverte du fonctionnement d’une entreprise spécialisée dans le développement logiciel.',
        'Compréhension des besoins fonctionnels et techniques d’un projet web.',
        'Adaptation à un code existant et à ses conventions.',
      ],
    },
    {
      title: 'Missions réalisées',
      description:
        'J’ai participé à des missions de développement full-stack, en travaillant à la fois sur les interfaces et sur la logique applicative.',
      items: [
        'Intégration de pages et de composants responsive.',
        'Ajout et amélioration de fonctionnalités web.',
        'Correction de bugs et amélioration de l’expérience utilisateur.',
        'Participation aux échanges techniques et aux retours de revue.',
      ],
    },
    {
      title: 'Compétences développées',
      description:
        'Cette expérience chez AXOPEN m’a aidé à renforcer ma rigueur, mon autonomie et ma capacité à livrer du code propre dans un cadre professionnel.',
      items: [
        'Structurer un composant autour d’une responsabilité claire.',
        'Mieux comprendre les interactions entre front-end et back-end.',
        'Écrire du TypeScript plus lisible et plus sûr.',
        'Tester visuellement les comportements sur plusieurs tailles d’écran.',
      ],
    },
  ];
}
