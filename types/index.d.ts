export {};

declare global {
  interface Stacks {
    name: string;
    Icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX;
    proficiency: string;
    color: string;
  }

  interface Career {
    id: string;
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
    id: string;
    title: string;
    category: string;
    description: string;
    image?: string;
    link: string;
    slug: string;
    year: string;
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
}
