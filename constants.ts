import { ChartBar, Building2, PencilRuler, GraduationCap } from 'lucide-react';
import { Service, CompanyStats } from './types';

// Extracted Knowledge Base from the PDF
export const COMPANY_PROFILE_TEXT = `
You are the virtual AI assistant for Lorha Spaces Architecture & Engineering.
Here is the official company profile and knowledge base you must use to answer questions. 
Do not invent facts outside of this scope.

COMPANY OVERVIEW:
Lorha Spaces Architecture and Engineering is a proudly South African, 100% Black-owned multidisciplinary firm.
Founded in 2016.
Level 1 BBBEE contributor.
We bridge the gap between infrastructure development and social impact.
We operate as both a private consulting company and a non-profit organization.
Tagline: "The Intelligent Way to Plan. The Compassionate Way to Empower."

LEADERSHIP & TEAM:
Managed by a Pr. Engineer and Pr. Architect.
Supported by a team of seasoned professionals with decades of experience in civil engineering, architecture, and project management.
Key Contact: Phillimon Ramaselela.
Email: ramaselela@yahoo.com, info@lorhaspaces.co.za
Phone: 074 498 7146 / 087 188 3552

SERVICES - Engineering & Architecture:
- Civil & Structural Engineering
- Water & Sanitation Systems
- Municipal Infrastructure
- Roads & Transportation Design
- Hydraulic & Hydrological Studies
- Residential, Commercial & Institutional Architecture
- Retail & Mall Developments
- Forecourt & Filling Station Design
- Quantity Surveying

SERVICES - Project & Programme Management:
- Lifecycle Planning
- Construction Supervision
- Feasibility Studies
- Tenant Coordination
- Development Management

COMMUNITY & TRAINING (Social Responsibility):
Non-profit arm: Esethu Skills Development NPC.
Mission: Mentor, train, and uplift youth in township and rural schools.
Skills taught: AutoCAD, Civil 3D, Revit.
Goal: Provide job-ready technical skills to disadvantaged communities.

VISION:
To lead in consulting engineering and technical education by applying proven methods with a fresh, inclusive approach. Competing globally while transforming local communities.

MISSION:
To develop infrastructure using sound engineering principles and empower young professionals. Prioritizing environmental responsibility and social equity.

AFFILIATIONS:
ECSA (Engineering Council of South Africa), SACAP, SAICE.
`;

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
  { label: 'AI Assistant', path: '/chat' },
];

export const SERVICES_DATA: Service[] = [
  {
    title: "Engineering & Architecture",
    description: "Comprehensive design solutions for civil, structural, and architectural projects.",
    items: [
      "Civil & Structural Engineering",
      "Water & Sanitation Systems",
      "Municipal Infrastructure",
      "Roads & Transportation",
      "Residential & Commercial Architecture",
      "Retail & Mall Developments"
    ],
    icon: Building2
  },
  {
    title: "Project Management",
    description: "End-to-end lifecycle planning and supervision to ensure project success.",
    items: [
      "Lifecycle Planning",
      "Construction Supervision",
      "Feasibility Studies",
      "Tenant Coordination",
      "Development Management"
    ],
    icon: ChartBar
  },
  {
    title: "Training & Community",
    description: "Empowering the next generation through Esethu Skills Development NPC.",
    items: [
      "AutoCAD Training",
      "Civil 3D & Revit Skills",
      "Youth Mentorship",
      "Rural School Upliftment",
      "Job-ready Technical Skills"
    ],
    icon: GraduationCap
  }
];

// Reconstructed data from the "Table" slide in the PDF (approximated years)
export const GROWTH_DATA: CompanyStats[] = [
  { year: '2019', users: 100, revenue: 6750 },
  { year: '2020', users: 500, revenue: 33750 },
  { year: '2021', users: 2000, revenue: 135000 },
  { year: '2022', users: 4000, revenue: 270000 },
];

export const PROJECTS = [
  {
    id: '1',
    title: 'Municipal Road Infrastructure',
    category: 'Engineering',
    description: 'Large-scale transportation design and implementation for local municipality, improving connectivity and safety.',
    image: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: '2',
    title: 'Urban Retail Complex',
    category: 'Architecture',
    description: 'Modern mixed-use retail development featuring sustainable design principles and community spaces.',
    image: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: '3',
    title: 'Rural Water Sanitation',
    category: 'Engineering',
    description: 'Implementation of critical water and sanitation systems in underserved rural areas.',
    image: 'https://picsum.photos/800/600?random=3'
  },
  {
    id: '4',
    title: 'Esethu Training Center',
    category: 'Community',
    description: 'A dedicated facility for mentoring youth in CAD and technical drawing skills.',
    image: 'https://picsum.photos/800/600?random=4'
  }
];
