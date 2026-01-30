const BASE = import.meta.env.BASE_URL;

const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: `${BASE}icons/wifi.svg`,
  },
  {
    id: 2,
    img: `${BASE}icons/search.svg`,
  },
  {
    id: 3,
    img: `${BASE}icons/user.svg`,
  },
  {
    id: 4,
    img: `${BASE}icons/mode.svg`,
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: `${BASE}images/finder.png`,
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: `${BASE}images/safari.png`,
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: `${BASE}images/photos.png`,
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: `${BASE}images/contact.png`,
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: `${BASE}images/terminal.png`,
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: `${BASE}images/trash.png`,
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Jan 20, 2026",
    title: "Git Isn’t Guessing — It’s Running an Algorithm on Your Typos",
    image: `${BASE}images/blog-2.png`,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7419091326526271488/",
  },
  {
    id: 2,
    date: "Nov 13, 2025",
    title:
      "Inside the Browser: How Downloads, Temp Files, and Resume Really Work",
    image: `${BASE}images/blog-4.png`,
    link: "https://medium.com/@chauhangagan117/inside-the-browser-how-downloads-temp-files-and-resume-really-work-27b2e20b5c9d",
  },
  {
    id: 3,
    date: "Aug 23, 2025",
    title: "🏆 Master Prefix Sum + HashMap in 7 Days — A Simple Practice Plan",
    image: `${BASE}images/blog-5.png`,
    link: "https://medium.com/@chauhangagan117/master-prefix-sum-hashmap-in-7-days-a-simple-practice-plan-5cd22e5d0458",
  },
];

const techStack = [
  {
    category: "Programming Languages",
    items: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "React.js", "Redux", "Redux Toolkit"],
  },
  {
    category: "Styling",
    items: ["Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Flask"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Testing",
    items: ["Cypress", "Playwright"],
  },
  {
    category: "DevOps & Cloud",
    items: ["AWS", "Jenkins", "Git", "GitHub", "Bitbucket", "GitHub Copilot"],
  },
  {
    category: "Collaboration",
    items: ["Jira", "Confluence", "Microsoft 365", "Slack"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: `${BASE}icons/github.svg`,
    bg: "#24292e",
    link: "https://github.com/GAGGZ1",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: `${BASE}icons/linkedin.svg`,
    bg: "#0a66c2",
    link: "https://www.linkedin.com/in/gaganchauhan/",
  },

  {
    id: 3,
    text: "Twitter/X",
    icon: `${BASE}icons/twitter.svg`,
    bg: "#1d9bf0",
    link: "https://x.com/CHAUHAN702",
  },

  {
    id: 4,
    text: "Instagram",
    icon: `${BASE}icons/instagram-5.png`,
    bg: "#ec0075",
    link: "https://www.instagram.com/9agan/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: `${BASE}icons/gicon1.svg`,
    title: "Library",
  },
  {
    id: 2,
    icon: `${BASE}icons/gicon2.svg`,
    title: "Memories",
  },
  {
    id: 3,
    icon: `${BASE}icons/file.svg`,
    title: "Places",
  },
  {
    id: 4,
    icon: `${BASE}icons/gicon4.svg`,
    title: "People",
  },
  {
    id: 5,
    icon: `${BASE}icons/gicon5.svg`,
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: `${BASE}images/gal-5.jpeg`,
  },
  {
    id: 2,
    img: `${BASE}images/gal-1.jpeg`,
  },
  {
    id: 3,
    img: `${BASE}images/gal4.jpeg`,
  },
  {
    id: 4,
    img: `${BASE}images/gal-4.jpeg`,
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: `${BASE}icons/work.svg`,
  kind: "folder",
  children: [
    {
      id: "automation-anywhere",
      name: "Software Engineering Intern",
      company: "Automation Anywhere",
      location: "Bengaluru, India",
      duration: "Jul 2025 – Present",
      kind: "folder",
      experience: {
        description: [
          "Automated end-to-end testing using Cypress, Playwright, and TypeScript, increasing overall test coverage by 85%.",
          "Developed scalable web applications using Java, JavaScript, and TypeScript.",
          "Optimized CI/CD pipelines with Jenkins and AWS, reducing deployment time by 60%.",
          "Worked in an Agile environment using Jira, Confluence, and Bitbucket for project tracking, documentation, and version control.",
        ],
        tech: [
          "TypeScript",
          "Java",
          "JavaScript",
          "Cypress",
          "Playwright",
          "Jenkins",
          "AWS",
          "Jira",
          "Bitbucket",
        ],
      },
    },

    {
      id: "gssoc",
      name: "Open-Source Contributor",
      company: "GirlScript Summer of Code (GSSoC 2024)",
      location: "Remote",
      duration: "Jun 2024 – Aug 2024",
      kind: "folder",
      experience: {
        description: [
          "Improved API performance by 20% through bug fixes and backend optimizations.",
          "Enhanced project usability by 30% by leading feature integration and improvements.",
          "Collaborated with maintainers and contributors using Git-based workflows and code reviews.",
        ],
        tech: ["API Development", "Git", "Open Source", "JavaScript"],
      },
    },

    {
      id: "palo-alto",
      name: "Cybersecurity Virtual Intern",
      company: "Palo Alto Networks (AICTE – EduSkills)",
      location: "Remote",
      duration: "Sep 2023 – Nov 2023",
      kind: "folder",
      experience: {
        description: [
          "Completed a 10-week cybersecurity internship covering network security fundamentals.",
          "Learned cloud security concepts and Security Operations Center (SOC) workflows.",
          "Gained hands-on exposure to real-world security practices and threat analysis.",
        ],
        tech: [
          "Network Security",
          "Cloud Security",
          "SOC",
          "Cybersecurity Fundamentals",
        ],
      },
    },
  ],
};

const PROJECTS = {
  id: 1,
  type: "projects",
  name: "Projects",
  icon: `${BASE}icons/work.svg`,
  kind: "folder",
  children: [
    // ▶ 1. e-Chikitsalaya
    {
      id: "1",
      name: "e-Chikitsalaya",
      icon: `${BASE}images/folder.png`,
      kind: "folder",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "Overview.txt",
          icon: `${BASE}images/txt.png`,
          kind: "file",
          fileType: "txt",
          description: [
            "A full-stack telemedicine platform enabling doctor appointment booking, secure payments, and real-time video consultations.",
            "Built using Python, Flask, MySQL, Stripe, Socket.IO, HTML, CSS, and JavaScript.",
            "Includes chatbot support, real-time messaging, and dark/light mode for enhanced UX.",
          ],
          position: "top-10 right-20",
        },
        {
          id: 2,
          name: "GitHub Repo",
          icon: `${BASE}images/GitHub-Logo.wine.svg`,
          kind: "file",
          fileType: "url",
          href: "https://github.com/GAGGZ1/Hospital-System-Video-Calling-with-Doctors-",
          position: "top-5 left-10",
        },
      ],
    },

    // ▶ 2. Travel Story (MERN)
    {
      id: "2",
      name: "Travel Story",
      icon: `${BASE}images/folder.png`,
      kind: "folder",
      windowPosition: "top-[18vh] left-7",
      children: [
        {
          id: 1,
          name: "Overview.txt",
          icon: `${BASE}images/txt.png`,
          kind: "file",
          fileType: "txt",
          description: [
            "A personal travel timeline app allowing users to create, edit, delete, and filter stories.",
            "Built with React, Node.js, Express, and MongoDB.",
            "Implements JWT authentication, image uploads, and story pinning.",
          ],
          position: "top-52 right-40",
        },
        {
          id: 2,
          name: "Live Demo",
          icon: `${BASE}images/safari.png`,
          kind: "file",
          fileType: "url",
          href: "https://travel-story-1-q16j.onrender.com/",
        },
        {
          id: 3,
          name: "GitHub Repo",
          icon: `${BASE}images/GitHub-Logo.wine.svg`,
          kind: "file",
          fileType: "url",
          href: "https://github.com/GAGGZ1/Travel-Story",
          position: "top-50 right-100",
        },
      ],
    },
    // ▶ 3. Flask Blog
    {
      id: "3",
      name: "Flask Blog App",
      icon: `${BASE}images/folder.png`,
      kind: "folder",
      windowPosition: "top-[42vh] left-5",
      children: [
        {
          id: 1,
          name: "Overview.txt",
          icon: `${BASE}images/txt.png`,
          kind: "file",
          fileType: "txt",
          description: [
            "A secure blog platform with authentication, image uploads, and date-based search.",
            "Built using Flask, SQLAlchemy, Flask-Login, Flask-WTF, and Jinja2.",
            "Focuses on backend security, session management, and optimized DB queries.",
          ],
        },
        {
          id: 2,
          name: "GitHub Repo",
          icon: `${BASE}images/GitHub-Logo.wine.svg`,
          kind: "file",
          fileType: "url",
          href: "https://github.com/GAGGZ1/Flask-Blog/",
          position: "top-40 right-100",
        },
      ],
    },
    // ▶ 4. AI Note-Taking Assistant
    {
      id: "4",
      name: "AI Note-Taking App",
      icon: `${BASE}images/folder.png`,
      kind: "folder",
      windowPosition: "top-[30vh] left-1",
      children: [
        {
          id: 1,
          name: "Overview.txt",
          icon: `${BASE}images/txt.png`,
          kind: "file",
          fileType: "txt",
          description: [
            "An AI-powered note-taking app with autocomplete and smart suggestions.",
            "Built using Next.js 13, TypeScript, OpenAI API, Drizzle ORM, and Tailwind CSS.",
            "Demonstrates AI integration with modern frontend architecture.",
          ],
        },
        {
          id: 2,
          name: "GitHub Repo",
          icon: `${BASE}images/GitHub-Logo.wine.svg`,
          kind: "file",
          fileType: "url",
          href: "https://github.com/GAGGZ1/AI-Note-Taking-Assistant",
          position: "top-52 right-60",
        },
        {
          id: 3,
          name: "Live Demo",
          icon: `${BASE}images/safari.png`,
          kind: "file",
          fileType: "url",
          href: "https://ai-note-taking-assistant-two.vercel.app/",
          position: "top-45 right-10",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: `${BASE}icons/info.svg`,
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: `${BASE}images/image.png`,
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: `${BASE}images/profile.jpeg`,
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: `${BASE}images/image.png`,
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: `${BASE}images/gagan-3.jpeg`,
    },
    {
      id: 3,
      name: "currently-me.png",
      icon: `${BASE}images/image.png`,
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: `${BASE}images/gagan-4.jpeg`,
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: `${BASE}images/txt.png`,
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Hey! I’m Gagan Chauhan 👋",
      image: `${BASE}images/profile.jpeg`,
      description: [
        "I’m a final-year Computer Science student with a deep interest in solving engineering problems and building systems that scale. My core strength lies in Data Structures & Algorithms using Java, backed by strong problem-solving fundamentals.",
        "I’ve built multiple full-stack applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), and I also work with Python + Flask to design clean APIs and connect robust databases.",
        "I strongly believe self-discipline fuels growth. Lately, I’ve been exploring AI, Machine Learning, and Deep Learning aiming to blend solid engineering with intelligent systems.",
        "I enjoy building things, breaking them, learning from failures, and improving every iteration. Always curious. Always shipping.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: `${BASE}icons/file.svg`,
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: `${BASE}images/pdf.png`,
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: `${BASE}icons/trash.svg`,
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: `${BASE}images/image.png`,
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: `${BASE}images/trash-3.png`,
    },
    {
      id: 2,
      name: "trash2.png",
      icon: `${BASE}images/image.png`,
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: `${BASE}images/trash-4.png`,
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  projects: PROJECTS,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
