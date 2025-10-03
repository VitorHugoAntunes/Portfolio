import DashboardImage from '@/assets/dashboard.png';
import DocSiteImage from '@/assets/docsite.png';
import ForumPbImage from '@/assets/forum-pb.png';
import LoqueiImage from '@/assets/loquei.png';
import MeuChaDigitalImage from '@/assets/meu-cha-digital.png';
import HorizonWebImage from '@/assets/horizon-web.png';
import RfsacadasImage from '@/assets/rfsacadas.png';
import type { Work } from '@/types/works';
import { StaticImageData } from 'next/image';

interface Translations {
  worksSection?: {
    projects?: {
      [key: string]: {
        title?: string;
        category?: string;
        description?: string;
        longDescription?: string;
        features?: string[];
        status?: string;
        challenges?: string;
      };
    };
  };
}

interface WorkWithTranslationKeys extends Omit<Work, 'title' | 'category' | 'description' | 'longDescription' | 'technologies' | 'features' | 'status' | 'challenges'> {
  translationKey: string;
  staticData: {
    technologies: string[];
    github: string | null;
    slug: string;
    screenshots: StaticImageData[];
  };
}

export const worksData: WorkWithTranslationKeys[] = [
  {
    id: 0,
    translationKey: 'horizonweb',
    image: HorizonWebImage,
    date: '2025',
    staticData: {
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'i18n', 'Vercel', 'SEO', 'Hero UI'],
      github: null,
      slug: 'https://horizon-web-rho.vercel.app/',
      screenshots: [HorizonWebImage]
    },
    slug: '',
    github: null,
    screenshots: [HorizonWebImage]
  },
  {
    id: 1,
    translationKey: 'docsite',
    image: DocSiteImage,
    date: '2025',
    staticData: {
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Remark', 'Rehype', 'MDX', 'Static Site Generation'],
      github: 'https://github.com/VitorHugoAntunes/Docs',
      slug: 'https://docs-six-snowy.vercel.app/',
      screenshots: [DocSiteImage]
    },
    slug: '',
    github: null,
    screenshots: []
  },
  {
    id: 2,
    translationKey: 'rfsacadas',
    image: RfsacadasImage,
    date: '2025',
    staticData: {
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'SEO', 'Zod'],
      github: null,
      slug: 'https://rfsacadas.com.br/',
      screenshots: [RfsacadasImage]
    },
    slug: '',
    github: null,
    screenshots: []
  },
  {
    id: 3,
    translationKey: 'meuchadigital',
    image: MeuChaDigitalImage,
    date: '2025',
    staticData: {
      technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'TypeScript', 'Tailwind CSS', 'EFI Bank API', 'NGINX', 'Multer', 'Socket.io', 'OAuth2', 'AWS S3', 'AWS EC2', 'Nodemailer', 'Zod'],
      github: null,
      slug: 'https://meuchadigital.com/',
      screenshots: [MeuChaDigitalImage]
    },
    slug: '',
    github: null,
    screenshots: []
  },
  {
    id: 4,
    translationKey: 'loquei',
    image: LoqueiImage,
    date: '2024',
    staticData: {
      technologies: ['React Native', 'Expo', 'TypeScript', 'Java', 'PostgresSQL', 'React Query', 'Axios', 'Magic Link', 'Zod', 'Clean Architecture'],
      github: null,
      slug: 'https://www.linkedin.com/posts/vitor-hugo-antunes-passos-59151018a_loquei-activity-7270036767825612800-FbqB/',
      screenshots: [LoqueiImage]
    },
    slug: '',
    github: null,
    screenshots: []
  },
  {
    id: 5,
    translationKey: 'forumpb',
    image: ForumPbImage,
    date: '2024',
    staticData: {
      technologies: ['React', 'Firebase Auth', 'Firestore', 'TypeScript', 'Styled Components', 'Redux Toolkit', 'Axios', 'Zod', 'Vercel'],
      github: 'https://github.com/VitorHugoAntunes/React_forum',
      slug: 'https://react-forum-peach.vercel.app/',
      screenshots: [ForumPbImage]
    },
    slug: '',
    github: null,
    screenshots: []
  },
  {
    id: 6,
    translationKey: 'dashboard',
    image: DashboardImage,
    date: '2024',
    staticData: {
      technologies: ['React', 'TypeScript', 'Recharts', 'Styled Components', 'React Router', 'Firebase', 'XLSX', 'Vercel'],
      github: 'https://github.com/VitorHugoAntunes/ReactJS_Dashboard',
      slug: 'https://reactjs-dashboard-test.netlify.app',
      screenshots: [DashboardImage]
    },
    slug: '',
    github: null,
    screenshots: []
  },
];

export function getTranslatedWorks(translations: Translations): Work[] {
  return worksData.map((workData) => ({
    id: workData.id,
    title: translations?.worksSection?.projects?.[workData.translationKey]?.title || '',
    category: translations?.worksSection?.projects?.[workData.translationKey]?.category || '',
    description: translations?.worksSection?.projects?.[workData.translationKey]?.description || '',
    longDescription: translations?.worksSection?.projects?.[workData.translationKey]?.longDescription || '',
    technologies: workData.staticData.technologies,
    features: translations?.worksSection?.projects?.[workData.translationKey]?.features || [],
    status: translations?.worksSection?.projects?.[workData.translationKey]?.status || '',
    challenges: translations?.worksSection?.projects?.[workData.translationKey]?.challenges || '',
    image: workData.image,
    date: workData.date,
    github: workData.staticData.github,
    slug: workData.staticData.slug,
    screenshots: workData.staticData.screenshots
  }));
}