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
    title:
      "Git Isn’t Guessing — It’s Running an Algorithm on Your Typos",
    image: `${BASE}images/blog-2.png`,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7419091326526271488/",
  },
  {
    id: 2,
    date: "Nov 13, 2025",
    title: "Inside the Browser: How Downloads, Temp Files, and Resume Really Work",
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
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Hono"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
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
    // ▶ Project 1
    {
      id: 5,
      name: "Nike Ecommerce Website Application",
      icon: `${BASE}images/folder.png`,

      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "Nike Project.txt",
          icon: `${BASE}images/txt.png`,
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Nike eCommerce website is a sleek and modern platform designed for shopping the latest Nike collections.",
            "Instead of a simple online store, it delivers an immersive experience with bold visuals, interactive product displays, and smooth navigation.",
            "Think of it like walking into a flagship Nike store—but right from your phone or laptop.",
            "It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
          ],
        },
        {
          id: 2,
          name: "nike.com",
          icon: `${BASE}images/safari.png`,
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/fZdTYswuZjU?si=Awjl-pIst9e09_UU",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "nike.png",
          icon: `${BASE}images/image.png`,
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: `${BASE}images/project-1.png`,
        },
        {
          id: 5,
          name: "Design.fig",
          icon: `${BASE}images/plain.png`,
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "AI Resume Analyzer",
      icon: `${BASE}images/folder.png`,
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "AI Resume Analyzer Project.txt",
          icon: `${BASE}images/txt.png`,
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
            "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
            "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
            "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
          ],
        },
        {
          id: 2,
          name: "ai-resume-analyzer.com",
          icon: `${BASE}images/safari.png`,
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "ai-resume-analyzer.png",
          icon: `${BASE}images/image.png`,
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: `${BASE}images/project-2.png`,
        },
        {
          id: 5,
          name: "Design.fig",
          icon: `${BASE}images/plain.png`,
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Food Delivery App",
      icon: `${BASE}images/folder.png`,
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Food Delivery App Project.txt",
          icon: `${BASE}images/txt.png`,
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
            "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
            "Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
            "It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
          ],
        },
        {
          id: 2,
          name: "food-delivery-app.com",
          icon: `${BASE}images/safari.png`,
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "food-delivery-app.png",
          icon: `${BASE}images/image.png`,
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: `${BASE}images/project-3.png`,
        },
        {
          id: 5,
          name: "Design.fig",
          icon: `${BASE}images/plain.png`,
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
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
      subtitle: "Meet the Developer Behind the Code",
      image: `${BASE}images/adrian.jpg`,
      description: [
        "Hey! I’m Adrian 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
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
