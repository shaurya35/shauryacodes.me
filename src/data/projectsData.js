const projects = [
  {
    title: "Dhwani",
    description: "Conversational Agents for Blue-Collar Recruitment (@Dhwanilabs).",
    technologies: "Python, Next.js, TypeScript",
    liveSiteLink: "https://dhwanilabs.com/",
    githubLink: null,
    image: "/projects/dhwani.png",
    featured: true,
    published: true
  },
  {
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
    title: "Web Wallet",
    description: "A minimal crypto wallet to generate seed phrases and derivation paths.",
    technologies: "Solana Web3.js, Ethers.js",
    liveSiteLink: "https://webwallet.shauryacodes.me/",
    githubLink: "https://github.com/shaurya35/solana-web-wallet",
    image: "/projects/webwallet.png",
    featured: true,
    published: true
  },
  {
    title: "Token Liquidity Creator",
    description: "Solana launchpad to create, mint tokens, and add CP liquidity pools.",
    technologies: "React, Solana, Web3.js",
    liveSiteLink: null,
    githubLink: "https://github.com/shaurya35/Token-Liquidity-Creator",
    image: "/projects/placeholder.png",
    featured: false,
    published: true
  },
  {
    title: "Ethereum Wallet Adapter",
    description: "Ethereum wallet connector to interact with ERC-20 contracts on-chain.",
    technologies: "TypeScript, Wagmi, Viem",
    liveSiteLink: null,
    githubLink: "https://github.com/shaurya35/Ethereum-wallet-adapter",
    image: "/projects/placeholder.png",
    featured: false,
    published: true
  },
  {
    title: "Rust Password Manager",
    description: "CLI password manager built in Rust with Actix-web and Docker.",
    technologies: "Rust, Actix-web, Docker",
    liveSiteLink: null,
    githubLink: "https://github.com/shaurya35/Rust-PM-be",
    image: "/projects/placeholder.png",
    featured: false,
    published: true
  },
  {
    title: "Philips GreenHeart",
    description: "Philips Greenheart monitors your heart health (Ex-@Ownpath).",
    technologies: "React, TypeScript",
    liveSiteLink: "https://www.heartprint.in/greenheartprogram/",
    githubLink: null,
    image: "/projects/philipsgreenheart.png",
    featured: true,
    published: true
  },
  {
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
    title: "E-Learning Platform",
    description: "E-learning platform with course management and ML recommendations.",
    technologies: "Next.js, Express.js, Python",
    liveSiteLink: null,
    githubLink: "https://github.com/shaurya35/E-Learning-Platform",
    image: "/projects/placeholder.png",
    featured: false,
    published: true
  },
  {
    title: "DPIN Uptime",
    description: "Uptime monitoring with API, hub, and validator microservices.",
    technologies: "Next.js, TypeScript, Node.js",
    liveSiteLink: null,
    githubLink: "https://github.com/shaurya35/dpin-uptime",
    image: "/projects/placeholder.png",
    featured: false,
    published: true
  },
  {
    title: "Exness",
    description: "Trading platform with auth, trade management, and a poller service.",
    technologies: "Next.js, TypeScript, Prisma",
    liveSiteLink: null,
    githubLink: "https://github.com/shaurya35/exness",
    image: "/projects/placeholder.png",
    featured: false,
    published: true
  },
  {
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

export const projectsData = projects.map((project, index) => ({
  id: index + 1,
  ...project,
}));

export const featuredProjects = projectsData.filter(project => project.featured);
export const recentProjects = projectsData.slice(0, 6);
