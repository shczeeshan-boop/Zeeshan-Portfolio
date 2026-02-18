export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  role: string[];
  tools: string[];
  thumbnail: string;
  year: string;
  impact: string;
  challenge: string;
  solution: string;
  images: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

export interface NavItem {
  label: string;
  href: string;
}