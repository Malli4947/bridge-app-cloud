import type { Project, SkillCategory, Experience, NavLink, Stat } from '@/types';

export const projects: Project[] = [
  {
    key: 'techmate',
    icon: '🛠',
    title: 'Techmate',
    category: 'Service Marketplace',
    year: '2024',
    bg: 'linear-gradient(135deg, #2f6fed 0%, #2f6fed 50%, #2f6fed 100%)',
    shortDesc:
      'Large-scale service marketplace connecting businesses, OEMs, service providers, and consumers through a unified digital ecosystem.',
    description:
      'TechMate is a large-scale service marketplace platform designed to connect businesses, OEMs, service providers, and consumers through a unified digital ecosystem. Built as a full ecosystem with a Node.js/Express backend, MongoDB database, React.js admin dashboard, and React Native mobile apps for both iOS and Android.',
    features: [
      { title: 'Scalable REST APIs', desc: 'Architected APIs for bookings, services & transactions' },
      { title: 'Razorpay Payments', desc: 'Secure payment workflows with refund handling' },
      { title: 'Firebase Auth & FCM', desc: 'Authentication, push notifications & real-time updates' },
      { title: 'Performance', desc: 'Optimized backend queries — 35% faster response time' },
    ],
    tags: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Razorpay'],
    tech: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Razorpay', 'JWT', 'FCM'],
    role: 'Lead Mobile & Backend Developer',
    links: {
      website: 'https://techmateservices.in/',
      playStore: 'https://play.google.com/store/apps/details?id=com.techlink',
      appStore: 'https://apps.apple.com/in/app/techmate-t-link-solutions/id6753174737',
    },
  },
  
  {
    key: 'gobooze',
    icon: '🍷',
    title: 'Gobooze',
    category: 'On-Demand Delivery',
    year: '2023',
    bg: 'linear-gradient(135deg, #d3178a 0%, #d3178a 50%, #d3178a 100%)',
    shortDesc:
      'On-demand liquor delivery platform with 400+ premium beverages, secure checkout, and real-time tracking.',
    description:
      'Gobooze is an on-demand liquor delivery platform offering 400+ premium beverages with secure checkout, real-time order tracking, and partner delivery management. Engineered for high-throughput peak hours with FCM-powered real-time notifications.',
    features: [
      { title: 'Stripe Payments', desc: 'Implemented Stripe payment & refund lifecycle' },
      { title: 'Live Tracking', desc: 'Real-time delivery tracking using Firebase' },
      { title: 'Dual Apps', desc: 'Built both User & Partner delivery applications' },
      { title: 'UI Performance', desc: 'Optimized rendering across multiple devices' },
    ],
    tags: ['React Native', 'Stripe', 'Firebase', 'FCM'],
    tech: ['React Native', 'Node.js', 'Firebase', 'Stripe', 'FCM'],
    role: 'Mobile Application Developer',
    links: {
      website: 'https://gobooze.com.au/',
      playStore: 'https://play.google.com/store/apps/details?id=com.goboozeuserapp',
      appStore: 'https://apps.apple.com/in/app/gobooze/id6739266630',
    },
  },
  {
    key: 'bodegaa',
    icon: '🛒',
    title: 'Bodegaa',
    category: 'Grocery Commerce',
    year: '2024',
    bg: 'linear-gradient(135deg, #037a3b 0%, #037a3b 50%, #037a3b 100%)',
    shortDesc:
      'Hyperlocal grocery commerce platform with seamless checkout and partner-based delivery operations.',
    description:
      'Bodegaa is a hyperlocal grocery commerce platform delivering fresh produce, daily essentials, and household products with seamless checkout and partner-based delivery operations. Built to handle thousands of SKUs with optimized queries.',
    features: [
      { title: 'Cart Management APIs', desc: 'Cart & order lifecycle management' },
      { title: 'Razorpay Checkout', desc: 'Integrated secure payment flow' },
      { title: 'Partner Tracking', desc: 'Real-time delivery partner tracking' },
      { title: 'Dual Apps', desc: 'Built separate User & Partner applications' },
    ],
    tags: ['React Native', 'Node.js', 'MongoDB', 'Razorpay'],
    tech: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Razorpay'],
    role: 'Mobile & Backend Developer',
    links: {
      website: 'https://bodegaa.in/',
      playStore: 'https://play.google.com/store/apps/details?id=com.bodegaa',
      appStore: 'https://apps.apple.com/in/app/bodegaa/id6754384209',
    },
  },
   {
    key: 'firsthouse',
    icon: '🏠',
    title: 'First House',
    category: 'Real Estate',
    year: '2023',
    bg: 'linear-gradient(135deg, #2f6fed 0%, #2f6fed 50%, #2f6fed 100%)',
    shortDesc:
      'Real estate discovery platform connecting buyers, sellers, and builders with verified property listings.',
    description:
      'Real estate discovery platform connecting buyers, sellers, and builders with verified property listings and real-time communication features. Available as a responsive web app and a cross-platform mobile app.',
    features: [
      { title: 'Verified Listings', desc: 'Verified listing & inquiry modules' },
      { title: 'Real-Time Chat', desc: 'Integrated chat & push notifications' },
      { title: 'Admin Dashboards', desc: 'Built admin & builder dashboard modules' },
    ],
    tags: ['React Native', 'React', '.NET', 'Firebase'],
    tech: ['React Native', 'React (TS)', '.NET', 'MongoDB', 'Firebase'],
    role: 'Mobile Developer',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.Firsthouse',
      appStore: 'https://apps.apple.com/in/app/first-house-app/id6751951958',
    },
  },
   {
    key: 'gochauffeur',
    icon: '🚖',
    title: 'GoChauffeur',
    category: 'Ride Booking',
    year: '2023',
    bg: 'linear-gradient(135deg, #2f6fed 0%, #2f6fed 50%, #2f6fed 100%)',
    shortDesc:
      'Ride-booking and logistics delivery platform with live driver tracking and trip lifecycle management.',
    description:
      'Ride-booking and logistics delivery platform with live driver tracking, trip lifecycle management, and payment processing. Built for both rider and driver applications.',
    features: [
      { title: 'Driver Tracking', desc: 'Real-time driver location tracking' },
      { title: 'Razorpay Flow', desc: 'Integrated end-to-end payment flow' },
      { title: 'Admin APIs', desc: 'Built APIs for ride & partner management' },
    ],
    tags: ['React Native', '.NET', 'SQL', 'Razorpay'],
    tech: ['.NET', 'React Native', 'SQL', 'Firebase', 'Razorpay'],
    role: 'Mobile Developer',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.varaahipspl.gochauffeur&pli=1',
    },
  },
  

  
  {
    key: 'srirudra',
    icon: '🕉',
    title: 'SriRudra',
    category: 'Spiritual Commerce',
    year: '2023',
    bg: 'linear-gradient(135deg, #f77c00 0%, #f77c00 50%, #f77c00 100%)',
    shortDesc:
      'Spiritual commerce platform for curated pooja essentials, idols, and devotional products.',
    description:
      'SriRudra is a spiritual commerce platform providing curated pooja essentials, idols, and devotional products with online ordering and secure payments. Optimized for high traffic during festival seasons.',
    features: [
      { title: 'Calendar Bookings', desc: 'Built calendar-based booking & product modules' },
      { title: 'Secure Auth', desc: 'Implemented secure authentication & payments' },
      { title: 'Festival Traffic', desc: 'Optimized performance for high festival traffic' },
    ],
    tags: ['React Native', '.NET', 'MongoDB', 'Razorpay'],
    tech: ['React Native', '.NET', 'MongoDB', 'Firebase', 'Razorpay'],
    role: 'Mobile Developer',
    links: {
      website: 'https://srirudra-dev.codefactstech.com/',
      playStore: 'https://play.google.com/store/apps/details?id=com.sriRudra',
      appStore: 'https://apps.apple.com/in/app/srirudra/id6736977526',
    },
  },
 {
    key: 'rntout',
    icon: '🚗',
    title: 'RntOut',
    category: 'Rental Marketplace',
    year: '2024',
    bg: 'linear-gradient(135deg, #cb112d 0%, #cb112d 50%, #cb112d 100%)',
    shortDesc:
      'Multi-category rental marketplace for furniture, vehicles, and real estate with geo-fencing and dynamic pricing.',
    description:
      'RntOut is a multi-category rental marketplace for furniture, vehicles, and real estate with geo-fencing and dynamic pricing. The platform enables users to rent assets with real-time availability tracking and seamless multi-transaction payment workflows.',
    features: [
      { title: 'Geo-Fencing Engine', desc: 'Distance-based pricing engine with location intelligence' },
      { title: 'Multi-Transaction Flows', desc: 'Designed multi-step secure payment workflows' },
      { title: 'Booking Accuracy', desc: 'Improved booking accuracy by 40%' },
      { title: 'Real-Time Availability', desc: 'Live asset availability across all categories' },
    ],
    tags: ['React Native', 'Node.js', 'Google Maps', 'Razorpay'],
    tech: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Google Maps API', 'Razorpay'],
    role: 'Full-Stack Developer',
    links: {
      website: 'https://rntout.com/',
      appStore: 'https://apps.apple.com/in/app/rntout/id6743694042',
    },
  },
 
  {
    key: 'luxorace',
    icon: '👗',
    title: 'Luxorace',
    category: 'Fashion E-Commerce',
    year: '2024',
    bg: 'linear-gradient(135deg, #6a1e7c 0%, #6a1e7c 50%, #6a1e7c 100%)',
    shortDesc:
      'Fashion e-commerce platform for sarees and traditional wear with seller onboarding and inventory tracking.',
    description:
      'Fashion e-commerce platform for sarees and traditional wear with seller onboarding, inventory tracking, and payout management. Includes a comprehensive seller module and admin analytics.',
    features: [
      { title: 'Seller Onboarding', desc: 'Developed full seller onboarding workflow' },
      { title: 'Payout Engine', desc: 'Inventory & payout calculation engine' },
      { title: 'Analytics', desc: 'Built admin analytics dashboards' },
    ],
    tags: ['React Native', 'Node.js', 'MongoDB', 'Razorpay'],
    tech: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Razorpay'],
    role: 'Mobile, Backend & Seller Module Developer',
    links: {
      website: 'https://ethnic-hues.com/',
      playStore: 'https://play.google.com/store/apps/details?id=com.luxorace',
      appStore: 'https://apps.apple.com/in/app/luxorace/id6753107382',
    },
  },
  {
    key: 'garudagases',
    icon: '⛽',
    title: 'Garuda Gases',
    category: 'Industrial B2B',
    year: '2024',
    bg: 'linear-gradient(135deg, #b2571e 0%, #b2571e 50%, #b2571e 100%)',
    shortDesc:
      'Industrial and medical gases ordering platform with scheduling and real-time delivery updates.',
    description:
      'Industrial and medical gases ordering platform with scheduling, quantity management, and real-time delivery updates. Optimized for low-network rural and industrial environments.',
    features: [
      { title: 'Order Scheduling', desc: 'Designed order scheduling & management APIs' },
      { title: 'Live Delivery', desc: 'Implemented real-time delivery tracking' },
      { title: 'Low-Network Ready', desc: 'Optimized for low-network environments' },
    ],
    tags: ['React Native', 'Node.js', 'Firebase', 'Razorpay'],
    tech: ['React Native', 'Node.js', 'Firebase', 'Razorpay'],
    role: 'Mobile & Backend Developer',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.garudagas',
      appStore: 'https://apps.apple.com/in/app/garuda-gases/id6753621877',
    },
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'frontend',
    title: 'Frontend (Web)',
    iconKey: 'globe',
    skills: [
      { name: 'React.js', logo: 'react', color: '#61DAFB' },
      { name: 'TypeScript', logo: 'typescript', color: '#3178C6' },
      { name: 'JavaScript', logo: 'javascript', color: '#F7DF1E' },
      { name: 'HTML5', logo: 'html5', color: '#E34F26' },
      { name: 'CSS3', logo: 'css3', color: '#1572B6' },
      { name: 'Tailwind CSS', logo: 'tailwindcss', color: '#06B6D4' },
      { name: 'Redux', logo: 'redux', color: '#764ABC' },
      { name: 'Framer Motion', logo: 'framer', color: '#0055FF' },
    ],
  },
  {
    category: 'mobile',
    title: 'Mobile (iOS & Android)',
    iconKey: 'smartphone',
    skills: [
      { name: 'React Native', logo: 'react', color: '#61DAFB' },
      { name: 'iOS', logo: 'apple', color: '#FFFFFF' },
      { name: 'Android', logo: 'android', color: '#3DDC84' },
      { name: 'Xcode', logo: 'xcode', color: '#147EFB' },
      { name: 'Android Studio', logo: 'androidstudio', color: '#3DDC84' },
      { name: 'AsyncStorage', logo: 'react', color: '#61DAFB' },
      { name: 'FCM Push', logo: 'firebase', color: '#FFCA28' },
    ],
  },
  {
    category: 'backend',
    title: 'Backend & APIs',
    iconKey: 'database',
    skills: [
      { name: 'Node.js', logo: 'nodedotjs', color: '#339933' },
      { name: 'Express.js', logo: 'express', color: '#FFFFFF' },
      { name: 'REST APIs', logo: 'swagger', color: '#85EA2D' },
      { name: 'JWT Auth', logo: 'jsonwebtokens', color: '#FFFFFF' },
      { name: 'MongoDB', logo: 'mongodb', color: '#47A248' },
      { name: 'Mongoose', logo: 'mongoose', color: '#880000' },
      { name: 'SQL', logo: 'mysql', color: '#4479A1' },
      { name: 'Postman', logo: 'postman', color: '#FF6C37' },
    ],
  },
  {
    category: 'admin',
    title: 'Admin Dashboards & Web Platforms',
    iconKey: 'code',
    skills: [
      { name: 'React + TS', logo: 'react', color: '#61DAFB' },
      { name: 'Tailwind UI', logo: 'tailwindcss', color: '#06B6D4' },
      { name: 'Material UI', logo: 'mui', color: '#007FFF' },
      { name: 'Charts', logo: 'chartdotjs', color: '#FF6384' },
      { name: 'Forms / Tables', logo: 'react', color: '#61DAFB' },
      { name: 'Role-Based Access', logo: 'jsonwebtokens', color: '#FFFFFF' },
      { name: 'Reporting', logo: 'googleanalytics', color: '#E37400' },
    ],
  },
  {
    category: 'cloud',
    title: 'Cloud, Auth & 3rd-Party',
    iconKey: 'cloud',
    skills: [
      { name: 'Firebase Auth', logo: 'firebase', color: '#FFCA28' },
      { name: 'Firestore', logo: 'firebase', color: '#FFCA28' },
      { name: 'FCM Push', logo: 'firebase', color: '#FFCA28' },
      { name: 'Razorpay', logo: 'razorpay', color: '#0C2451' },
      { name: 'Stripe', logo: 'stripe', color: '#635BFF' },
      { name: 'Google Maps', logo: 'googlemaps', color: '#4285F4' },
      { name: 'Crashlytics', logo: 'firebase', color: '#FFCA28' },
    ],
  },
  {
    category: 'devops',
    title: 'DevOps & Deployment',
    iconKey: 'terminal',
    skills: [
      { name: 'Git', logo: 'git', color: '#F05032' },
      { name: 'GitHub', logo: 'github', color: '#FFFFFF' },
      { name: 'CI/CD', logo: 'githubactions', color: '#2088FF' },
      { name: 'Play Store', logo: 'googleplay', color: '#01875F' },
      { name: 'App Store', logo: 'appstore', color: '#0D96F6' },
      { name: 'Vercel', logo: 'vercel', color: '#FFFFFF' },
      { name: 'Render', logo: 'render', color: '#46E3B7' },
      { name: 'Netlify', logo: 'netlify', color: '#00C7B7' },
    ],
  },
];

export const devPractices: { name: string; logo: string; color: string }[] = [
  { name: 'Agile / Scrum', logo: 'agilealliance', color: '#0033A0' },
  { name: 'Code Reviews', logo: 'github', color: '#FFFFFF' },
  { name: 'CI/CD Pipelines', logo: 'githubactions', color: '#2088FF' },
  { name: 'RESTful Design', logo: 'swagger', color: '#85EA2D' },
  { name: 'Performance Tuning', logo: 'lighthouse', color: '#F44B21' },
  { name: 'Security Best Practices', logo: 'auth0', color: '#EB5424' },
  { name: 'Responsive Design', logo: 'css3', color: '#1572B6' },
  { name: 'Version Control', logo: 'git', color: '#F05032' },
  { name: 'Production Debugging', logo: 'sentry', color: '#362D59' },
  { name: 'Cross-Functional Collab', logo: 'slack', color: '#4A154B' },
];

export const experiences: Experience[] = [
  {
    date: 'Jan 2023 — Present',
    title: 'Senior Software Engineer',
    company: 'Code Facts IT Solutions Pvt. Ltd.',
    location: '📍 Hyderabad, Telangana, India',
    points: [
      'Developed and successfully launched <strong>9+ cross-platform mobile applications</strong> using React Native for Android and iOS, improving user engagement and performance across app stores',
      'Built scalable, reusable, and high-performance <strong>mobile UI components</strong> following best practices and clean architecture patterns',
      'Implemented advanced React patterns — <strong>Hooks, Context API, and Redux</strong> — for predictable state management and performance-optimized rendering',
      'Optimized performance through memoization, lazy loading, code splitting, and efficient state handling for production-grade UX',

      'Developed and maintained <strong>web platforms and admin dashboards</strong> using React.js and TypeScript for internal operations, analytics, and reporting',
      'Built responsive, accessible UI with reusable component systems, charts, data tables, role-based access controls, and modern design tokens',

      'Designed and consumed <strong>RESTful APIs</strong> using Node.js and Express.js to support both mobile and web applications',
      'Implemented secure JWT-based authentication, role-based access control, and robust error-handling middleware',
      'Modeled MongoDB schemas with Mongoose ODM supporting complex relationships and aggregation pipelines',
      'Improved backend performance by <strong>40%</strong> through query optimization, caching strategies, and efficient schema design',

      'Integrated <strong>Razorpay & Stripe</strong> payment gateways including refunds, settlements, and webhook validation for secure transaction processing',
      'Implemented <strong>Firebase</strong> Authentication, Firestore/Realtime DB, Cloud Messaging, Crashlytics, and Analytics for secure, real-time app features',
      'Built push notifications using <strong>Firebase Cloud Messaging (FCM)</strong> for user engagement and real-time alerts',
      'Integrated geolocation, Google Maps APIs, and third-party SDKs for media, payments, and device-native features',

      'Managed complete app deployment lifecycle — building release versions, handling certificates, provisioning profiles, and store submissions',
      'Published and maintained apps on <strong>Google Play Store and Apple App Store</strong> with successful approvals and timely updates',
      'Deployed web platforms via <strong>Vercel & Render</strong> with CI/CD pipelines for automated testing and seamless rollouts',
      'Performed production debugging, performance monitoring, and post-release patching using Crashlytics and analytics dashboards',

      'Collaborated with backend teams, UI/UX designers, and QA in <strong>Agile sprint cycles</strong> to deliver production-ready features on schedule',
      'Performed code reviews to enforce code quality, security, and maintainability standards across the team',
    ],
    stack: [
      'React Native',
      'React.js',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'Firebase',
      'Razorpay',
      'Stripe',
    ],
  },
  {
    date: 'May 2019 — Apr 2023',
    title: 'Bachelor of Engineering — Electronics & Communication',
    company: 'Hindusthan Institute of Technology, Coimbatore',
    location: '📍 Tamil Nadu, India',
    points: [
      'Graduated with <strong>CGPA 8.75 / 10</strong> in Electronics and Communication Engineering',
      'Built a strong foundation in <strong>circuit design, digital electronics, and embedded systems</strong> while developing a growing passion for software engineering',
      'Final-year project integrated <strong>both hardware and software concepts</strong> — bridging electronics with modern software solutions',
      'Published research paper in <strong>IJERT</strong> on IoT-based Automation Systems',
      'Member of the <strong>Electronics and Communication Club</strong>; led project teams for mini and major engineering projects',
      'Participated in <strong>National-Level Hackathons</strong> and competitive coding contests, where I was introduced to JavaScript and mobile development',
      'Organized technical workshops on <strong>IoT and Embedded Systems</strong>; contributed to college tech symposiums and IEEE student events',
      'Volunteered in department fests and innovation drives, building strong collaboration and leadership skills',
    ],
    stack: ['ECE', 'C/C++', 'IoT', 'Embedded Systems', 'Communication Systems'],
  },
];

export const navLinks: NavLink[] = [
  { href: '#home', label: 'Home', num: '01', section: 'home' },
  { href: '#about', label: 'About', num: '02', section: 'about' },
  { href: '#skills', label: 'Skills', num: '03', section: 'skills' },
  { href: '#experience', label: 'Work', num: '04', section: 'experience' },
  { href: '#projects', label: 'Projects', num: '05', section: 'projects' },
  { href: '#contact', label: 'Contact', num: '06', section: 'contact' },
];

export const stats: Stat[] = [
  { target: 3, suffix: '+', label: 'Years Experience' },
  { target: 9, suffix: '+', label: 'Production Apps' },
  { target: 40, suffix: '%', label: 'Performance Boost' },
  { target: 35, suffix: '+', label: 'Technologies' },
];

export const techMarquee: string[] = [
  'React',
  'React Native',
  'TypeScript',
  'Node.js',
  'MongoDB',
  'Firebase',
  'Express',
  'Razorpay',
  'Stripe',
  'Redux',
  'Tailwind',
  'JWT',
  'Vercel',
  'CI/CD',
];

export const personalInfo = {
  name: 'Mallikarjuna Rao Lattupalli',
  role: 'Senior Software Engineer · React Developer · Full-Stack',
  email: 'mrao.developer@gmail.com',
  phone: '+91-6304434947',
  phoneDisplay: '+91 63044 34947',
  whatsapp: 'https://wa.me/916304434947',
  location: 'Hyderabad, Telangana, India',
  github: 'https://github.com/Malli4947',
  githubHandle: '/Malli4947',
  linkedin: 'https://linkedin.com/in/mallikarjuna-rao-lattupalli',
  linkedinHandle: '/in/mallikarjuna-rao-lattupalli',
};