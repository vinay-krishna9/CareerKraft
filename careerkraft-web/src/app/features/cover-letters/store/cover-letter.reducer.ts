import { createReducer, on } from '@ngrx/store';
import { initialCoverLetterState } from './cover-letter.state';
import { CoverLetterActions } from './cover-letter.actions';

export const coverLetterReducer = createReducer(
  initialCoverLetterState,

  on(CoverLetterActions.createDraftCoverLetter, (state, { personalInfo }) => {
    const now = new Date().toISOString();

    return {
      ...state,
      currentCoverLetter: {
        id: crypto.randomUUID(),
        title: 'Untitled Cover Letter',
        personalInfo,
        content: '',
        createdAt: now,
        updatedAt: now,
      },
    };
  }),
);
