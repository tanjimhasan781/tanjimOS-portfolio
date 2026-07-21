var PORTFOLIO_DATA = {
  name: "MD. TANJIMUL HASAN",
  title: "Full Stack Developer · Competitive Programmer · AI Enthusiast",
  tagline: "I’m a Full-Stack Developer passionate about building scalable applications and solving complex problems through code.",
  level: "LV.24 SOFTWARE ENGINEER",
  email: "tanjimulhasan781@gmail.com",
  phone: "+880 1818775169",
  socials: [
    { id: "gh", label: "GITHUB", url: "https://github.com/tanjimhasan781" },
    { id: "in", label: "LINKEDIN", url: "https://www.linkedin.com/in/tanjim-hasan-71309b22a/" },
    { id: "cf", label: "CODEFORCES", url: "https://codeforces.com/profile/NOTsoGENIUS_69" },
    { id: "lc", label: "LEETCODE", url: "https://leetcode.com/u/tanjimhasan35/" },
    { id: "mail", label: "MAIL", url: "mailto:tanjimulhasan781@gmail.com" }
  ],
  about: "CSE graduate from Khulna University of Engineering & Technology (KUET) with a strong foundation in Data Structures, Algorithms, OOP and Design Principles, backed by a solid competitive programming background. I'm passionate about building production-ready software and hardware systems — from AI-powered learning platforms to privacy-first mobile apps. When I'm not shipping code, I'm probably grinding Codeforces problems or organizing programming contests at SGIPC KUET.",
  education: [
    { school: "Khulna University of Engineering & Technology", place: "Khulna, Bangladesh", degree: "BSc in Computer Science & Engineering", period: "Mar 2022 – Jul 2026", result: "CGPA 3.24 / 4.00 (till 7th semester)" },
    { school: "Chittagong Cantonment Public College", place: "Chattogram, Bangladesh", degree: "Higher Secondary Certificate (HSC)", period: "2018 – 2020", result: "GPA 5.00 / 5.00" },
    { school: "BAF Shaheen College Chattogram", place: "Chattogram, Bangladesh", degree: "Secondary School Certificate (SSC)", period: "2014 – 2018", result: "GPA 5.00 / 5.00" }
  ],
  projects: [
    { name: "Learn", subtitle: "Context-Aware Roadmap & Learning Recommendation System", tech: ["Next.js", "React Flow", "MongoDB", "Cohere", "Pinecone", "NextAuth.js", "Cloudinary", "Groq SDK"], points: ["AI-powered learning platform with interactive roadmap generation using React Flow.", "Semantic search with Pinecone vector DB — better query relevance and retrieval efficiency."], url: "https://github.com/tanjimhasan781" },
    { name: "DocQ", subtitle: "Anonymous Patient–Doctor Consultation App (iOS)", tech: ["Swift", "UIKit", "Firebase Auth", "Firebase Realtime DB", "JSON"], points: ["Privacy-first iOS platform: patients post health queries anonymously, doctors respond in real time.", "Role-based system (Patient/Doctor) with Firebase Authentication and live data sync."], url: "https://github.com/tanjimhasan781" },
    { name: "Virtual Campus", subtitle: "Peer-to-Peer Academic Resource Sharing App (Android)", tech: ["Java", "Android Studio", "Firebase Auth", "Firebase Storage"], points: ["Students upload and discover academic notes via topic-based search — peer-driven knowledge sharing.", "Firebase Authentication for secure login and Firebase Storage for scalable note management."], url: "https://github.com/tanjimhasan781" }
  ],
  skills: [
    { cat: "LANGUAGES", items: ["C++", "Python", "TypeScript", "Java"] },
    { cat: "FRAMEWORKS", items: ["Express.js", "React", "Next.js"] },
    { cat: "DATABASE & ORM", items: ["MySQL", "MongoDB", "Firebase"] },
    { cat: "TOOLS & DEVOPS", items: ["Git"] },
    { cat: "CORE CS", items: ["Data Structures & Algorithms", "OOP", "Operating Systems", "Computer Networks", "DBMS"] }
  ],
  experience: [
    { role: "Vice President", org: "SGIPC KUET", period: "Aug 2025 – Jul 2026", points: ["Organizing contests and training sessions; representing the club in inter-university programming events."], kind: "leadership" },
    { role: "Junior Executive, LFR Competition", org: "KUET CSE BITFEST 2025", period: "Jan 2025", points: ["Managed participant registration and on-ground execution."], kind: "leadership" }
  ],
  achievements: [
    { title: "Codeforces — Pupil (Max 1317)", detail: "Handle NOTsoGENIUS · 644+ problems solved across DS, Algorithms, Graph Theory and DP.", tag: "PROBLEM SOLVING" },
    { title: "BUET CSE Fest 2026 Hackathon — Finalist", detail: "Reached the Final Round with Team Yip Yip Gattis.", tag: "HACKATHON" },
    { title: "KUET BITFEST IUPC 2025", detail: "Participated with Team KUET Wrong Answers.", tag: "CONTEST" },
    { title: "PSTU IT Carnival Programming Contest 2024", detail: "Solo participation.", tag: "CONTEST" }
  ]
};
if (typeof window !== 'undefined') window.PORTFOLIO_DATA = PORTFOLIO_DATA;
if (typeof module !== 'undefined') module.exports = PORTFOLIO_DATA;
