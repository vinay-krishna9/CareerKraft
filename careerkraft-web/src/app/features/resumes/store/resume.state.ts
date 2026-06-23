import { Resume } from '../resume.model';

export interface ResumeState {
  currentResume: Resume | null;
  resumes: Resume[];
  loading: boolean;
}

export const initialResumeState: ResumeState = {
  currentResume: null,
  resumes: [],
  loading: false,
};
