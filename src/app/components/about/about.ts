import { Component, ChangeDetectionStrategy } from '@angular/core';

interface AboutCard {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  readonly highlight =
    'Je transforme mes compétences en expériences web rapides, élégantes et faciles à utiliser.';

  readonly cards: AboutCard[] = [
    {
      icon: 'fa-code',
      title: 'Développement moderne',
      description: 'Sites et interfaces construits avec rigueur, performance et design contemporain.',
    },
    {
      icon: 'fa-brain',
      title: 'Curiosité créative',
      description: 'J’adore explorer de nouvelles idées et les traduire en solutions concrètes.',
    },
    {
      icon: 'fa-rocket',
      title: 'Résultat impactant',
      description: 'Mon objectif est simple : du code utile, lisible et agréable à vivre.',
    },
  ];
}
