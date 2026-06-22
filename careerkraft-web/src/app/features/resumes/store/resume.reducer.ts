import { createReducer, on } from '@ngrx/store';
import { initialResumeState } from './resume.state';
import { ResumeActions } from './resume.actions';

export const resumeReducer = createReducer(
  initialResumeState,

  on(ResumeActions.createDraftResume, (state, { personalInfo }) => ({
    ...state,
    currentResume: {
      id: crypto.randomUUID(),
      title: 'Untitled Resume',
      personalInfo,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  })),
);
