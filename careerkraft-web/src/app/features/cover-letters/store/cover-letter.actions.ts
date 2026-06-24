import { createActionGroup, props } from '@ngrx/store';
import { PersonalInfo } from '../../../shared/models/personal-info.model';

export const CoverLetterActions = createActionGroup({
  source: 'Cover Letter',
  events: {
    'Create Draft Cover Letter': props<{ personalInfo: PersonalInfo }>(),
  },
});
