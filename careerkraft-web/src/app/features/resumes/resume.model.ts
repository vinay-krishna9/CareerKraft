// TODO: Add work experience, education, skills, etc. to the Resume model.
import { PersonalInfo } from '../../shared/models/personal-info.model';

export interface Resume {
  id: string;
  title: string;
  personalInfo: PersonalInfo;
  createdAt: string;
  updatedAt: string;
}
