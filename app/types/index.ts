export interface PersonalInfo {
  name: string;
  headline: string;
  about: string;
  location: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: string[];
}
