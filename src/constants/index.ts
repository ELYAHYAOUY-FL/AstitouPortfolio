import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,

  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Full Stack Developer",
    companyName: "RADEEL Larache",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - April 2023",
    points: [
      "Developing a secure web application for enterprise training management, including planning and ISO-compliant report generation."
    ]
  },
  {
    title: "Web Developer",
    companyName: "BrosMedia Larache",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "May 2023 - September 2023",
    points: [
      "Implemented a web application using Laravel with a focus on CSRF, HTTPS, and SSL for securing APIs.",
      "Managed secure password handling."
    ]
  },
  {
    title: "IT Club Director",
    companyName: "FPL Larache",
    icon: meta,
    iconBg: "#383E56",
    date: "2022 - 2023",
    points: [
      "Secured workstations in the library using RBAC.",
      "Project design.",
      "Trained students in web development."
    ]
  },
  
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "MLOps Integration for Malware Detection",
    description:
      "Development of two models: one based on signatures and another on images. Backup and deployment of models via a web interface with Flask and Angular. Using MLOps practices to manage the model lifecycle.",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "Sklearn",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
      {
        name: "Kubernetes",
        color: "blue-text-gradient",
      },
      {
        name: "GitHub CI/CD",
        color: "pink-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
    ],
    image: "image_url_here", // Replace with actual image URL
    sourceCodeLink: "https://github.com/your_repo_link_here", // Replace with actual GitHub link
  },
  {
    name: "Real-time Churn Prediction",
    description:
      "Development of a web application using Apache Kafka Streams to predict customer churn in real-time. Data preprocessing with PySpark Mlib, training multiple models, saving the best model for predictions, storing results in MongoDB, and displaying via Flask or Django.",
    tags: [
      {
        name: "Apache Kafka Streams",
        color: "blue-text-gradient",
      },
      {
        name: "PySpark Mlib",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: "image_url_here", // Replace with actual image URL
    sourceCodeLink: "https://github.com/your_repo_link_here", // Replace with actual GitHub link
  },
  {
    name: "Simulation of Enterprise Architecture",
    description:
      "Design and integration of an enterprise architecture with Nagios monitoring, utilizing Windows Server for Active Directory, ensuring network security, and implementing backup and high availability solutions.",
    tags:  [
      {
        name: "FreeBSD",
        color: "blue-text-gradient",
      },
      {
        name: "FreeNAS",
        color: "green-text-gradient",
      },
      {
        name: "Windows Server",
        color: "pink-text-gradient",
      },
      {
        name: "GNS3",
        color: "blue-text-gradient",
      },
      {
        name: "Nagios",
        color: "green-text-gradient",
      },
      {
        name: "Heartbeat",
        color: "pink-text-gradient",
      },
      {
        name: "ids/ips",
        color: "blue-text-gradient",
      },
      {
        name: "par-feu ",
        color: "green-text-gradient",
      },
    
    ],
    image: "image_url_here", // Replace with actual image URL
    sourceCodeLink: "https://github.com/your_repo_link_here", // Replace with actual GitHub link
  },
  {
    name: "Secure Development of a Web Application",
    description:
      "Secure design and development of a web application based on a microservices architecture, using Angular, Flask, Spring Boot, Spring Security, and REST APIs. Expertise in securing against XSS and CSRF attacks.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "pink-text-gradient",
      },
      {
        name: "Spring Security",
        color: "blue-text-gradient",
      },
      {
        name: "API REST",
        color: "green-text-gradient",
      },
    ],
    image: "image_url_here", // Replace with actual image URL
    sourceCodeLink: "https://github.com/your_repo_link_here", // Replace with actual GitHub link
  },
  
];


export { services, technologies, experiences, testimonials, projects };
