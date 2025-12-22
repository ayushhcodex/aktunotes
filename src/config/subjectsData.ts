/**
 * AKTU 3rd Semester Subjects Configuration
 * 
 * HOW TO UPDATE LINKS:
 * 1. Find the subject you want to update
 * 2. Replace the 'driveLink' with the new Google Drive folder link
 * 3. For individual units, update the 'pdfLink' field
 * 4. Set pdfLink to null if PDF is not available (will show "Coming Soon")
 * 
 * Example:
 * pdfLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view"
 * or
 * pdfLink: null  // Shows "Coming Soon"
 */

export interface Unit {
  id: number;
  name: string;
  title: string;
  pdfLink: string | null;
}

export interface Subject {
  id: string;
  code: string;
  name: string;
  fullName: string;
  description: string;
  driveLink: string;
  icon: string;
  colorClass: string;
  gradientClass: string;
  units: Unit[];
  semester: 1 | 3;
}

// 3rd Semester Subjects
export const semester3Subjects: Subject[] = [
  {
    id: "coa",
    code: "COA",
    name: "COA",
    fullName: "Computer Organization & Architecture",
    description: "Learn about CPU architecture, memory hierarchy, and computer systems",
    driveLink: "https://drive.google.com/drive/folders/19zN2BiCzogsbAp1f8BBkr5kAF9GoUukd?usp=drive_link",
    icon: "Cpu",
    colorClass: "subject-coa",
    gradientClass: "from-sky-100 to-sky-50",
    semester: 3,
    units: [
      { id: 1, name: "Unit I", title: "Basic Computer Organization", pdfLink: null },
      { id: 2, name: "Unit II", title: "Central Processing Unit", pdfLink: null },
      { id: 3, name: "Unit III", title: "Memory Organization", pdfLink: null },
      { id: 4, name: "Unit IV", title: "Input-Output Organization", pdfLink: null },
      { id: 5, name: "Unit V", title: "Parallel Processing", pdfLink: null },
    ],
  },
  {
    id: "dstl",
    code: "DSTL",
    name: "DSTL",
    fullName: "Discrete Structures & Theory of Logic",
    description: "Master mathematical foundations for computer science",
    driveLink: "https://drive.google.com/drive/folders/10JOPAG9BvdxHyUtJdNIfLK632xnW3vXE?usp=drive_link",
    icon: "Binary",
    colorClass: "subject-dstl",
    gradientClass: "from-purple-100 to-purple-50",
    semester: 3,
    units: [
      { id: 1, name: "Unit I", title: "Set Theory & Relations", pdfLink: null },
      { id: 2, name: "Unit II", title: "Functions & Recurrence", pdfLink: null },
      { id: 3, name: "Unit III", title: "Propositional Logic", pdfLink: null },
      { id: 4, name: "Unit IV", title: "Graph Theory", pdfLink: null },
      { id: 5, name: "Unit V", title: "Algebraic Structures", pdfLink: null },
    ],
  },
  {
    id: "ds",
    code: "DS",
    name: "DS",
    fullName: "Data Structures",
    description: "Explore arrays, trees, graphs, and algorithm design",
    driveLink: "https://drive.google.com/drive/folders/1c4_PHAHbTvlBpy5HAJpLtVcj-GQQ2FT0?usp=drive_link",
    icon: "Network",
    colorClass: "subject-ds",
    gradientClass: "from-emerald-100 to-emerald-50",
    semester: 3,
    units: [
      { id: 1, name: "Unit I", title: "Arrays & Linked Lists", pdfLink: null },
      { id: 2, name: "Unit II", title: "Stacks & Queues", pdfLink: null },
      { id: 3, name: "Unit III", title: "Trees & Binary Trees", pdfLink: null },
      { id: 4, name: "Unit IV", title: "Graphs & Algorithms", pdfLink: null },
      { id: 5, name: "Unit V", title: "Sorting & Searching", pdfLink: null },
    ],
  },
  {
    id: "laser",
    code: "LASER",
    name: "LASER",
    fullName: "LASER (Physics)",
    description: "Study light amplification and optical phenomena",
    driveLink: "https://drive.google.com/drive/folders/1diIfwVJaMMpKQiHW1cOSGq8YMEqXGL9X?usp=drive_link",
    icon: "Lightbulb",
    colorClass: "subject-laser",
    gradientClass: "from-pink-100 to-pink-50",
    semester: 3,
    units: [
      { id: 1, name: "Unit I", title: "Laser Fundamentals", pdfLink: null },
      { id: 2, name: "Unit II", title: "Types of Lasers", pdfLink: null },
      { id: 3, name: "Unit III", title: "Optical Fibers", pdfLink: null },
      { id: 4, name: "Unit IV", title: "Holography", pdfLink: null },
      { id: 5, name: "Unit V", title: "Applications", pdfLink: null },
    ],
  },
  {
    id: "uhv",
    code: "UHV",
    name: "UHV",
    fullName: "Universal Human Values",
    description: "Develop ethical values and holistic understanding",
    driveLink: "https://drive.google.com/drive/folders/1a6Rj3b0h4L4Vslv37_23sfpkBNSOtkYm?usp=drive_link",
    icon: "Heart",
    colorClass: "subject-uhv",
    gradientClass: "from-amber-100 to-amber-50",
    semester: 3,
    units: [
      { id: 1, name: "Unit I", title: "Course Introduction", pdfLink: null },
      { id: 2, name: "Unit II", title: "Harmony in Human Being", pdfLink: null },
      { id: 3, name: "Unit III", title: "Harmony in Family", pdfLink: null },
      { id: 4, name: "Unit IV", title: "Harmony in Society", pdfLink: null },
      { id: 5, name: "Unit V", title: "Harmony in Nature", pdfLink: null },
    ],
  },
  {
    id: "python",
    code: "PYTHON",
    name: "Python",
    fullName: "Programming in Python",
    description: "Learn Python programming from basics to advanced",
    driveLink: "https://drive.google.com/drive/folders/19EwVSQ8s5rZfzOawY1YjjsyI-shvXkFL?usp=drive_link",
    icon: "Code",
    colorClass: "subject-python",
    gradientClass: "from-blue-100 to-blue-50",
    semester: 3,
    units: [
      { id: 1, name: "Unit I", title: "Python Basics", pdfLink: null },
      { id: 2, name: "Unit II", title: "Control Structures", pdfLink: null },
      { id: 3, name: "Unit III", title: "Functions & Modules", pdfLink: null },
      { id: 4, name: "Unit IV", title: "OOP in Python", pdfLink: null },
      { id: 5, name: "Unit V", title: "File Handling & Libraries", pdfLink: null },
    ],
  },
];

// 1st Semester Subjects
export const semester1Subjects: Subject[] = [
  {
    id: "eng-chemistry",
    code: "CHEM",
    name: "Engineering Chemistry",
    fullName: "Engineering Chemistry",
    description: "Fundamentals of chemistry for engineering applications",
    driveLink: "https://drive.google.com/drive/folders/1hvOu2RpRMK3RcMxY5qQfJNGEfOQQvl83",
    icon: "FlaskConical",
    colorClass: "subject-coa",
    gradientClass: "from-cyan-100 to-cyan-50",
    semester: 1,
    units: [
      { id: 1, name: "Unit I", title: "Atomic & Molecular Structure", pdfLink: null },
      { id: 2, name: "Unit II", title: "Spectroscopic Techniques", pdfLink: null },
      { id: 3, name: "Unit III", title: "Electrochemistry", pdfLink: null },
      { id: 4, name: "Unit IV", title: "Corrosion & Its Prevention", pdfLink: null },
      { id: 5, name: "Unit V", title: "Water Treatment", pdfLink: null },
    ],
  },
  {
    id: "eng-mechanics",
    code: "MECH",
    name: "Engineering Mechanics",
    fullName: "Engineering Mechanics",
    description: "Study of forces, motion, and equilibrium",
    driveLink: "https://drive.google.com/drive/folders/1Vk2OXyYfmFbhNhVSvl9NXzaWdzaSnLz8",
    icon: "Cog",
    colorClass: "subject-ds",
    gradientClass: "from-slate-100 to-slate-50",
    semester: 1,
    units: [
      { id: 1, name: "Unit I", title: "Force Systems", pdfLink: null },
      { id: 2, name: "Unit II", title: "Equilibrium", pdfLink: null },
      { id: 3, name: "Unit III", title: "Friction", pdfLink: null },
      { id: 4, name: "Unit IV", title: "Kinematics", pdfLink: null },
      { id: 5, name: "Unit V", title: "Kinetics", pdfLink: null },
    ],
  },
  {
    id: "basic-electronics",
    code: "BEC",
    name: "Basic Electronics",
    fullName: "Basic Electronics Engineering",
    description: "Introduction to electronic components and circuits",
    driveLink: "https://drive.google.com/drive/folders/1qzfLJk1cr4zZwXajvNcAH1jV9u48BV0F",
    icon: "CircuitBoard",
    colorClass: "subject-laser",
    gradientClass: "from-rose-100 to-rose-50",
    semester: 1,
    units: [
      { id: 1, name: "Unit I", title: "Semiconductor Devices", pdfLink: null },
      { id: 2, name: "Unit II", title: "Diode Applications", pdfLink: null },
      { id: 3, name: "Unit III", title: "Transistors", pdfLink: null },
      { id: 4, name: "Unit IV", title: "Amplifiers", pdfLink: null },
      { id: 5, name: "Unit V", title: "Digital Electronics", pdfLink: null },
    ],
  },
  {
    id: "math-1",
    code: "MATH-I",
    name: "Mathematics–I",
    fullName: "Engineering Mathematics–I",
    description: "Calculus, matrices, and differential equations",
    driveLink: "https://drive.google.com/drive/folders/1LiNRpjFwEV2d8_ONFkHUDfg8cRq44NWM",
    icon: "Calculator",
    colorClass: "subject-dstl",
    gradientClass: "from-indigo-100 to-indigo-50",
    semester: 1,
    units: [
      { id: 1, name: "Unit I", title: "Matrices & Linear Algebra", pdfLink: null },
      { id: 2, name: "Unit II", title: "Differential Calculus", pdfLink: null },
      { id: 3, name: "Unit III", title: "Integral Calculus", pdfLink: null },
      { id: 4, name: "Unit IV", title: "Differential Equations", pdfLink: null },
      { id: 5, name: "Unit V", title: "Vector Calculus", pdfLink: null },
    ],
  },
  {
    id: "pps",
    code: "PPS",
    name: "PPS",
    fullName: "Programming for Problem Solving",
    description: "Learn C programming and problem-solving techniques",
    driveLink: "https://drive.google.com/drive/folders/1GWVVu15sRHNAfCUtJGkPy1yPk1Yel2lR",
    icon: "Code2",
    colorClass: "subject-python",
    gradientClass: "from-green-100 to-green-50",
    semester: 1,
    units: [
      { id: 1, name: "Unit I", title: "Introduction to Programming", pdfLink: null },
      { id: 2, name: "Unit II", title: "Control Statements", pdfLink: null },
      { id: 3, name: "Unit III", title: "Arrays & Strings", pdfLink: null },
      { id: 4, name: "Unit IV", title: "Functions & Pointers", pdfLink: null },
      { id: 5, name: "Unit V", title: "Structures & File Handling", pdfLink: null },
    ],
  },
  {
    id: "evs",
    code: "EVS",
    name: "EVS",
    fullName: "Environmental Studies",
    description: "Study of environment and sustainable development",
    driveLink: "",
    icon: "Leaf",
    colorClass: "subject-uhv",
    gradientClass: "from-lime-100 to-lime-50",
    semester: 1,
    units: [
      { id: 1, name: "Unit I", title: "Environment & Ecosystem", pdfLink: null },
      { id: 2, name: "Unit II", title: "Natural Resources", pdfLink: null },
      { id: 3, name: "Unit III", title: "Biodiversity", pdfLink: null },
      { id: 4, name: "Unit IV", title: "Environmental Pollution", pdfLink: null },
      { id: 5, name: "Unit V", title: "Sustainable Development", pdfLink: null },
    ],
  },
  {
    id: "soft-skills",
    code: "SS",
    name: "Soft Skills",
    fullName: "Soft Skills",
    description: "Develop communication and interpersonal skills",
    driveLink: "https://drive.google.com/drive/folders/1kviE9QXlwAJqKnpE78713ItMKeNVNyTs",
    icon: "Users",
    colorClass: "subject-coa",
    gradientClass: "from-violet-100 to-violet-50",
    semester: 1,
    units: [
      { id: 1, name: "Unit I", title: "Communication Skills", pdfLink: null },
      { id: 2, name: "Unit II", title: "Presentation Skills", pdfLink: null },
      { id: 3, name: "Unit III", title: "Group Discussion", pdfLink: null },
      { id: 4, name: "Unit IV", title: "Interview Preparation", pdfLink: null },
      { id: 5, name: "Unit V", title: "Professional Ethics", pdfLink: null },
    ],
  },
  {
    id: "eng-physics",
    code: "PHY",
    name: "Engineering Physics",
    fullName: "Engineering Physics",
    description: "Fundamentals of physics for engineering applications",
    driveLink: "",
    icon: "Atom",
    colorClass: "subject-laser",
    gradientClass: "from-orange-100 to-orange-50",
    semester: 1,
    units: [
      { id: 1, name: "Unit I", title: "Optics & Lasers", pdfLink: null },
      { id: 2, name: "Unit II", title: "Wave Mechanics", pdfLink: null },
      { id: 3, name: "Unit III", title: "Quantum Mechanics", pdfLink: null },
      { id: 4, name: "Unit IV", title: "Semiconductor Physics", pdfLink: null },
      { id: 5, name: "Unit V", title: "Nanotechnology", pdfLink: null },
    ],
  },
  {
    id: "electrical-eng",
    code: "EE",
    name: "Electrical Engineering",
    fullName: "Electrical Engineering",
    description: "Basics of electrical circuits and machines",
    driveLink: "https://drive.google.com/drive/folders/1urfOTft7kicBjCMrXsfVzlloPJhGe56S",
    icon: "Zap",
    colorClass: "subject-ds",
    gradientClass: "from-yellow-100 to-yellow-50",
    semester: 1,
    units: [
      { id: 1, name: "Unit I", title: "DC Circuits", pdfLink: null },
      { id: 2, name: "Unit II", title: "AC Circuits", pdfLink: null },
      { id: 3, name: "Unit III", title: "Transformers", pdfLink: null },
      { id: 4, name: "Unit IV", title: "Electrical Machines", pdfLink: null },
      { id: 5, name: "Unit V", title: "Electrical Installations", pdfLink: null },
    ],
  },
];

// Combined data (for backward compatibility)
export const subjectsData: Subject[] = [...semester3Subjects, ...semester1Subjects];
