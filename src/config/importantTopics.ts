/**
 * Important and Most Repeated Topics for AKTU B.Tech CSE
 * These are frequently asked topics in university exams
 */

export interface ImportantTopics {
  [subjectId: string]: {
    [unitId: number]: string[];
  };
}

export const importantTopics: ImportantTopics = {
  // ==================== 3RD SEMESTER ====================
  
  // COA - Computer Organization & Architecture
  "coa": {
    1: [
      "Von Neumann Architecture",
      "CPU Registers (PC, MAR, MBR, IR)",
      "Instruction Cycle",
      "Bus Structure",
      "Memory Organization Basics"
    ],
    2: [
      "Addressing Modes",
      "RISC vs CISC",
      "Instruction Formats",
      "Microprogrammed Control Unit",
      "Pipelining Basics"
    ],
    3: [
      "Cache Memory (Mapping Techniques)",
      "Virtual Memory",
      "Page Replacement Algorithms",
      "Memory Hierarchy",
      "Associative Memory"
    ],
    4: [
      "DMA (Direct Memory Access)",
      "Interrupt Handling",
      "I/O Techniques (Programmed, Interrupt, DMA)",
      "Priority Interrupts",
      "I/O Processor"
    ],
    5: [
      "Flynn's Classification",
      "Pipelining Hazards",
      "Array Processors",
      "Multiprocessor Systems",
      "Cache Coherence"
    ]
  },

  // DSTL - Discrete Structures
  "dstl": {
    1: [
      "Set Operations & Laws",
      "Relations (Properties)",
      "Equivalence Relations",
      "Partial Order Relations",
      "Hasse Diagrams"
    ],
    2: [
      "Types of Functions",
      "Recurrence Relations",
      "Generating Functions",
      "Pigeonhole Principle",
      "Inclusion-Exclusion"
    ],
    3: [
      "Propositional Logic",
      "Truth Tables",
      "Normal Forms (CNF, DNF)",
      "Predicates & Quantifiers",
      "Logical Equivalences"
    ],
    4: [
      "Graph Terminology",
      "Euler & Hamiltonian Paths",
      "Graph Coloring",
      "Trees & Spanning Trees",
      "Planar Graphs"
    ],
    5: [
      "Groups & Subgroups",
      "Rings & Fields",
      "Lattices",
      "Boolean Algebra",
      "Homomorphism & Isomorphism"
    ]
  },

  // DS - Data Structures
  "ds": {
    1: [
      "Array Operations",
      "Linked List Types",
      "Linked List Operations",
      "Sparse Matrix",
      "Polynomial Representation"
    ],
    2: [
      "Stack Applications",
      "Infix to Postfix Conversion",
      "Queue Types (Circular, Priority)",
      "Recursion",
      "Expression Evaluation"
    ],
    3: [
      "Binary Tree Traversals",
      "BST Operations",
      "AVL Trees (Rotations)",
      "Heap & Heapsort",
      "Huffman Coding"
    ],
    4: [
      "Graph Representations",
      "BFS & DFS",
      "Shortest Path (Dijkstra)",
      "Minimum Spanning Tree (Prim, Kruskal)",
      "Topological Sorting"
    ],
    5: [
      "Sorting Algorithms Comparison",
      "Quick Sort & Merge Sort",
      "Searching Techniques",
      "Hashing & Collision Resolution",
      "Time Complexity Analysis"
    ]
  },

  // LASER
  "laser": {
    1: [
      "Spontaneous & Stimulated Emission",
      "Population Inversion",
      "Einstein Coefficients",
      "Components of LASER",
      "Properties of LASER"
    ],
    2: [
      "Ruby LASER",
      "He-Ne LASER",
      "CO2 LASER",
      "Semiconductor LASER",
      "Nd:YAG LASER"
    ],
    3: [
      "Total Internal Reflection",
      "Numerical Aperture",
      "Types of Optical Fibers",
      "Fiber Losses",
      "Fiber Optic Communication"
    ],
    4: [
      "Holography Principle",
      "Recording & Reconstruction",
      "Types of Holograms",
      "Applications of Holography"
    ],
    5: [
      "LASER in Medicine",
      "LASER in Communication",
      "Industrial Applications",
      "LASER Cutting & Welding"
    ]
  },

  // UHV
  "uhv": {
    1: [
      "Need for Value Education",
      "Self-Exploration",
      "Happiness & Prosperity",
      "Basic Human Aspirations",
      "Right Understanding"
    ],
    2: [
      "Harmony in Self",
      "Understanding Human Being",
      "Self & Body",
      "Needs of Self vs Body",
      "Program for Self"
    ],
    3: [
      "Trust in Relationships",
      "Foundation Values",
      "Respect & Care",
      "Justice in Family",
      "Human Relationships"
    ],
    4: [
      "Harmony in Society",
      "Universal Human Order",
      "Undivided Society",
      "Ethical Human Conduct",
      "Human Values"
    ],
    5: [
      "Harmony with Nature",
      "Holistic Development",
      "Natural Resources",
      "Sustainable Living",
      "Environmental Ethics"
    ]
  },

  // Python
  "python": {
    1: [
      "Python Data Types",
      "Operators & Expressions",
      "Input/Output",
      "Type Conversion",
      "Variables & Memory"
    ],
    2: [
      "if-else Statements",
      "Loops (for, while)",
      "break, continue, pass",
      "Nested Loops",
      "Pattern Programs"
    ],
    3: [
      "Function Definition & Call",
      "Arguments Types",
      "Lambda Functions",
      "Modules & Packages",
      "Recursion"
    ],
    4: [
      "Classes & Objects",
      "Inheritance Types",
      "Polymorphism",
      "Encapsulation",
      "Constructor & Destructor"
    ],
    5: [
      "File Operations",
      "Exception Handling",
      "NumPy Basics",
      "Pandas Basics",
      "Regular Expressions"
    ]
  },

  // ==================== 1ST SEMESTER ====================

  // Engineering Chemistry
  "eng-chemistry": {
    1: [
      "Atomic Orbitals",
      "Molecular Orbital Theory",
      "Hybridization",
      "VSEPR Theory",
      "Crystal Field Theory"
    ],
    2: [
      "UV-Visible Spectroscopy",
      "IR Spectroscopy",
      "NMR Spectroscopy",
      "Beer-Lambert Law",
      "Applications of Spectroscopy"
    ],
    3: [
      "Electrochemical Cells",
      "Nernst Equation",
      "EMF & Free Energy",
      "Batteries (Primary & Secondary)",
      "Fuel Cells"
    ],
    4: [
      "Types of Corrosion",
      "Galvanic Corrosion",
      "Electrochemical Theory",
      "Corrosion Prevention Methods",
      "Protective Coatings"
    ],
    5: [
      "Water Hardness",
      "Softening Methods",
      "Reverse Osmosis",
      "Water Quality Parameters",
      "Industrial Water Treatment"
    ]
  },

  // Engineering Mechanics
  "eng-mechanics": {
    1: [
      "Force Systems (Coplanar)",
      "Resolution of Forces",
      "Resultant of Forces",
      "Moment of Force",
      "Varignon's Theorem"
    ],
    2: [
      "Conditions of Equilibrium",
      "Free Body Diagrams",
      "Lami's Theorem",
      "Types of Supports",
      "Reactions at Supports"
    ],
    3: [
      "Laws of Friction",
      "Angle of Friction",
      "Ladder Problems",
      "Belt Friction",
      "Screw Jack"
    ],
    4: [
      "Rectilinear Motion",
      "Projectile Motion",
      "Relative Motion",
      "Curvilinear Motion",
      "Motion Equations"
    ],
    5: [
      "Newton's Laws",
      "Work-Energy Theorem",
      "Impulse & Momentum",
      "Conservation Laws",
      "Collision (Elastic/Inelastic)"
    ]
  },

  // Basic Electronics
  "basic-electronics": {
    1: [
      "PN Junction Diode",
      "Diode Characteristics",
      "Zener Diode",
      "LED & Photodiode",
      "Semiconductor Basics"
    ],
    2: [
      "Half-Wave Rectifier",
      "Full-Wave Rectifier",
      "Bridge Rectifier",
      "Filter Circuits",
      "Clipper & Clamper"
    ],
    3: [
      "BJT Configuration",
      "Transistor Biasing",
      "Load Line Analysis",
      "FET Types",
      "MOSFET Basics"
    ],
    4: [
      "Amplifier Classification",
      "CE Amplifier",
      "Gain & Bandwidth",
      "Feedback Amplifiers",
      "Operational Amplifier"
    ],
    5: [
      "Logic Gates",
      "Boolean Algebra",
      "K-Map Simplification",
      "Flip-Flops",
      "Counters & Registers"
    ]
  },

  // Mathematics-I
  "math-1": {
    1: [
      "Matrix Operations",
      "Rank of Matrix",
      "Eigenvalues & Eigenvectors",
      "Cayley-Hamilton Theorem",
      "System of Linear Equations"
    ],
    2: [
      "Successive Differentiation",
      "Leibniz Theorem",
      "Taylor & Maclaurin Series",
      "Partial Differentiation",
      "Euler's Theorem"
    ],
    3: [
      "Definite Integrals",
      "Beta & Gamma Functions",
      "Double Integrals",
      "Triple Integrals",
      "Change of Variables"
    ],
    4: [
      "First Order ODE",
      "Linear Differential Equations",
      "Bernoulli's Equation",
      "Exact Differential Equations",
      "Second Order ODE"
    ],
    5: [
      "Gradient, Divergence, Curl",
      "Line Integrals",
      "Surface Integrals",
      "Green's Theorem",
      "Stokes & Gauss Theorem"
    ]
  },

  // PPS - Programming for Problem Solving
  "pps": {
    1: [
      "Flowcharts & Algorithms",
      "C Program Structure",
      "Data Types",
      "Operators",
      "printf & scanf"
    ],
    2: [
      "if-else Statements",
      "switch Statement",
      "Loops (for, while, do-while)",
      "break & continue",
      "Nested Loops"
    ],
    3: [
      "1D & 2D Arrays",
      "String Functions",
      "String Operations",
      "Array Sorting",
      "Matrix Operations"
    ],
    4: [
      "Function Declaration",
      "Call by Value/Reference",
      "Recursion",
      "Pointers Basics",
      "Pointer Arithmetic"
    ],
    5: [
      "Structure Definition",
      "Array of Structures",
      "File Operations",
      "File Modes",
      "Union"
    ]
  },

  // EVS
  "evs": {
    1: [
      "Components of Environment",
      "Ecosystem Structure",
      "Food Chain & Web",
      "Energy Flow",
      "Biogeochemical Cycles"
    ],
    2: [
      "Renewable Resources",
      "Non-Renewable Resources",
      "Forest Resources",
      "Water Resources",
      "Energy Resources"
    ],
    3: [
      "Biodiversity Levels",
      "Hotspots",
      "Threats to Biodiversity",
      "Conservation Methods",
      "Endemic Species"
    ],
    4: [
      "Air Pollution",
      "Water Pollution",
      "Soil Pollution",
      "Noise Pollution",
      "Pollution Control"
    ],
    5: [
      "Sustainable Development Goals",
      "Environmental Laws",
      "EIA",
      "Green Technology",
      "Climate Change"
    ]
  },

  // Soft Skills
  "soft-skills": {
    1: [
      "Communication Process",
      "Barriers to Communication",
      "Verbal Communication",
      "Non-Verbal Communication",
      "Listening Skills"
    ],
    2: [
      "Presentation Structure",
      "Visual Aids",
      "Body Language",
      "Overcoming Stage Fear",
      "Audience Engagement"
    ],
    3: [
      "GD Types",
      "GD Evaluation Criteria",
      "Leadership in GD",
      "Do's and Don'ts",
      "Topic Analysis"
    ],
    4: [
      "Resume Writing",
      "Interview Types",
      "Common Questions",
      "STAR Method",
      "Dress Code"
    ],
    5: [
      "Workplace Ethics",
      "Professionalism",
      "Time Management",
      "Team Work",
      "Corporate Culture"
    ]
  },

  // Engineering Physics
  "eng-physics": {
    1: [
      "Interference of Light",
      "Diffraction (Single/Double Slit)",
      "LASER Principles",
      "Optical Fiber",
      "Polarization"
    ],
    2: [
      "Wave Equation",
      "de Broglie Hypothesis",
      "Heisenberg Uncertainty",
      "Wave Packets",
      "Group & Phase Velocity"
    ],
    3: [
      "Schrodinger Equation",
      "Particle in a Box",
      "Quantum Numbers",
      "Hydrogen Atom",
      "Tunneling Effect"
    ],
    4: [
      "Band Theory",
      "Intrinsic & Extrinsic",
      "Hall Effect",
      "PN Junction",
      "Superconductivity"
    ],
    5: [
      "Nanomaterials",
      "Carbon Nanotubes",
      "Quantum Dots",
      "Applications of Nano",
      "Synthesis Methods"
    ]
  },

  // Electrical Engineering
  "electrical-eng": {
    1: [
      "Ohm's Law",
      "KCL & KVL",
      "Series-Parallel Circuits",
      "Star-Delta Conversion",
      "Network Theorems"
    ],
    2: [
      "AC Fundamentals",
      "Phasor Diagrams",
      "RLC Circuits",
      "Power Factor",
      "Resonance"
    ],
    3: [
      "Transformer Principle",
      "EMF Equation",
      "Losses & Efficiency",
      "Voltage Regulation",
      "Transformer Types"
    ],
    4: [
      "DC Motors",
      "Induction Motors",
      "Synchronous Machines",
      "Motor Characteristics",
      "Speed Control"
    ],
    5: [
      "Wiring Systems",
      "Earthing",
      "Protective Devices",
      "MCB & ELCB",
      "Electrical Safety"
    ]
  },

  // Mathematics-II (1st Year)
  "math-2": {
    1: [
      "Laplace Transform Definition",
      "Properties of Laplace Transform",
      "Laplace Transform of Standard Functions",
      "First & Second Shifting Theorems",
      "Laplace Transform of Derivatives"
    ],
    2: [
      "Inverse Laplace Transform",
      "Partial Fractions Method",
      "Convolution Theorem",
      "Application to ODEs",
      "Heaviside Expansion"
    ],
    3: [
      "Fourier Series Expansion",
      "Even & Odd Functions",
      "Half Range Series",
      "Parseval's Identity",
      "Harmonic Analysis"
    ],
    4: [
      "Analytic Functions",
      "Cauchy-Riemann Equations",
      "Complex Integration",
      "Cauchy's Integral Formula",
      "Residue Theorem"
    ],
    5: [
      "Probability Distributions",
      "Binomial Distribution",
      "Poisson Distribution",
      "Normal Distribution",
      "Curve Fitting"
    ]
  },

  // ==================== 4TH SEMESTER (2ND YEAR) ====================

  // Operating System
  "os": {
    1: [
      "Types of Operating Systems",
      "System Calls",
      "Operating System Structure",
      "Kernel Types (Monolithic/Microkernel)",
      "Virtual Machine Concept"
    ],
    2: [
      "Process States & PCB",
      "CPU Scheduling Algorithms",
      "Context Switching",
      "Threads & Types",
      "Inter-Process Communication"
    ],
    3: [
      "Critical Section Problem",
      "Semaphores",
      "Deadlock Conditions",
      "Banker's Algorithm",
      "Deadlock Detection & Recovery"
    ],
    4: [
      "Paging & Segmentation",
      "Page Replacement Algorithms",
      "Virtual Memory",
      "Thrashing",
      "Memory Allocation Strategies"
    ],
    5: [
      "Disk Scheduling Algorithms",
      "File System Structure",
      "File Allocation Methods",
      "Directory Structure",
      "RAID Levels"
    ]
  },

  // OOPS with Java
  "oops-java": {
    1: [
      "Java Features & JVM Architecture",
      "Data Types & Variables",
      "Operators & Control Statements",
      "OOP Concepts Overview",
      "Java Program Structure"
    ],
    2: [
      "Classes & Objects",
      "Constructors & this Keyword",
      "Inheritance Types",
      "Method Overloading & Overriding",
      "super & final Keywords"
    ],
    3: [
      "Packages & Access Modifiers",
      "Interfaces & Abstract Classes",
      "Exception Handling",
      "try-catch-finally",
      "throw & throws"
    ],
    4: [
      "Multithreading Concepts",
      "Thread Lifecycle",
      "Synchronization",
      "File I/O Streams",
      "Serialization"
    ],
    5: [
      "AWT & Swing Basics",
      "Applet Lifecycle",
      "Event Handling Model",
      "Layout Managers",
      "GUI Components"
    ]
  },

  // Automata (Theory of Computation)
  "automata": {
    1: [
      "Finite Automata (DFA & NFA)",
      "NFA to DFA Conversion",
      "Minimization of DFA",
      "Regular Languages",
      "Closure Properties"
    ],
    2: [
      "Regular Expressions",
      "Conversion (RE to FA)",
      "Pumping Lemma for Regular",
      "Regular Grammars",
      "Arden's Theorem"
    ],
    3: [
      "Context-Free Grammars",
      "Chomsky Normal Form",
      "Pushdown Automata",
      "PDA to CFG Conversion",
      "Pumping Lemma for CFL"
    ],
    4: [
      "Turing Machine Model",
      "TM Variants",
      "Universal Turing Machine",
      "Church-Turing Thesis",
      "Multi-tape TM"
    ],
    5: [
      "Decidability & Undecidability",
      "Halting Problem",
      "Reducibility",
      "Time Complexity Classes",
      "P vs NP Problem"
    ]
  },

  // Technical Communication
  "tech-comm": {
    1: [
      "Technical Writing Principles",
      "Document Planning",
      "Audience Analysis",
      "Writing Style & Tone",
      "Editing & Proofreading"
    ],
    2: [
      "Technical Report Structure",
      "Proposal Writing",
      "Research Paper Format",
      "Documentation Standards",
      "Citation Methods"
    ],
    3: [
      "Presentation Techniques",
      "Visual Aid Design",
      "Body Language",
      "Voice Modulation",
      "Handling Q&A"
    ],
    4: [
      "Business Letters",
      "Email Etiquette",
      "Memos & Notices",
      "Minutes of Meeting",
      "Professional Communication"
    ],
    5: [
      "Group Discussion Skills",
      "Interview Preparation",
      "Resume & CV Writing",
      "SWOT Analysis",
      "Workplace Communication"
    ]
  },

  // Cybersecurity
  "cybersecurity": {
    1: [
      "CIA Triad",
      "Types of Cyber Attacks",
      "Security Threats & Vulnerabilities",
      "Risk Management",
      "Security Policies"
    ],
    2: [
      "Symmetric Key Cryptography",
      "Asymmetric Key Cryptography",
      "DES & AES Algorithms",
      "RSA Algorithm",
      "Hash Functions"
    ],
    3: [
      "Firewall Types",
      "Intrusion Detection Systems",
      "VPN & Tunneling",
      "SSL/TLS Protocol",
      "Network Security Protocols"
    ],
    4: [
      "SQL Injection",
      "Cross-Site Scripting (XSS)",
      "CSRF Attacks",
      "Session Hijacking",
      "Web Application Security"
    ],
    5: [
      "Security Policies & Standards",
      "Cyber Law & Ethics",
      "Digital Forensics Basics",
      "Incident Response",
      "IT Act 2000"
    ]
  },

  // Mathematics-IV
  "math-4": {
    1: [
      "Numerical Differentiation",
      "Newton's Forward/Backward Formula",
      "Numerical Integration",
      "Simpson's 1/3 & 3/8 Rule",
      "Trapezoidal Rule"
    ],
    2: [
      "Euler's Method",
      "Runge-Kutta Methods",
      "Predictor-Corrector Methods",
      "Milne's Method",
      "Solution of ODEs"
    ],
    3: [
      "Mean, Median, Mode",
      "Standard Deviation",
      "Correlation Coefficient",
      "Hypothesis Testing",
      "Chi-Square Test"
    ],
    4: [
      "Random Variables",
      "Binomial Distribution",
      "Poisson Distribution",
      "Normal Distribution",
      "Probability Density Function"
    ],
    5: [
      "Linear Regression",
      "Multiple Regression",
      "Curve Fitting",
      "Method of Least Squares",
      "Correlation Analysis"
    ]
  }
};

export const getImportantTopics = (subjectId: string, unitId: number): string[] => {
  return importantTopics[subjectId]?.[unitId] || [];
};

export const hasImportantTopics = (subjectId: string, unitId: number): boolean => {
  const topics = importantTopics[subjectId]?.[unitId];
  return Array.isArray(topics) && topics.length > 0;
};
