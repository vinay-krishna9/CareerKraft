import { ResumeActions } from './resume.actions';
import { resumeReducer } from './resume.reducer';
import { initialResumeState } from './resume.state';

describe('resumeReducer', () => {
  it('should create draft resume with personal info', () => {
    const personalInfo = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@example.com',
      phone: '+49 123456789',
      location: 'Germany',
      linkedin: 'https://linkedin.com/in/example',
      portfolio: 'https://example.com',
    };

    const state = resumeReducer(
      initialResumeState,
      ResumeActions.createDraftResume({ personalInfo }),
    );

    expect(state.currentResume).toEqual(
      jasmine.objectContaining({
        title: 'Untitled Resume',
        personalInfo,
      }),
    );

    expect(state.currentResume?.id).toBeTruthy();
    expect(state.currentResume?.createdAt).toBeTruthy();
    expect(state.currentResume?.updatedAt).toBeTruthy();
  });

  it('should return initial state for unknown action', () => {
    const action = { type: 'Unknown' };

    const state = resumeReducer(initialResumeState, action);
    expect(state).toBe(initialResumeState);
  });
});
