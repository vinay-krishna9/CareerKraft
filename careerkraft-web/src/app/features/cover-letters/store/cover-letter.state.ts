import { CoverLetter } from '../cover-letter.model';

export interface CoverLetterState {
  currentCoverLetter: CoverLetter | null;
  coverLetters: CoverLetter[];
  loading: boolean;
}

export const initialCoverLetterState: CoverLetterState = {
  currentCoverLetter: null,
  coverLetters: [],
  loading: false,
};
