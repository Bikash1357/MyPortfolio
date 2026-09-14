// All site content lives here — edit this file to update the portfolio.

export const profile = {
  name: "Bikash Kumar Thakur",
  firstName: "Bikash",
  title: "Software Developer",
  roles: ["Software Developer", "App Developer", "Full Stack Developer", "Problem Solver"],
  location: "Delhi, India",
  email: "kumarvikash06182@gmail.com",
  github: "https://github.com/Bikash1357",
  playStore: "https://play.google.com/store/apps/developer?id=Wingmail&hl=en",
  linkedin: "https://www.linkedin.com/in/bikash-kumar-040598229/",
  // Put your resume PDF at public/resume.pdf
  resume: "/resume.pdf",
  summary:
    "I'm a developer who builds and ships real apps. Two of my apps are live on Google Play, and I've built production mobile apps, REST APIs and ML-powered systems. I like turning ideas into software people actually use.",
};

export const stats = [
  { value: 2, label: "Live apps on Google Play" },
  { value: 3, label: "Professional roles" },
  { value: 1, suffix: "+ yr", label: "Production app development" },
  { value: 7.8, decimals: 1, label: "CGPA, B.Tech IIoT" },
];

export const skills = [
  { title: "Programming", caption: "languages", items: ["Python", "Dart", "SQL", "Java"] },
  {
    title: "Development",
    caption: "frameworks & platforms",
    items: ["Flutter", "Django", "FastAPI", "Firebase", "REST APIs", "OOP", "Data Structures & Algorithms"],
  },
  {
    title: "Data & ML",
    caption: "analysis & modelling",
    items: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "Data Cleaning", "Preprocessing", "Supervised", "Unsupervised"],
  },
  {
    title: "AI / Deep Learning",
    caption: "concepts & architectures",
    items: ["Neural Networks", "CNN", "RNN", "LSTM / GRU", "Backpropagation", "Transformers"],
  },
  { title: "Tools", caption: "daily workflow", items: ["Git", "GitHub", "VS Code"] },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Klayons",
    date: "Jul 2025 – Present",
    points: [
      "Developed and maintained Flutter-based mobile applications for Android and iOS.",
      "Integrated RESTful APIs, implemented authentication flows and optimised app performance.",
      "Built subscription management, user onboarding, event management and dashboard features for production apps.",
      "Collaborated with backend developers and took part in code reviews using Git workflows.",
    ],
    tags: ["Flutter", "Dart", "REST APIs", "Auth", "Git"],
  },
  {
    role: "Full Stack Developer (Freelance)",
    company: "AsRES",
    client: "Client: University of Melbourne",
    date: "Freelance",
    points: [
      "Developed a cross-platform event management app in Flutter (Dart) for mobile and web, using Firebase Auth, Firestore and Storage.",
      "Built role-based interfaces for attendees and organisers, including check-in control and event, session and speaker management.",
      "Delivered a complete solution that works the same for mobile and web users.",
    ],
    tags: ["Flutter Web", "Firebase Auth", "Firestore", "Storage"],
  },
  {
    role: "Data Analytics Intern",
    company: "IBM SkillsBuild",
    date: "Jun 2024 – Aug 2024",
    points: [
      "Analysed large datasets, found patterns and trends, and turned them into business insights.",
      "Worked hands-on with NumPy, Pandas and Matplotlib for data analysis.",
      "Explored supervised and unsupervised machine learning models with Scikit-learn.",
      "Wrote documentation for knowledge sharing and worked with teammates on real-world problems.",
    ],
    tags: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
  },
];

export type LiveApp = {
  name: string;
  tagline: string;
  description: string[];
  features: { title: string; text: string }[];
  tags: string[];
  visual: "expense" | "wingmail";
  playStore: string;
  website?: string;
};

// Apps published on Google Play — shown first in the Projects section.
export const liveApps: LiveApp[] = [
  {
    name: "ExpenseCatch",
    tagline: "Money tracker built for UPI payments",
    description: [
      "A simple, fast expense tracker built for how people actually spend money, especially through UPI. No spreadsheets, no typing after every purchase, no clutter. Open the app and see where your money went.",
    ],
    features: [
      {
        title: "Automatic UPI capture",
        text: "Logs payments from Google Pay, PhonePe, Paytm, Jupiter, BHIM and bank apps by reading the amount and merchant from payment notifications.",
      },
      {
        title: "Private by design",
        text: "Everything is processed on the device. Notification content is never uploaded anywhere.",
      },
      {
        title: "Manual expenses & income",
        text: "Add entries in a few taps with built-in or custom categories.",
      },
    ],
    tags: ["Android", "Personal Finance", "UPI", "On-device processing"],
    visual: "expense",
    playStore: "https://play.google.com/store/apps/details?id=com.ExpenseCatch.expensecatch&hl=en",
  },
  {
    name: "Wingmail",
    tagline: "Letters that take their time",
    description: [
      "Wingmail sends your letter by pigeon. It leaves from where you are, flies the real distance to where the other person is, and lands when it lands, sealed the whole way.",
      "Delivery depends on distance, not internet speed. It can take days, and that is rather the point.",
    ],
    features: [
      { title: "Real-distance delivery", text: "Each letter's travel time is based on the actual distance between sender and recipient." },
      { title: "Sealed in flight", text: "Letters stay sealed until the pigeon lands." },
    ],
    tags: ["Android", "Web App", "Messaging"],
    visual: "wingmail",
    playStore: "https://play.google.com/store/apps/details?id=com.expentureltd.wingmail",
    website: "https://wingmal.web.app/",
  },
];

export type Project = {
  title: string;
  label: string;
  description: string[];
  tags: string[];
  visual: "api" | "phones" | "phone" | "data";
  link?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "AI Actor Prediction System",
    label: "AI / ML",
    featured: true,
    visual: "api",
    description: [
      "An AI-based recommendation system that predicts suitable actors from movie requirements such as genre, age, height, ratings and awards.",
      "A FastAPI backend powers an interactive web interface for real-time predictions, with ML models and data preprocessing pipelines tuned for recommendation accuracy.",
    ],
    tags: ["Python", "FastAPI", "Machine Learning", "HTML/CSS/JS"],
    link: "https://github.com/Bikash1357/Actor_Prediction",
  },
  {
    title: "AsRES Event Management App",
    label: "Freelance · Mobile + Web",
    visual: "phones",
    description: [
      "A cross-platform event app for a University of Melbourne client. Attendees and organisers get separate role-based views, with check-in control and session and speaker management.",
    ],
    tags: ["Flutter", "Firebase", "Firestore"],
  },
  {
    title: "Klayons Mobile Apps",
    label: "Production · Klayons",
    visual: "phone",
    description: [
      "Production Flutter apps for Android and iOS, including subscription management, user onboarding, event management, dashboards and secure authentication flows.",
    ],
    tags: ["Flutter", "REST APIs", "Auth"],
  },
  {
    title: "IBM Data Analytics Work",
    label: "Internship · Data",
    visual: "data",
    description: [
      "Analysis of large datasets to find trends and business insights, plus experiments with supervised and unsupervised models.",
    ],
    tags: ["Pandas", "Matplotlib", "Scikit-learn"],
  },
];

export const education = {
  degree: "Bachelor of Technology in Industrial Internet of Things",
  school: "Guru Gobind Singh Indraprastha University, Delhi",
  years: "2022 – 2026",
  cgpa: 7.8,
};

export const achievements = [
  { title: "2nd Prize Winner", detail: "Hardware Hackathon organised by GGSIPU EDC" },
  { title: "Selected, Smart India Hackathon 2024", detail: "Internal Hackathon round (SIH'24)" },
  { title: "Treasurer", detail: "CSR College Club" },
];

export const certifications = [
  { title: "Data Analytics Internship Certificate", issuer: "IBM" },
  { title: "SQL", issuer: "Simplilearn" },
  { title: "Project Management Fundamentals", issuer: "IBM" },
  { title: "Data Fundamentals", issuer: "IBM" },
];
