import { CoverLetterEditorPage } from './pages/cover-letter-editor-page/cover-letter-editor-page';
import { CoverLetterListPage } from './pages/cover-letter-list-page/cover-letter-list-page';

export const COVER_LETTER_ROUTES = [
  { path: '', component: CoverLetterListPage },
  { path: ':id/edit', component: CoverLetterEditorPage },
  { path: '**', redirectTo: '/cover-letters' },
];
