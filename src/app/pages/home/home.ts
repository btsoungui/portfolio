import { ChangeDetectionStrategy, Component } from '@angular/core';

import { About } from '../../components/about/about';
import { Contact } from '../../components/contact/contact';
import { Experience } from '../../components/experience/experience';
import { Projects } from '../../components/projects/projects';
import { Skills } from '../../components/skills/skills';

@Component({
  selector: 'app-home',
  imports: [About, Skills, Experience, Projects, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
