import { CoverLetterActions } from './cover-letter.actions';
import { coverLetterReducer } from './cover-letter.reducer';
import { initialCoverLetterState } from './cover-letter.state';

describe('coverLetterReducer', () => {
  it('should create draft cover letter with personal info', () => {
    const personalInfo = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@example.com',
      phone: '+49 123456789',
      location: 'Germany',
      linkedin: 'https://linkedin.com/in/example',
      portfolio: 'https://example.com',
    };

    const state = coverLetterReducer(
      initialCoverLetterState,
      CoverLetterActions.createDraftCoverLetter({ personalInfo }),
    );

    expect(state.currentCoverLetter).toEqual(
      jasmine.objectContaining({
        title: 'Untitled Cover Letter',
        personalInfo,
        content: '',
      }),
    );

    expect(state.currentCoverLetter?.id).toBeTruthy();
    expect(state.currentCoverLetter?.createdAt).toBeTruthy();
    expect(state.currentCoverLetter?.updatedAt).toBeTruthy();
  });

  it('should return initial state for unknown action', () => {
    const action = { type: 'Unknown' };

    const state = coverLetterReducer(initialCoverLetterState, action);
    expect(state).toBe(initialCoverLetterState);
  });
});
