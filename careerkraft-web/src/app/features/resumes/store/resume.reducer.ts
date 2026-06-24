import { createReducer, on } from '@ngrx/store';
import { initialResumeState } from './resume.state';
import { ResumeActions } from './resume.actions';

export const resumeReducer = createReducer(
  initialResumeState,

  on(ResumeActions.createDraftResume, (state, { personalInfo }) => {
    const now = new Date().toISOString();

    return {
      ...state,
      currentResume: {
        id: crypto.randomUUID(),
        title: 'Untitled Resume',
        personalInfo,
        createdAt: now,
        updatedAt: now,
      },
    };
  }),
);
