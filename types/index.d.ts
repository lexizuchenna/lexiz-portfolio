export {};

declare global {
  interface Stacks {
    name: string;
    Icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX;
    proficiency: string;
    color: string;
  }

  interface Career {
    role: string;
    company: string;
    industry: string;
    period: string;
    description: string;
    isActive?: boolean;
    slug: string;
    location: string;
    overview: string;
    techStack: Array<string>;
    keyAchievements: Array<string>;
  }

  interface Project {
    title: string;
    category: string;
    description: string;
    image?: string;
    link: string;
    slug: string;
    year: string;
    featured?: boolean;
    role: string;
    stack: Array<string>;
    timeline: string;
    summary: string;
    deepDive: string;
    client: string;
    repo?: string;
  }

  interface Service {
    code: string;
    title: string;
    features: string[];
    description: string;
  }

  interface Testimonial {
    name: string;
    review: string;
    organization?: string;
    position?: string;
    profile_image?: string;
  }
}
