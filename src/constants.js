/**
 * Global Constants - Centralized data to eliminate duplication
 * Updated for 2026 modern portfolio standards
 */

import calculatorImage from './Assets/images/calculator.png'
import clockImage from './Assets/images/clock.png'
import libraryImage from './Assets/images/library.png'
import parkingImage from './Assets/images/parking.png'
import tableImage from './Assets/images/table.png'
import tictacImage from './Assets/images/tictac.png'
import weatherImage from './Assets/images/weather.png'


export const SOCIAL_LINKS = [
  { icon: 'bxl-linkedin', href: 'https://www.linkedin.com/in/rajnish-kumar-sharma-5910b9288', label: 'LinkedIn' },
  { icon: 'bxl-github', href: 'https://github.com/RajnisSharma', label: 'GitHub' },
  { icon: 'bxl-twitter', href: 'https://x.com/Rajnishkum9731', label: 'Twitter' },
  { icon: 'bxl-instagram', href: '#', label: 'Instagram' },
  { icon: 'bx-envelope', href: 'mailto:rajnishkumar81145@gmail.com', label: 'Email' },
]

export const NAV_LINKS = ['home', 'about', 'services', 'statistics', 'projects', 'testimonials', 'contact']

export const SKILLS = [
  'Python', 'Django', 'FastAPI', 'React.js', 'JavaScript', 'TypeScript',
  'LangChain', 'OpenAI API', 'LLMs', 'RAG', 'SQL / MySQL', 'REST APIs',
  'Docker', 'Git / GitHub', 'Bootstrap 5', 'HTML5 & CSS3', 'Tailwind CSS', 
  'MongoDB', 'Redis', 'AWS',
]

export const SERVICES = [
  {
    icon: 'bx-brain',
    title: 'AI & GenAI Development',
    desc: 'Building LLM-powered apps, RAG pipelines, AI agents, and chatbots using LangChain, OpenAI, and Hugging Face. Turning complex AI models into production-ready solutions.',
    color: '#00e5a0',
  },
  {
    icon: 'bxl-python',
    title: 'Python & Backend',
    desc: 'Robust backend systems with Python, Django, FastAPI, and RESTful APIs. Scalable architecture with SQL/MySQL, authentication, and clean code practices.',
    color: '#7c3aed',
  },
  {
    icon: 'bx-code-block',
    title: 'Full Stack Web',
    desc: 'End-to-end web applications with React.js frontends and Django/FastAPI backends. Responsive, accessible, and optimised for performance across all devices.',
    color: '#e91e8c',
  },
]

export const PROJECTS = [
    {
    id: 1,
    title: 'Resume Matcher',
    image: null,
    icon: 'bx-file',
    desc: 'AI-powered resume matcher that extracts skills and matches them to job descriptions.',
    link: '#',
    tags: ['Python', 'Django', 'AI'],
  },
  {
    id: 2,
    title: 'AI Chatbot RAG',
    image: null,
    icon: 'bx-chat',
    desc: 'Chat with a virtual assistant powered by LangChain, OpenAI, and Hugging Face.',
    link: 'https://rajnish.pythonanywhere.com/',
    tags: ['Python', 'LangChain', 'OpenAI', 'Hugging Face'],
  },
  {
    id: 3,
    title: 'Library Management System',
    image: libraryImage,
    icon: 'bx-book',
    desc: 'Manage books, members, and borrowing with a user-friendly interface.',
    link: 'https://rajnish.pythonanywhere.com/',
    tags: ['Python', 'Django'],
  },
  {
    id: 4,
    title: 'Personal Finance Manager',
    image: null,
    icon: 'bx-wallet',
    desc: 'Track expenses, set budgets, and visualize financial data with interactive charts.',
    link: 'https://github.com/RajnisSharma/Personal-finance-manager',
    tags: ['Python', 'Django', 'React'],
  },
  {
    id: 5,
    title: 'Vikmo Sales Order & Inventory Lite',
    image: null,
    icon: 'bx-store',
    desc: 'Lightweight sales order and inventory management system for small businesses.',
    link: 'https://github.com/RajnisSharma/Sales-Order-and-Inventory-Lite',
    tags: ['Python', 'Django', 'React'],
  },
  {
    id: 6,
    title: 'E-commerce Store',
    image: null,
    icon: 'bx-store',
    desc: 'Full-featured online store with product listings, cart, and checkout.',
    link: 'https://github.com/RajnisSharma/E-Shop',
    tags: ['Python', 'Django', 'Django REST Framework'],
  },
  {
    id: 7,
    title: 'A_invoice_dashboard',
    image: null,
    icon: 'bx-file',
    desc: 'AI-powered invoice dashboard with data extraction and insights.',
    link: 'https://github.com/RajnisSharma/A_invoice_dashboard',
    tags: ['Python', 'Django', 'React'],
  },
  {
    id: 8,
    title: 'Weather App',
    image: weatherImage,
    icon: 'bx-cloud',
    desc: 'Real-time weather by city — temperature, humidity, wind speed with dynamic icons.',
    link: 'https://rajnissharma.github.io/Weather/',
    tags: ['React', 'API'],
  },
  {
    id: 9,
    title: 'Tic-Tac-Toe',
    image: tictacImage,
    icon: 'bx-grid',
    desc: 'Classic two-player game with responsive design, smooth animations and clean UI.',
    link: 'https://rajnissharma.github.io/Tic-Tac-toe-Game/',
    tags: ['React', 'Game'],
  },
  {
    id: 10,
    title: 'Calculator',
    image: calculatorImage,
    icon: 'bx-calculator',
    desc: 'Interactive calculator with arithmetic, square roots, and percentage functions.',
    link: 'https://rajnissharma.github.io/Calculator/',
    tags: ['JavaScript', 'Frontend'],
  },
  {
    id: 11,
    title: 'Parking System',
    image: parkingImage,
    icon: 'bx-car',
    desc: 'Smart parking app for selecting durations and calculating fees dynamically.',
    link: 'https://rajnissharma.github.io/Parking/',
    tags: ['React', 'App'],
  },
  {
    id: 12,
    title: 'Table Generator',
    image: tableImage,
    icon: 'bx-table',
    desc: 'Dynamic multiplication table generator with customisable range and columns.',
    link: 'https://rajnissharma.github.io/Table-Generator-/',
    tags: ['JavaScript', 'Tool'],
  },
  {
    id: 13,
    title: 'Digital Clock',
    image: clockImage,
    icon: 'bx-time-five',
    desc: 'Stylish 12-hour digital clock with AM/PM indicator and live updates.',
    link: 'https://rajnissharma.github.io/Clock/',
    tags: ['JavaScript', 'Utility'],
  },
  {
    id: 14,
    title: 'Portfolio Website',
    image: null,
    icon: 'bx-briefcase',
    desc: 'Modern, responsive portfolio with AI-powered features and smooth animations.',
    link: '#',
    tags: ['React', 'Design'],
  },
]
