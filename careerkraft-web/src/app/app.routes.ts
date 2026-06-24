import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'resumes',
    loadChildren: () => import('./features/resumes/resume.routes').then((m) => m.RESUME_ROUTES),
  },
  {
    path: 'cover-letters',
    loadChildren: () =>
      import('./features/cover-letters/cover-letter.routes').then((m) => m.COVER_LETTER_ROUTES),
  },
];
