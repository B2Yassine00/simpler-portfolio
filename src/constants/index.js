import TGR from "/src/assets/company/TGR.png";
import Orange from "/src/assets/company/Orange.png";
import ENSIAS from "/src/assets/company/ENSIAS.png";
import {
  angular,
  flutter,
  java,
  jenkins,
  kubernetes,
  spring,
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
  threejs,
} from "../assets";

import sciatech from "/src/assets/scia-tech.png";
import yaakhayer from "/src/assets/yaa-khayer.png";
import cicd from "/src/assets/cicd.png";
import ensiasar from "/src/assets/ENSIASAR.png";
import reportsapp from "/src/assets/reportsApp.png";
import confy from "/src/assets/home.png";

export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experiences",
      title: "Experiences",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
    
  ];

export const experiences = [
  {
    title: "Software & DevOps engineer intern",
    company_name: "Orange Maroc",
    icon: Orange,
    iconBg: "#E8E8E8",
    date: "July 2023 - Present",
    points: [
      "Led a pioneering initiative targeting the prediction and prevention of sciatica through sensor-equipped insoles.",
      "Directed the creation of an engaging landing page utilizing React, Tailwind CSS, and Framer Motion, hosted on AWS Cloud via AWS Amplify and Route 53.",
      "Designed and implemented a scalable microservices architecture on AWS Cloud, optimizing performance and maintainability.",
      "Expertly developed an airtight authentication service using Spring Security, fortifying user experience and system integrity.",
    ],
  },
  {
    title: "Trésorerie Générale du Royaume",
    company_name: "Trésorerie Générale du Royaume",
    icon: TGR,
    iconBg: "#E8E8E8",
    date: "June 2022 - Aug 2022",
    points: [
      "Proficiently contributed to the development of an interactive management account tracing website, leveraging Angular and Spring Boot frameworks.",
      "Played a key role in designing and constructing a user-friendly interface, ensuring easy accessibility and utilization for employees.",
      "Demonstrated intermediate-level mastery in Angular and Spring Boot, enabling seamless integration of frontend and backend functionalities.",
      "Collaborated effectively with the team, translating requirements into tangible features, and thus enhancing the organization's internal management processes.",
    ],
  },
  {
    title: "Software Engineer Student",
    company_name: "National School of Computer Science and Systems Analysis",
    icon: ENSIAS,
    iconBg: "#E8E8E8",
    date: "Sep 2021 - Sep 2024",
    points: [
      "Successfully completed comprehensive coursework in Cloud DevOps and Development at ENSIAS, gaining a solid foundation in cutting-edge methodologies.",
      "Acquired proficiency in cloud technologies and DevOps practices through hands-on learning, equipping myself to streamline development processes and enhance operational efficiency.",
      "Engaged with a diverse range of topics, including containerization, continuous integration and deployment (CI/CD), and infrastructure as code (IaC), preparing for real-world challenges in cloud-centric environments.",
      "Collaborated within a dynamic educational environment, fostering teamwork, communication, and problem-solving skills, while honing the ability to architect and manage scalable cloud-based solutions.",
    ],
  },
];

export const technologies = [
  {
    name:"Angular",
    icon: angular,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
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

export const projects = [
  {
    name: "Scia-Tech landing page",
    description:
      " a compelling web landing page that effectively presents our sciatica solution, offering a comprehensive overview of how our solution addresses this issue.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: sciatech,
    source_code_link: "https://github.com/B2Yassine00/scia-tech-page",
  },
  {
    name: "YAA-KHAYER",
    description:
      "Web application that enables users to see latest local fundraising campaign, and make donations, and allow associations to raise a campaign explaining their causes.",
    tags: [
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
      {
        name: "Spring boot",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
    ],
    image: yaakhayer,
    source_code_link: "https://github.com/",
  },
  {
    name: "DevOps Pipeline",
    description:
      "A continuous integration/continuous delivery pipeline to automate the processes of building, testing, and delivering. It ensures efficient dev-to-deployment workflows.",
    tags: [
      {
        name: "Jenkins",
        color: "pink-text-gradient",
      },
      {
        name: "Maven",
        color: "orange-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "Kubernetes",
        color: "violet-text-gradient",
      },
    ],
    image: cicd,
    source_code_link: "https://github.com/",
  },
  {
    name: "ENSIASAR",
    description:
      "A mobile App using Augmented Reality to geo map our university campus by using AR to display information about campus locations.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "Android Studio",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
    ],
    image: ensiasar,
    source_code_link: "https://github.com/",
  },
  {
    name: "Reports App",
    description:
      "A mobile App facilitating users in reporting road-related issues with their geolocation. It then analyze the reports to offer a summary of the overall road infrastructure's condition.",
    tags: [
      {
        name: "spaCy",
        color: "blue-text-gradient",
      },
      {
        name: "Android Studio",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
    ],
    image: reportsapp,
    source_code_link: "https://github.com/",
  },
  {
    name: "Confy",
    description:
      "A conference manager's conception and implementation. The web application offers seamless user interfaces, effective data management, and reliable functioning.",
    tags: [
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "mySQL",
        color: "orange-text-gradient",
      },
    ],
    image: confy,
    source_code_link: "https://github.com/B2Yassine00/confy",
  },
];