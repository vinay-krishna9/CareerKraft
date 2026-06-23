import { createActionGroup, props } from '@ngrx/store';
import { PersonalInfo } from '../../../shared/models/personal-info.model';

export const ResumeActions = createActionGroup({
  source: 'Resume',
  events: {
    'Create Draft Resume': props<{ personalInfo: PersonalInfo }>(),
  },
});
