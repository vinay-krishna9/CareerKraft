import { PersonalInfo } from '../../shared/models/personal-info.model';

export interface CoverLetter {
  id: string;
  title: string;
  personalInfo: PersonalInfo;
  content: string;
  createdAt: string;
  updatedAt: string;
}
