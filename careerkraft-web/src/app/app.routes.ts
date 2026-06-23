import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'resumes',
    loadChildren: () => import('./features/resumes/resume.routes').then((m) => m.RESUME_ROUTES),
  },
];
