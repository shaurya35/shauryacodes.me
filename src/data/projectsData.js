export const projectsData = [
  {
    id: 1,
    title: "Brixline",
    description: "Brixline is a tech-enabled Construction-as-a-Service Company (Ex-@Brixline).",
    technologies: "Next.js, TypeScript",
    liveSiteLink: "https://brixline-dev.vercel.app/",
    githubLink: "https://github.com/shaurya35/brixline",
    image: "/projects/brixline.png",
    featured: true,
    published: true
  },
  {
    id: 2,
    title: "Gobrix",
    description: "Gobrix is a tech-enabled Construction-as-a-Service Company (Ex-@Brixline).",
    technologies: "Next.js, TypeScript",
    liveSiteLink: "https://brixline-client-main.vercel.app/",
    githubLink: "https://github.com/shaurya35/brixline",
    image: "/projects/gobrix.png",
    featured: true,
    published: true
  },
  {
    id: 3,
    title: "Iterconnect",
    description: "Campus-Connect allows students to connect & share resources.",
    technologies: "Next.js, Firebase",
    liveSiteLink: "http://iterconnect.live/explore",
    githubLink: "https://github.com/shaurya35/ITER-Social-Connect",
    image: "/projects/iterconnect.png",
    featured: true,
    published: true
  },
  {
    id: 4,
    title: "Upbot",
    description: "A Value-first, reliable, and scalable uptime monitoring platform",
    technologies: "Next.js, Redis",
    liveSiteLink: "https://www.upbot.space/",
    githubLink: null,
    image: "/projects/upbot.png",
    featured: true,
    published: true
  },
  {
    id: 5,
    title: "Xora",
    description: "A modern, responsive frontend UI project with Tailwind.",
    technologies: "Next.js, Tailwind",
    liveSiteLink: "https://xora-saas-three.vercel.app/",
    githubLink: "https://github.com/shaurya35/xora-saas",
    image: "/projects/xora.png",
    featured: true,
    published: true
  },
  {
    id: 6,
    title: "Stockwise",
    description: "Stockwise is a Web-app for Inventory management using demand forecasting.",
    technologies: "React.js, Express.js",
    liveSiteLink: "https://stockwise-omega.vercel.app/",
    githubLink: "https://github.com/shaurya35/Stockwise-Inventory-Manager",
    image: "/projects/stockwise.png",
    featured: false,
    published: true
  },
  {
    id: 7,
    title: "GreenGlide",
    description: "GreenGlide is an Web-app addressing Inefficiencies in Urban Waste Management.",
    technologies: "React.js, Express.js",
    liveSiteLink: "https://greenglide-smartwaste-management-system.vercel.app/",
    githubLink: "https://github.com/shaurya35/GreenGlide-SmartWaste-Management-System",
    image: "/projects/greenglide.png",
    featured: false,
    published: true
  },
  {
    id: 8,
    title: "MotionArtEffect",
    description: "MotionArtEffect is a replica of an existing website built with React.js",
    technologies: "React.js, Tailwind",
    liveSiteLink: "https://heliverse-task-rose.vercel.app/",
    githubLink: "https://github.com/shaurya35/Heliverse-task",
    image: "/projects/motionarteffect.png",
    featured: false,
    published: true
  },
  {
    id: 9,
    title: "Yelpcamp",
    description: "Yelpcamp is a campsite finder Web-app with Search and Filtering features.",
    technologies: "Express.js, EJS",
    liveSiteLink: "https://yelp-camp-taqn.onrender.com/",
    githubLink: "https://github.com/shaurya35/Yelp-Camp",
    image: "/projects/yelpcamp.png",
    featured: false,
    published: true
  },
  {
    id: 10,
    title: "Coffee Landing Page",
    description: "A Sleek React coffee landing page showcasing varieties and reviews.",
    technologies: "React.js",
    liveSiteLink: "https://coffeeinseconds.netlify.app/",
    githubLink: "https://github.com/shaurya35/OCTANET_APRIL",
    image: "/projects/coffee.png",
    featured: false,
    published: true
  },
  {
    id: 11,
    title: "Landing Page",
    description: "A Responsive landing page built with HTML, CSS, and JavaScript.",
    technologies: "HTML, CSS",
    liveSiteLink: "https://prodigy-wd-01-sigma.vercel.app/",
    githubLink: "https://github.com/shaurya35/PRODIGY_WD_01",
    image: "/projects/landingpage1.png",
    featured: false,
    published: true
  },
  {
    id: 12,
    title: "Amazon Clone",
    description: "An Amazon clone created with HTML and CSS.",
    technologies: "HTML, CSS",
    liveSiteLink: "https://amazonbyshaurya.netlify.app/",
    githubLink: "https://github.com/shaurya35/Amazon-Clone",
    image: "/projects/amazonclone.png",
    featured: false,
    published: true
  },
  {
    id: 13,
    title: "Interactive Calendar",
    description: "An Interactive calendar developed with Next.js, PostgreSQL.",
    technologies: "Nextjs, Firebase",
    liveSiteLink: null,
    githubLink: "https://github.com/shaurya35/Interactive-Nextjs-Calendar",
    image: "/projects/calendar.png",
    featured: false,
    published: true
  }
];

export const featuredProjects = projectsData.filter(project => project.featured);
export const recentProjects = projectsData.slice(0, 6);
