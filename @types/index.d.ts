export type ArticleLink = {
  date: string;
  title: string;
  description: string;
  url: string;
};

export type ProjectLink = {
  title: string;
  description: string;
  url: string;
  domain: string;
};

export type TeachingGroupLink = {
  title: string;
  courses: CourseLink[];
};

export type CourseLink = {
  name: string;
  title: string;
  description: string;
  url: string;
};
