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
    jquery,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    cerberus,
    churchdwight,
    sunvial,
    Sunvial,
    photobooth,
    projectportfolio,
    threejs,
  } from "../assets";
  
  export const navLinks = [
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
  
  const services = [
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
      title: "Game Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "Jquery",
      icon: jquery,
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
  
  const experiences = [
    {
      title: "Freelance Web Developer",
      company_name: "Sunvial",
      icon: sunvial,
      iconBg: "#E6DEDD",
      date: "Dec 2023 - Jan 2024",
      points: [
        "Designed, developed, and delivered a full-stack web application tailored to meet the client's specific requirements.",
        "Fostered an agile development environment, enabling the client to maintain control over the final product throughout the project lifecycle.",
        "Provided a responsive, cross-platform editing tool that improved the band's online presence and allowed for seamless site management.",
        "Acquired significant experience in managing and maintaining a backend server to support the website's functionality.",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company_name: "Church & Dwight Co., Inc.",
      icon: churchdwight,
      iconBg: "#383E56",
      date: "Jun 2023 - Aug 2023",
      points: [
        "Engineered and implemented a comprehensive user interface for the company's new chatbot.",
        "Developed robust features, including chat history, token reduction, document uploading, and advanced security protocols.",
        "Maintained a clean and concise codebase, ensuring ease of scalability for future development.",
        "Delivered an impactful presentation highlighting the capability to independently enhance the chatbot interface, which garnered significant interest and approval.",
      ],
    },
    {
      title: "Data Science and Analytics Intern",
      company_name: "Church & Dwight Co., Inc.",
      icon: churchdwight,
      iconBg: "#E6DEDD",
      date: "Jun 2022 - Aug 2022",
      points: [
        "Automated data extraction, cleaning, and merging using Python for forecasting, marketing investment, and sales analysis.",
        "Implemented and updated graphical models for data interpretation.",
        "Developed an efficient solution that enabled other departments to seamlessly utilize and integrate the scripts I created.",
        "Presented final findings to the finance team saving the company over $300k per month mitigating warehouse overfill",
      ],
    },
    {
      title: "Computer Repair Intern",
      company_name: "Cerberus Technology Solutions",
      icon: cerberus,
      iconBg: "#383E56",
      date: "Jan 2020 - Mar 2020",
      points: [
        "Performed comprehensive diagnostics on electronic devices to accurately identify issues.",
        "Generated detailed ticket reports outlining problems and including direct links to recommended parts or solutions.",
        "Managed front desk operations, addressing customer inquiries and resolving complaints related to the service process.",
        "Disassembled and reassembled desktop computers to gain a deeper understanding of essential hardware components.",
      ],
    },
  ];
  
  const testimonials = [
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
  
  const projects = [
    {
      name: "Sunvial",
      description:
        "Developed a full-stack website for a Pennsylvania-based rock band to enhance their professional image and improve their appeal to venues.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: Sunvial,
      source_code_link: "https://sunvial-83daf.web.app/",
    },
    {
      name: "PhotoBooth",
      description:
        "Developed an Instagram-like platform to capture and share memories with friends leading up to graduation. Sign in as guest to freely view the website.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: photobooth,
      source_code_link: "https://photobooth-3b7ab.web.app/",
    },
    {
      name: "Project Portfolio",
      description:
        "A personal website showcasing my journey as a self-taught web developer, featuring project cards highlighting similar work. My favorite aspect are the fireworks!",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "jquery",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: projectportfolio,
      source_code_link: "https://tomashfield.github.io/Tommys_Weekly_Websites/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };