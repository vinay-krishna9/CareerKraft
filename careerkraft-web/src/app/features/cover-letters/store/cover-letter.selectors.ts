import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoverLetterState } from './cover-letter.state';

const selectCoverLetterState = createFeatureSelector<CoverLetterState>('coverLetter');

export const selectCurrentCoverLetter = createSelector(
  selectCoverLetterState,
  (state) => state.currentCoverLetter,
);

export const selectCoverLetters = createSelector(
  selectCoverLetterState,
  (state) => state.coverLetters,
);
