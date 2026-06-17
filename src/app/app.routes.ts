import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
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
    title: 'Détail du stage - Bryan',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
