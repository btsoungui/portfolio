import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { ProjectsDetail } from './pages/projects-detail/projects-detail';
import { StageDetail } from './pages/stage-detail/stage-detail';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Portfolio - Bryan',
  },
  {
    path: 'experience/stage',
    component: StageDetail,
    title: 'Detail du stage - Bryan',
  },
  {
    path: 'projects/detail',
    component: ProjectsDetail,
    title: 'Detail des projets - Bryan',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
