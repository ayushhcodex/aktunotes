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
}

export const subjectsData: Subject[] = [
  {
    id: "coa",
    code: "COA",
    name: "COA",
    fullName: "Computer Organization & Architecture",
    description: "Learn about CPU architecture, memory hierarchy, and computer systems",
    driveLink: "https://drive.google.com/drive/folders/YOUR_COA_FOLDER_ID",
    icon: "Cpu",
    colorClass: "subject-coa",
    gradientClass: "from-sky-100 to-sky-50",
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
    driveLink: "https://drive.google.com/drive/folders/YOUR_DSTL_FOLDER_ID",
    icon: "Binary",
    colorClass: "subject-dstl",
    gradientClass: "from-purple-100 to-purple-50",
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
    driveLink: "https://drive.google.com/drive/folders/YOUR_DS_FOLDER_ID",
    icon: "Network",
    colorClass: "subject-ds",
    gradientClass: "from-emerald-100 to-emerald-50",
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
    driveLink: "https://drive.google.com/drive/folders/YOUR_LASER_FOLDER_ID",
    icon: "Lightbulb",
    colorClass: "subject-laser",
    gradientClass: "from-pink-100 to-pink-50",
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
    driveLink: "https://drive.google.com/drive/folders/YOUR_UHV_FOLDER_ID",
    icon: "Heart",
    colorClass: "subject-uhv",
    gradientClass: "from-amber-100 to-amber-50",
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
    driveLink: "https://drive.google.com/drive/folders/YOUR_PYTHON_FOLDER_ID",
    icon: "Code",
    colorClass: "subject-python",
    gradientClass: "from-blue-100 to-blue-50",
    units: [
      { id: 1, name: "Unit I", title: "Python Basics", pdfLink: null },
      { id: 2, name: "Unit II", title: "Control Structures", pdfLink: null },
      { id: 3, name: "Unit III", title: "Functions & Modules", pdfLink: null },
      { id: 4, name: "Unit IV", title: "OOP in Python", pdfLink: null },
      { id: 5, name: "Unit V", title: "File Handling & Libraries", pdfLink: null },
    ],
  },
];
