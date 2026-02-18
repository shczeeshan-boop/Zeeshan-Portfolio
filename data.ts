import { Project, Testimonial } from './types';

export const projects: Project[] = [
  {
    id: 'reminder-pro',
    title: 'Reminder Pro: CA CRM',
    category: 'Fintech / CRM',
    description: 'A specialized CRM for Chartered Accountants to manage client deadlines and automate reminders via WhatsApp.',
    role: ['UX Research', 'UI Design', 'Interaction Design'],
    tools: ['Figma', 'Figjam', 'WhatsApp API'],
    thumbnail: 'https://picsum.photos/800/600?random=101',
    year: '2023',
    impact: 'Streamlined client communication for CA firms, reducing manual follow-ups.',
    challenge: 'Chartered Accountants struggle with managing multiple client deadlines and inquiries manually. The existing methods were inefficient and relied heavily on phone calls.',
    solution: 'Developed a comprehensive financial services software that helps CAs manage deadlines and send automated reminders. Integrated a WhatsApp chatbot to handle routine client inquiries efficiently.',
    images: [
      'https://picsum.photos/800/400?random=102',
      'https://picsum.photos/800/400?random=103',
      'https://picsum.photos/800/400?random=104'
    ]
  },
  {
    id: 'swayam-redesign',
    title: 'SWAYAM App Redesign',
    category: 'EdTech / Mobile App',
    description: 'UI/UX revamp of the Government of India\'s Swayam E-Learning Application.',
    role: ['UX Audit', 'UI Redesign', 'User Flow'],
    tools: ['Figma', 'User Research', 'Prototyping'],
    thumbnail: 'https://picsum.photos/800/600?random=105',
    year: '2023',
    impact: 'Improved visual order and flow, creating a more intuitive learning experience.',
    challenge: 'The existing Swayam application suffered from usability issues, cluttered layout, and confusing navigation which hindered the learning experience for users.',
    solution: 'Conducted a comprehensive UX audit to pinpoint pain points. Redesigned the layout and visual hierarchy to create a more intuitive flow and user-friendly interface.',
    images: [
      'https://picsum.photos/800/400?random=106',
      'https://picsum.photos/800/400?random=107'
    ]
  },
  {
    id: 'stubble-mart',
    title: 'Stubble Mart',
    category: 'Marketplace / Sustainability',
    description: 'An eco-friendly marketplace solution connecting farmers with buyers to tackle stubble burning.',
    role: ['Visual Design', 'Concept', 'Wireframing'],
    tools: ['Figma', 'Photoshop'],
    thumbnail: 'https://picsum.photos/800/600?random=108',
    year: '2024',
    impact: 'Conceptualized a sustainable business model to address a critical environmental issue.',
    challenge: 'Stubble burning is a major environmental concern. Farmers lacked an accessible platform to sell stubble as a resource rather than burning it.',
    solution: 'Designed "Stubble Mart," an online marketplace connecting farmers with buyers who use stubble for raw materials. The platform incentivizes eco-friendly practices through a simple, accessible UI.',
    images: [
      'https://picsum.photos/800/400?random=109',
      'https://picsum.photos/800/400?random=110'
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Amit Verma',
    role: 'Senior Developer',
    company: 'Tech Solutions',
    text: 'Zeeshan brings a fresh perspective to design problems. His ability to translate complex requirements into clean interfaces is impressive.',
    avatar: 'https://picsum.photos/100/100?random=50'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Project Manager',
    company: 'Creative Studio',
    text: 'A dedicated team player who is always eager to learn and adapt. The branding work he did for us was exactly what we needed.',
    avatar: 'https://picsum.photos/100/100?random=51'
  },
  {
    id: '3',
    name: 'Rahul Mehta',
    role: 'Founder',
    company: 'StartUp Hub',
    text: 'Zeeshan has a great eye for visual details. His work on our marketing materials significantly improved our engagement rates.',
    avatar: 'https://picsum.photos/100/100?random=52'
  }
];

export const skills = [
  { name: 'User Research', icon: 'Search' },
  { name: 'Wireframing', icon: 'Layout' },
  { name: 'Visual Design', icon: 'Eye' },
  { name: 'Prototyping', icon: 'Smartphone' },
  { name: 'Design Systems', icon: 'Grid' },
  { name: 'Collaboration', icon: 'MousePointer' },
];

export const tools = [
  'Figma', 'Figjam', 'Adobe Photoshop', 'After Effects', 'Jira', 'WordPress'
];