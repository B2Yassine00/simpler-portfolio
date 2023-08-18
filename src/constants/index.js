import TGR from "/src/assets/company/TGR.png";
import Orange from "/src/assets/company/Orange.png";
import ENSIAS from "/src/assets/company/ENSIAS.png";
import {
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

export const home = {first_text: "Scia-Tech, Your Innovative Sciatica Solution.",
    second_text:"Your Innovative Sciatica.",
    third_text: "Unlocking Relief, Empowering lives.",
  };

export const about = {big_title: "About Us",
    description: "Contrary to to to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, Aymane it over 2000 years old. Richard McClintock, a Latin Rabii at Hampden-Sydney College in in Virginia, looked up one of the more obscure Latin Latin Latin ."
  };

export const slides = [{url: "/src/assets/insole1.jpg"}, {url: '/src/assets/insole2.jpg'}, {url: "/src/assets/insole1.jpg"}];
    

export const services = [
    {
      title: "Cash Back",
      icon: "/src/assets/cashBack.png",
      description: "Hello my name is Lorem Ipsum",
    },
    {
      title: "Cash Back",
      icon: "/src/assets/cashBack.png",
      description: "Hello my name is Lorem Ipsum",
    },
    {
      title: "Membership",
      icon: "/src/assets/membership.png",
      description: "Hello my name is Lorem Ipsum",
    },
  ];

export const features = [
    {
      name: "feature #1",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      image: "/src/assets/feat.png",
    },
    {
      name: "feature #2",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      image: "/src/assets/feat.png",
    },
    {
      name: "feature #3",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      image: "/src/assets/feat.png",
    },
    {
      name: "feature #4",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      image: "/src/assets/feat.png",
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
      "Shop",
    ],
  },
  {
    title: "Trésorerie Générale du Royaume",
    company_name: "Trésorerie Générale du Royaume",
    icon: TGR,
    iconBg: "#E8E8E8",
    date: "June 2022 - Aug 2022",
    points: [
      "Donwload",
    ],
  },
  {
    title: "Software Engineer Student",
    company_name: "National School of Computer Science and Systems Analysis",
    icon: ENSIAS,
    iconBg: "#E8E8E8",
    date: "Sep 2021 - Sep 2024",
    points: [
      "Donwload",
    ],
  },
];

export const technologies = [
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
    image: "/src/assets/scia-tech.png",
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
    image: "/src/assets/yaa-khayer.png",
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
    image: "/src/assets/cicd.png",
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
    image: "/src/assets/ENSIASAR.png",
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
    image: "/src/assets/reportsApp.png",
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
    image: "/src/assets/home.png",
    source_code_link: "https://github.com/B2Yassine00/confy",
  },
];