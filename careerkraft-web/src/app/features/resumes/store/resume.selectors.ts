import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ResumeState } from './resume.state';

const selectResumeState = createFeatureSelector<ResumeState>('resume');

export const selectCurrentResume = createSelector(
  selectResumeState,
  (state) => state.currentResume,
);

export const selectResumes = createSelector(selectResumeState, (state) => state.resumes);
