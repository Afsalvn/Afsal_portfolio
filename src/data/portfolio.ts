export const profile = {
  name: 'Afsal V N',
  location: 'Trivandrum, Kerala, India',
  email: 'afzalvn2005@gmail.com',
  linkedin: 'linkedin.com/in/afsalvn6',
  linkedinUrl: 'https://linkedin.com/in/afsalvn6',
  github: 'github.com/Afsalvn',
  githubUrl: 'https://github.com/Afsalvn',
  resume: '/Afsal_VN_Resume.pdf',
  headline:
    'Final-year Electrical & Electronics Engineering student specializing in VLSI, digital design, and embedded systems.',
  subheadline:
    'Works at the boundary of hardware and software — RTL design, FPGA prototyping, edge AI on microcontrollers, and signal-processing research.',
}

export const bio =
  "I'm a final-year EEE student at CET Trivandrum with a focus on digital design and embedded systems. I like building things that sit between hardware and software — from FSM-based logic on FPGAs to real-time ML inference running on-device on microcontrollers, to decoding brain signals into physical actuation. Alongside the technical work, I lead the IEEE Student Branch at CET as Chairperson, managing an 80+ member team through 60+ events, and hold leadership roles in RoboCET. I'm currently preparing for roles in VLSI, digital design, and embedded systems, and building out my project portfolio in that direction."

export const stats = [
  { label: 'CGPA', value: 8.27, suffix: '', decimals: 2 },
  { label: 'Events Delivered', value: 60, suffix: '+' },
  { label: 'Team Members Led', value: 80, suffix: '+' },
  { label: 'Subjects Evaluated (BCI)', value: 8, suffix: '+' },
]

export const education = [
  {
    degree: 'BTech, Electrical and Electronics Engineering',
    institute: 'College of Engineering Trivandrum (CET)',
    period: '2023 – 2027',
    detail: 'CGPA 8.27',
  },
  {
    degree: 'Grade 12',
    institute: "St. Ann's Public School, Kochi",
    period: '',
    detail: '94%',
  },
]

export type SkillCategory = {
  title: string
  icon: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: 'code',
    skills: ['C', 'Python', 'Verilog HDL', 'SystemVerilog (learning)'],
  },
  {
    title: 'Hardware & Embedded',
    icon: 'cpu',
    skills: [
      'FPGA Prototyping (Xilinx Basys 3)',
      'ESP32-S3',
      'Raspberry Pi',
      'Arduino',
      'I2C / SPI / UART',
    ],
  },
  {
    title: 'EDA & Simulation',
    icon: 'circuit',
    skills: ['Vivado', 'MATLAB', 'Simulink', 'Electric VLSI EDA', 'Proteus', 'Ansys'],
  },
  {
    title: 'ML & Signal Processing',
    icon: 'brain',
    skills: [
      'Edge Impulse',
      'TinyML',
      'On-device Inference',
      'EEG Signal Processing',
      'SVM / Random Forest',
      'CCA',
      'EEGNet / CNN',
    ],
  },
  {
    title: 'Design & Tooling',
    icon: 'workflow',
    skills: ['RTL / FSM Design', 'Git', 'Digital Design Flow'],
  },
]

export type Project = {
  title: string
  tagline: string
  description: string
  tech: string[]
  github?: string
  award?: string
  status?: 'in-progress'
  icon: string
}

export const projects: Project[] = [
  {
    title: 'UART Implementation on FPGA',
    tagline: 'Parameterized UART transceiver, verified on hardware',
    description:
      'Designed a parameterized UART transceiver with independent TX/RX finite state machines and a custom baud-rate generator. Verified functionality through simulation testbenches and hardware loopback testing.',
    tech: ['Verilog HDL', 'Xilinx Basys 3', 'Vivado', 'FSM Design'],
    github: 'https://github.com/Afsalvn',
    icon: 'circuit',
  },
  {
    title: 'InnoPlay — Gesture-Controlled Gaming Controller',
    tagline: 'Assistive tech, on-device ML inference',
    description:
      'Built an assistive gaming controller for users with limited mobility using a XIAO ESP32-S3 Sense and Grove Vision AI V2. Trained and deployed an ML model via Edge Impulse for real-time, on-device gesture inference.',
    tech: ['ESP32-S3', 'Edge Impulse', 'TinyML', 'Machine Learning'],
    github: 'https://github.com/Afsalvn',
    award: 'Jury Award — TinyML Hackathon',
    icon: 'cpu',
  },
  {
    title: 'Swiggy Expense Tracker',
    tagline: 'Browser extension for food-delivery spend analytics',
    description:
      'Built a Chrome extension that tracks and analyzes Swiggy food-delivery spending. Background scripts capture order data, surfaced through a quick-view popup and a full analytics dashboard for expense history and trends.',
    tech: ['JavaScript', 'Chrome Extension API', 'HTML/CSS'],
    github: 'https://github.com/Afsalvn/Swiggy-Expense-Tracker',
    icon: 'wallet',
  },
  {
    title: 'AI Finance Tracker',
    tagline: 'Cross-platform personal finance app',
    description:
      'Personalized finance tracking application built with Flutter and Dart, targeting both Android and iOS from a single codebase — expense logging, categorization, and personal budget insights.',
    tech: ['Flutter', 'Dart', 'Android / iOS'],
    github: 'https://github.com/Afsalvn/AI-Finance-Tracker-App',
    icon: 'chart',
  },
]

export const research = {
  title: 'SSVEP-Based Brain-Computer Interface',
  role: 'Research Internship, Dept. of Artificial Intelligence',
  org: 'Amrita Vishwa Vidyapeetham, Coimbatore',
  supervisors: 'Dr. Akhil V.M. and Dr. V. Amrutha',
  summary:
    'Built an end-to-end SSVEP BCI system: EEG signal capture → preprocessing → ML classification → real-time hardware actuation. Subjects viewed flickering visual stimuli (10 Hz / 12 Hz) while EEG was recorded via an EMOTIV EPOC X headset (4 occipital/parietal channels); a trained classifier decoded the attended stimulus and drove Arduino-controlled LEDs in real time.',
  pipeline: [
    { label: 'EEG Capture', detail: 'EMOTIV EPOC X · 4 occipital/parietal channels' },
    { label: 'Preprocessing', detail: 'Filtering & epoching of flicker-evoked signals' },
    { label: 'Classification', detail: 'SVM · Random Forest · CCA · EEGNet (CNN)' },
    { label: 'Actuation', detail: 'Arduino-controlled LEDs in real time' },
  ],
  metrics: [
    { label: 'Within-subject accuracy (best case)', value: 83, suffix: '%' },
    { label: 'Cross-subject (LOSO) accuracy', value: 44, suffix: '%' },
    { label: 'Chance baseline', value: 33, suffix: '%' },
    { label: 'Subjects evaluated', value: 8, suffix: '+' },
  ],
  notes: [
    'Evaluated SVM, Random Forest, CCA, and EEGNet (CNN) across 8+ subjects.',
    'Diagnosed and corrected a subject-leakage bug in cross-subject evaluation.',
    'Identified a luminance-asymmetry bias in the stimulus design — both documented transparently in the internship report.',
  ],
}

export type TimelineItem = {
  category: 'Experience' | 'Leadership'
  title: string
  org: string
  period: string
  detail: string
}

export const timeline: TimelineItem[] = [
  {
    category: 'Experience',
    title: 'Technical / Summer Intern',
    org: 'C2S Lab, CET',
    period: '2025',
    detail:
      'Designed and synthesized digital logic circuits using Verilog HDL; gained hands-on exposure to FPGA implementation and the full design–simulate–verify VLSI flow.',
  },
  {
    category: 'Leadership',
    title: 'Chairperson, IEEE Student Branch CET',
    org: 'IEEE CET',
    period: '2026 – present',
    detail:
      'Leading an 80+ member team through 60+ events. Previously Vice Chairman, IEEE PES SBC CET.',
  },
  {
    category: 'Leadership',
    title: 'General Secretary, RoboCET',
    org: 'RoboCET',
    period: '2026 – present',
    detail:
      'Previously Workshop Head (organized 8+ hands-on hardware workshops) and Team Captain for NIDAR 2025.',
  },
  {
    category: 'Leadership',
    title: 'Marketing Lead, GDGC CET',
    org: 'GDGC CET',
    period: '',
    detail:
      'Led a 12-person team, drove 500+ participant turnout across events; led Team "CodeGen" to 1st place in the Google Cloud GenAI Study Jam.',
  },
]

export const certifications = [
  {
    title: 'ISWDP Level 1',
    org: 'India Semiconductor Workforce Development Program — IISc Bangalore, Samsung Semiconductor, Synopsys',
  },
  {
    title: 'VLSI Chip Design and Simulation',
    org: 'L&T EduTech',
  },
  {
    title: 'Hardware Modeling Using Verilog',
    org: 'NPTEL',
  },
]

export const achievements = [
  {
    title: 'Jury Award — "InnoPlay"',
    org: 'TinyML Hackathon',
  },
  {
    title: '1st Place — Team CodeGen',
    org: 'Google Cloud GenAI Study Jam',
  },
]
