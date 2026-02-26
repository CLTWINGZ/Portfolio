export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  outcomes: string[];
  relatedPosts: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  keywords: string[];
  readingTime: string;
};
