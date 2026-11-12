/**
 * Site content for Neha Poulose K.
 * Facts below come from the supplied portfolio brief and resume.
 * Replace placeholder repository URLs when the project repos are ready.
 */

/** Swap this file in /public, then update the path if the filename changes. */
export const PROFILE_IMAGE = "/profile.svg";
export const PROFILE_IMAGE_ALT = "Profile photograph of Neha Poulose K";

/**
 * Resume download URL. The PDF is stored at public/resume/Neha_Poulose_K_Resume.pdf
 * and is served from this path locally and after deployment.
 * Replace this single value if the public PDF moves to another direct URL.
 */
export const RESUME_URL = "/resume/Neha_Poulose_K_Resume.pdf";
export const RESUME_FILENAME = "Neha_Poulose_K_Resume.pdf";

export const PROFILE = {
  name: "Neha Poulose K",
  title: "Information Technology Graduate",
  tagline:
    "Turning Ideas into Technology. Passionate About Learning, Building and Innovating.",
  intro:
    "Information Technology graduate from Rajagiri School of Engineering and Technology, with practical exposure to Python, React.js, Machine Learning, and web technologies.",
  about:
    "I am Neha Poulose K, an Information Technology graduate from Rajagiri School of Engineering and Technology. I have a strong interest in technology, software development, problem-solving, and emerging technologies. Through academic projects and internship experience, I have gained practical exposure to Python, React.js, Machine Learning, and web technologies. I am passionate about continuously learning new skills and applying my knowledge to real-world challenges.",
  email: "nehapoulose77@gmail.com",
  linkedin: "https://www.linkedin.com/in/neha-poulose-k",
  linkedinLabel: "linkedin.com/in/neha-poulose-k",
  github: "https://github.com/nehapoulose77",
  githubLabel: "github.com/nehapoulose77",
};

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#resume", label: "Resume" },
];

export const EDUCATION = {
  degree: "Bachelor of Technology – Information Technology",
  college: "Rajagiri School of Engineering and Technology (Autonomous), Kochi",
  cgpa: "7.8",
  period: "October 2022 – May 2026",
};

/** Placeholder until each project repository URL is provided. */
export const PROJECT_REPO_PLACEHOLDER = "https://github.com/nehapoulose77";

export const PROJECTS = [
  {
    title: "Hire AI",
    subtitle:
      "Generative AI-Based Hiring Assistant for Human Capital Management",
    duration: "July 2025 – March 2026",
    description:
      "Developed an AI-powered recruitment assistant using NLP and ML to automate job description generation, resume screening, and interview analysis.",
    achievements: [
      "Research paper accepted at ICSCST 2026.",
      "Received ₹1,00,000 AI Fellowship.",
    ],
    stack: ["React.js", "Cloud Firestore", "Local AI Engine – Ollama"],
    repo: PROJECT_REPO_PLACEHOLDER,
  },
  {
    title: "CalorEase",
    subtitle: "Calorie Tracking & Meal Recommendation System",
    duration: "January 2025 – April 2025",
    description:
      "Developed a web-based calorie tracking application to monitor daily calorie intake and nutritional habits, integrating a food database to provide personalized diet suggestions, balanced meal recommendations, and real-time progress visualization.",
    achievements: [],
    stack: ["HTML", "CSS", "Python (Flask)", "MongoDB"],
    repo: PROJECT_REPO_PLACEHOLDER,
  },
  {
    title: "Heart Disease Prediction System",
    subtitle: "",
    duration: "",
    description:
      "Developed a heart disease prediction system that analyzes patient health data to classify risk levels using machine learning. The system includes data preprocessing, model training, and performance evaluation to deliver accurate predictions.",
    achievements: [],
    stack: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Logistic Regression",
      "Machine Learning",
    ],
    repo: PROJECT_REPO_PLACEHOLDER,
  },
];

export const SKILL_GROUPS = [
  {
    title: "Programming Languages",
    items: ["Python", "Java", "C", "SQL"],
  },
  {
    title: "Web Technologies",
    items: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "Core Concepts",
    items: ["Data Structures", "Object-Oriented Programming (OOP)"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Google Colab"],
  },
];

export const ACHIEVEMENTS = [
  "Received ₹1,00,000 AI Fellowship for the Hire AI project.",
  "Research paper accepted at ICSCST 2026.",
  "Participated in Smart Internal Hackathon at Rajagiri School of Engineering and Technology, August 2024.",
  "Confluence 2.0 Volunteer – Supported event coordination, participant management, and technical activities.",
];

export const CERTIFICATIONS = [
  {
    name: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    year: "2026",
  },
  {
    name: "Python Development",
    issuer: "Infotact Solutions",
    year: "2026",
  },
  {
    name: "Cloud Computing and Distributed Systems",
    issuer: "NPTEL",
    year: "2025",
  },
  {
    name: "Introduction to Node.js for Beginners",
    issuer: "Udemy",
    year: "2024",
  },
  {
    name: "Unlocking the Power of Large Language Models (LLMs)",
    issuer: "IBM Workshop, Confluence",
    year: "",
  },
  {
    name: "Cyber Security and Ethical Hacking",
    issuer: "Blueshell Technologies",
    year: "2024",
  },
];

export const INTERNSHIP = {
  role: "Python Data Science & Machine Learning Intern",
  organization: "Camino Infotech Pvt. Ltd., Kochi",
  duration: "May 2025",
  points: [
    "Completed hands-on training in Python, Data Science, and Machine Learning.",
    "Gained practical experience in Python, NumPy, Pandas, and SQL.",
    "Developed skills in Data Analysis, Data Preprocessing, Data Visualization, Exploratory Data Analysis (EDA), and Machine Learning.",
    "Used Google Colab for data analysis, model development, and experimentation.",
    "Strengthened analytical, problem-solving, and debugging skills.",
  ],
};
