import project0 from "../assets/projects/project-0.png";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate full stack developer dedicated to crafting reliable and innovative web applications. With a strong foundation in computer science from the University of Michigan and hands-on experience in full-stack development, I specialize in building seamless digital experiences using C#, TypeScript, Angular, React, and SQL. I'm always excited to tackle complex challenges and bring ideas to life through code.`;

export const ABOUT_TEXT = `I am currently a senior studying computer science at the University of Michigan. I’ve gained industry experience through an internship at Urban Science, where I worked on full-stack web applications, API development, and database management. My expertise spans C#, Blazor, SQL, TypeScript, Angular, and React, and I thrive in Agile environments. Beyond coding, I love staying active and embracing the outdoors. Whether it’s hiking scenic trails, playing soccer, or working out, I’m always looking for ways to challenge myself physically and mentally. When I’m not exploring nature or in the gym, you’ll probably find me playing video games or diving into the latest web development technologies to stay ahead of the curve. I’m always on the lookout for exciting opportunities in software engineering where I can grow, contribute, and make an impact.`;

export const EDUCATION = [
  {
    location: "Ann Arbor, MI",
    year: "Sep 2021 - May 2025 (Expected)",
    degree: "Bachelors of Science in Engineering",
    major: "Computer Science",
    gpa: "3.7/4.0",
    school: "University of Michigan",
    courses: [
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Computer Organization",
      "Software Engineering",
      "Web Systems",
      "Operating Systems",
      "Artificial Intelligence",
      "Computer Security",
    ],
  },
];

export const EXPERIENCES = [
  {
    year: "Sep 2024 - Present",
    role: "Computer Consultant II ",
    company: "University of Michigan",
    descriptions: [
      "Diagnose and resolve hardware issues for campus-managed devices, including input panels, touch panels, room schedulers, and digital signage, ensuring seamless functionality across university buildings",
      "Collaborate with a student team to manage inventory, install, and replace devices efficiently, maintaining optimal performance and campus-wide technology infrastructure",
    ],
    technologies: [
      "Teamwork",
      "Communication",
      "Troubleshooting",
      "Problem-Solving",
    ],
  },
  {
    year: "May 2023 - Aug 2024",
    role: "Software Engineering Intern",
    company: "Urban Science",
    descriptions: [
      "Developed and integrated new web pages and API endpoints for an internal admin tool using C# and Blazor, improving production monitoring and configuration management",
      "Designed and implemented a new database with SQL, SSMS, and EF Core to support user roles, action tracking, and rights management within the admin application",
      "Created a file upload tool and resolved critical bugs in production applications using TypeScript and Angular, enhancing functionality and user experience",
      "Developed and deployed Cypress continuous integration tests to ensure the integrity of our two production web applications",
      "Collaborated closely with senior software engineers and managers in Agile sprints and contributed to sprint planning, stand-ups, retrospectives, and demos",
      "Implemented a global error-handling system in the admin application using C# and Blazor, significantly reducing debugging time and increasing operational efficiency",
    ],
    technologies: [
      "Angular",
      "C#",
      "TypeScript",
      "SQL",
      "Blazor",
      "Cypress",
      "Azure DevOps",
      "Postman",
      "Swagger",
    ],
  },
  {
    year: "Sep 2021 - May 2023",
    role: "Auxiliary Facility Supervisor",
    company: "University of Michigan",
    descriptions: [
      "Oversaw operations and provided first aid support during large events across four auxiliary facilities, ensuring a safe and well-organized environment",
      "Maintained clear communication with managers, team members, and rental groups to uphold safety standards and deliver exceptional client satisfaction",
    ],
    technologies: ["Teamwork", "Communication", "Problem-Solving"],
  },
];

export const PROJECTS = [
  {
    title: "Risk Radar",
    image: project0,
    description:
      "Risk Radar is a dynamic web application that provides a comprehensive data dashboard for analyzing disaster and crime trends. Built with a React frontend and a Python Flask backend, the platform integrates real-time data from FEMA and FBI APIs to deliver accurate and up-to-date insights. The frontend leverages JavaScript and Tailwind CSS for a responsive, user-friendly experience, while the SQLite database efficiently manages data storage. Utilizing MUI components, the dashboard presents complex information in a clear, intuitive format, allowing users to explore and understand risk factors across various regions. With its responsive design, Risk Radar ensures seamless access on any device.",
    technologies: ["React", "Tailwind", "JavaScript", "Python", "Flask", "SQL"],
    link: "https://risk-radar-frontend.vercel.app/",
    source: "https://github.com/domthor/risk-radar",
  },
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A personal portfolio website designed to showcase technologies, experience, projects, and contact information in an interactive and visually appealing way. Built with React, TypeScript, Tailwind CSS, and HTML, the website features a modern, responsive design with smooth animations and transitions powered by Framer Motion. Tooltips enhance user experience using React-Tooltip, providing additional context to key elements.",
    technologies: ["React", "Tailwind", "TypeScript", "HMTL", "CSS"],
    link: "https://dominickthornton.com/",
    source: "https://github.com/domthor/react-portfolio",
  },
  {
    title: "Instagram Clone",
    image: project2,
    description:
      "A full-stack Instagram clone that replicates core social media functionalities, allowing users to create accounts, share posts, like and comment on content, and interact with other users. The frontend is built with React and JavaScript, delivering a responsive and dynamic user experience. The backend is powered by Python and Flask, providing RESTful APIs for user authentication, post management, likes, and comments. Data is stored using an SQLite database, efficiently handling user profiles, media posts, interactions, and activity tracking.",
    technologies: [
      "React",
      "JavaScript",
      "Python",
      "Flask",
      "SQL",
      "HTML",
      "CSS",
    ],
    link: "https://www.youtube.com/watch?v=F6nStAIEffA",
    source: "",
  },
  {
    title: "Search Engine",
    image: project3,
    description:
      "A scalable search engine designed with a Service-Oriented Architecture, capable of efficiently processing and indexing a subset of Wikipedia pages using a segmented inverted index with MapReduce. The system features an Index server with a REST API that delivers search results in JSON format, ensuring seamless integration and scalability. A dynamic Search server aggregates results from multiple Index servers, providing a user-friendly interface similar to major search engines. Advanced information retrieval techniques, including tf-idf and PageRank, enhance search relevance, while parallel processing with Madoop optimizes performance.",
    technologies: ["Python", "Flask", "SQL", "HTML", "CSS"],
    link: "https://www.youtube.com/watch?v=9c3R5OHH3g4&feature=youtu.be",
    source: "",
  },
  {
    title: "My First Website",
    image: project4,
    description:
      "During my first high school computer science course, I created my very first website using HTML, CSS, JavaScript, and Bootstrap. This project was my introduction to web development and allowed me to explore the fundamentals of building and styling web pages while adding interactivity. The website was a multi-page experience designed to showcase both my interests and newly learned technical skills. I structured the site using HTML for content, styled it with CSS for visual appeal, and used JavaScript to add dynamic features. Bootstrap helped me create a responsive layout that adapted to different screen sizes.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://www.andrews.edu/~dominickt/index.html",
    source: "",
  },
];

export const CONTACT = {
  address: "Ann Arbor, Michigan",
  phoneNo: "+1 (269) 635 3155",
  email: "domthor@umich.edu",
};
