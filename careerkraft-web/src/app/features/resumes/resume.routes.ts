import { ResumeListPage } from './pages/resume-list-page/resume-list-page';
import { ResumeEditorPage } from './pages/resume-editor-page/resume-editor-page';

export const RESUME_ROUTES = [
  { path: '', component: ResumeListPage },
  { path: ':id/edit', component: ResumeEditorPage },
  { path: '**', redirectTo: '/resumes' },
];
