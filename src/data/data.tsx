import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/avatar.jpg';
import testimonialImage from '../images/testimonial.webp';
import resumePDF from '../images/LE-BAO-QUOC.pdf';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Bao Quoc`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Ho Chi Minh City based <strong className="text-stone-100">Backend Software Engineer</strong>, currently working
        at <strong className="text-stone-100">TEKO VIETNAM TECHNOLOGY JOINT STOCK COMPANY</strong> helping build scalable, 
        high-performance integration-accounting-warehouse systems for large-scale e-commerce platforms.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I enjoy listening to <strong className="text-stone-100">music</strong>, 
        reading <strong className="text-stone-100">books</strong>, and exploring 
        <strong className="text-stone-100"> new ideas and experiences</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: resumePDF,
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Ho Chi Minh City', Icon: MapIcon},
    {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Vietnamese', Icon: FlagIcon},
    {label: 'Interests', text: 'Listening to music, playing video games, and reading books', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Technology Ho Chi Minh City', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'TEKO SOFTWARE SOLUTION COMPANY', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Vietnamese',
        level: 10,
      },
      {
        name: 'English',
        level: 7,
      },
      {
        name: 'German',
        level: 2,
      },
    ],
  },
    {
    name: 'Backend development',
    skills: [
      {
        name: 'Golang',
        level: 9,
      },
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Kotlin',
        level: 4,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 6,
      },
      {
        name: 'JavaScript',
        level: 6,
      },
    
    ],
  },
  {
    name: 'Database',
    skills: [
      {
        name: 'MySQL',
        level: 9,
      },
      {
        name: 'PostgreSQL',
        level: 4,
      },
      {
        name: 'MongoDB',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'E-Commerce Integration Platform',
    description: 'Built scalable microservices architecture for integration-accounting-warehouse systems handling millions of transactions monthly using Golang and Python.',
    url: 'https://github.com/BaoquocF1804',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
  },
  {
    title: 'Partner API Gateway',
    description: 'Developed RESTful APIs for logistics, payment, and merchant integrations with optimized performance (500ms → 200ms latency).',
    url: 'https://github.com/BaoquocF1804',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
  },
  {
    title: 'Cloud-Native Microservices',
    description: 'Designed and deployed microservices on Google Cloud Platform (GKE) with gRPC for efficient service-to-service communication.',
    url: 'https://github.com/BaoquocF1804',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
  },
  {
    title: 'CI/CD Pipeline Automation',
    description: 'Implemented automated CI/CD pipelines using GitHub Actions and GitLab CI to accelerate deployment cycles and reduce production issues.',
    url: 'https://github.com/BaoquocF1804',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop',
  },
  {
    title: 'High-Performance API Optimization',
    description: 'Optimized critical API endpoints and database queries, improving system performance and reducing response times by 60%.',
    url: 'https://github.com/BaoquocF1804',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop',
  },
  {
    title: 'Distributed System Architecture',
    description: 'Architected event-driven microservices with message queues and caching layers for high-availability e-commerce systems.',
    url: 'https://github.com/BaoquocF1804',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
  },
  {
    title: 'Payment Integration Service',
    description: 'Built secure payment gateway integrations with multiple providers, ensuring PCI compliance and transaction reliability.',
    url: 'https://github.com/BaoquocF1804',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
  },
  {
    title: 'Warehouse Management System',
    description: 'Developed backend services for real-time inventory tracking and warehouse operations with PostgreSQL and Redis.',
    url: 'https://github.com/BaoquocF1804',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
  {
    title: 'Monitoring & Observability',
    description: 'Implemented comprehensive logging, monitoring, and alerting systems using Prometheus, Grafana, and ELK stack.',
    url: 'https://github.com/BaoquocF1804',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
  {
    title: 'Database Performance Tuning',
    description: 'Optimized database schemas, indexes, and queries for MySQL and PostgreSQL, handling high-volume transactional workloads.',
    url: 'https://github.com/BaoquocF1804',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop',
  },
  {
    title: 'API Documentation & Testing',
    description: 'Created comprehensive API documentation with Swagger/OpenAPI and implemented robust unit and integration testing frameworks.',
    url: 'https://github.com/BaoquocF1804',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop',
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'October 2020 - October 2024',
    location: 'Ho Chi Minh City University of Technology',
    title: 'Computer Engineering Major',
    content: <p>GPA: 3.2 - Completed comprehensive coursework in software engineering, system design, and computer science fundamentals.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2023 - Present',
    location: 'TEKO VIETNAM TECHNOLOGY JOINT STOCK COMPANY',
    title: 'Software Engineer - Backend',
    content: (
      <div>
        <p className="mb-2">Backend Engineer with 2+ years of experience in backend development and system integration for e-commerce platforms. Skilled in Golang, Python, and cloud-native microservices.</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Participated in the design, development, and operation of integration-accounting-warehouse systems for large-scale e-commerce platforms</li>
          <li>Built and maintained partner integration APIs (logistics, payment, merchant) using Golang and Python, handling millions of monthly transactions</li>
          <li>Designed and deployed microservices on Google Cloud Platform (GKE) with gRPC for efficient service-to-service communication</li>
          <li>Implemented CI/CD pipelines to accelerate deployment cycles and reduce production issues</li>
          <li>Optimized API latency from ~500ms down to 200ms, improving overall system performance</li>
          <li>Contributed to unit testing, integration testing, and code reviews to ensure service reliability</li>
        </ul>
      </div>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'lbaoquoc.1804@gmail.com',
      href: 'mailto:lbaoquoc.1804@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Ho Chi Minh City, Vietnam',
      href: 'https://www.google.ca/maps/place/Ho+Chi+Minh+City,+Vietnam/@10.7546181,106.3655626,10z/data=!3m1!4b1!4m6!3m5!1s0x317529292e8d3dd1:0xf15f5aad773c112b!8m2!3d10.8230989!4d106.6296638!16zL20vMGhuNGg?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D',
    },
    {
      type: ContactType.Instagram,
      text: '@lbaoquoc',
      href: 'https://www.instagram.com/optimistic_mun_18/',
    },
    {
      type: ContactType.Github,
      text: 'BaoquocF1804',
      href: 'https://github.com/BaoquocF1804',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/BaoquocF1804'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/bao-quoc-panda18/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/optimistic_mun_18/'},
];
