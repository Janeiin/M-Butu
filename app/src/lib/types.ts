export type Collection = {
  slug: string;
  index: string;
  title: string;
  species: string;
  summary: string;
  description: string;
  image: string;
  size: 'tall' | 'mid' | 'wide';
  origin: string;
  grades: string[];
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  description: string;
  image: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export type WhyReason = {
  title: string;
  description: string;
  icon: string;
};

export type TimelineEntry = { year: string; title: string; description: string };
