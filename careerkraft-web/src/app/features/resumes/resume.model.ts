// TODO: Add work experience, education, skills, etc. to the Resume model.
export interface Resume {
  id: string;
  title: string;
  personalInfo: PersonalInfo;
  createdAt: string;
  updatedAt: string;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  portfolio: string;
  github: string;
  xing: string;
}
