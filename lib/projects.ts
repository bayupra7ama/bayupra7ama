export type Project = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  summary: string;
  longSummary: string;
  stack: string[];
  repo?: string;
  secondaryRepo?: string;
  role: string;
  year: string;
  type: "mobile" | "web" | "fullstack" | "ai";
  visual: "cashier" | "spot" | "monitoring" | "resik" | "lapor" | "school";
  images?: string[];
  highlights: string[];
  challenge: string;
  solution: string;
};

export const projects: Project[] = [
  {
    slug: "mudah-catat",
    number: "01",
    title: "MUDAH CATAT",
    eyebrow: "Flutter cashier & finance",
    summary:
      "A practical cashier and finance app for sales, products, customer debt, reports, receipts, and device-level biometric verification.",
    longSummary:
      "MUDAH CATAT is a Flutter application designed around day-to-day small-business workflows. It brings sales recording, product management, customer debt tracking, reports, printable documents, and biometric verification into one mobile experience.",
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "Local Auth", "PDF"],
    repo: "https://github.com/bayupra7ama/kasir-biomentrik",
    role: "Mobile Developer",
    year: "2026",
    type: "mobile",
    visual: "cashier",
    images: [
      "https://raw.githubusercontent.com/bayupra7ama/kasir-biomentrik/main/assets/logo.jpeg",
    ],
    highlights: [
      "Firebase Authentication and Cloud Firestore data layer",
      "Sales, products, customer debt and payment tracking",
      "PDF receipts and reporting workflow",
      "Biometric verification using device capabilities",
    ],
    challenge:
      "Small-business bookkeeping often gets split across notes, chats, calculators, and manual debt records.",
    solution:
      "I structured the app around actual cashier workflows, keeping transaction, product, debt, reporting, and verification concerns separate while maintaining a simple mobile flow.",
  },
  {
    slug: "spotgacor",
    number: "02",
    title: "SpotGacor",
    eyebrow: "Android location platform",
    summary:
      "A native Android fishing discovery platform with spot search, Google Maps navigation, community stories, ratings, reviews, and a Laravel API.",
    longSummary:
      "SpotGacor helps anglers discover fishing locations and understand what to expect before visiting a spot. The Android client combines location discovery, spot details, community content, reviews, image uploads, and Google Maps navigation with a Laravel REST API.",
    stack: ["Kotlin", "Android", "Google Maps", "Retrofit", "Paging 3", "Laravel"],
    repo: "https://github.com/bayupra7ama/SpotGacor",
    secondaryRepo: "https://github.com/bayupra7ama/SpotGacorBackEnd",
    role: "Android & Backend Developer",
    year: "2025",
    type: "fullstack",
    visual: "spot",
    images: [
      "https://raw.githubusercontent.com/bayupra7ama/SpotGacor/master/image/tampilan-1.png",
      "https://raw.githubusercontent.com/bayupra7ama/SpotGacor/master/image/tampilan-2.png",
      "https://raw.githubusercontent.com/bayupra7ama/SpotGacor/master/image/tampilan-3.png",
    ],
    highlights: [
      "Search and filter fishing spots by place and fish type",
      "Google Maps markers, user location, and turn-by-turn navigation",
      "Ratings, reviews, location sharing, and community stories",
      "Bearer-token REST API integration with pagination and media upload",
    ],
    challenge:
      "Fishing spot recommendations are usually scattered across word of mouth, chats, and social posts without consistent location or access information.",
    solution:
      "I combined structured spot data with maps and community input so users can discover, evaluate, navigate to, and share fishing locations from one application.",
  },
  {
    slug: "monitoring-ta",
    number: "03",
    title: "Monitoring TA",
    eyebrow: "Academic progress system",
    summary:
      "A thesis monitoring ecosystem for students and supervisors with projects, tasks, progress reports, validation, notifications, and burndown tracking.",
    longSummary:
      "Monitoring TA connects students and academic supervisors around a structured thesis workflow. The Android client is built with Kotlin and Jetpack Compose, while Laravel provides authenticated APIs, role-specific workflows, reporting, notifications, and administrative tooling.",
    stack: ["Kotlin", "Jetpack Compose", "Laravel 12", "Sanctum", "Filament", "Retrofit"],
    repo: "https://github.com/bayupra7ama/monitoring-ta",
    secondaryRepo: "https://github.com/bayupra7ama/monitoring-ta-api",
    role: "Mobile & Backend Developer",
    year: "2025",
    type: "fullstack",
    visual: "monitoring",
    highlights: [
      "Student and supervisor role-specific dashboards",
      "Project, task and subtask progress workflow",
      "Progress report upload, feedback and validation",
      "Notifications and project burndown visualization",
    ],
    challenge:
      "Final-project progress is difficult to follow when tasks, reports, feedback, and supervision history live in separate channels.",
    solution:
      "I designed a project-centered workflow where students can report progress and supervisors can review status, validate reports, and monitor completion trends.",
  },
  {
    slug: "resikapp",
    number: "04",
    title: "ResikApp",
    eyebrow: "Bangkit capstone · Android + AI",
    summary:
      "A multidisciplinary waste-management capstone combining waste pickup workflows, education, maps, and AI-assisted waste classification.",
    longSummary:
      "ResikApp was developed as a Bangkit Academy capstone project. The mobile application supports waste pickup requests and educational content while integrating an AI-based computer-vision flow to help classify waste through the camera.",
    stack: ["Kotlin", "Android", "Retrofit", "Google Maps", "Computer Vision", "Cloud API"],
    repo: "https://github.com/bayupra7ama/Capstone",
    role: "Cross-functional Capstone Contributor",
    year: "2024",
    type: "ai",
    visual: "resik",
    images: [
      "https://raw.githubusercontent.com/bayupra7ama/Capstone/main/app/src/main/res/drawable/logo.png",
    ],
    highlights: [
      "Waste pickup request and history workflows",
      "Education content around waste and recycling",
      "Map-based location features",
      "AI-assisted waste classification integrated into the Android experience",
    ],
    challenge:
      "Waste management needs both operational pickup flows and better user understanding of waste categories.",
    solution:
      "The capstone combined Android, machine learning, and cloud responsibilities into an end-to-end mobile flow instead of treating AI as an isolated demo.",
  },
  {
    slug: "lapor-infra",
    number: "05",
    title: "Lapor Infra",
    eyebrow: "Public-service reporting",
    summary:
      "A Laravel-based reporting system created during an internship at Diskominfo Pekanbaru for handling network infrastructure incidents across city offices.",
    longSummary:
      "Lapor Infra was built during my internship at Dinas Komunikasi, Informatika, Statistik, dan Persandian Kota Pekanbaru. It supports reporting and management of network-infrastructure incidents across OPD environments, including administrative monitoring and reporting tools.",
    stack: ["Laravel", "Filament", "MySQL", "Notifications", "Excel Export"],
    repo: "https://github.com/bayupra7ama/chatbot_autoreplay_with_laravel",
    role: "Software Developer Intern",
    year: "2025",
    type: "web",
    visual: "lapor",
    images: [
      "https://raw.githubusercontent.com/bayupra7ama/chatbot_autoreplay_with_laravel/main/images/ui-user.png",
      "https://raw.githubusercontent.com/bayupra7ama/chatbot_autoreplay_with_laravel/main/images/admin1.png",
    ],
    highlights: [
      "Incident submission workflow for network-related reports",
      "Filament-based administrative management",
      "OPD and report data management",
      "Performance monitoring and report export",
    ],
    challenge:
      "Infrastructure incident reporting across government offices needs a clearer intake and monitoring workflow than informal messaging alone.",
    solution:
      "I built a structured Laravel workflow that centralizes incoming reports and gives administrators a clearer way to monitor and manage infrastructure incidents.",
  },
  {
    slug: "7kaih",
    number: "06",
    title: "7KAIH Monitoring",
    eyebrow: "School & parent collaboration",
    summary:
      "A multi-role Laravel system connecting administrators, teachers, and parents through student habit journals, materials, feedback, WhatsApp OTP, and Excel reporting.",
    longSummary:
      "The 7 Kebiasaan Anak Indonesia Hebat monitoring platform supports school administrators, teachers, and parents with role-based workflows. Parents record daily journals, teachers monitor progress and learning materials, while admins manage school master data.",
    stack: ["Laravel 12", "WhatsApp OTP", "Role Middleware", "Laravel Excel", "Blade"],
    repo: "https://github.com/bayupra7ama/monitoring-7KAIH-sekolah",
    role: "Full-stack Developer",
    year: "2026",
    type: "web",
    visual: "school",
    highlights: [
      "Admin, teacher and parent role separation",
      "Daily student habit journal monitoring",
      "Learning materials and parent feedback",
      "WhatsApp OTP verification and Excel import/export",
    ],
    challenge:
      "Habit monitoring works best when school and parent observations are connected instead of recorded in isolated channels.",
    solution:
      "I implemented role-based workflows around a shared student journal model, with secure OTP access and reporting tools for school operations.",
  },
];

export const moreProjects = [
  {
    title: "UKT Reduction Classification",
    description: "Laravel decision-support workflow connected to an R/C5.0 classification API.",
    stack: "Laravel · R · C5.0 · REST API",
    href: "https://github.com/bayupra7ama/klasifikasi-pengurangan-ukt",
  },
  {
    title: "Jastip E-Commerce",
    description: "Laravel commerce system with transaction PIN security and Midtrans payment flow.",
    stack: "Laravel · Livewire · Midtrans · Fortify",
    href: "https://github.com/bayupra7ama/jastip-ecommerce",
  },
  {
    title: "Google Maps Review Scraper",
    description: "Automation project for extracting Google Maps review data with browser automation.",
    stack: "Python · Selenium · Data Extraction",
    href: "https://github.com/bayupra7ama/scraping_googleMaps_review_with_selenium",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
