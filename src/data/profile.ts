import cybersentinelCover from "@/assets/project-cybersentinel.jpg";
import nimbuswatchCover from "@/assets/project-nimbuswatch.jpg";
import passwordCrackerCover from "@/assets/project-password-cracker.jpg";
import fitnessfreakCover from "@/assets/project-fitnessfreak.jpg";
import chatbotCover from "@/assets/project-chatbot.jpg";

export const profile = {
  name: "Mohammad Abdullah",
  title: "Cybersecurity Analyst",
  location: "Islamabad, Pakistan",
  email: "abdullahyousaf132@gmail.com",
  phone: "+92 342 8785780",
  github: "https://github.com/AbdullahYousaf-13",
  linkedin: "https://linkedin.com/in/abdullahyousaf13",
  resumeUrl: "/Mohammad_Abdullah.pdf",
  eyebrow: "SOC · IDS · AI-Assisted Defence",
  summary:
    "Cybersecurity-focused Computer Science student building AI-assisted defence systems. Hands-on with SOC operations, Wazuh SIEM triage, vulnerability assessment, and hybrid ML intrusion detection.",
  longBio:
    "I work at the intersection of security operations and applied machine learning — designing detection systems that pair signature-based rigor with anomaly-aware intelligence. My internship at Techaccess Pakistan sharpened my SOC muscle: triaging live Wazuh alerts, running vulnerability assessments with Nmap and Burp Suite, and analysing telemetry with Wireshark and Autopsy. My final-year project, CyberSentinel, extends that discipline with a hybrid Random Forest + Isolation Forest IDS wired into a React dashboard.",
  quickFacts: [
    { label: "Location", value: "Islamabad, PK" },
    { label: "Degree", value: "BS Computer Science" },
    { label: "CGPA", value: "3.4 / 4.0" },
    { label: "Open to", value: "SOC / Security Engineer roles" },
  ],
  learningRepos: [
    { name: "CEH-Practical-Guide", url: "https://github.com/AbdullahYousaf-13/CEH-Practical-Guide" },
    { name: "Cybersecurity-Cheat-Sheet", url: "https://github.com/AbdullahYousaf-13/Cybersecurity-Cheat-Sheet" },
    { name: "Google-Cybersecurity", url: "https://github.com/AbdullahYousaf-13/Google-Cybersecurity" },
  ],
};

export const skills = [
  {
    category: "Cybersecurity & Tools",
    items: [
      "Vulnerability Assessment", "Penetration Testing", "Anomaly Detection", "Threat Intelligence",
      "Incident Response", "Log Analysis", "SIEM Monitoring", "SOC Operations", "IDS",
      "Kali Linux", "Ubuntu", "Nmap", "Wireshark", "Wazuh", "Burp Suite", "Autopsy", "SQLMap", "Metasploit",
    ],
  },
  {
    category: "Web Development",
    items: [
      "React.js", "JavaScript", "CSS", "HTML", "Responsive Design", "Highcharts", "Ant Design",
      "Figma", "Git", "GitHub", "Version Control", "Render", "Postman", "Docker",
    ],
  },
  {
    category: "AI & ML",
    items: [
      "Machine Learning", "NumPy", "Scikit-learn", "Isolation Forest", "Random Forest",
      "Data Preprocessing", "Model Training & Evaluation", "Feature Engineering",
    ],
  },
];

export const projects = [
  {
    id: "cybersentinel",
    name: "CyberSentinel",
    tagline: "Hybrid AI-based Intrusion Detection System",
    year: "2026",
    role: "Final Year Project · Award: 2nd Place, ICCOR Poster",
    cover: cybersentinelCover,
    stack: ["Wazuh", "Random Forest", "Isolation Forest", "React.js", "FastAPI", "Python", "MongoDB", "Highcharts"],
    highlights: [
      "Engineered a hybrid AI-IDS achieving 94%+ detection accuracy with false positive rate as low as 7%.",
      "Architected a React.js dashboard consuming FastAPI REST endpoints for live predictions and telemetry.",
      "Deployed Wazuh for centralised log collection, ingesting 10,000+ events/day into the ML pipeline.",
      "Built interactive Highcharts visualisations enabling drill-down of attack trends and distributions.",
    ],
    links: [
      { label: "Frontend", url: "https://github.com/AbdullahYousaf-13/CyberSentinel-Frontend" },
      { label: "Backend", url: "https://github.com/AbdullahYousaf-13/CyberSentinel-Backend" },
      { label: "ML", url: "https://github.com/AbdullahYousaf-13/CyberSentinel-AI" },
    ],
  },
  {
    id: "nimbuswatch",
    name: "NimbusWatch",
    tagline: "Hybrid-cloud malicious-traffic detection",
    year: "2026",
    role: "Solo · Cloud + MLOps",
    cover: nimbuswatchCover,
    stack: ["Python", "FastAPI", "Vertex AI", "Cloud Run", "HistGradientBoosting", "Hugging Face", "CICIDS2017"],
    highlights: [
      "Trained a HistGradientBoostingClassifier on a curated CICIDS2017 subset with feature selection and probability-threshold tuning.",
      "Deployed stateless FastAPI inference on Cloud Run, with model artifacts in Cloud Storage and training on Vertex AI.",
      "Wired a secondary Hugging Face Space as a public demo/backup host for the same model.",
      "Instrumented Cloud Logging + Monitoring for the inference API contract (/predict, /health, /model-info).",
    ],
    links: [{ label: "GitHub", url: "https://github.com/AbdullahYousaf-13/NimbusWatch" }],
  },
  {
    id: "password-cracker",
    name: "Password Cracker",
    tagline: "Password auditing tool with brute-force + dictionary attacks",
    year: "2025",
    role: "Frontend + auditing logic",
    cover: passwordCrackerCover,
    stack: ["React.js", "JavaScript", "Node.js", "MySQL", "MD5", "SHA-1", "SHA-256"],
    highlights: [
      "Built a responsive UI and validation layer for MD5 / SHA-1 / SHA-256 hash cracking.",
      "Simulated brute-force and dictionary attacks against a 10,000-entry wordlist.",
      "Achieved sub-500ms average crack time for weak passwords.",
    ],
    links: [{ label: "GitHub", url: "https://github.com/AbdullahYousaf-13/Password-Cracker" }],
  },
  {
    id: "fitnessfreak",
    name: "FitnessFreak",
    tagline: "Multi-role fitness platform with dashboards for dietitian, trainer, member",
    year: "2024",
    role: "Frontend + dashboards",
    cover: fitnessfreakCover,
    stack: ["React.js", "JavaScript", "Node.js", "MySQL", "CSS", "HTML"],
    highlights: [
      "Developed interactive client dashboards for 3 user roles: dietitian, trainer, and member.",
      "Shipped personalised workout plans, nutrition tracking, and progress analytics surfaces.",
      "Reduced form-submission errors by 40% through input validation refactoring.",
    ],
    links: [{ label: "GitHub", url: "https://github.com/AbdullahYousaf-13/Fitness-Freak" }],
  },
  {
    id: "chatbot",
    name: "Local Ollama ChatBot",
    tagline: "On-device conversational AI over a local LLM",
    year: "2025",
    role: "Full-stack",
    cover: chatbotCover,
    stack: ["Ollama", "smollm:1.7b", "JavaScript", "Node.js", "HTML/CSS"],
    highlights: [
      "Built a responsive web chat interface talking to a local Ollama (smollm:1.7b) model.",
      "Engineered the async frontend-to-backend API flow for smooth on-device responses.",
    ],
    links: [{ label: "GitHub", url: "https://github.com/AbdullahYousaf-13/ChatBot" }],
  },
];

export const experience = [
  {
    role: "Cybersecurity Intern",
    company: "Techaccess Pakistan",
    period: "07/2025 – 09/2025",
    location: "Islamabad, PK",
    bullets: [
      "Reinforced SOC operations for a team of 8 analysts, focusing on real-time network defence and proactive threat monitoring across a multi-client environment.",
      "Triaged 50+ daily security alerts in Wazuh SIEM, maintaining a sub-2-hour escalation time for validated incidents and reducing analyst backlog by 15%.",
      "Conducted vulnerability assessments across 10+ systems using Nmap and Burp Suite, producing structured remediation reports adopted directly into client security roadmaps.",
      "Analysed network and system logs using Wireshark, Wazuh and Autopsy, contributing to 3 incident post-mortems and improving detection rule coverage by 20%.",
    ],
    metrics: [
      { value: "50+", label: "Alerts / day" },
      { value: "<2h", label: "Escalation" },
      { value: "15%", label: "Backlog ↓" },
      { value: "20%", label: "Coverage ↑" },
    ],
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "Capital University of Science & Technology",
  period: "09/2022 – 07/2026",
  location: "Islamabad, Pakistan",
  cgpa: "3.4 / 4.0",
  coursework: [
    "Information Security & Forensics", "Computer Forensics", "Cybersecurity", "Networking",
    "Data Science", "AI", "Cloud Computing", "Databases", "Software Engineering",
    "Data Structures & Algorithms", "OOP",
  ],
};

export const credentials = [
  { name: "Google Cybersecurity", issuer: "Coursera", year: "2026" },
  { name: "SOC Foundation Training", issuer: "Microsoft", year: "2025" },
  { name: "2nd Position — FYP Research & Poster Design", issuer: "ICCOR (CyberSentinel)", year: "2026" },
  { name: "ExcITe Cup", issuer: "CUST", year: "2025" },
  { name: "Robo CUST", issuer: "CUST", year: "2025" },
];
