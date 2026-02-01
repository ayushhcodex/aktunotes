/**
 * AKTU Previous Year Questions (PYQ) - 4th Semester (2nd Year)
 * Most repeated theory questions for B.Tech CSE
 */

import { PYQData } from "./pyqData";

export const pyqDataSem4: PYQData = {
  // Mathematics-II (1st Year)
  "math-2": {
    1: [
      { id: 1, question: "Find the Laplace transform of t^n and e^at.", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 2, question: "State and prove first shifting theorem of Laplace transform.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "Find Laplace transform of sin(at) and cos(at).", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "State and prove second shifting theorem.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "Find Laplace transform of periodic functions.", years: ["2022", "2021"], frequency: 2 },
      { id: 6, question: "Explain properties of Laplace transform.", years: ["2023", "2022"], frequency: 2 },
      { id: 7, question: "Find Laplace transform of unit step function.", years: ["2021", "2020"], frequency: 2 },
      { id: 8, question: "Prove L{t^n f(t)} = (-1)^n d^n/ds^n F(s).", years: ["2023", "2019"], frequency: 2 },
    ],
    2: [
      { id: 1, question: "Find inverse Laplace transform using partial fractions.", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 2, question: "State and prove convolution theorem for Laplace transform.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "Solve differential equation using Laplace transform.", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 4, question: "Find inverse Laplace transform using Heaviside expansion.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 5, question: "Apply Laplace transform to solve simultaneous ODEs.", years: ["2023", "2020"], frequency: 2 },
      { id: 6, question: "Find L^-1{F(s)/s} and L^-1{sF(s)}.", years: ["2022", "2021"], frequency: 2 },
    ],
    3: [
      { id: 1, question: "Expand f(x) in Fourier series in interval (0, 2π).", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 2, question: "Find Fourier series of even and odd functions.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "Find half-range sine and cosine series.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "State Dirichlet's conditions for Fourier series.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "Apply Parseval's identity to evaluate series.", years: ["2022", "2021"], frequency: 2 },
      { id: 6, question: "Find complex form of Fourier series.", years: ["2023", "2022"], frequency: 2 },
    ],
    4: [
      { id: 1, question: "Verify Cauchy-Riemann equations and find analytic function.", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 2, question: "Evaluate complex integral using Cauchy's integral formula.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "Find poles and residues of given function.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "Evaluate real integral using residue theorem.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "Prove that harmonic functions satisfy Laplace equation.", years: ["2022", "2021"], frequency: 2 },
      { id: 6, question: "Find bilinear transformation.", years: ["2023", "2022"], frequency: 2 },
    ],
    5: [
      { id: 1, question: "Fit a straight line using method of least squares.", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 2, question: "Find mean, variance for binomial/Poisson distribution.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "Calculate correlation coefficient from given data.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "Fit parabola y = a + bx + cx² to given data.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "Apply normal distribution to solve problems.", years: ["2022", "2021"], frequency: 2 },
      { id: 6, question: "Find regression lines and estimate values.", years: ["2023", "2022"], frequency: 2 },
    ]
  },

  // Operating System
  "os": {
    1: [
      { id: 1, question: "Explain types of operating systems with examples.", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 2, question: "Describe system calls and their types.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "What is kernel? Explain monolithic vs microkernel.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "Explain OS structure and design approaches.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "Describe multiprogramming and multitasking OS.", years: ["2022", "2021"], frequency: 2 },
      { id: 6, question: "What are OS services? Explain each briefly.", years: ["2023", "2022"], frequency: 2 },
      { id: 7, question: "Explain virtual machine concept and its advantages.", years: ["2022", "2020"], frequency: 2 },
      { id: 8, question: "Describe the role of interrupt in OS.", years: ["2021", "2019"], frequency: 2 },
    ],
    2: [
      { id: 1, question: "Explain process scheduling algorithms (FCFS, SJF, Priority, RR).", years: ["2023", "2022", "2021", "2020", "2019"], frequency: 5 },
      { id: 2, question: "Describe process states and process control block.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "What is context switching? Explain with diagram.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "Compare preemptive and non-preemptive scheduling.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "Explain threads and their types (user-level, kernel-level).", years: ["2022", "2021"], frequency: 2 },
      { id: 6, question: "Calculate average waiting time for given scheduling algorithm.", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 7, question: "Describe multilevel queue scheduling.", years: ["2023", "2020"], frequency: 2 },
    ],
    3: [
      { id: 1, question: "Explain deadlock and its necessary conditions.", years: ["2023", "2022", "2021", "2020", "2019"], frequency: 5 },
      { id: 2, question: "Describe Banker's algorithm with numerical example.", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 3, question: "What is critical section problem? Explain Peterson's solution.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 4, question: "Explain semaphores and their types.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 5, question: "Describe deadlock detection and recovery methods.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 6, question: "Explain producer-consumer problem with solution.", years: ["2022", "2021"], frequency: 2 },
      { id: 7, question: "What is monitor? Explain with dining philosophers problem.", years: ["2023", "2022"], frequency: 2 },
    ],
    4: [
      { id: 1, question: "Explain page replacement algorithms (FIFO, LRU, Optimal).", years: ["2023", "2022", "2021", "2020", "2019"], frequency: 5 },
      { id: 2, question: "Describe paging with address translation example.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "What is segmentation? Compare paging and segmentation.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "Explain virtual memory with demand paging.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "Calculate page faults for given reference string.", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 6, question: "Describe memory allocation strategies (first-fit, best-fit, worst-fit).", years: ["2022", "2021"], frequency: 2 },
      { id: 7, question: "What is thrashing? How to prevent it?", years: ["2023", "2022"], frequency: 2 },
    ],
    5: [
      { id: 1, question: "Explain disk scheduling algorithms (FCFS, SSTF, SCAN, C-SCAN).", years: ["2023", "2022", "2021", "2020", "2019"], frequency: 5 },
      { id: 2, question: "Describe file allocation methods (contiguous, linked, indexed).", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "What is file system? Explain directory structure.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "Calculate seek time for disk scheduling algorithms.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 5, question: "Explain RAID levels and their characteristics.", years: ["2022", "2021"], frequency: 2 },
      { id: 6, question: "Describe free space management techniques.", years: ["2023", "2020"], frequency: 2 },
    ]
  },

  // OOPS with Java
  "oops-java": {
    1: [
      { id: 1, question: "Explain features of Java. Why Java is platform independent?", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 2, question: "Describe JVM architecture with diagram.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "Explain data types and type casting in Java.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "What are OOP concepts? Explain with examples.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "Differentiate between JDK, JRE, and JVM.", years: ["2022", "2021"], frequency: 2 },
      { id: 6, question: "Write a program explaining basic Java structure.", years: ["2023", "2022"], frequency: 2 },
    ],
    2: [
      { id: 1, question: "Explain different types of inheritance with examples.", years: ["2023", "2022", "2021", "2020", "2019"], frequency: 5 },
      { id: 2, question: "Differentiate between method overloading and overriding.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "Explain constructor types and constructor overloading.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "What is 'this' and 'super' keyword? Explain with examples.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "Explain static keyword with static methods and variables.", years: ["2022", "2021"], frequency: 2 },
      { id: 6, question: "What is final keyword? Explain final class, method, variable.", years: ["2023", "2022"], frequency: 2 },
      { id: 7, question: "Explain dynamic method dispatch with example.", years: ["2022", "2020"], frequency: 2 },
    ],
    3: [
      { id: 1, question: "Explain packages in Java. How to create and import packages?", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 2, question: "Differentiate between abstract class and interface.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "Explain exception handling with try-catch-finally.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "What are checked and unchecked exceptions?", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "Explain throw and throws keywords with examples.", years: ["2022", "2021"], frequency: 2 },
      { id: 6, question: "What is custom exception? Write program to create one.", years: ["2023", "2022"], frequency: 2 },
      { id: 7, question: "Explain access modifiers in Java.", years: ["2021", "2020"], frequency: 2 },
    ],
    4: [
      { id: 1, question: "Explain multithreading in Java. Describe thread lifecycle.", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 2, question: "How to create threads using Thread class and Runnable interface?", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "What is synchronization? Explain synchronized methods and blocks.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "Explain file I/O streams with byte and character streams.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "What is serialization? Explain with example.", years: ["2022", "2021"], frequency: 2 },
      { id: 6, question: "Explain inter-thread communication.", years: ["2023", "2022"], frequency: 2 },
    ],
    5: [
      { id: 1, question: "Explain applet lifecycle with methods.", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 2, question: "What is event handling? Explain delegation event model.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "Explain AWT components and layout managers.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "Write applet program to draw shapes.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "Differentiate between AWT and Swing.", years: ["2022", "2021"], frequency: 2 },
      { id: 6, question: "Explain different types of event listeners.", years: ["2023", "2022"], frequency: 2 },
    ]
  },

  // Automata (Theory of Computation)
  "automata": {
    1: [
      { id: 1, question: "Design DFA for given language. Convert NFA to DFA.", years: ["2023", "2022", "2021", "2020", "2019"], frequency: 5 },
      { id: 2, question: "Minimize the given DFA using partition method.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "Prove that DFA and NFA are equivalent.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "Design NFA with ε-transitions and convert to DFA.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "Explain closure properties of regular languages.", years: ["2022", "2021"], frequency: 2 },
      { id: 6, question: "Design DFA for strings divisible by n.", years: ["2023", "2022"], frequency: 2 },
    ],
    2: [
      { id: 1, question: "Convert regular expression to NFA using Thompson's construction.", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 2, question: "Apply pumping lemma to prove language is not regular.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "Find regular expression for given DFA.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "State and prove Arden's theorem.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "Write regular expression for given language.", years: ["2022", "2021"], frequency: 2 },
      { id: 6, question: "Explain equivalence of RE and FA.", years: ["2023", "2022"], frequency: 2 },
    ],
    3: [
      { id: 1, question: "Design PDA for given context-free language.", years: ["2023", "2022", "2021", "2020", "2019"], frequency: 5 },
      { id: 2, question: "Convert CFG to CNF (Chomsky Normal Form).", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "Apply pumping lemma for CFL to prove language is not CFL.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "Design CFG for given language.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "Convert PDA to CFG.", years: ["2022", "2021"], frequency: 2 },
      { id: 6, question: "Explain closure properties of CFLs.", years: ["2023", "2022"], frequency: 2 },
    ],
    4: [
      { id: 1, question: "Design Turing Machine for given language.", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 2, question: "Explain variants of Turing Machine.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "What is Universal Turing Machine? Explain Church-Turing thesis.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "Design TM for addition/subtraction of unary numbers.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "Explain multi-tape Turing Machine.", years: ["2022", "2021"], frequency: 2 },
      { id: 6, question: "What is linear bounded automata?", years: ["2023", "2022"], frequency: 2 },
    ],
    5: [
      { id: 1, question: "Explain halting problem. Prove it is undecidable.", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 2, question: "What is decidability? Give examples of decidable and undecidable problems.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "Explain P, NP, NP-Complete classes with examples.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "What is reducibility? Explain with example.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "Explain P vs NP problem.", years: ["2022", "2021"], frequency: 2 },
      { id: 6, question: "What is Rice's theorem?", years: ["2023", "2022"], frequency: 2 },
    ]
  },

  // Technical Communication
  "tech-comm": {
    1: [
      { id: 1, question: "What is technical communication? Explain its importance.", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 2, question: "Explain the principles of effective technical writing.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "Describe the process of planning a technical document.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "What is audience analysis? Why is it important?", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "Explain editing and proofreading techniques.", years: ["2022", "2021"], frequency: 2 },
    ],
    2: [
      { id: 1, question: "Explain the structure and format of technical report.", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 2, question: "What is a project proposal? Describe its components.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "Explain different types of reports with examples.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "Describe the format of research paper.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "What are citation methods? Explain APA and MLA formats.", years: ["2022", "2021"], frequency: 2 },
    ],
    3: [
      { id: 1, question: "What are the key elements of an effective presentation?", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 2, question: "Explain the importance of visual aids in presentation.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "What is body language? How does it affect communication?", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "How to overcome stage fear? Give practical tips.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "Explain voice modulation and its importance.", years: ["2022", "2021"], frequency: 2 },
    ],
    4: [
      { id: 1, question: "Explain the format and components of business letters.", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 2, question: "What is email etiquette? Explain with examples.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "How to write effective memos and notices?", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "Explain the format of meeting minutes.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "What is professional communication? Explain its importance.", years: ["2022", "2021"], frequency: 2 },
    ],
    5: [
      { id: 1, question: "What are the key skills required for group discussion?", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 2, question: "Explain different types of interviews and how to prepare.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "How to write an effective resume and CV?", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "What is SWOT analysis? How to apply it personally?", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "Explain workplace communication challenges and solutions.", years: ["2022", "2021"], frequency: 2 },
    ]
  },

  // Cybersecurity
  "cybersecurity": {
    1: [
      { id: 1, question: "Explain CIA triad in information security.", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 2, question: "Describe various types of cyber attacks with examples.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "What are security threats and vulnerabilities?", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "Explain risk management in cybersecurity.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "What is security policy? Explain its components.", years: ["2022", "2021"], frequency: 2 },
      { id: 6, question: "Differentiate between threat, vulnerability, and risk.", years: ["2023", "2022"], frequency: 2 },
    ],
    2: [
      { id: 1, question: "Explain symmetric and asymmetric key cryptography.", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 2, question: "Describe DES algorithm with diagram.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "Explain RSA algorithm with numerical example.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "What are hash functions? Explain MD5 and SHA.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "Explain digital signatures and their working.", years: ["2022", "2021"], frequency: 2 },
      { id: 6, question: "Describe AES algorithm.", years: ["2023", "2022"], frequency: 2 },
    ],
    3: [
      { id: 1, question: "Explain types of firewalls and their working.", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 2, question: "What is IDS? Differentiate between IDS and IPS.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "Explain VPN and its types.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "Describe SSL/TLS protocol and handshake process.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "What is DMZ? Explain network security architecture.", years: ["2022", "2021"], frequency: 2 },
      { id: 6, question: "Explain IPSec protocol.", years: ["2023", "2022"], frequency: 2 },
    ],
    4: [
      { id: 1, question: "Explain SQL injection attack and prevention methods.", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 2, question: "What is XSS? Explain its types and prevention.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "Describe CSRF attack and mitigation techniques.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "Explain session hijacking and prevention.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "What is OWASP Top 10? Explain any five.", years: ["2022", "2021"], frequency: 2 },
      { id: 6, question: "Explain phishing attacks and countermeasures.", years: ["2023", "2022"], frequency: 2 },
    ],
    5: [
      { id: 1, question: "Explain IT Act 2000 and its key provisions.", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 2, question: "What is cyber ethics? Explain ethical hacking.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "Describe digital forensics process and tools.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "What is incident response? Explain its phases.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "Explain security audit and compliance.", years: ["2022", "2021"], frequency: 2 },
      { id: 6, question: "What are cybercrimes? Explain with examples.", years: ["2023", "2022"], frequency: 2 },
    ]
  },

  // Mathematics-IV
  "math-4": {
    1: [
      { id: 1, question: "Find dy/dx using Newton's forward/backward formula.", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 2, question: "Evaluate integral using Simpson's 1/3 and 3/8 rule.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "Apply trapezoidal rule to evaluate given integral.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "Find derivative at given point using difference formulas.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "Compare trapezoidal, Simpson's 1/3, and Simpson's 3/8 rules.", years: ["2022", "2021"], frequency: 2 },
    ],
    2: [
      { id: 1, question: "Solve ODE using Runge-Kutta 4th order method.", years: ["2023", "2022", "2021", "2020", "2019"], frequency: 5 },
      { id: 2, question: "Apply Euler's method to solve given ODE.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "Solve ODE using Milne's predictor-corrector method.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "Apply modified Euler's method.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "Solve boundary value problem numerically.", years: ["2022", "2021"], frequency: 2 },
    ],
    3: [
      { id: 1, question: "Calculate mean, median, mode, and standard deviation.", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 2, question: "Apply chi-square test for given data.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "Test hypothesis using t-test and z-test.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "Calculate coefficient of variation.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "Explain ANOVA with example.", years: ["2022", "2021"], frequency: 2 },
    ],
    4: [
      { id: 1, question: "Solve problems on binomial distribution.", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 2, question: "Apply Poisson distribution to solve problems.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "Solve problems on normal distribution.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "Find mean and variance of given distribution.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "Explain exponential distribution with examples.", years: ["2022", "2021"], frequency: 2 },
    ],
    5: [
      { id: 1, question: "Find regression lines and estimate values.", years: ["2023", "2022", "2021", "2020"], frequency: 4 },
      { id: 2, question: "Calculate correlation coefficient from given data.", years: ["2023", "2022", "2021"], frequency: 3 },
      { id: 3, question: "Fit straight line using least squares method.", years: ["2022", "2021", "2020"], frequency: 3 },
      { id: 4, question: "Find multiple regression equation.", years: ["2023", "2020", "2019"], frequency: 3 },
      { id: 5, question: "Explain rank correlation coefficient.", years: ["2022", "2021"], frequency: 2 },
    ]
  }
};
