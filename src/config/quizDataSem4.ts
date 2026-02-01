/**
 * AKTU Quiz Data - 4th Semester (2nd Year) & Mathematics-II
 */

import { QuizData } from "./quizData";

export const quizDataSem4: QuizData = {
  // Mathematics-II (1st Year)
  "math-2": {
    1: [ // Unit I - Laplace Transform
      { id: 1, question: "Laplace transform of 1 is:", options: ["1/s", "s", "1", "0"], correctAnswer: 0, explanation: "L{1} = 1/s for s > 0." },
      { id: 2, question: "L{e^at} equals:", options: ["1/(s-a)", "1/(s+a)", "s-a", "e^s"], correctAnswer: 0, explanation: "L{e^at} = 1/(s-a) for s > a." },
      { id: 3, question: "L{sin(at)} equals:", options: ["a/(s²+a²)", "s/(s²+a²)", "1/(s²+a²)", "a/s"], correctAnswer: 0, explanation: "L{sin(at)} = a/(s²+a²)." },
      { id: 4, question: "First shifting theorem states L{e^at f(t)} =:", options: ["F(s-a)", "F(s+a)", "e^a F(s)", "F(s)/a"], correctAnswer: 0, explanation: "L{e^at f(t)} = F(s-a) is the first shifting theorem." },
      { id: 5, question: "L{t^n} equals:", options: ["n!/s^(n+1)", "n!/s^n", "s^n/n!", "1/s^n"], correctAnswer: 0, explanation: "L{t^n} = n!/s^(n+1) for s > 0." },
      { id: 6, question: "Laplace transform of derivative f'(t) is:", options: ["sF(s) - f(0)", "F(s)/s", "dF/ds", "s²F(s)"], correctAnswer: 0, explanation: "L{f'(t)} = sF(s) - f(0) is a key property." },
      { id: 7, question: "L{cos(at)} equals:", options: ["s/(s²+a²)", "a/(s²+a²)", "1/(s²+a²)", "s²/(s²+a²)"], correctAnswer: 0, explanation: "L{cos(at)} = s/(s²+a²)." },
      { id: 8, question: "Region of convergence for L{e^at} is:", options: ["s > a", "s < a", "s = a", "All s"], correctAnswer: 0, explanation: "L{e^at} exists for s > a." },
      { id: 9, question: "L{t·f(t)} equals:", options: ["-dF(s)/ds", "dF(s)/ds", "F(s)/s", "sF(s)"], correctAnswer: 0, explanation: "Multiplication by t gives -dF/ds." },
      { id: 10, question: "Laplace transform is a:", options: ["Linear transform", "Nonlinear transform", "Periodic transform", "None"], correctAnswer: 0, explanation: "Laplace transform satisfies linearity: L{af+bg} = aL{f}+bL{g}." }
    ],
    2: [ // Unit II - Inverse Laplace Transform
      { id: 1, question: "L⁻¹{1/s} equals:", options: ["1", "t", "e^t", "0"], correctAnswer: 0, explanation: "L⁻¹{1/s} = 1 (constant function)." },
      { id: 2, question: "L⁻¹{1/(s-a)} equals:", options: ["e^at", "e^-at", "t^a", "1/a"], correctAnswer: 0, explanation: "L⁻¹{1/(s-a)} = e^at." },
      { id: 3, question: "Convolution of f and g is denoted by:", options: ["f*g", "f·g", "f+g", "f/g"], correctAnswer: 0, explanation: "f*g denotes convolution integral." },
      { id: 4, question: "Convolution theorem states L⁻¹{F(s)·G(s)} =:", options: ["f*g", "f·g", "f+g", "L⁻¹{F}·L⁻¹{G}"], correctAnswer: 0, explanation: "Product in s-domain gives convolution in t-domain." },
      { id: 5, question: "L⁻¹{1/s²} equals:", options: ["t", "t²", "1", "2t"], correctAnswer: 0, explanation: "L⁻¹{1/s²} = t." },
      { id: 6, question: "For partial fractions, repeated roots give:", options: ["Multiple terms", "Single term", "No term", "Complex term"], correctAnswer: 0, explanation: "Repeated roots require multiple partial fraction terms." },
      { id: 7, question: "L⁻¹{s/(s²+a²)} equals:", options: ["cos(at)", "sin(at)", "e^at", "1"], correctAnswer: 0, explanation: "L⁻¹{s/(s²+a²)} = cos(at)." },
      { id: 8, question: "Heaviside expansion is used for:", options: ["Partial fractions", "Integration", "Differentiation", "Series"], correctAnswer: 0, explanation: "Heaviside method simplifies partial fraction decomposition." },
      { id: 9, question: "L⁻¹{a/(s²+a²)} equals:", options: ["sin(at)", "cos(at)", "sinh(at)", "cosh(at)"], correctAnswer: 0, explanation: "L⁻¹{a/(s²+a²)} = sin(at)." },
      { id: 10, question: "To solve ODE using Laplace, we first:", options: ["Take Laplace of both sides", "Integrate", "Differentiate", "Factor"], correctAnswer: 0, explanation: "Apply Laplace transform to convert ODE to algebraic equation." }
    ],
    3: [ // Unit III - Fourier Series
      { id: 1, question: "Fourier series represents:", options: ["Periodic functions", "Aperiodic functions", "Constants only", "Exponentials only"], correctAnswer: 0, explanation: "Fourier series represents periodic functions as sum of sines and cosines." },
      { id: 2, question: "Period of sin(nπx/L) is:", options: ["2L/n", "2L", "L/n", "nL"], correctAnswer: 0, explanation: "sin(nπx/L) has period 2L/n." },
      { id: 3, question: "For even function, Fourier series contains:", options: ["Only cosine terms", "Only sine terms", "Both", "Neither"], correctAnswer: 0, explanation: "Even functions have only cosine terms (a₀ and aₙ)." },
      { id: 4, question: "For odd function, Fourier series contains:", options: ["Only sine terms", "Only cosine terms", "Both", "Neither"], correctAnswer: 0, explanation: "Odd functions have only sine terms (bₙ)." },
      { id: 5, question: "Dirichlet conditions ensure:", options: ["Convergence of Fourier series", "Divergence", "Oscillation", "None"], correctAnswer: 0, explanation: "Dirichlet conditions guarantee Fourier series convergence." },
      { id: 6, question: "a₀ in Fourier series represents:", options: ["Average value", "Maximum value", "Minimum value", "Zero"], correctAnswer: 0, explanation: "a₀/2 is the average (DC component) of the function." },
      { id: 7, question: "Half-range cosine series is for:", options: ["[0, L] extended as even", "[0, L] extended as odd", "[-L, L]", "[0, 2L]"], correctAnswer: 0, explanation: "Half-range cosine extends function as even to get only cosines." },
      { id: 8, question: "Half-range sine series is for:", options: ["[0, L] extended as odd", "[0, L] extended as even", "[-L, L]", "[0, 2L]"], correctAnswer: 0, explanation: "Half-range sine extends function as odd to get only sines." },
      { id: 9, question: "Parseval's identity relates:", options: ["Energy and coefficients", "Phase and frequency", "Amplitude only", "None"], correctAnswer: 0, explanation: "Parseval's identity: energy equals sum of squared coefficients." },
      { id: 10, question: "Complex Fourier coefficient cₙ includes:", options: ["Both amplitude and phase", "Only amplitude", "Only phase", "Neither"], correctAnswer: 0, explanation: "Complex form combines amplitude and phase information." }
    ],
    4: [ // Unit IV - Complex Variables
      { id: 1, question: "A function is analytic if:", options: ["It satisfies C-R equations", "It is continuous", "It is real", "It is bounded"], correctAnswer: 0, explanation: "Analytic functions satisfy Cauchy-Riemann equations." },
      { id: 2, question: "Cauchy-Riemann equations are:", options: ["∂u/∂x = ∂v/∂y, ∂u/∂y = -∂v/∂x", "∂u/∂x = ∂v/∂y", "∂u/∂y = ∂v/∂x", "u = v"], correctAnswer: 0, explanation: "C-R equations: uₓ = vᵧ and uᵧ = -vₓ." },
      { id: 3, question: "Harmonic functions satisfy:", options: ["Laplace equation", "Wave equation", "Heat equation", "Poisson equation"], correctAnswer: 0, explanation: "Harmonic functions satisfy ∇²u = 0." },
      { id: 4, question: "Cauchy's integral formula gives value at:", options: ["Interior point", "Boundary", "Exterior", "Infinity"], correctAnswer: 0, explanation: "f(a) = (1/2πi)∮f(z)/(z-a)dz for point a inside contour." },
      { id: 5, question: "Residue is coefficient of:", options: ["1/(z-a)", "(z-a)", "(z-a)²", "Constant"], correctAnswer: 0, explanation: "Residue is coefficient of (z-a)⁻¹ in Laurent series." },
      { id: 6, question: "Simple pole has order:", options: ["1", "2", "0", "∞"], correctAnswer: 0, explanation: "Simple pole is a pole of order 1." },
      { id: 7, question: "Residue theorem evaluates:", options: ["Contour integrals", "Line integrals only", "Surface integrals", "None"], correctAnswer: 0, explanation: "Residue theorem: ∮f(z)dz = 2πi × (sum of residues)." },
      { id: 8, question: "If f(z) = u + iv is analytic, then u is:", options: ["Harmonic", "Constant", "Zero", "Unbounded"], correctAnswer: 0, explanation: "Real and imaginary parts of analytic functions are harmonic." },
      { id: 9, question: "Bilinear transformation maps:", options: ["Circles to circles/lines", "Circles to squares", "Lines to parabolas", "None"], correctAnswer: 0, explanation: "Bilinear (Mobius) transformation maps circles/lines to circles/lines." },
      { id: 10, question: "∮dz/(z-a) around a is:", options: ["2πi", "0", "πi", "1"], correctAnswer: 0, explanation: "∮dz/(z-a) = 2πi when a is inside the contour." }
    ],
    5: [ // Unit V - Statistics & Probability
      { id: 1, question: "Method of least squares minimizes:", options: ["Sum of squared errors", "Sum of errors", "Maximum error", "Average error"], correctAnswer: 0, explanation: "Least squares minimizes Σ(yᵢ - ŷᵢ)²." },
      { id: 2, question: "Correlation coefficient r ranges from:", options: ["-1 to 1", "0 to 1", "-∞ to ∞", "0 to ∞"], correctAnswer: 0, explanation: "r ∈ [-1, 1], with ±1 being perfect correlation." },
      { id: 3, question: "If r = 0, variables are:", options: ["Uncorrelated", "Positively correlated", "Negatively correlated", "Dependent"], correctAnswer: 0, explanation: "r = 0 means no linear correlation." },
      { id: 4, question: "Normal distribution is:", options: ["Symmetric about mean", "Skewed right", "Skewed left", "Uniform"], correctAnswer: 0, explanation: "Normal distribution is symmetric bell curve centered at mean." },
      { id: 5, question: "For binomial distribution, variance =:", options: ["npq", "np", "nq", "p/q"], correctAnswer: 0, explanation: "Var(X) = npq for binomial distribution." },
      { id: 6, question: "Poisson distribution models:", options: ["Rare events", "Continuous data", "Uniform events", "Periodic events"], correctAnswer: 0, explanation: "Poisson is used for rare events in fixed interval." },
      { id: 7, question: "Standard deviation is:", options: ["√Variance", "Variance²", "Mean/2", "Median"], correctAnswer: 0, explanation: "σ = √Var(X)." },
      { id: 8, question: "Regression line of y on x minimizes:", options: ["Vertical distances", "Horizontal distances", "Perpendicular distances", "None"], correctAnswer: 0, explanation: "y on x regression minimizes vertical (y) errors." },
      { id: 9, question: "For normal distribution, mean = median =:", options: ["Mode", "Variance", "Range", "Nothing"], correctAnswer: 0, explanation: "In normal distribution, mean = median = mode." },
      { id: 10, question: "Curve fitting finds:", options: ["Best fit equation", "Area under curve", "Derivative", "Integral"], correctAnswer: 0, explanation: "Curve fitting determines equation that best represents data." }
    ]
  },

  // Operating System
  "os": {
    1: [ // Unit I - Introduction to OS
      { id: 1, question: "OS acts as interface between:", options: ["User and hardware", "Software and software", "Hardware and hardware", "None"], correctAnswer: 0, explanation: "OS provides interface between user/applications and computer hardware." },
      { id: 2, question: "Kernel is:", options: ["Core of OS", "Application program", "Hardware device", "Compiler"], correctAnswer: 0, explanation: "Kernel is the core component that manages system resources." },
      { id: 3, question: "System call is:", options: ["Request to OS for service", "Hardware interrupt", "User command", "Program error"], correctAnswer: 0, explanation: "System calls allow programs to request OS services." },
      { id: 4, question: "Multiprogramming increases:", options: ["CPU utilization", "Response time", "Memory waste", "None"], correctAnswer: 0, explanation: "Multiprogramming keeps CPU busy by switching between processes." },
      { id: 5, question: "Time-sharing system provides:", options: ["Interactive computing", "Batch processing only", "No multitasking", "Hardware control"], correctAnswer: 0, explanation: "Time-sharing allows multiple users to interact with system simultaneously." },
      { id: 6, question: "Microkernel contains:", options: ["Minimal essential functions", "All OS functions", "No functions", "Only drivers"], correctAnswer: 0, explanation: "Microkernel has minimal core, other services run in user space." },
      { id: 7, question: "Monolithic kernel:", options: ["Has all services in kernel", "Is modular", "Is small", "Is slow"], correctAnswer: 0, explanation: "Monolithic kernel runs all OS services in kernel mode." },
      { id: 8, question: "Virtual machine provides:", options: ["Isolated environment", "Direct hardware access", "No protection", "Single user only"], correctAnswer: 0, explanation: "VM creates isolated environment with its own virtual hardware." },
      { id: 9, question: "Real-time OS is for:", options: ["Time-critical applications", "General computing", "Gaming only", "Text processing"], correctAnswer: 0, explanation: "RTOS guarantees response within strict time constraints." },
      { id: 10, question: "Dual-mode operation uses:", options: ["User and kernel modes", "Single mode", "Three modes", "No modes"], correctAnswer: 0, explanation: "Dual mode protects OS by separating user and kernel modes." }
    ],
    2: [ // Unit II - Process Management
      { id: 1, question: "PCB contains:", options: ["Process state information", "User data only", "Programs only", "Nothing"], correctAnswer: 0, explanation: "PCB stores process ID, state, registers, memory info, etc." },
      { id: 2, question: "Context switch occurs when:", options: ["CPU switches to another process", "Program ends", "User logs in", "System boots"], correctAnswer: 0, explanation: "Context switch saves current process state and loads another." },
      { id: 3, question: "FCFS scheduling is:", options: ["Non-preemptive", "Preemptive", "Priority-based", "Random"], correctAnswer: 0, explanation: "First Come First Serve is non-preemptive FIFO scheduling." },
      { id: 4, question: "SJF minimizes:", options: ["Average waiting time", "Throughput", "Response time", "Memory usage"], correctAnswer: 0, explanation: "Shortest Job First gives optimal average waiting time." },
      { id: 5, question: "Round Robin uses:", options: ["Time quantum", "Priority", "Job length", "Memory size"], correctAnswer: 0, explanation: "RR allocates fixed time slice (quantum) to each process." },
      { id: 6, question: "Preemptive scheduling:", options: ["Can interrupt running process", "Cannot interrupt", "Uses no CPU", "Is slower"], correctAnswer: 0, explanation: "Preemptive scheduling can stop a running process for another." },
      { id: 7, question: "Thread shares with process:", options: ["Code and data", "Stack", "Register", "Nothing"], correctAnswer: 0, explanation: "Threads share code, data, heap but have separate stacks." },
      { id: 8, question: "User-level threads are managed by:", options: ["User library", "Kernel", "Hardware", "Compiler"], correctAnswer: 0, explanation: "User threads are managed by thread library, not kernel." },
      { id: 9, question: "CPU-bound process needs:", options: ["More CPU time", "More I/O", "Less memory", "More disk"], correctAnswer: 0, explanation: "CPU-bound processes spend most time computing." },
      { id: 10, question: "Dispatcher is responsible for:", options: ["Context switching", "Scheduling decisions", "Memory allocation", "File management"], correctAnswer: 0, explanation: "Dispatcher performs actual context switch to selected process." }
    ],
    3: [ // Unit III - Process Synchronization & Deadlock
      { id: 1, question: "Critical section is:", options: ["Code accessing shared resource", "Entry point", "Exit point", "Main function"], correctAnswer: 0, explanation: "Critical section is code that accesses shared resources." },
      { id: 2, question: "Mutex provides:", options: ["Mutual exclusion", "Parallelism", "Deadlock", "Starvation"], correctAnswer: 0, explanation: "Mutex ensures only one process in critical section." },
      { id: 3, question: "Semaphore is:", options: ["Synchronization tool", "Memory type", "CPU register", "File type"], correctAnswer: 0, explanation: "Semaphore is integer variable for process synchronization." },
      { id: 4, question: "Binary semaphore values are:", options: ["0 and 1", "0 to n", "-1 to 1", "Any integer"], correctAnswer: 0, explanation: "Binary semaphore can only be 0 or 1." },
      { id: 5, question: "Deadlock requires how many conditions?", options: ["4", "2", "3", "5"], correctAnswer: 0, explanation: "All 4 conditions needed: mutual exclusion, hold-wait, no preemption, circular wait." },
      { id: 6, question: "Banker's algorithm is for:", options: ["Deadlock avoidance", "Deadlock detection", "Deadlock recovery", "Prevention"], correctAnswer: 0, explanation: "Banker's algorithm avoids deadlock by checking safe state." },
      { id: 7, question: "Resource allocation graph shows:", options: ["Process-resource relationships", "Memory layout", "File structure", "Network topology"], correctAnswer: 0, explanation: "RAG shows which resources are allocated/requested by processes." },
      { id: 8, question: "Peterson's solution is for:", options: ["Two-process synchronization", "N processes", "Hardware only", "Networks"], correctAnswer: 0, explanation: "Peterson's solution solves critical section for 2 processes." },
      { id: 9, question: "Producer-consumer uses:", options: ["Buffer", "Stack only", "No memory", "Direct transfer"], correctAnswer: 0, explanation: "Producer puts items in buffer, consumer takes from buffer." },
      { id: 10, question: "Safe state means:", options: ["No deadlock possible", "Deadlock exists", "All blocked", "System crashed"], correctAnswer: 0, explanation: "Safe state: exists a sequence where all can finish." }
    ],
    4: [ // Unit IV - Memory Management
      { id: 1, question: "Paging divides memory into:", options: ["Fixed-size frames", "Variable segments", "One block", "Random chunks"], correctAnswer: 0, explanation: "Paging uses fixed-size frames in physical memory." },
      { id: 2, question: "Page fault occurs when:", options: ["Page not in memory", "Page in memory", "Memory full", "CPU idle"], correctAnswer: 0, explanation: "Page fault: referenced page is not in main memory." },
      { id: 3, question: "TLB is used for:", options: ["Fast address translation", "Disk access", "Network", "Printing"], correctAnswer: 0, explanation: "TLB caches page table entries for faster translation." },
      { id: 4, question: "Virtual memory uses:", options: ["Disk as extended memory", "More RAM", "Less CPU", "No storage"], correctAnswer: 0, explanation: "Virtual memory uses disk to extend apparent memory size." },
      { id: 5, question: "LRU replaces page:", options: ["Not used for longest", "Most recently used", "First loaded", "Randomly"], correctAnswer: 0, explanation: "LRU replaces page unused for longest time." },
      { id: 6, question: "Thrashing occurs when:", options: ["Too much paging", "No paging", "CPU is idle", "Memory unused"], correctAnswer: 0, explanation: "Thrashing: system spends more time paging than executing." },
      { id: 7, question: "External fragmentation is in:", options: ["Variable partitioning", "Paging", "Fixed partitioning", "Segmentation only"], correctAnswer: 0, explanation: "External fragmentation occurs with variable-size allocation." },
      { id: 8, question: "Internal fragmentation is in:", options: ["Fixed partitioning/paging", "Variable partitioning", "Segmentation", "None"], correctAnswer: 0, explanation: "Internal fragmentation: unused space within allocated block." },
      { id: 9, question: "Best-fit allocates:", options: ["Smallest sufficient block", "Largest block", "First block", "Random block"], correctAnswer: 0, explanation: "Best-fit finds smallest hole that fits the request." },
      { id: 10, question: "Demand paging loads page:", options: ["When needed", "At start", "Never", "Randomly"], correctAnswer: 0, explanation: "Demand paging loads pages only when accessed." }
    ],
    5: [ // Unit V - File & Disk Management
      { id: 1, question: "FCFS disk scheduling is:", options: ["Simple but inefficient", "Optimal", "Complex", "Unused"], correctAnswer: 0, explanation: "FCFS serves requests in arrival order, may cause long seeks." },
      { id: 2, question: "SSTF selects request with:", options: ["Shortest seek time", "Longest seek", "First arrival", "Random"], correctAnswer: 0, explanation: "SSTF serves nearest request first." },
      { id: 3, question: "SCAN algorithm is also called:", options: ["Elevator algorithm", "Round Robin", "FIFO", "Random"], correctAnswer: 0, explanation: "SCAN moves like elevator, reversing at disk ends." },
      { id: 4, question: "C-SCAN provides:", options: ["More uniform wait", "Less uniform wait", "No movement", "Random access"], correctAnswer: 0, explanation: "C-SCAN returns to start without servicing for uniform wait." },
      { id: 5, question: "Contiguous allocation causes:", options: ["External fragmentation", "Internal fragmentation", "No fragmentation", "Thrashing"], correctAnswer: 0, explanation: "Contiguous allocation leads to external fragmentation." },
      { id: 6, question: "Linked allocation uses:", options: ["Pointers between blocks", "Contiguous blocks", "Index table", "Nothing"], correctAnswer: 0, explanation: "Linked allocation chains blocks with pointers." },
      { id: 7, question: "Indexed allocation uses:", options: ["Index block", "Linked list", "Contiguous space", "No index"], correctAnswer: 0, explanation: "Index block contains pointers to all file blocks." },
      { id: 8, question: "i-node is used in:", options: ["UNIX file systems", "DOS only", "Windows only", "No system"], correctAnswer: 0, explanation: "i-node stores file metadata in UNIX/Linux systems." },
      { id: 9, question: "RAID 1 uses:", options: ["Mirroring", "Striping only", "Parity only", "Nothing"], correctAnswer: 0, explanation: "RAID 1 mirrors data on two disks." },
      { id: 10, question: "RAID 5 uses:", options: ["Distributed parity", "No parity", "Mirroring", "Single disk"], correctAnswer: 0, explanation: "RAID 5 distributes parity across all disks." }
    ]
  },

  // OOPS with Java
  "oops-java": {
    1: [ // Unit I - Introduction to Java & OOP
      { id: 1, question: "Java is:", options: ["Platform independent", "Platform dependent", "Hardware specific", "OS specific"], correctAnswer: 0, explanation: "Java bytecode runs on JVM, making it platform independent." },
      { id: 2, question: "JVM stands for:", options: ["Java Virtual Machine", "Java Variable Machine", "Just Virtual Machine", "Java Visual Machine"], correctAnswer: 0, explanation: "JVM executes Java bytecode." },
      { id: 3, question: "Bytecode is executed by:", options: ["JVM", "Compiler", "OS", "CPU directly"], correctAnswer: 0, explanation: "JVM interprets/compiles bytecode to native code." },
      { id: 4, question: "JDK includes:", options: ["JRE and development tools", "Only JRE", "Only compiler", "Nothing"], correctAnswer: 0, explanation: "JDK = JRE + development tools (compiler, debugger, etc.)." },
      { id: 5, question: "main() method must be:", options: ["public static void", "private", "protected", "No modifier"], correctAnswer: 0, explanation: "main() must be public static void main(String[] args)." },
      { id: 6, question: "Encapsulation means:", options: ["Hiding implementation details", "Inheritance", "Polymorphism", "Abstraction"], correctAnswer: 0, explanation: "Encapsulation bundles data and methods, hides internals." },
      { id: 7, question: "Java source files have extension:", options: [".java", ".class", ".exe", ".jar"], correctAnswer: 0, explanation: "Source files are .java, compiled files are .class." },
      { id: 8, question: "Garbage collection is:", options: ["Automatic memory management", "Manual deallocation", "Compilation", "Linking"], correctAnswer: 0, explanation: "Java automatically reclaims unused memory." },
      { id: 9, question: "Java is:", options: ["Strongly typed", "Weakly typed", "Untyped", "Dynamically typed"], correctAnswer: 0, explanation: "Java enforces strict type checking at compile time." },
      { id: 10, question: "Wrapper class for int is:", options: ["Integer", "Int", "int", "INTEGER"], correctAnswer: 0, explanation: "Integer is wrapper class for primitive int." }
    ],
    2: [ // Unit II - Classes, Objects & Inheritance
      { id: 1, question: "Constructor name must be:", options: ["Same as class name", "Different from class", "main", "Any name"], correctAnswer: 0, explanation: "Constructor has exact same name as class." },
      { id: 2, question: "'this' keyword refers to:", options: ["Current object", "Parent class", "Static context", "Nothing"], correctAnswer: 0, explanation: "'this' refers to current instance of the class." },
      { id: 3, question: "'super' keyword refers to:", options: ["Parent class", "Current class", "Static method", "Interface"], correctAnswer: 0, explanation: "'super' accesses parent class members." },
      { id: 4, question: "Method overloading is:", options: ["Same name, different parameters", "Same name and parameters", "Different names", "None"], correctAnswer: 0, explanation: "Overloading: same method name, different parameter list." },
      { id: 5, question: "Method overriding is:", options: ["Redefining parent method in child", "Same class methods", "Static methods", "Constructor"], correctAnswer: 0, explanation: "Overriding: child class provides its own implementation." },
      { id: 6, question: "Java supports:", options: ["Single inheritance for classes", "Multiple class inheritance", "No inheritance", "Diamond inheritance"], correctAnswer: 0, explanation: "Java class can extend only one class." },
      { id: 7, question: "'final' class cannot be:", options: ["Extended", "Instantiated", "Used", "Compiled"], correctAnswer: 0, explanation: "Final class cannot be subclassed." },
      { id: 8, question: "'final' method cannot be:", options: ["Overridden", "Called", "Defined", "Used"], correctAnswer: 0, explanation: "Final method cannot be overridden in child class." },
      { id: 9, question: "Static method belongs to:", options: ["Class", "Object", "Constructor", "Package"], correctAnswer: 0, explanation: "Static members belong to class, not instances." },
      { id: 10, question: "Default constructor is:", options: ["No-argument constructor", "Parameterized", "Private", "Static"], correctAnswer: 0, explanation: "Default constructor takes no parameters." }
    ],
    3: [ // Unit III - Packages, Interfaces & Exception
      { id: 1, question: "Package provides:", options: ["Namespace and access control", "Compilation", "Execution", "Debugging"], correctAnswer: 0, explanation: "Packages organize classes and control access." },
      { id: 2, question: "Interface methods are by default:", options: ["public abstract", "private", "protected", "static"], correctAnswer: 0, explanation: "Interface methods are implicitly public and abstract." },
      { id: 3, question: "Class can implement:", options: ["Multiple interfaces", "One interface only", "No interface", "One abstract class"], correctAnswer: 0, explanation: "A class can implement multiple interfaces." },
      { id: 4, question: "Abstract class can have:", options: ["Both abstract and concrete methods", "Only abstract methods", "Only concrete methods", "No methods"], correctAnswer: 0, explanation: "Abstract class can mix abstract and implemented methods." },
      { id: 5, question: "try block must be followed by:", options: ["catch or finally", "Only catch", "Only finally", "Nothing"], correctAnswer: 0, explanation: "try requires at least catch or finally block." },
      { id: 6, question: "finally block:", options: ["Always executes", "Never executes", "Sometimes executes", "Optional"], correctAnswer: 0, explanation: "finally always runs (except System.exit)." },
      { id: 7, question: "throw keyword:", options: ["Throws exception explicitly", "Catches exception", "Declares exception", "Ignores exception"], correctAnswer: 0, explanation: "throw is used to explicitly throw an exception." },
      { id: 8, question: "throws keyword is used in:", options: ["Method signature", "Method body", "Catch block", "Finally block"], correctAnswer: 0, explanation: "throws declares exceptions method might throw." },
      { id: 9, question: "Checked exceptions must be:", options: ["Handled or declared", "Ignored", "Runtime only", "Errors"], correctAnswer: 0, explanation: "Checked exceptions require handling at compile time." },
      { id: 10, question: "RuntimeException is:", options: ["Unchecked exception", "Checked exception", "Error", "Not exception"], correctAnswer: 0, explanation: "RuntimeException and subclasses are unchecked." }
    ],
    4: [ // Unit IV - Multithreading & I/O
      { id: 1, question: "Thread can be created by:", options: ["Extending Thread or implementing Runnable", "Only extending Thread", "Only Runnable", "Neither"], correctAnswer: 0, explanation: "Two ways: extend Thread class or implement Runnable interface." },
      { id: 2, question: "Thread.start() method:", options: ["Begins thread execution", "Stops thread", "Pauses thread", "Creates thread"], correctAnswer: 0, explanation: "start() begins execution by calling run()." },
      { id: 3, question: "synchronized keyword provides:", options: ["Mutual exclusion", "Parallel access", "No locking", "Thread creation"], correctAnswer: 0, explanation: "synchronized ensures only one thread accesses at a time." },
      { id: 4, question: "wait() releases:", options: ["Lock on object", "Thread", "Memory", "Nothing"], correctAnswer: 0, explanation: "wait() releases the lock and waits for notify." },
      { id: 5, question: "notify() wakes:", options: ["One waiting thread", "All threads", "No thread", "Main thread"], correctAnswer: 0, explanation: "notify() wakes one thread waiting on object." },
      { id: 6, question: "notifyAll() wakes:", options: ["All waiting threads", "One thread", "No thread", "Main only"], correctAnswer: 0, explanation: "notifyAll() wakes all threads waiting on object." },
      { id: 7, question: "FileInputStream reads:", options: ["Bytes from file", "Characters", "Objects", "Nothing"], correctAnswer: 0, explanation: "FileInputStream reads raw bytes from file." },
      { id: 8, question: "FileReader reads:", options: ["Characters from file", "Bytes", "Objects", "Nothing"], correctAnswer: 0, explanation: "FileReader reads characters from text file." },
      { id: 9, question: "Serialization converts:", options: ["Object to byte stream", "Bytes to object", "String to int", "Nothing"], correctAnswer: 0, explanation: "Serialization converts object to byte stream for storage/transfer." },
      { id: 10, question: "BufferedReader provides:", options: ["Efficient reading with buffer", "Direct reading", "Writing only", "Network I/O"], correctAnswer: 0, explanation: "BufferedReader buffers input for efficient reading." }
    ],
    5: [ // Unit V - Applets & Event Handling
      { id: 1, question: "Applet lifecycle method init() is called:", options: ["When applet is loaded", "When destroyed", "Every second", "On click"], correctAnswer: 0, explanation: "init() is called once when applet first loads." },
      { id: 2, question: "paint() method receives:", options: ["Graphics object", "String", "Integer", "Nothing"], correctAnswer: 0, explanation: "paint(Graphics g) is used for drawing on applet." },
      { id: 3, question: "Applets run in:", options: ["Web browser/appletviewer", "Command line", "IDE only", "Nowhere"], correctAnswer: 0, explanation: "Applets run in browser with JVM plugin or appletviewer." },
      { id: 4, question: "Event handling uses:", options: ["Delegation event model", "Inheritance model", "Sequential model", "No model"], correctAnswer: 0, explanation: "Java uses delegation model: source, listener, event." },
      { id: 5, question: "ActionListener handles:", options: ["Button clicks", "Mouse movement", "Key press", "Window close"], correctAnswer: 0, explanation: "ActionListener handles action events like button clicks." },
      { id: 6, question: "MouseListener handles:", options: ["Mouse clicks", "Key events", "Window events", "Action events"], correctAnswer: 0, explanation: "MouseListener handles mouse click, enter, exit events." },
      { id: 7, question: "KeyListener handles:", options: ["Keyboard events", "Mouse events", "Window events", "Action events"], correctAnswer: 0, explanation: "KeyListener handles key press, release, typed events." },
      { id: 8, question: "FlowLayout arranges:", options: ["Left to right, top to bottom", "Grid", "Border", "Random"], correctAnswer: 0, explanation: "FlowLayout arranges components in row, wrapping as needed." },
      { id: 9, question: "BorderLayout divides into:", options: ["5 regions", "4 regions", "3 regions", "2 regions"], correctAnswer: 0, explanation: "BorderLayout: North, South, East, West, Center." },
      { id: 10, question: "GridLayout arranges in:", options: ["Grid of cells", "Flow", "Border", "Stack"], correctAnswer: 0, explanation: "GridLayout creates equal-sized grid cells." }
    ]
  },

  // Automata (Theory of Computation)
  "automata": {
    1: [ // Unit I - Finite Automata & Regular Languages
      { id: 1, question: "DFA has:", options: ["Exactly one transition per symbol", "Multiple transitions", "No transitions", "Optional transitions"], correctAnswer: 0, explanation: "DFA has exactly one transition for each symbol from each state." },
      { id: 2, question: "NFA can have:", options: ["Multiple transitions for same symbol", "Only one", "None", "Infinite"], correctAnswer: 0, explanation: "NFA allows multiple or zero transitions for same symbol." },
      { id: 3, question: "ε-transition consumes:", options: ["No input symbol", "One symbol", "Two symbols", "All symbols"], correctAnswer: 0, explanation: "ε-transition moves without consuming input." },
      { id: 4, question: "DFA and NFA are:", options: ["Equivalent in power", "DFA more powerful", "NFA more powerful", "Incomparable"], correctAnswer: 0, explanation: "DFA and NFA recognize same class of languages." },
      { id: 5, question: "Minimized DFA is:", options: ["Unique", "Not unique", "Infinite", "Empty"], correctAnswer: 0, explanation: "Minimal DFA for a regular language is unique." },
      { id: 6, question: "Regular languages are closed under:", options: ["Union, concatenation, Kleene star", "Intersection only", "Nothing", "Subtraction only"], correctAnswer: 0, explanation: "Regular languages closed under union, concat, star, complement, intersection." },
      { id: 7, question: "Dead state has:", options: ["No outgoing transitions to final state", "Transition to final", "No state", "All transitions"], correctAnswer: 0, explanation: "Dead state cannot reach any final state." },
      { id: 8, question: "Start state in DFA is:", options: ["Exactly one", "Multiple", "None", "Optional"], correctAnswer: 0, explanation: "DFA has exactly one start state." },
      { id: 9, question: "Final states can be:", options: ["Zero or more", "Exactly one", "None allowed", "Infinite required"], correctAnswer: 0, explanation: "DFA can have zero or more final (accepting) states." },
      { id: 10, question: "Subset construction converts:", options: ["NFA to DFA", "DFA to NFA", "PDA to DFA", "TM to DFA"], correctAnswer: 0, explanation: "Subset construction algorithm converts NFA to equivalent DFA." }
    ],
    2: [ // Unit II - Regular Expressions & Grammars
      { id: 1, question: "a* means:", options: ["Zero or more a's", "One or more a's", "Exactly one a", "No a"], correctAnswer: 0, explanation: "Kleene star (*) means zero or more occurrences." },
      { id: 2, question: "a+ means:", options: ["One or more a's", "Zero or more a's", "Zero or one a", "No a"], correctAnswer: 0, explanation: "Plus (+) means one or more occurrences." },
      { id: 3, question: "a|b means:", options: ["a or b", "a and b", "a followed by b", "Neither"], correctAnswer: 0, explanation: "Pipe (|) denotes alternation/union." },
      { id: 4, question: "Regular expression and FA are:", options: ["Equivalent", "RE more powerful", "FA more powerful", "Incomparable"], correctAnswer: 0, explanation: "Regular expressions and finite automata have same power." },
      { id: 5, question: "Pumping lemma is used to:", options: ["Prove language is not regular", "Prove regularity", "Construct DFA", "Minimize DFA"], correctAnswer: 0, explanation: "Pumping lemma proves a language is NOT regular." },
      { id: 6, question: "Arden's theorem solves:", options: ["Regular equation for RE", "CFG", "TM construction", "PDA"], correctAnswer: 0, explanation: "Arden's theorem: X = AX + B has solution X = A*B." },
      { id: 7, question: "Empty string is denoted by:", options: ["ε or λ", "∅", "a", "Σ"], correctAnswer: 0, explanation: "ε (epsilon) or λ (lambda) represents empty string." },
      { id: 8, question: "∅ in RE means:", options: ["Empty set (no strings)", "Empty string", "All strings", "One string"], correctAnswer: 0, explanation: "∅ represents the empty language (no strings)." },
      { id: 9, question: "Right-linear grammar generates:", options: ["Regular languages", "CFLs", "Context-sensitive", "Recursive"], correctAnswer: 0, explanation: "Right-linear and left-linear grammars generate regular languages." },
      { id: 10, question: "Thompson's construction builds:", options: ["NFA from RE", "DFA from RE", "RE from NFA", "CFG from RE"], correctAnswer: 0, explanation: "Thompson's construction creates NFA from regular expression." }
    ],
    3: [ // Unit III - Context-Free Grammars & PDA
      { id: 1, question: "CFG production has form:", options: ["A → α (single variable on left)", "Any string → any string", "String → string", "No rule"], correctAnswer: 0, explanation: "CFG: single non-terminal on left side of production." },
      { id: 2, question: "PDA has:", options: ["Stack for memory", "Queue", "No memory", "Tape"], correctAnswer: 0, explanation: "PDA uses stack as auxiliary memory." },
      { id: 3, question: "CNF production forms are:", options: ["A→BC or A→a", "Any form", "A→ε only", "A→aBC"], correctAnswer: 0, explanation: "CNF: A→BC (two variables) or A→a (terminal)." },
      { id: 4, question: "GNF production forms are:", options: ["A→aα (terminal first)", "A→αa", "A→aa", "Any form"], correctAnswer: 0, explanation: "GNF: productions start with terminal followed by variables." },
      { id: 5, question: "CFL pumping lemma uses:", options: ["uvwxy decomposition", "xyz", "uv", "Single split"], correctAnswer: 0, explanation: "CFL pumping lemma: s = uvwxy with |vwx| ≤ p, |vx| ≥ 1." },
      { id: 6, question: "CFLs are closed under:", options: ["Union, concatenation, star", "Intersection", "Complement", "All"], correctAnswer: 0, explanation: "CFLs closed under union, concat, star but NOT intersection/complement." },
      { id: 7, question: "DPDA is:", options: ["Less powerful than NPDA", "Equal to NPDA", "More powerful than NPDA", "Unrelated"], correctAnswer: 0, explanation: "DPDA recognizes proper subset of CFLs (deterministic CFLs)." },
      { id: 8, question: "Empty stack acceptance means:", options: ["Accept when stack empty", "Accept at final state", "Always accept", "Never accept"], correctAnswer: 0, explanation: "String accepted if PDA empties stack after reading." },
      { id: 9, question: "Inherently ambiguous CFL:", options: ["Has no unambiguous grammar", "Has unambiguous grammar", "Is regular", "Is not CFL"], correctAnswer: 0, explanation: "Inherently ambiguous: every grammar for it is ambiguous." },
      { id: 10, question: "CYK algorithm parses using:", options: ["Dynamic programming", "Recursion only", "Greedy", "Random"], correctAnswer: 0, explanation: "CYK uses dynamic programming for CFG parsing in CNF." }
    ],
    4: [ // Unit IV - Turing Machines
      { id: 1, question: "Turing machine has:", options: ["Infinite tape", "Finite tape", "No tape", "Stack only"], correctAnswer: 0, explanation: "TM has infinite tape for input/output/working space." },
      { id: 2, question: "TM head can:", options: ["Read, write, and move", "Only read", "Only write", "Only move"], correctAnswer: 0, explanation: "TM head reads, writes, then moves left or right." },
      { id: 3, question: "Church-Turing thesis states:", options: ["TM captures computability", "TM is limited", "Automata are enough", "Nothing"], correctAnswer: 0, explanation: "Any algorithmically solvable problem can be solved by TM." },
      { id: 4, question: "Multi-tape TM is:", options: ["Equivalent to single-tape TM", "More powerful", "Less powerful", "Incomparable"], correctAnswer: 0, explanation: "Multi-tape TM can be simulated by single-tape TM." },
      { id: 5, question: "Universal TM can:", options: ["Simulate any TM", "Only compute one function", "Replace hardware", "Do nothing"], correctAnswer: 0, explanation: "Universal TM takes TM description and input, simulates it." },
      { id: 6, question: "Recursive language means:", options: ["TM halts on all inputs", "TM may loop", "Not recognizable", "Empty"], correctAnswer: 0, explanation: "Recursive/decidable: TM always halts with accept/reject." },
      { id: 7, question: "Recursively enumerable means:", options: ["TM accepts strings in language", "TM always halts", "Not Turing-recognizable", "Finite"], correctAnswer: 0, explanation: "RE: TM accepts if in language, may loop if not." },
      { id: 8, question: "TM transition depends on:", options: ["Current state and tape symbol", "Only state", "Only symbol", "Nothing"], correctAnswer: 0, explanation: "Transition: (state, symbol) → (new state, new symbol, direction)." },
      { id: 9, question: "Non-deterministic TM is:", options: ["Equivalent to deterministic TM", "More powerful", "Less powerful", "Cannot exist"], correctAnswer: 0, explanation: "NTM can be simulated by DTM (no power increase)." },
      { id: 10, question: "Linear Bounded Automaton has:", options: ["Tape bounded by input length", "Infinite tape", "No tape", "Stack"], correctAnswer: 0, explanation: "LBA: TM with tape limited to input length (recognizes CSLs)." }
    ],
    5: [ // Unit V - Undecidability & Complexity
      { id: 1, question: "Halting problem is:", options: ["Undecidable", "Decidable", "Regular", "Context-free"], correctAnswer: 0, explanation: "Halting problem: no TM can decide if arbitrary TM halts." },
      { id: 2, question: "Undecidable means:", options: ["No algorithm exists", "Difficult", "Slow", "Easy"], correctAnswer: 0, explanation: "Undecidable: no TM can decide for all inputs." },
      { id: 3, question: "P class contains problems solvable in:", options: ["Polynomial time", "Exponential time", "Constant time", "Infinite time"], correctAnswer: 0, explanation: "P: problems solvable in polynomial time by DTM." },
      { id: 4, question: "NP class contains problems:", options: ["Verifiable in polynomial time", "Solvable in polynomial time", "Unsolvable", "Undecidable"], correctAnswer: 0, explanation: "NP: solutions can be verified in polynomial time." },
      { id: 5, question: "P = NP?", options: ["Open problem", "Proven equal", "Proven unequal", "Irrelevant"], correctAnswer: 0, explanation: "P vs NP is one of the biggest open problems in CS." },
      { id: 6, question: "NP-Complete problem is:", options: ["Hardest in NP", "Easiest in NP", "Outside NP", "In P"], correctAnswer: 0, explanation: "NP-Complete: in NP and all NP problems reduce to it." },
      { id: 7, question: "SAT is:", options: ["NP-Complete", "In P", "Undecidable", "Not in NP"], correctAnswer: 0, explanation: "SAT (Boolean satisfiability) is the first proven NP-Complete problem." },
      { id: 8, question: "Reduction A ≤ B means:", options: ["A is no harder than B", "A is harder", "Equal difficulty", "Unrelated"], correctAnswer: 0, explanation: "A ≤ B: solving B allows solving A, so B is at least as hard." },
      { id: 9, question: "Rice's theorem states:", options: ["Non-trivial properties of RE languages are undecidable", "All decidable", "Some decidable", "None"], correctAnswer: 0, explanation: "Rice's theorem: any non-trivial property of TM languages is undecidable." },
      { id: 10, question: "Co-NP contains:", options: ["Complements of NP problems", "Same as NP", "Subset of P", "Empty"], correctAnswer: 0, explanation: "Co-NP: languages whose complements are in NP." }
    ]
  },

  // Technical Communication
  "tech-comm": {
    1: [ // Unit I - Technical Writing Fundamentals
      { id: 1, question: "Technical writing should be:", options: ["Clear and concise", "Verbose", "Ambiguous", "Creative fiction"], correctAnswer: 0, explanation: "Technical writing prioritizes clarity and brevity." },
      { id: 2, question: "Audience analysis helps:", options: ["Tailor content to readers", "Ignore readers", "Write generically", "Avoid clarity"], correctAnswer: 0, explanation: "Understanding audience helps customize content appropriately." },
      { id: 3, question: "Active voice is preferred because:", options: ["It's direct and clear", "It's longer", "It hides subject", "It's passive"], correctAnswer: 0, explanation: "Active voice: subject performs action, clearer than passive." },
      { id: 4, question: "Proofreading checks for:", options: ["Grammar, spelling, punctuation errors", "Content only", "Nothing", "Length only"], correctAnswer: 0, explanation: "Proofreading finds surface-level errors." },
      { id: 5, question: "Editing focuses on:", options: ["Content, structure, clarity", "Only spelling", "Only grammar", "Nothing"], correctAnswer: 0, explanation: "Editing addresses content organization and clarity." },
      { id: 6, question: "Technical documents should avoid:", options: ["Jargon for general audience", "Clarity", "Accuracy", "Formatting"], correctAnswer: 0, explanation: "Avoid unexplained jargon when writing for non-experts." },
      { id: 7, question: "Document planning includes:", options: ["Outline, purpose, audience", "Random writing", "No preparation", "Copying"], correctAnswer: 0, explanation: "Planning defines purpose, audience, scope, and structure." },
      { id: 8, question: "Coherence means:", options: ["Logical flow between ideas", "Random arrangement", "No connection", "Repetition"], correctAnswer: 0, explanation: "Coherence: ideas connect logically throughout document." },
      { id: 9, question: "Conciseness means:", options: ["Using fewest words needed", "Using many words", "Being vague", "Being unclear"], correctAnswer: 0, explanation: "Concise writing expresses ideas in minimum words." },
      { id: 10, question: "Tone in technical writing should be:", options: ["Objective and professional", "Emotional", "Casual", "Aggressive"], correctAnswer: 0, explanation: "Technical writing uses neutral, professional tone." }
    ],
    2: [ // Unit II - Report Writing
      { id: 1, question: "Report abstract provides:", options: ["Brief summary", "Full details", "Only conclusions", "Introduction only"], correctAnswer: 0, explanation: "Abstract summarizes key points in 150-300 words." },
      { id: 2, question: "Technical report structure includes:", options: ["Title, abstract, introduction, body, conclusion", "Only body", "Only title", "Random order"], correctAnswer: 0, explanation: "Reports follow standard structure for organization." },
      { id: 3, question: "References list:", options: ["Sources cited in document", "Personal opinions", "Unread materials", "Future work"], correctAnswer: 0, explanation: "References list all sources cited in the document." },
      { id: 4, question: "Proposal aims to:", options: ["Persuade reader to approve/fund project", "Summarize past work", "Entertain", "Confuse"], correctAnswer: 0, explanation: "Proposals seek approval or funding for proposed work." },
      { id: 5, question: "Research paper requires:", options: ["Citations and methodology", "No sources", "Opinions only", "No structure"], correctAnswer: 0, explanation: "Research papers document methods and cite sources." },
      { id: 6, question: "APA citation style uses:", options: ["Author-date format", "Footnotes", "No citations", "Random format"], correctAnswer: 0, explanation: "APA uses author-date in-text citations: (Author, Year)." },
      { id: 7, question: "MLA citation style uses:", options: ["Author-page format", "Author-date", "No author", "Footnotes only"], correctAnswer: 0, explanation: "MLA uses author-page: (Author Page)." },
      { id: 8, question: "Executive summary is for:", options: ["Busy decision-makers", "Technical experts only", "No one", "Competitors"], correctAnswer: 0, explanation: "Executive summary helps managers grasp key points quickly." },
      { id: 9, question: "Feasibility report analyzes:", options: ["Practicality of proposed solution", "Past events", "Fiction", "Personal opinions"], correctAnswer: 0, explanation: "Feasibility reports assess whether proposal is viable." },
      { id: 10, question: "Progress report shows:", options: ["Work completed and remaining", "Only completed work", "Only future work", "Nothing"], correctAnswer: 0, explanation: "Progress reports update stakeholders on project status." }
    ],
    3: [ // Unit III - Presentation Skills
      { id: 1, question: "Visual aids should:", options: ["Support and clarify message", "Replace speaker", "Distract audience", "Be text-heavy"], correctAnswer: 0, explanation: "Visuals supplement speech, not replace it." },
      { id: 2, question: "Eye contact during presentation:", options: ["Engages audience", "Scares them", "Is unnecessary", "Should be avoided"], correctAnswer: 0, explanation: "Eye contact builds connection and shows confidence." },
      { id: 3, question: "Voice modulation means:", options: ["Varying pitch, pace, volume", "Monotone", "Speaking fast always", "Whispering"], correctAnswer: 0, explanation: "Modulation keeps audience engaged through vocal variety." },
      { id: 4, question: "Stage fright can be reduced by:", options: ["Practice and preparation", "No preparation", "Avoiding audience", "Ignoring fear"], correctAnswer: 0, explanation: "Practice builds confidence and reduces anxiety." },
      { id: 5, question: "Body language communicates:", options: ["More than words alone", "Nothing", "Less than words", "Only confusion"], correctAnswer: 0, explanation: "Non-verbal cues convey significant meaning." },
      { id: 6, question: "Slide text should be:", options: ["Minimal with key points", "Full paragraphs", "Complete script", "No text"], correctAnswer: 0, explanation: "Slides use bullet points, not full sentences." },
      { id: 7, question: "Q&A session purpose is:", options: ["Clarify and engage", "Avoid questions", "End quickly", "Confuse audience"], correctAnswer: 0, explanation: "Q&A allows clarification and audience interaction." },
      { id: 8, question: "Opening should:", options: ["Capture attention", "Bore audience", "Be longest part", "Skip introduction"], correctAnswer: 0, explanation: "Strong opening hooks audience interest." },
      { id: 9, question: "Conclusion should:", options: ["Summarize and call to action", "Introduce new topics", "Be longest", "Be skipped"], correctAnswer: 0, explanation: "Conclusion reinforces key message and next steps." },
      { id: 10, question: "Gestures should be:", options: ["Natural and purposeful", "Exaggerated", "Absent", "Distracting"], correctAnswer: 0, explanation: "Natural gestures enhance communication." }
    ],
    4: [ // Unit IV - Business Communication
      { id: 1, question: "Business letter format includes:", options: ["Date, address, salutation, body, closing", "Only body", "No format", "Random order"], correctAnswer: 0, explanation: "Formal letters follow standard block format." },
      { id: 2, question: "Email subject line should be:", options: ["Clear and specific", "Vague", "Missing", "Very long"], correctAnswer: 0, explanation: "Subject line summarizes email purpose concisely." },
      { id: 3, question: "CC in email means:", options: ["Carbon copy - informational recipients", "Main recipient", "Blind copy", "Nothing"], correctAnswer: 0, explanation: "CC sends copy to secondary recipients visibly." },
      { id: 4, question: "BCC means:", options: ["Blind carbon copy - hidden recipients", "Main recipient", "Public copy", "Reply all"], correctAnswer: 0, explanation: "BCC hides recipients from others." },
      { id: 5, question: "Memo is used for:", options: ["Internal communication", "External clients", "Personal letters", "Legal contracts"], correctAnswer: 0, explanation: "Memos communicate within organization." },
      { id: 6, question: "Meeting minutes record:", options: ["Decisions and action items", "Personal opinions", "Gossip", "Nothing"], correctAnswer: 0, explanation: "Minutes document key decisions and responsibilities." },
      { id: 7, question: "Notice is for:", options: ["Announcements to many", "Private communication", "Personal matters", "External only"], correctAnswer: 0, explanation: "Notices inform groups about events/policies." },
      { id: 8, question: "Professional email should avoid:", options: ["Informal language and slang", "Clarity", "Proper greeting", "Relevant content"], correctAnswer: 0, explanation: "Business emails maintain professional tone." },
      { id: 9, question: "Email signature includes:", options: ["Name, title, contact info", "Personal photos only", "Nothing", "Random text"], correctAnswer: 0, explanation: "Signature provides professional contact details." },
      { id: 10, question: "Reply all should be used:", options: ["Only when all need response", "Always", "Never", "For private matters"], correctAnswer: 0, explanation: "Reply all only when everyone needs the information." }
    ],
    5: [ // Unit V - Interview & GD Skills
      { id: 1, question: "GD evaluates:", options: ["Communication and teamwork", "Volume only", "Aggression", "Silence"], correctAnswer: 0, explanation: "GD assesses communication, leadership, teamwork skills." },
      { id: 2, question: "In GD, one should:", options: ["Listen and contribute constructively", "Dominate", "Stay silent", "Interrupt always"], correctAnswer: 0, explanation: "Balance speaking and listening in group discussions." },
      { id: 3, question: "Resume should be:", options: ["Concise and relevant", "Very long", "Irrelevant details", "Handwritten"], correctAnswer: 0, explanation: "Resume highlights relevant qualifications concisely." },
      { id: 4, question: "STAR method stands for:", options: ["Situation, Task, Action, Result", "Start, Try, Act, Repeat", "Simple, True, Active, Real", "None"], correctAnswer: 0, explanation: "STAR structures behavioral interview answers." },
      { id: 5, question: "Interview dress code should be:", options: ["Professional and appropriate", "Casual always", "No consideration", "Fashionable only"], correctAnswer: 0, explanation: "Dress professionally for the industry/role." },
      { id: 6, question: "SWOT analysis covers:", options: ["Strengths, Weaknesses, Opportunities, Threats", "Only strengths", "Only weaknesses", "Nothing"], correctAnswer: 0, explanation: "SWOT is comprehensive self/situational analysis." },
      { id: 7, question: "Common interview question 'Tell me about yourself':", options: ["Wants professional summary", "Life story", "Family details", "Hobbies only"], correctAnswer: 0, explanation: "Give brief professional background relevant to role." },
      { id: 8, question: "Body language in interview should show:", options: ["Confidence and interest", "Nervousness", "Disinterest", "Aggression"], correctAnswer: 0, explanation: "Positive body language reinforces verbal responses." },
      { id: 9, question: "Follow-up after interview:", options: ["Thank-you email is appropriate", "No contact needed", "Call repeatedly", "Visit office"], correctAnswer: 0, explanation: "Professional thank-you email shows interest." },
      { id: 10, question: "Answering 'weaknesses' question:", options: ["Mention improvement area with steps taken", "Say no weakness", "List many weaknesses", "Criticize others"], correctAnswer: 0, explanation: "Show self-awareness and improvement efforts." }
    ]
  },

  // Cybersecurity
  "cybersecurity": {
    1: [ // Unit I - Introduction to Cybersecurity
      { id: 1, question: "CIA stands for:", options: ["Confidentiality, Integrity, Availability", "Central Intelligence Agency", "Computer Information Access", "None"], correctAnswer: 0, explanation: "CIA triad is core of information security." },
      { id: 2, question: "Confidentiality ensures:", options: ["Data accessible only to authorized", "Data always available", "Data unchanged", "Fast access"], correctAnswer: 0, explanation: "Confidentiality protects data from unauthorized access." },
      { id: 3, question: "Integrity ensures:", options: ["Data not modified unauthorized", "Data available", "Data secret", "Fast processing"], correctAnswer: 0, explanation: "Integrity ensures data remains accurate and unaltered." },
      { id: 4, question: "Availability ensures:", options: ["Systems accessible when needed", "Data secret", "Data unchanged", "No access"], correctAnswer: 0, explanation: "Availability ensures systems are accessible to authorized users." },
      { id: 5, question: "Threat is:", options: ["Potential cause of incident", "Actual attack", "Weakness", "Security control"], correctAnswer: 0, explanation: "Threat: potential action that could cause harm." },
      { id: 6, question: "Vulnerability is:", options: ["Weakness that can be exploited", "Attack", "Threat", "Security measure"], correctAnswer: 0, explanation: "Vulnerability: weakness in system that can be exploited." },
      { id: 7, question: "Risk is:", options: ["Probability of threat exploiting vulnerability", "Certainty of attack", "Vulnerability", "Threat"], correctAnswer: 0, explanation: "Risk = Threat × Vulnerability × Impact." },
      { id: 8, question: "Malware includes:", options: ["Viruses, worms, trojans", "Antivirus", "Firewall", "Encryption"], correctAnswer: 0, explanation: "Malware: malicious software including various types." },
      { id: 9, question: "Phishing attempts to:", options: ["Trick users to reveal sensitive info", "Encrypt files", "Block access", "Delete files"], correctAnswer: 0, explanation: "Phishing: fraudulent attempt to obtain sensitive information." },
      { id: 10, question: "Social engineering exploits:", options: ["Human psychology", "Software bugs", "Network vulnerabilities", "Hardware"], correctAnswer: 0, explanation: "Social engineering manipulates people, not technology." }
    ],
    2: [ // Unit II - Cryptography
      { id: 1, question: "Symmetric encryption uses:", options: ["Same key for encryption/decryption", "Different keys", "No key", "Public key"], correctAnswer: 0, explanation: "Symmetric: single shared secret key." },
      { id: 2, question: "Asymmetric encryption uses:", options: ["Public and private key pair", "Same key", "No key", "One key only"], correctAnswer: 0, explanation: "Asymmetric: public key encrypts, private key decrypts." },
      { id: 3, question: "DES key length is:", options: ["56 bits (64 with parity)", "128 bits", "256 bits", "1024 bits"], correctAnswer: 0, explanation: "DES uses 56-bit key (considered weak now)." },
      { id: 4, question: "AES key lengths include:", options: ["128, 192, 256 bits", "56 bits only", "64 bits only", "1024 bits"], correctAnswer: 0, explanation: "AES supports 128, 192, or 256-bit keys." },
      { id: 5, question: "RSA is based on:", options: ["Factoring large primes", "Discrete logarithm", "Hash functions", "Symmetric keys"], correctAnswer: 0, explanation: "RSA security relies on difficulty of factoring large numbers." },
      { id: 6, question: "Hash function properties include:", options: ["One-way, collision-resistant", "Reversible", "Same output always", "Variable length output"], correctAnswer: 0, explanation: "Hash: one-way, fixed output, collision-resistant." },
      { id: 7, question: "MD5 produces hash of:", options: ["128 bits", "256 bits", "512 bits", "64 bits"], correctAnswer: 0, explanation: "MD5 produces 128-bit hash (considered weak now)." },
      { id: 8, question: "SHA-256 produces hash of:", options: ["256 bits", "128 bits", "512 bits", "1024 bits"], correctAnswer: 0, explanation: "SHA-256 produces 256-bit hash." },
      { id: 9, question: "Digital signature provides:", options: ["Authentication and non-repudiation", "Encryption only", "Speed", "Nothing"], correctAnswer: 0, explanation: "Digital signatures verify sender and prevent denial." },
      { id: 10, question: "PKI stands for:", options: ["Public Key Infrastructure", "Private Key Infrastructure", "Personal Key Identity", "None"], correctAnswer: 0, explanation: "PKI manages digital certificates and public keys." }
    ],
    3: [ // Unit III - Network Security
      { id: 1, question: "Firewall:", options: ["Monitors and controls network traffic", "Creates malware", "Slows network", "Encrypts data"], correctAnswer: 0, explanation: "Firewall filters traffic based on security rules." },
      { id: 2, question: "Packet filtering firewall works at:", options: ["Network layer", "Application layer", "Session layer", "Physical layer"], correctAnswer: 0, explanation: "Packet filtering examines IP headers at layer 3." },
      { id: 3, question: "IDS stands for:", options: ["Intrusion Detection System", "Internet Data Service", "Internal Data Security", "None"], correctAnswer: 0, explanation: "IDS monitors network for malicious activity." },
      { id: 4, question: "IPS differs from IDS by:", options: ["Actively blocking threats", "Only detecting", "Being slower", "Using less resources"], correctAnswer: 0, explanation: "IPS detects AND prevents/blocks attacks." },
      { id: 5, question: "VPN provides:", options: ["Secure tunnel over public network", "Faster internet", "No security", "Direct connection"], correctAnswer: 0, explanation: "VPN creates encrypted tunnel for secure communication." },
      { id: 6, question: "SSL/TLS provides:", options: ["Transport layer security", "Physical security", "No security", "Application security only"], correctAnswer: 0, explanation: "SSL/TLS secures data in transit at transport layer." },
      { id: 7, question: "DMZ is:", options: ["Network zone between internal and external", "Internal network", "External network only", "No network"], correctAnswer: 0, explanation: "DMZ hosts public-facing services, separate from internal network." },
      { id: 8, question: "IPSec operates at:", options: ["Network layer", "Application layer", "Transport layer", "Data link layer"], correctAnswer: 0, explanation: "IPSec provides security at IP layer." },
      { id: 9, question: "Stateful firewall:", options: ["Tracks connection state", "Is stateless", "Cannot filter", "Only logs"], correctAnswer: 0, explanation: "Stateful firewall maintains connection state for better filtering." },
      { id: 10, question: "HTTPS uses:", options: ["HTTP over SSL/TLS", "HTTP over TCP", "HTTP only", "FTP"], correctAnswer: 0, explanation: "HTTPS is HTTP secured with SSL/TLS encryption." }
    ],
    4: [ // Unit IV - Web Security & Attacks
      { id: 1, question: "SQL injection attacks:", options: ["Database through input fields", "Network", "Hardware", "Physical security"], correctAnswer: 0, explanation: "SQL injection inserts malicious SQL via user input." },
      { id: 2, question: "XSS stands for:", options: ["Cross-Site Scripting", "Extra Secure System", "Extended Security Service", "None"], correctAnswer: 0, explanation: "XSS injects malicious scripts into web pages." },
      { id: 3, question: "CSRF stands for:", options: ["Cross-Site Request Forgery", "Central Security Request Form", "Cyber Security Request Function", "None"], correctAnswer: 0, explanation: "CSRF tricks users into unintended actions." },
      { id: 4, question: "Stored XSS:", options: ["Script saved on server", "Script in URL", "No script", "Script deleted"], correctAnswer: 0, explanation: "Stored XSS: malicious script stored in database." },
      { id: 5, question: "Reflected XSS:", options: ["Script in URL/request", "Script on server", "No script", "Script in cookie"], correctAnswer: 0, explanation: "Reflected XSS: script in request, reflected in response." },
      { id: 6, question: "OWASP Top 10 lists:", options: ["Critical web app security risks", "Best practices only", "Hardware issues", "Network protocols"], correctAnswer: 0, explanation: "OWASP Top 10: most critical web application security risks." },
      { id: 7, question: "Parameterized queries prevent:", options: ["SQL injection", "XSS", "CSRF", "DoS"], correctAnswer: 0, explanation: "Parameterized queries separate code from data." },
      { id: 8, question: "Input validation:", options: ["Checks user input for malicious content", "Accepts all input", "Rejects all input", "Ignores input"], correctAnswer: 0, explanation: "Input validation is first line of defense against injection." },
      { id: 9, question: "Session hijacking steals:", options: ["User session token/cookie", "Password directly", "Hardware", "Network cable"], correctAnswer: 0, explanation: "Session hijacking takes over user's authenticated session." },
      { id: 10, question: "HTTPS helps prevent:", options: ["Man-in-the-middle attacks", "SQL injection", "XSS", "Weak passwords"], correctAnswer: 0, explanation: "HTTPS encrypts traffic, preventing interception." }
    ],
    5: [ // Unit V - Security Policies & Ethics
      { id: 1, question: "IT Act 2000 governs:", options: ["Electronic transactions and cybercrime in India", "Only banking", "Only government", "Nothing"], correctAnswer: 0, explanation: "IT Act 2000 is India's primary law for cybercrime and e-commerce." },
      { id: 2, question: "Ethical hacking is:", options: ["Authorized security testing", "Illegal hacking", "Malicious attack", "Crime"], correctAnswer: 0, explanation: "Ethical hackers test security with permission." },
      { id: 3, question: "Digital forensics:", options: ["Investigates digital evidence", "Creates malware", "Hacks systems", "Destroys evidence"], correctAnswer: 0, explanation: "Digital forensics recovers and analyzes electronic evidence." },
      { id: 4, question: "Incident response phases:", options: ["Prepare, identify, contain, eradicate, recover, lessons", "Only detect", "Only recover", "No phases"], correctAnswer: 0, explanation: "IR follows structured approach to handle security incidents." },
      { id: 5, question: "Security policy defines:", options: ["Rules for protecting information", "Nothing", "Only passwords", "Physical security only"], correctAnswer: 0, explanation: "Security policy sets rules and responsibilities for security." },
      { id: 6, question: "Compliance means:", options: ["Following laws and standards", "Breaking rules", "Ignoring regulations", "No auditing"], correctAnswer: 0, explanation: "Compliance ensures adherence to applicable regulations." },
      { id: 7, question: "Security audit:", options: ["Evaluates security controls", "Installs malware", "Creates vulnerabilities", "Ignores issues"], correctAnswer: 0, explanation: "Security audit assesses effectiveness of controls." },
      { id: 8, question: "Cybercrime includes:", options: ["Hacking, fraud, identity theft", "Legal activities only", "Physical crimes only", "Nothing online"], correctAnswer: 0, explanation: "Cybercrime: illegal activities using computers/networks." },
      { id: 9, question: "Non-repudiation means:", options: ["Cannot deny action", "Can deny action", "Anonymous", "Untraceable"], correctAnswer: 0, explanation: "Non-repudiation: party cannot deny having performed action." },
      { id: 10, question: "Privacy protection includes:", options: ["Data protection and consent", "Sharing all data", "No encryption", "Public access"], correctAnswer: 0, explanation: "Privacy protection limits unauthorized use of personal data." }
    ]
  },

  // Mathematics-IV
  "math-4": {
    1: [ // Unit I - Numerical Differentiation & Integration
      { id: 1, question: "Trapezoidal rule approximates area using:", options: ["Trapezoids", "Rectangles", "Circles", "Triangles"], correctAnswer: 0, explanation: "Trapezoidal rule uses trapezoids to approximate area under curve." },
      { id: 2, question: "Simpson's 1/3 rule uses:", options: ["Parabolas (2nd degree)", "Straight lines", "Cubic curves", "No curves"], correctAnswer: 0, explanation: "Simpson's 1/3 fits parabolas through three points." },
      { id: 3, question: "Simpson's 1/3 requires n to be:", options: ["Even", "Odd", "Any number", "Prime"], correctAnswer: 0, explanation: "Simpson's 1/3 requires even number of intervals." },
      { id: 4, question: "Simpson's 3/8 uses:", options: ["Cubic polynomials", "Quadratic", "Linear", "Constant"], correctAnswer: 0, explanation: "Simpson's 3/8 uses cubic polynomials through 4 points." },
      { id: 5, question: "Forward difference operator Δf(x) =:", options: ["f(x+h) - f(x)", "f(x) - f(x-h)", "f(x+h) + f(x)", "f(x)/h"], correctAnswer: 0, explanation: "Forward difference: Δf(x) = f(x+h) - f(x)." },
      { id: 6, question: "Backward difference operator ∇f(x) =:", options: ["f(x) - f(x-h)", "f(x+h) - f(x)", "f(x+h) + f(x)", "f(x)/h"], correctAnswer: 0, explanation: "Backward difference: ∇f(x) = f(x) - f(x-h)." },
      { id: 7, question: "Newton's forward formula is used when:", options: ["x is near beginning of table", "x is near end", "x is in middle", "Any position"], correctAnswer: 0, explanation: "Forward formula: for x near start of data." },
      { id: 8, question: "Newton's backward formula is used when:", options: ["x is near end of table", "x is near beginning", "x is in middle", "Any position"], correctAnswer: 0, explanation: "Backward formula: for x near end of data." },
      { id: 9, question: "Numerical differentiation finds:", options: ["Derivative from discrete data", "Integral", "Roots", "Maximum"], correctAnswer: 0, explanation: "Numerical differentiation approximates derivatives from data points." },
      { id: 10, question: "Higher accuracy in integration requires:", options: ["More intervals", "Fewer intervals", "No intervals", "Infinite intervals"], correctAnswer: 0, explanation: "More intervals (smaller h) gives more accurate integration." }
    ],
    2: [ // Unit II - Solution of ODEs
      { id: 1, question: "Euler's method is:", options: ["First-order accurate", "Second-order", "Fourth-order", "Exact"], correctAnswer: 0, explanation: "Euler's method has O(h) local error." },
      { id: 2, question: "Runge-Kutta 4th order uses:", options: ["4 slope evaluations per step", "1 evaluation", "2 evaluations", "8 evaluations"], correctAnswer: 0, explanation: "RK4 computes k₁, k₂, k₃, k₄ per step." },
      { id: 3, question: "Modified Euler's method is:", options: ["Second-order accurate", "First-order", "Fourth-order", "Exact"], correctAnswer: 0, explanation: "Modified Euler (Heun's method) has O(h²) accuracy." },
      { id: 4, question: "Predictor-corrector methods:", options: ["Predict then refine", "Only predict", "Only correct", "Neither"], correctAnswer: 0, explanation: "Predictor-corrector: predict with one formula, correct with another." },
      { id: 5, question: "Initial value problem specifies:", options: ["Condition at one point", "Conditions at two points", "No condition", "Random condition"], correctAnswer: 0, explanation: "IVP: y(x₀) = y₀ at initial point." },
      { id: 6, question: "Smaller step size h gives:", options: ["More accuracy but more computation", "Less accuracy", "Same accuracy", "No change"], correctAnswer: 0, explanation: "Smaller h: more accurate but requires more steps." },
      { id: 7, question: "Milne's method is:", options: ["Predictor-corrector multistep", "Single-step", "Direct", "Analytical"], correctAnswer: 0, explanation: "Milne's is a multistep predictor-corrector method." },
      { id: 8, question: "RK4 is preferred because:", options: ["Good accuracy without high order derivative", "Simple", "Fast", "Exact"], correctAnswer: 0, explanation: "RK4: 4th order accuracy using only first derivatives." },
      { id: 9, question: "Taylor series method requires:", options: ["Higher derivatives of f", "Only f", "No derivatives", "Integration"], correctAnswer: 0, explanation: "Taylor method needs explicit higher derivatives of f." },
      { id: 10, question: "Stability in numerical methods means:", options: ["Errors don't grow unboundedly", "Exact solution", "No errors", "Fast convergence"], correctAnswer: 0, explanation: "Stable method: errors remain bounded during computation." }
    ],
    3: [ // Unit III - Statistical Techniques
      { id: 1, question: "Mean is:", options: ["Sum divided by count", "Middle value", "Most frequent", "Range"], correctAnswer: 0, explanation: "Mean = Σxᵢ/n." },
      { id: 2, question: "Median is:", options: ["Middle value when sorted", "Average", "Most common", "Range"], correctAnswer: 0, explanation: "Median: middle value in sorted data." },
      { id: 3, question: "Mode is:", options: ["Most frequent value", "Average", "Middle value", "Range"], correctAnswer: 0, explanation: "Mode: value that appears most often." },
      { id: 4, question: "Standard deviation measures:", options: ["Dispersion from mean", "Central tendency", "Correlation", "Regression"], correctAnswer: 0, explanation: "SD measures spread of data around mean." },
      { id: 5, question: "Variance is:", options: ["Square of standard deviation", "Mean", "Median", "Mode"], correctAnswer: 0, explanation: "Variance = σ², SD = √Variance." },
      { id: 6, question: "Chi-square test is used for:", options: ["Testing independence/goodness of fit", "Mean comparison", "Regression", "Correlation"], correctAnswer: 0, explanation: "Chi-square: tests categorical data relationships." },
      { id: 7, question: "t-test is used when:", options: ["Sample size is small", "Population SD known", "Large samples only", "No samples"], correctAnswer: 0, explanation: "t-test: for small samples when σ unknown." },
      { id: 8, question: "z-test requires:", options: ["Known population standard deviation", "Unknown SD", "Small sample", "No variance"], correctAnswer: 0, explanation: "z-test: when σ is known (or large sample)." },
      { id: 9, question: "Null hypothesis (H₀) assumes:", options: ["No significant difference", "Significant difference", "Error", "Nothing"], correctAnswer: 0, explanation: "H₀ assumes no effect or no difference." },
      { id: 10, question: "p-value < 0.05 means:", options: ["Reject null hypothesis", "Accept null", "No conclusion", "Error in test"], correctAnswer: 0, explanation: "p < 0.05 typically leads to rejecting H₀." }
    ],
    4: [ // Unit IV - Probability Distributions
      { id: 1, question: "Binomial distribution models:", options: ["Fixed trials with two outcomes", "Continuous data", "No trials", "Infinite outcomes"], correctAnswer: 0, explanation: "Binomial: n independent trials, success/failure." },
      { id: 2, question: "Poisson distribution models:", options: ["Rare events in fixed interval", "Continuous data", "Normal data", "Uniform data"], correctAnswer: 0, explanation: "Poisson: rare events per unit time/space." },
      { id: 3, question: "Normal distribution is:", options: ["Symmetric bell curve", "Skewed right", "Skewed left", "Uniform"], correctAnswer: 0, explanation: "Normal: symmetric about mean, bell-shaped." },
      { id: 4, question: "For binomial, mean =:", options: ["np", "npq", "n/p", "p/n"], correctAnswer: 0, explanation: "Binomial mean μ = np." },
      { id: 5, question: "For Poisson, mean = variance =:", options: ["λ", "λ²", "1/λ", "nλ"], correctAnswer: 0, explanation: "Poisson: mean = variance = λ." },
      { id: 6, question: "Standard normal has mean:", options: ["0", "1", "-1", "Variable"], correctAnswer: 0, explanation: "Standard normal: μ = 0, σ = 1." },
      { id: 7, question: "68% of normal data lies within:", options: ["1 standard deviation", "2 SD", "3 SD", "4 SD"], correctAnswer: 0, explanation: "68-95-99.7 rule: ~68% within ±1σ." },
      { id: 8, question: "Exponential distribution is for:", options: ["Time between events", "Discrete events", "Count data", "Normal data"], correctAnswer: 0, explanation: "Exponential: time between Poisson events." },
      { id: 9, question: "Probability density function (PDF) gives:", options: ["Probability per unit interval", "Exact probability", "Cumulative probability", "Nothing"], correctAnswer: 0, explanation: "PDF gives probability density, integrate for probability." },
      { id: 10, question: "CDF gives:", options: ["P(X ≤ x)", "P(X = x)", "P(X > x)", "PDF value"], correctAnswer: 0, explanation: "CDF: cumulative distribution function, P(X ≤ x)." }
    ],
    5: [ // Unit V - Correlation & Regression
      { id: 1, question: "Correlation coefficient r measures:", options: ["Strength of linear relationship", "Cause and effect", "Non-linear relationship", "Nothing"], correctAnswer: 0, explanation: "r measures direction and strength of linear relationship." },
      { id: 2, question: "r = 1 indicates:", options: ["Perfect positive correlation", "No correlation", "Negative correlation", "No relationship"], correctAnswer: 0, explanation: "r = 1: perfect positive linear relationship." },
      { id: 3, question: "r = 0 indicates:", options: ["No linear correlation", "Perfect correlation", "Negative correlation", "Strong relationship"], correctAnswer: 0, explanation: "r = 0: no linear relationship (may have non-linear)." },
      { id: 4, question: "Regression line minimizes:", options: ["Sum of squared errors", "Sum of errors", "Maximum error", "No error"], correctAnswer: 0, explanation: "Least squares regression minimizes Σ(yᵢ - ŷᵢ)²." },
      { id: 5, question: "In y = a + bx, b is:", options: ["Slope", "Intercept", "Correlation", "Error"], correctAnswer: 0, explanation: "b is slope (change in y per unit x)." },
      { id: 6, question: "In y = a + bx, a is:", options: ["y-intercept", "Slope", "Correlation", "Error"], correctAnswer: 0, explanation: "a is y-intercept (value of y when x = 0)." },
      { id: 7, question: "There are how many regression lines?", options: ["Two (y on x, x on y)", "One", "Three", "None"], correctAnswer: 0, explanation: "Two regression lines: y on x, x on y (unless r = ±1)." },
      { id: 8, question: "Rank correlation is used for:", options: ["Ordinal/ranked data", "Only numerical", "Only categorical", "No data"], correctAnswer: 0, explanation: "Spearman's rank correlation for ordinal data." },
      { id: 9, question: "Multiple regression uses:", options: ["Multiple independent variables", "One variable", "No variables", "Only dependent"], correctAnswer: 0, explanation: "Multiple regression: y depends on several x variables." },
      { id: 10, question: "Coefficient of determination R² indicates:", options: ["Proportion of variance explained", "Correlation", "Slope", "Intercept"], correctAnswer: 0, explanation: "R²: fraction of y variance explained by regression." }
    ]
  }
};
