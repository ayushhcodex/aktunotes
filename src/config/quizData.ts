/**
 * AKTU Quiz Data Configuration
 * 
 * HOW TO ADD/EDIT QUESTIONS:
 * 1. Find the subject and unit you want to update
 * 2. Each question has: question, options (4), correctAnswer (0-3), explanation
 * 3. correctAnswer is the index of the correct option (0 = first, 1 = second, etc.)
 * 
 * Structure: quizData[subjectId][unitId] = Question[]
 */

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct option (0-3)
  explanation: string;
}

export interface QuizData {
  [subjectId: string]: {
    [unitId: number]: QuizQuestion[];
  };
}

export const quizData: QuizData = {
  // ==================== 3RD SEMESTER ====================
  
  // COA - Computer Organization & Architecture
  "coa": {
    1: [ // Unit I - Basic Computer Organization
      { id: 1, question: "What is the basic function of ALU?", options: ["Store data", "Perform arithmetic and logical operations", "Control program flow", "Manage memory"], correctAnswer: 1, explanation: "ALU (Arithmetic Logic Unit) performs all arithmetic and logical operations in a computer." },
      { id: 2, question: "Which register holds the address of the next instruction?", options: ["MAR", "MBR", "PC", "IR"], correctAnswer: 2, explanation: "Program Counter (PC) holds the address of the next instruction to be executed." },
      { id: 3, question: "What does MAR stand for?", options: ["Memory Access Register", "Memory Address Register", "Main Address Register", "Memory Allocation Register"], correctAnswer: 1, explanation: "MAR stands for Memory Address Register, which holds the address of memory location being accessed." },
      { id: 4, question: "The control unit is responsible for:", options: ["Performing calculations", "Storing data permanently", "Directing operations of the processor", "Managing input devices only"], correctAnswer: 2, explanation: "The control unit directs and coordinates all operations of the processor." },
      { id: 5, question: "Which bus carries data between components?", options: ["Address bus", "Data bus", "Control bus", "System bus"], correctAnswer: 1, explanation: "Data bus carries actual data between CPU, memory, and I/O devices." },
      { id: 6, question: "What is stored in the Instruction Register (IR)?", options: ["Next instruction address", "Current instruction being executed", "Memory address", "Calculation result"], correctAnswer: 1, explanation: "IR holds the current instruction being decoded and executed." },
      { id: 7, question: "Von Neumann architecture stores:", options: ["Instructions and data separately", "Instructions and data in same memory", "Only instructions", "Only data"], correctAnswer: 1, explanation: "Von Neumann architecture uses a single memory for both instructions and data." },
      { id: 8, question: "What is the function of accumulator?", options: ["Store program", "Store intermediate results", "Count instructions", "Address memory"], correctAnswer: 1, explanation: "Accumulator stores intermediate arithmetic and logic results." },
      { id: 9, question: "How many address lines for 64KB memory?", options: ["8", "16", "32", "64"], correctAnswer: 1, explanation: "64KB = 2^16, so 16 address lines are needed." },
      { id: 10, question: "MBR is also known as:", options: ["Memory Buffer Register", "Memory Data Register", "Both A and B", "None"], correctAnswer: 2, explanation: "MBR (Memory Buffer Register) is also called Memory Data Register (MDR)." }
    ],
    2: [ // Unit II - CPU
      { id: 1, question: "What is the purpose of instruction fetch?", options: ["Execute instruction", "Decode instruction", "Get instruction from memory", "Store result"], correctAnswer: 2, explanation: "Instruction fetch retrieves the next instruction from memory to the CPU." },
      { id: 2, question: "RISC stands for:", options: ["Reduced Instruction Set Computer", "Revised Instruction Set Computer", "Rapid Instruction Set Computer", "Random Instruction Set Computer"], correctAnswer: 0, explanation: "RISC means Reduced Instruction Set Computer with simpler instructions." },
      { id: 3, question: "Which addressing mode uses register content as operand?", options: ["Immediate", "Direct", "Register", "Indirect"], correctAnswer: 2, explanation: "Register addressing mode uses the content of a register as the operand." },
      { id: 4, question: "Microprogramming is used in:", options: ["ALU", "Control Unit", "Memory", "I/O"], correctAnswer: 1, explanation: "Microprogramming is a technique used to implement the control unit." },
      { id: 5, question: "What is pipelining?", options: ["Sequential execution", "Overlapped execution of instructions", "Parallel memory access", "Cache management"], correctAnswer: 1, explanation: "Pipelining overlaps the execution of multiple instructions for better performance." },
      { id: 6, question: "CISC has:", options: ["Simple instructions", "Complex instructions", "No instructions", "Fixed instructions only"], correctAnswer: 1, explanation: "CISC (Complex Instruction Set Computer) has complex, multi-step instructions." },
      { id: 7, question: "Effective address is calculated in which stage?", options: ["Fetch", "Decode", "Execute", "Store"], correctAnswer: 1, explanation: "Effective address calculation happens during the decode stage." },
      { id: 8, question: "What causes pipeline hazard?", options: ["Fast execution", "Dependencies between instructions", "Large memory", "Multiple ALUs"], correctAnswer: 1, explanation: "Pipeline hazards occur due to dependencies between instructions." },
      { id: 9, question: "Hardwired control unit is:", options: ["Slower but flexible", "Faster but inflexible", "Slow and inflexible", "Always better"], correctAnswer: 1, explanation: "Hardwired control is faster but difficult to modify." },
      { id: 10, question: "Stack-based addressing uses:", options: ["Queue", "LIFO structure", "FIFO structure", "Array"], correctAnswer: 1, explanation: "Stack uses Last-In-First-Out (LIFO) structure for addressing." }
    ],
    3: [ // Unit III - Memory Organization
      { id: 1, question: "Cache memory is placed between:", options: ["CPU and secondary storage", "CPU and main memory", "Main memory and disk", "Two CPUs"], correctAnswer: 1, explanation: "Cache sits between CPU and main memory for faster access." },
      { id: 2, question: "Which memory has the fastest access time?", options: ["Main memory", "Cache", "Register", "Hard disk"], correctAnswer: 2, explanation: "Registers are the fastest memory, located inside the CPU." },
      { id: 3, question: "What is a cache hit?", options: ["Data not in cache", "Data found in cache", "Cache overflow", "Cache error"], correctAnswer: 1, explanation: "Cache hit occurs when requested data is found in the cache." },
      { id: 4, question: "Associative memory is also called:", options: ["RAM", "ROM", "CAM", "DRAM"], correctAnswer: 2, explanation: "Associative memory is also called Content Addressable Memory (CAM)." },
      { id: 5, question: "Virtual memory uses:", options: ["Only RAM", "Only ROM", "RAM and disk", "Cache only"], correctAnswer: 2, explanation: "Virtual memory combines RAM and disk space to create larger address space." },
      { id: 6, question: "Page fault occurs when:", options: ["Page is in memory", "Page is not in memory", "Page is too large", "Memory is full"], correctAnswer: 1, explanation: "Page fault happens when a referenced page is not in main memory." },
      { id: 7, question: "LRU replacement policy stands for:", options: ["Last Recently Used", "Least Recently Used", "Longest Running Unit", "Latest Run Update"], correctAnswer: 1, explanation: "LRU means Least Recently Used - replaces the page not used for longest time." },
      { id: 8, question: "Direct mapping in cache uses:", options: ["Any cache location", "One specific location", "Random location", "No location"], correctAnswer: 1, explanation: "Direct mapping assigns each memory block to one specific cache location." },
      { id: 9, question: "What is memory hierarchy based on?", options: ["Size only", "Speed only", "Cost, speed, and size", "Color"], correctAnswer: 2, explanation: "Memory hierarchy is organized by cost, speed, and size trade-offs." },
      { id: 10, question: "TLB stands for:", options: ["Translation Lookaside Buffer", "Table Lookup Buffer", "Transfer Load Buffer", "Total Logical Buffer"], correctAnswer: 0, explanation: "TLB is Translation Lookaside Buffer, a cache for page table entries." }
    ],
    4: [ // Unit IV - I/O Organization
      { id: 1, question: "DMA stands for:", options: ["Direct Memory Access", "Dual Memory Access", "Data Memory Access", "Digital Memory Access"], correctAnswer: 0, explanation: "DMA allows devices to transfer data directly to memory without CPU." },
      { id: 2, question: "Programmed I/O requires:", options: ["No CPU intervention", "Constant CPU monitoring", "DMA controller", "Interrupt handling"], correctAnswer: 1, explanation: "Programmed I/O requires CPU to constantly check I/O device status." },
      { id: 3, question: "Interrupt-driven I/O:", options: ["Wastes CPU time", "Frees CPU until device ready", "Uses DMA", "Is slowest method"], correctAnswer: 1, explanation: "Interrupt-driven I/O allows CPU to do other work until device signals." },
      { id: 4, question: "Which is fastest I/O method?", options: ["Programmed I/O", "Interrupt I/O", "DMA", "Polling"], correctAnswer: 2, explanation: "DMA is fastest as it transfers data without CPU involvement." },
      { id: 5, question: "I/O interface connects:", options: ["CPU to CPU", "I/O devices to system bus", "Memory to disk", "Two memories"], correctAnswer: 1, explanation: "I/O interface connects peripheral devices to the system bus." },
      { id: 6, question: "Handshaking is used for:", options: ["Memory management", "Synchronization between devices", "Cache control", "Pipelining"], correctAnswer: 1, explanation: "Handshaking synchronizes data transfer between devices." },
      { id: 7, question: "Isolated I/O uses:", options: ["Same address space as memory", "Separate address space", "No address", "Virtual addresses"], correctAnswer: 1, explanation: "Isolated I/O has separate address space for I/O devices." },
      { id: 8, question: "Memory-mapped I/O:", options: ["Separates I/O from memory", "Treats I/O as memory locations", "Uses DMA only", "Is slower than isolated I/O"], correctAnswer: 1, explanation: "Memory-mapped I/O treats I/O device registers as memory addresses." },
      { id: 9, question: "Bus arbitration decides:", options: ["Data to transfer", "Which device controls bus", "Memory allocation", "Cache size"], correctAnswer: 1, explanation: "Bus arbitration determines which device gets control of the bus." },
      { id: 10, question: "Daisy chaining is used for:", options: ["Memory allocation", "Interrupt priority", "Cache management", "Pipelining"], correctAnswer: 1, explanation: "Daisy chaining establishes priority among interrupt requests." }
    ],
    5: [ // Unit V - Parallel Processing
      { id: 1, question: "Flynn's classification includes:", options: ["SISD, SIMD, MISD, MIMD", "Only SIMD", "Only MIMD", "RISC, CISC"], correctAnswer: 0, explanation: "Flynn classified computers into SISD, SIMD, MISD, and MIMD based on instruction and data streams." },
      { id: 2, question: "SIMD stands for:", options: ["Single Instruction Single Data", "Single Instruction Multiple Data", "Simple Instruction Multiple Data", "Single Input Multiple Data"], correctAnswer: 1, explanation: "SIMD means Single Instruction Multiple Data - one instruction operates on multiple data." },
      { id: 3, question: "Multiprocessor systems have:", options: ["One CPU", "Multiple CPUs sharing memory", "No memory", "Only cache"], correctAnswer: 1, explanation: "Multiprocessor systems have multiple CPUs that share common memory." },
      { id: 4, question: "Array processors are:", options: ["SISD", "SIMD", "MISD", "Sequential"], correctAnswer: 1, explanation: "Array processors are SIMD - they apply same operation to array of data." },
      { id: 5, question: "Speedup in parallel processing is:", options: ["Always linear", "Limited by sequential portion", "Unlimited", "Constant"], correctAnswer: 1, explanation: "Amdahl's law states speedup is limited by the sequential portion of program." },
      { id: 6, question: "Vector processing operates on:", options: ["Single data", "Arrays of data", "Instructions only", "Memory only"], correctAnswer: 1, explanation: "Vector processors operate on entire arrays of data in single instruction." },
      { id: 7, question: "Pipeline processor uses:", options: ["Sequential execution", "Overlapped execution", "No execution", "Random execution"], correctAnswer: 1, explanation: "Pipeline processors overlap execution of multiple instructions." },
      { id: 8, question: "Shared memory architecture:", options: ["Is distributed", "Uses common memory space", "Has no memory", "Is always slow"], correctAnswer: 1, explanation: "Shared memory architecture allows all processors to access common memory." },
      { id: 9, question: "Message passing is used in:", options: ["Shared memory systems", "Distributed memory systems", "Cache only", "Registers"], correctAnswer: 1, explanation: "Message passing is used when processors have distributed (separate) memory." },
      { id: 10, question: "Cache coherence ensures:", options: ["Fast cache", "Consistent data across caches", "Large cache", "No cache"], correctAnswer: 1, explanation: "Cache coherence maintains data consistency when multiple caches exist." }
    ]
  },

  // DSTL - Discrete Structures
  "dstl": {
    1: [ // Unit I - Set Theory
      { id: 1, question: "A set with no elements is called:", options: ["Universal set", "Empty set", "Infinite set", "Power set"], correctAnswer: 1, explanation: "Empty set (∅) contains no elements." },
      { id: 2, question: "Power set of {1,2} has how many elements?", options: ["2", "3", "4", "8"], correctAnswer: 2, explanation: "Power set has 2^n elements. For 2 elements: 2^2 = 4." },
      { id: 3, question: "A ∪ A equals:", options: ["Empty set", "A", "Universal set", "A'"], correctAnswer: 1, explanation: "Union of a set with itself gives the same set." },
      { id: 4, question: "A ∩ A' equals:", options: ["A", "A'", "U", "∅"], correctAnswer: 3, explanation: "A set and its complement have no common elements." },
      { id: 5, question: "De Morgan's law states A ∪ B complement equals:", options: ["A' ∪ B'", "A' ∩ B'", "A ∩ B", "A ∪ B"], correctAnswer: 1, explanation: "De Morgan's: (A ∪ B)' = A' ∩ B'" },
      { id: 6, question: "Relation R is reflexive if:", options: ["aRa for all a", "aRb implies bRa", "aRb and bRc implies aRc", "None"], correctAnswer: 0, explanation: "Reflexive: every element is related to itself." },
      { id: 7, question: "A relation that is reflexive, symmetric, and transitive is:", options: ["Partial order", "Equivalence relation", "Function", "Bijection"], correctAnswer: 1, explanation: "Equivalence relation satisfies all three properties." },
      { id: 8, question: "Cartesian product A × B where |A|=2, |B|=3 has:", options: ["5 elements", "6 elements", "8 elements", "9 elements"], correctAnswer: 1, explanation: "|A × B| = |A| × |B| = 2 × 3 = 6" },
      { id: 9, question: "Symmetric difference A Δ B equals:", options: ["A ∩ B", "(A - B) ∪ (B - A)", "A ∪ B", "A' ∩ B'"], correctAnswer: 1, explanation: "Symmetric difference contains elements in either set but not both." },
      { id: 10, question: "Partition of a set divides it into:", options: ["Overlapping subsets", "Non-overlapping exhaustive subsets", "Empty sets", "Infinite sets"], correctAnswer: 1, explanation: "Partition creates disjoint subsets that cover the entire set." }
    ],
    2: [ // Unit II - Functions
      { id: 1, question: "A function f: A → B is injective if:", options: ["Every element has image", "Different inputs give different outputs", "Every output has preimage", "None"], correctAnswer: 1, explanation: "Injective (one-to-one): f(a) = f(b) implies a = b." },
      { id: 2, question: "Surjective function ensures:", options: ["One-to-one mapping", "Every element in codomain has preimage", "Both A and B", "Neither"], correctAnswer: 1, explanation: "Surjective (onto): every element in codomain is mapped to." },
      { id: 3, question: "Bijective function is:", options: ["Only injective", "Only surjective", "Both injective and surjective", "Neither"], correctAnswer: 2, explanation: "Bijective functions are both one-to-one and onto." },
      { id: 4, question: "Recurrence relation T(n) = T(n-1) + 1, T(0) = 0 gives:", options: ["T(n) = n", "T(n) = 2n", "T(n) = n²", "T(n) = 2^n"], correctAnswer: 0, explanation: "This gives T(n) = n (linear growth)." },
      { id: 5, question: "Fibonacci sequence follows:", options: ["F(n) = F(n-1)", "F(n) = F(n-1) + F(n-2)", "F(n) = 2F(n-1)", "F(n) = n"], correctAnswer: 1, explanation: "Fibonacci: each term is sum of two preceding terms." },
      { id: 6, question: "Floor function ⌊3.7⌋ equals:", options: ["3", "4", "3.7", "0"], correctAnswer: 0, explanation: "Floor gives the largest integer less than or equal to the number." },
      { id: 7, question: "Ceiling function ⌈3.2⌉ equals:", options: ["3", "4", "3.2", "0"], correctAnswer: 1, explanation: "Ceiling gives the smallest integer greater than or equal to the number." },
      { id: 8, question: "Composition f ∘ g means:", options: ["f(g(x))", "g(f(x))", "f + g", "f × g"], correctAnswer: 0, explanation: "f ∘ g means apply g first, then f: f(g(x))." },
      { id: 9, question: "Inverse function exists only for:", options: ["Injective functions", "Surjective functions", "Bijective functions", "All functions"], correctAnswer: 2, explanation: "Only bijective functions have true inverses." },
      { id: 10, question: "Identity function maps:", options: ["Everything to 0", "Everything to 1", "Each element to itself", "Nothing"], correctAnswer: 2, explanation: "Identity function: f(x) = x for all x." }
    ],
    3: [ // Unit III - Propositional Logic
      { id: 1, question: "p ∧ q is true when:", options: ["p is true", "q is true", "Both p and q are true", "Either is true"], correctAnswer: 2, explanation: "AND (∧) is true only when both operands are true." },
      { id: 2, question: "p ∨ q is false when:", options: ["p is false", "q is false", "Both are false", "Either is false"], correctAnswer: 2, explanation: "OR (∨) is false only when both operands are false." },
      { id: 3, question: "Implication p → q is false only when:", options: ["p is true, q is true", "p is true, q is false", "p is false, q is true", "Both false"], correctAnswer: 1, explanation: "Implication is false only when premise is true and conclusion is false." },
      { id: 4, question: "Contrapositive of p → q is:", options: ["q → p", "¬p → ¬q", "¬q → ¬p", "p ∧ q"], correctAnswer: 2, explanation: "Contrapositive: ¬q → ¬p, logically equivalent to p → q." },
      { id: 5, question: "A tautology is:", options: ["Always false", "Always true", "Sometimes true", "Undefined"], correctAnswer: 1, explanation: "Tautology is a formula that is true for all truth value assignments." },
      { id: 6, question: "A contradiction is:", options: ["Always false", "Always true", "Sometimes true", "A tautology"], correctAnswer: 0, explanation: "Contradiction is always false regardless of truth values." },
      { id: 7, question: "p ↔ q means:", options: ["p or q", "p and q", "p if and only if q", "Not p"], correctAnswer: 2, explanation: "Biconditional: true when both have same truth value." },
      { id: 8, question: "¬(p ∧ q) is equivalent to:", options: ["¬p ∧ ¬q", "¬p ∨ ¬q", "p ∨ q", "p → q"], correctAnswer: 1, explanation: "De Morgan's law: ¬(p ∧ q) ≡ ¬p ∨ ¬q" },
      { id: 9, question: "Modus Ponens is:", options: ["p, p → q, therefore q", "q, p → q, therefore p", "p → q, q → r, therefore p → r", "None"], correctAnswer: 0, explanation: "Modus Ponens: if p is true and p implies q, then q is true." },
      { id: 10, question: "CNF stands for:", options: ["Common Normal Form", "Conjunctive Normal Form", "Complete Normal Form", "Conditional Normal Form"], correctAnswer: 1, explanation: "CNF is Conjunctive Normal Form - AND of ORs." }
    ],
    4: [ // Unit IV - Graph Theory
      { id: 1, question: "A graph with no edges is called:", options: ["Complete graph", "Null graph", "Connected graph", "Planar graph"], correctAnswer: 1, explanation: "Null graph has vertices but no edges." },
      { id: 2, question: "Degree of a vertex is:", options: ["Number of vertices", "Number of edges connected to it", "Number of graphs", "None"], correctAnswer: 1, explanation: "Degree is the count of edges incident to a vertex." },
      { id: 3, question: "Sum of degrees of all vertices equals:", options: ["Number of edges", "Twice the number of edges", "Number of vertices", "Zero"], correctAnswer: 1, explanation: "Handshaking lemma: sum of degrees = 2 × number of edges." },
      { id: 4, question: "A complete graph K4 has how many edges?", options: ["4", "6", "8", "12"], correctAnswer: 1, explanation: "Complete graph Kn has n(n-1)/2 edges. K4: 4×3/2 = 6" },
      { id: 5, question: "Euler path exists if graph has:", options: ["0 odd degree vertices", "Exactly 2 odd degree vertices", "All even or exactly 2 odd", "Any number"], correctAnswer: 2, explanation: "Euler path exists with 0 or 2 vertices of odd degree." },
      { id: 6, question: "Hamiltonian cycle visits:", options: ["Every edge once", "Every vertex once", "Some vertices", "No vertices"], correctAnswer: 1, explanation: "Hamiltonian cycle visits each vertex exactly once and returns to start." },
      { id: 7, question: "A tree with n vertices has:", options: ["n edges", "n-1 edges", "n+1 edges", "2n edges"], correctAnswer: 1, explanation: "A tree with n vertices always has exactly n-1 edges." },
      { id: 8, question: "Bipartite graph can be colored with:", options: ["1 color", "2 colors", "3 colors", "n colors"], correctAnswer: 1, explanation: "Bipartite graphs are 2-colorable (chromatic number = 2)." },
      { id: 9, question: "Planar graph satisfies Euler's formula:", options: ["V + E - F = 2", "V - E + F = 2", "V + E + F = 2", "V - E - F = 2"], correctAnswer: 1, explanation: "Euler's formula: V - E + F = 2 for connected planar graphs." },
      { id: 10, question: "A connected graph with no cycles is:", options: ["Complete graph", "Tree", "Bipartite", "Multigraph"], correctAnswer: 1, explanation: "A tree is a connected acyclic graph." }
    ],
    5: [ // Unit V - Algebraic Structures
      { id: 1, question: "A group must have:", options: ["Closure only", "Closure, associativity, identity, inverse", "Only identity", "Only inverse"], correctAnswer: 1, explanation: "Group requires closure, associativity, identity element, and inverses." },
      { id: 2, question: "Abelian group additionally requires:", options: ["Closure", "Commutativity", "Associativity", "Identity"], correctAnswer: 1, explanation: "Abelian (commutative) group: a * b = b * a for all elements." },
      { id: 3, question: "Identity element for addition is:", options: ["1", "0", "-1", "None"], correctAnswer: 1, explanation: "a + 0 = a, so 0 is the additive identity." },
      { id: 4, question: "A ring has two operations that are:", options: ["Both groups", "One group, one monoid", "Both monoids", "Neither"], correctAnswer: 1, explanation: "Ring: group under addition, monoid under multiplication." },
      { id: 5, question: "Lattice is a partially ordered set where:", options: ["Every pair has LUB and GLB", "No pairs have LUB", "Only some pairs have GLB", "None"], correctAnswer: 0, explanation: "Lattice: every pair of elements has a least upper bound and greatest lower bound." },
      { id: 6, question: "Subgroup of (Z, +) is:", options: ["(Q, +)", "(R, +)", "(nZ, +)", "None"], correctAnswer: 2, explanation: "Multiples of any integer n form a subgroup of integers under addition." },
      { id: 7, question: "Order of element a is:", options: ["Always 1", "Smallest n where a^n = e", "Largest n where a^n = e", "Undefined"], correctAnswer: 1, explanation: "Order is the smallest positive integer n such that a^n equals identity." },
      { id: 8, question: "Homomorphism preserves:", options: ["Size", "Structure/operations", "Color", "Nothing"], correctAnswer: 1, explanation: "Homomorphism: f(a * b) = f(a) * f(b), preserves the operation." },
      { id: 9, question: "Boolean algebra uses:", options: ["Only AND", "Only OR", "AND, OR, NOT", "Only NOT"], correctAnswer: 2, explanation: "Boolean algebra uses AND (∧), OR (∨), and NOT (¬) operations." },
      { id: 10, question: "Semigroup requires:", options: ["Closure and associativity", "Only closure", "Identity and inverse", "Commutativity"], correctAnswer: 0, explanation: "Semigroup needs only closure and associativity." }
    ]
  },

  // DS - Data Structures
  "ds": {
    1: [ // Unit I - Arrays & Linked Lists
      { id: 1, question: "Array elements are stored in:", options: ["Random locations", "Contiguous memory locations", "Linked locations", "Stack"], correctAnswer: 1, explanation: "Arrays store elements in consecutive memory locations." },
      { id: 2, question: "Time complexity to access array element by index:", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correctAnswer: 0, explanation: "Direct access using index takes constant time O(1)." },
      { id: 3, question: "Linked list node contains:", options: ["Only data", "Only pointer", "Data and pointer", "Neither"], correctAnswer: 2, explanation: "Each node stores data and pointer to next node." },
      { id: 4, question: "Advantage of linked list over array:", options: ["Faster access", "Dynamic size", "Less memory", "Simpler"], correctAnswer: 1, explanation: "Linked lists can grow/shrink dynamically unlike fixed-size arrays." },
      { id: 5, question: "Doubly linked list has:", options: ["One pointer per node", "Two pointers per node", "No pointers", "Three pointers"], correctAnswer: 1, explanation: "Doubly linked list has pointers to both next and previous nodes." },
      { id: 6, question: "Time to insert at beginning of linked list:", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correctAnswer: 0, explanation: "Inserting at head only requires updating one pointer - O(1)." },
      { id: 7, question: "Circular linked list:", options: ["Has no end", "Last node points to first", "Is always sorted", "Has two heads"], correctAnswer: 1, explanation: "In circular list, last node's next pointer points to head." },
      { id: 8, question: "To delete middle node, we need:", options: ["Only current node", "Previous node's address", "Next node only", "Nothing"], correctAnswer: 1, explanation: "Need previous node to update its next pointer." },
      { id: 9, question: "2D array A[3][4] has how many elements?", options: ["7", "12", "34", "43"], correctAnswer: 1, explanation: "2D array size = rows × columns = 3 × 4 = 12" },
      { id: 10, question: "Header node in linked list:", options: ["Stores data", "Is a dummy first node", "Is the last node", "Stores size only"], correctAnswer: 1, explanation: "Header node is a dummy node that simplifies list operations." }
    ],
    2: [ // Unit II - Stacks & Queues
      { id: 1, question: "Stack follows:", options: ["FIFO", "LIFO", "Random access", "Priority"], correctAnswer: 1, explanation: "Stack is Last-In-First-Out (LIFO) data structure." },
      { id: 2, question: "Queue follows:", options: ["LIFO", "FIFO", "Random", "Priority only"], correctAnswer: 1, explanation: "Queue is First-In-First-Out (FIFO) data structure." },
      { id: 3, question: "Push operation in stack:", options: ["Removes element", "Adds element at top", "Adds at bottom", "Searches element"], correctAnswer: 1, explanation: "Push adds new element to the top of stack." },
      { id: 4, question: "Dequeue operation:", options: ["Adds to queue", "Removes from front", "Removes from rear", "Peeks front"], correctAnswer: 1, explanation: "Dequeue removes and returns the front element." },
      { id: 5, question: "Infix to postfix uses:", options: ["Queue", "Stack", "Array only", "Linked list only"], correctAnswer: 1, explanation: "Stack is used for infix to postfix conversion." },
      { id: 6, question: "Postfix of A+B*C is:", options: ["AB+C*", "ABC*+", "ABC+*", "+A*BC"], correctAnswer: 1, explanation: "Operators follow their operands in postfix." },
      { id: 7, question: "Circular queue solves:", options: ["LIFO problem", "Memory wastage in linear queue", "Overflow only", "Nothing"], correctAnswer: 1, explanation: "Circular queue reuses empty spaces at front." },
      { id: 8, question: "Priority queue removes:", options: ["First element", "Last element", "Highest priority element", "Random"], correctAnswer: 2, explanation: "Priority queue always removes highest priority element first." },
      { id: 9, question: "Stack applications include:", options: ["CPU scheduling", "Function calls, recursion", "BFS", "None"], correctAnswer: 1, explanation: "Stack is used for function calls, recursion, and expression evaluation." },
      { id: 10, question: "Double-ended queue allows:", options: ["Insert at both ends only", "Delete at both ends only", "Insert and delete at both ends", "Neither"], correctAnswer: 2, explanation: "Deque supports insertion and deletion at both front and rear." }
    ],
    3: [ // Unit III - Trees
      { id: 1, question: "Root of a tree has:", options: ["One parent", "Two parents", "No parent", "Multiple parents"], correctAnswer: 2, explanation: "Root is the topmost node with no parent." },
      { id: 2, question: "Binary tree has maximum children:", options: ["1", "2", "3", "Unlimited"], correctAnswer: 1, explanation: "Binary tree has at most 2 children per node." },
      { id: 3, question: "Inorder traversal order:", options: ["Root, Left, Right", "Left, Root, Right", "Left, Right, Root", "Right, Root, Left"], correctAnswer: 1, explanation: "Inorder: Left subtree → Root → Right subtree" },
      { id: 4, question: "Preorder traversal order:", options: ["Root, Left, Right", "Left, Root, Right", "Left, Right, Root", "Right, Left, Root"], correctAnswer: 0, explanation: "Preorder: Root → Left subtree → Right subtree" },
      { id: 5, question: "BST property states:", options: ["Left < Root < Right", "Left > Root > Right", "Random order", "No order"], correctAnswer: 0, explanation: "In BST, left subtree values < root < right subtree values." },
      { id: 6, question: "Height of complete binary tree with n nodes:", options: ["n", "log n", "n²", "2^n"], correctAnswer: 1, explanation: "Complete binary tree height is O(log n)." },
      { id: 7, question: "Full binary tree has:", options: ["0 or 2 children for every node", "0 or 1 children", "Exactly 2 children", "Any number"], correctAnswer: 0, explanation: "Full binary tree: every node has 0 or 2 children." },
      { id: 8, question: "AVL tree is:", options: ["Unbalanced BST", "Self-balancing BST", "Non-binary tree", "Graph"], correctAnswer: 1, explanation: "AVL tree maintains balance with height difference ≤ 1." },
      { id: 9, question: "Heap is used for:", options: ["Searching", "Priority queue implementation", "Graph traversal", "Hashing"], correctAnswer: 1, explanation: "Heap efficiently implements priority queue operations." },
      { id: 10, question: "Max-heap property:", options: ["Parent ≤ children", "Parent ≥ children", "No order", "Left > Right"], correctAnswer: 1, explanation: "In max-heap, parent is greater than or equal to children." }
    ],
    4: [ // Unit IV - Graphs
      { id: 1, question: "Graph G = (V, E) where V is:", options: ["Edges", "Vertices", "Values", "Vectors"], correctAnswer: 1, explanation: "V represents the set of vertices (nodes) in the graph." },
      { id: 2, question: "Adjacency matrix space complexity:", options: ["O(V)", "O(E)", "O(V²)", "O(V+E)"], correctAnswer: 2, explanation: "Adjacency matrix requires V×V space = O(V²)." },
      { id: 3, question: "BFS uses:", options: ["Stack", "Queue", "Priority queue", "Array only"], correctAnswer: 1, explanation: "BFS uses queue for level-order traversal." },
      { id: 4, question: "DFS uses:", options: ["Queue", "Stack", "Heap", "Hash"], correctAnswer: 1, explanation: "DFS uses stack (or recursion) for depth-first exploration." },
      { id: 5, question: "Dijkstra's algorithm finds:", options: ["Minimum spanning tree", "Shortest path", "Longest path", "All paths"], correctAnswer: 1, explanation: "Dijkstra finds shortest path from source to all vertices." },
      { id: 6, question: "Topological sort is for:", options: ["Undirected graphs", "DAG (Directed Acyclic Graph)", "Cyclic graphs", "Any graph"], correctAnswer: 1, explanation: "Topological sort works only on DAGs." },
      { id: 7, question: "Kruskal's algorithm finds:", options: ["Shortest path", "Minimum spanning tree", "Maximum flow", "DFS tree"], correctAnswer: 1, explanation: "Kruskal's finds MST by greedily selecting minimum edges." },
      { id: 8, question: "Adjacency list space complexity:", options: ["O(V²)", "O(V+E)", "O(E²)", "O(V)"], correctAnswer: 1, explanation: "Adjacency list uses O(V+E) space - more efficient for sparse graphs." },
      { id: 9, question: "Connected component in undirected graph:", options: ["Path between any two vertices", "No paths exist", "All edges connected", "Single vertex"], correctAnswer: 0, explanation: "Connected component: path exists between every pair of vertices." },
      { id: 10, question: "Prim's algorithm is:", options: ["Similar to Dijkstra", "Uses DFS", "Random selection", "Backtracking"], correctAnswer: 0, explanation: "Prim's is similar to Dijkstra but for MST, not shortest path." }
    ],
    5: [ // Unit V - Sorting & Searching
      { id: 1, question: "Binary search requires:", options: ["Any array", "Sorted array", "Linked list", "Stack"], correctAnswer: 1, explanation: "Binary search works only on sorted arrays." },
      { id: 2, question: "Binary search time complexity:", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], correctAnswer: 1, explanation: "Binary search halves search space each step - O(log n)." },
      { id: 3, question: "Bubble sort average complexity:", options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"], correctAnswer: 2, explanation: "Bubble sort compares adjacent pairs - O(n²) on average." },
      { id: 4, question: "Quick sort pivot:", options: ["Always first", "Always last", "Can be any element", "Always middle"], correctAnswer: 2, explanation: "Pivot can be any element; choice affects performance." },
      { id: 5, question: "Merge sort is:", options: ["In-place", "Not in-place", "Random", "Adaptive"], correctAnswer: 1, explanation: "Merge sort requires O(n) extra space for merging." },
      { id: 6, question: "Best case of insertion sort:", options: ["O(n²)", "O(n)", "O(n log n)", "O(1)"], correctAnswer: 1, explanation: "Best case (already sorted): only n-1 comparisons = O(n)." },
      { id: 7, question: "Heap sort time complexity:", options: ["O(n)", "O(n²)", "O(n log n)", "O(log n)"], correctAnswer: 2, explanation: "Heap sort: build heap O(n) + n extractions O(log n each) = O(n log n)." },
      { id: 8, question: "Stable sorting algorithm:", options: ["Heap sort", "Quick sort", "Merge sort", "Selection sort"], correctAnswer: 2, explanation: "Merge sort preserves relative order of equal elements." },
      { id: 9, question: "Counting sort is:", options: ["Comparison based", "Non-comparison based", "Always O(n²)", "Recursive"], correctAnswer: 1, explanation: "Counting sort counts occurrences, doesn't compare elements." },
      { id: 10, question: "Radix sort processes:", options: ["Comparisons", "Digits from LSB to MSB", "Random order", "Only integers"], correctAnswer: 1, explanation: "Radix sort processes digits from least to most significant." }
    ]
  },

  // LASER - Physics
  "laser": {
    1: [ // Unit I - Laser Fundamentals
      { id: 1, question: "LASER stands for:", options: ["Light Amplification by Stimulated Emission of Radiation", "Light Absorption by Stimulated Emission of Radiation", "Low Amplification by Stimulated Emission", "Light Amplification by Spontaneous Emission"], correctAnswer: 0, explanation: "LASER = Light Amplification by Stimulated Emission of Radiation" },
      { id: 2, question: "Stimulated emission produces:", options: ["Random photons", "Coherent photons", "No photons", "Thermal radiation"], correctAnswer: 1, explanation: "Stimulated emission produces photons identical to incident photon." },
      { id: 3, question: "Population inversion means:", options: ["More atoms in ground state", "More atoms in excited state", "Equal populations", "No atoms"], correctAnswer: 1, explanation: "Population inversion: more atoms in higher energy state than lower." },
      { id: 4, question: "Metastable state has:", options: ["Very short lifetime", "Very long lifetime", "No lifetime", "Infinite lifetime"], correctAnswer: 1, explanation: "Metastable states have longer lifetime enabling population inversion." },
      { id: 5, question: "Laser light is:", options: ["Incoherent", "Polychromatic", "Monochromatic and coherent", "White light"], correctAnswer: 2, explanation: "Laser produces monochromatic, coherent, and directional light." },
      { id: 6, question: "Optical resonator consists of:", options: ["Single mirror", "Two parallel mirrors", "No mirrors", "Prism"], correctAnswer: 1, explanation: "Optical resonator uses two mirrors to amplify light by multiple passes." },
      { id: 7, question: "Pumping in laser means:", options: ["Removing energy", "Supplying energy for population inversion", "Cooling the medium", "Focusing light"], correctAnswer: 1, explanation: "Pumping supplies energy to achieve population inversion." },
      { id: 8, question: "Einstein coefficient B relates to:", options: ["Spontaneous emission", "Stimulated emission", "Absorption", "Both B and C"], correctAnswer: 3, explanation: "Einstein B coefficient applies to both stimulated emission and absorption." },
      { id: 9, question: "Active medium in laser:", options: ["Amplifies light", "Absorbs light", "Reflects light", "Scatters light"], correctAnswer: 0, explanation: "Active medium provides gain through stimulated emission." },
      { id: 10, question: "Threshold condition requires:", options: ["Gain < Loss", "Gain = Loss", "Gain > Loss", "No gain"], correctAnswer: 1, explanation: "At threshold, gain exactly compensates for losses." }
    ],
    2: [ // Unit II - Types of Lasers
      { id: 1, question: "Ruby laser is a:", options: ["Gas laser", "Solid-state laser", "Semiconductor laser", "Liquid laser"], correctAnswer: 1, explanation: "Ruby laser uses solid ruby crystal as active medium." },
      { id: 2, question: "He-Ne laser uses which gas?", options: ["Only Helium", "Only Neon", "Mixture of He and Ne", "Argon"], correctAnswer: 2, explanation: "He-Ne laser uses helium-neon gas mixture." },
      { id: 3, question: "CO2 laser operates in:", options: ["Visible region", "Infrared region", "UV region", "X-ray region"], correctAnswer: 1, explanation: "CO2 laser emits infrared radiation at 10.6 μm." },
      { id: 4, question: "Semiconductor laser active region is:", options: ["Bulk material", "p-n junction", "Gas tube", "Crystal rod"], correctAnswer: 1, explanation: "Semiconductor lasers use p-n junction as active region." },
      { id: 5, question: "Nd:YAG laser wavelength is approximately:", options: ["633 nm", "1064 nm", "10600 nm", "450 nm"], correctAnswer: 1, explanation: "Nd:YAG laser operates at 1064 nm (near infrared)." },
      { id: 6, question: "Ruby laser produces which color?", options: ["Green", "Blue", "Red", "Yellow"], correctAnswer: 2, explanation: "Ruby laser emits red light at 694.3 nm." },
      { id: 7, question: "He-Ne laser commonly emits:", options: ["Blue light", "Red light at 632.8 nm", "Green light", "UV light"], correctAnswer: 1, explanation: "Common He-Ne laser emits red light at 632.8 nm." },
      { id: 8, question: "Which laser is most efficient?", options: ["Ruby laser", "He-Ne laser", "Semiconductor laser", "CO2 laser"], correctAnswer: 2, explanation: "Semiconductor lasers have highest electrical-to-optical efficiency." },
      { id: 9, question: "Excimer lasers use:", options: ["Noble gas compounds", "Pure noble gases", "Solid crystals", "Organic dyes"], correctAnswer: 0, explanation: "Excimer lasers use excited dimers of noble gas halides." },
      { id: 10, question: "Four-level laser system:", options: ["Less efficient than three-level", "More efficient than three-level", "Same efficiency", "Cannot lase"], correctAnswer: 1, explanation: "Four-level system achieves population inversion more easily." }
    ],
    3: [ // Unit III - Optical Fibers
      { id: 1, question: "Total internal reflection requires:", options: ["Angle less than critical", "Angle greater than critical", "Normal incidence", "Any angle"], correctAnswer: 1, explanation: "TIR occurs when angle of incidence > critical angle." },
      { id: 2, question: "Core of optical fiber has:", options: ["Lower refractive index", "Higher refractive index", "Same as cladding", "No refractive index"], correctAnswer: 1, explanation: "Core has higher refractive index than cladding for TIR." },
      { id: 3, question: "Single-mode fiber has:", options: ["Large core diameter", "Very small core diameter", "No core", "Multiple cores"], correctAnswer: 1, explanation: "Single-mode fibers have small core (~9 μm) for one mode." },
      { id: 4, question: "Numerical Aperture indicates:", options: ["Fiber length", "Light gathering ability", "Core diameter", "Wavelength"], correctAnswer: 1, explanation: "NA measures the light-gathering capability of the fiber." },
      { id: 5, question: "Modal dispersion occurs in:", options: ["Single-mode fiber", "Multimode fiber", "Both equally", "Neither"], correctAnswer: 1, explanation: "Modal dispersion affects multimode fibers with multiple ray paths." },
      { id: 6, question: "Graded-index fiber:", options: ["Has step change in refractive index", "Has gradual change in refractive index", "Has constant index", "Has no cladding"], correctAnswer: 1, explanation: "Graded-index fiber has gradually varying refractive index." },
      { id: 7, question: "Attenuation in fiber is measured in:", options: ["Watts", "dB/km", "Meters", "Hertz"], correctAnswer: 1, explanation: "Fiber loss is measured in decibels per kilometer (dB/km)." },
      { id: 8, question: "Material dispersion depends on:", options: ["Fiber length", "Wavelength", "Core size", "Cladding thickness"], correctAnswer: 1, explanation: "Material dispersion varies with wavelength of light." },
      { id: 9, question: "Acceptance angle is related to:", options: ["Fiber loss", "Numerical aperture", "Fiber length", "Bandwidth"], correctAnswer: 1, explanation: "Acceptance angle = sin⁻¹(NA), determines input coupling." },
      { id: 10, question: "V-number less than 2.405 means:", options: ["Multimode operation", "Single-mode operation", "No propagation", "High loss"], correctAnswer: 1, explanation: "V < 2.405 ensures single-mode propagation in step-index fiber." }
    ],
    4: [ // Unit IV - Holography
      { id: 1, question: "Holography records:", options: ["Only amplitude", "Only phase", "Both amplitude and phase", "Neither"], correctAnswer: 2, explanation: "Holography records both amplitude and phase of light." },
      { id: 2, question: "Hologram is recorded using:", options: ["Incoherent light", "Coherent light (laser)", "White light", "X-rays"], correctAnswer: 1, explanation: "Laser's coherent light is needed to create interference pattern." },
      { id: 3, question: "Reference beam in holography:", options: ["Illuminates object", "Interferes with object beam", "Is blocked", "Is absorbed"], correctAnswer: 1, explanation: "Reference beam interferes with object beam to create hologram." },
      { id: 4, question: "Hologram produces:", options: ["2D image", "3D image", "No image", "Inverted image only"], correctAnswer: 1, explanation: "Hologram reconstructs full 3D image with depth." },
      { id: 5, question: "Gabor invented holography in:", options: ["1948", "1960", "1970", "1990"], correctAnswer: 0, explanation: "Dennis Gabor invented holography in 1948." },
      { id: 6, question: "Transmission hologram is viewed by:", options: ["Reflected light", "Light passing through", "No light", "Sunlight only"], correctAnswer: 1, explanation: "Transmission hologram is viewed with light passing through it." },
      { id: 7, question: "White light hologram is also called:", options: ["Gabor hologram", "Rainbow hologram", "Phase hologram", "Amplitude hologram"], correctAnswer: 1, explanation: "Rainbow holograms can be viewed with white light." },
      { id: 8, question: "Holographic storage advantage:", options: ["Lower capacity", "Higher storage density", "Slower access", "More expensive only"], correctAnswer: 1, explanation: "Holographic storage offers very high data density." },
      { id: 9, question: "Holographic interferometry detects:", options: ["Colors", "Minute deformations", "Temperature only", "Nothing"], correctAnswer: 1, explanation: "It detects tiny surface deformations through fringe patterns." },
      { id: 10, question: "Virtual image in holography:", options: ["Cannot be seen", "Appears behind hologram", "Appears in front", "Is real image"], correctAnswer: 1, explanation: "Virtual image appears behind the hologram plane." }
    ],
    5: [ // Unit V - Applications
      { id: 1, question: "Laser in surgery is used for:", options: ["Cooling tissue", "Cutting and cauterizing tissue", "X-ray imaging", "MRI"], correctAnswer: 1, explanation: "Medical lasers cut tissue and cauterize (seal) blood vessels." },
      { id: 2, question: "LIDAR uses:", options: ["Sound waves", "Laser pulses", "Radio waves", "Microwaves"], correctAnswer: 1, explanation: "LIDAR uses laser pulses for detection and ranging." },
      { id: 3, question: "Laser printer uses:", options: ["Ink jet", "Laser to create image on drum", "Impact printing", "Thermal printing"], correctAnswer: 1, explanation: "Laser creates electrostatic image on photosensitive drum." },
      { id: 4, question: "Barcode scanner uses:", options: ["X-ray", "Laser", "Ultrasound", "Infrared camera"], correctAnswer: 1, explanation: "Laser scans barcode and detector reads reflected pattern." },
      { id: 5, question: "Optical fiber communication advantage:", options: ["Lower bandwidth", "High bandwidth, low loss", "Heavy cables", "Short distance only"], correctAnswer: 1, explanation: "Fibers offer very high bandwidth with low signal loss." },
      { id: 6, question: "CD/DVD uses laser for:", options: ["Heating only", "Reading and writing data", "Cooling disc", "Cleaning disc"], correctAnswer: 1, explanation: "Laser reads/writes data by detecting/creating pits on disc." },
      { id: 7, question: "Laser welding provides:", options: ["Weak joints", "Precise, strong joints", "No joints", "Cold joints"], correctAnswer: 1, explanation: "Laser welding creates precise, high-strength joints." },
      { id: 8, question: "Laser in eye surgery corrects:", options: ["Cataracts only", "Refractive errors (LASIK)", "Glaucoma only", "Color blindness"], correctAnswer: 1, explanation: "LASIK reshapes cornea to correct vision problems." },
      { id: 9, question: "Holographic security features are on:", options: ["Paper only", "Credit cards and currency", "Food items", "Clothing"], correctAnswer: 1, explanation: "Holograms provide anti-counterfeiting security." },
      { id: 10, question: "Laser spectroscopy is used for:", options: ["Material analysis", "Cooking", "Cooling", "Painting"], correctAnswer: 0, explanation: "Laser spectroscopy analyzes material composition precisely." }
    ]
  },

  // UHV - Universal Human Values
  "uhv": {
    1: [ // Unit I - Course Introduction
      { id: 1, question: "UHV aims to develop:", options: ["Only technical skills", "Only soft skills", "Holistic personality with values", "Only academic knowledge"], correctAnswer: 2, explanation: "UHV develops complete personality including ethics and values." },
      { id: 2, question: "Self-exploration is:", options: ["Looking at mirror", "Understanding oneself through reflection", "Exploring nature", "Traveling"], correctAnswer: 1, explanation: "Self-exploration means understanding one's beliefs and values." },
      { id: 3, question: "Natural acceptance is:", options: ["Accepting everything", "Innate acceptance of harmony", "Rejecting values", "Following trends"], correctAnswer: 1, explanation: "Natural acceptance is our inherent sense of what is right." },
      { id: 4, question: "Happiness is:", options: ["Having more money", "State of harmony within", "Buying things", "Being famous"], correctAnswer: 1, explanation: "True happiness comes from inner harmony, not material things." },
      { id: 5, question: "Prosperity means:", options: ["Only wealth", "Having more than needed", "Right utilization with feeling of prosperity", "Hoarding resources"], correctAnswer: 2, explanation: "Prosperity = right assessment of needs + right utilization." },
      { id: 6, question: "Basic human aspirations are:", options: ["Money and fame", "Happiness and prosperity", "Power and control", "Isolation"], correctAnswer: 1, explanation: "Every human aspires for continuous happiness and prosperity." },
      { id: 7, question: "Right understanding leads to:", options: ["Confusion", "Harmony", "Conflict", "Isolation"], correctAnswer: 1, explanation: "Right understanding creates harmony at all levels." },
      { id: 8, question: "Education should develop:", options: ["Only skills", "Skills and values both", "Only earning capacity", "Competition only"], correctAnswer: 1, explanation: "Complete education develops both competence and values." },
      { id: 9, question: "Self-verification means:", options: ["Checking ID", "Verifying through own experience", "Asking others", "Reading books only"], correctAnswer: 1, explanation: "Self-verification: validating understanding through experience." },
      { id: 10, question: "Preconditioning refers to:", options: ["Air conditioning", "Prior assumptions affecting perception", "Weather conditions", "Physical conditions"], correctAnswer: 1, explanation: "Preconditioning: prior beliefs that affect our understanding." }
    ],
    2: [ // Unit II - Harmony in Human Being
      { id: 1, question: "Human being consists of:", options: ["Body only", "Self (consciousness) and body", "Mind only", "Soul only"], correctAnswer: 1, explanation: "Human = Self (sentient 'I') + Body (material entity)." },
      { id: 2, question: "The 'Self' is characterized by:", options: ["Material needs", "Activities like thinking, feeling", "Physical growth", "Eating, sleeping"], correctAnswer: 1, explanation: "Self has activities: desire, thought, expectation, knowing." },
      { id: 3, question: "Body needs are:", options: ["Unlimited", "Limited", "Not important", "Always increasing"], correctAnswer: 1, explanation: "Physical needs are limited and quantifiable." },
      { id: 4, question: "Self needs:", options: ["Are limited", "Cannot be fulfilled", "Include trust, respect, happiness", "Are only physical"], correctAnswer: 2, explanation: "Self needs: trust, respect, affection, care, guidance, etc." },
      { id: 5, question: "Desire is:", options: ["Goal of life", "Imaging of a want", "Always bad", "To be suppressed"], correctAnswer: 1, explanation: "Desire = imagining what we want, it activates thought." },
      { id: 6, question: "Thought leads to:", options: ["Nothing", "Expectation, selection", "Only problems", "Inactivity"], correctAnswer: 1, explanation: "Thought analyzes and leads to expectation and selection." },
      { id: 7, question: "Happiness is related to:", options: ["Wealth", "Harmony of desires and thoughts", "Power", "Fame"], correctAnswer: 1, explanation: "Happiness = harmony between desire and thought." },
      { id: 8, question: "Unhappiness comes from:", options: ["Poverty only", "Conflict within self", "Others", "Bad luck"], correctAnswer: 1, explanation: "Unhappiness arises from internal contradiction in self." },
      { id: 9, question: "Trust is:", options: ["Doubt", "Assured feeling of intention", "Suspicion", "Fear"], correctAnswer: 1, explanation: "Trust: to be assured of intention, no feeling of fear." },
      { id: 10, question: "Self-regulation means:", options: ["Self-punishment", "Aligning body with self", "Ignoring body", "Overworking"], correctAnswer: 1, explanation: "Body should be regulated by self with right understanding." }
    ],
    3: [ // Unit III - Harmony in Family
      { id: 1, question: "Family is the basic unit of:", options: ["Economy", "Human interaction", "Politics", "Technology"], correctAnswer: 1, explanation: "Family is where we first learn relationships and values." },
      { id: 2, question: "Relationship is between:", options: ["Bodies", "Self and self", "Objects", "None"], correctAnswer: 1, explanation: "Relationship is at the level of self (feelings), not body." },
      { id: 3, question: "Justice in relationship means:", options: ["Equal money", "Recognition of values, fulfillment, evaluation", "Legal rights", "Power balance"], correctAnswer: 1, explanation: "Justice = recognizing relationship + fulfilling + evaluating." },
      { id: 4, question: "Trust is the foundation of:", options: ["Business only", "All relationships", "Legal contracts", "Competition"], correctAnswer: 1, explanation: "Trust is foundational for any meaningful relationship." },
      { id: 5, question: "Respect means:", options: ["Fear", "Right evaluation, acceptance", "Showing superiority", "Flattery"], correctAnswer: 1, explanation: "Respect = evaluating rightly and accepting individuality." },
      { id: 6, question: "Affection is:", options: ["Business deal", "Feeling of being related", "Transaction", "Competition"], correctAnswer: 1, explanation: "Affection is the feeling of being related to another." },
      { id: 7, question: "Care means:", options: ["Ignoring", "Being responsible for nurturing", "Controlling", "Dominating"], correctAnswer: 1, explanation: "Care = feeling responsible for the development of other." },
      { id: 8, question: "Guidance in family provides:", options: ["Control", "Right direction in life", "Punishment", "Fear"], correctAnswer: 1, explanation: "Guidance helps others find right direction through experience." },
      { id: 9, question: "Gratitude is feeling of:", options: ["Obligation", "Thankfulness for relationship", "Debt", "Superiority"], correctAnswer: 1, explanation: "Gratitude: thankfulness towards those who've nurtured us." },
      { id: 10, question: "Family problems arise from:", options: ["Lack of money only", "Lack of right understanding", "Too many members", "Physical distance"], correctAnswer: 1, explanation: "Most family conflicts stem from misunderstanding values." }
    ],
    4: [ // Unit IV - Harmony in Society
      { id: 1, question: "Society is:", options: ["Group of strangers", "Family of families", "Collection of enemies", "Business organization"], correctAnswer: 1, explanation: "Society extends family concept - interconnected families." },
      { id: 2, question: "Fearlessness in society comes from:", options: ["Weapons", "Trust and understanding", "Power", "Money"], correctAnswer: 1, explanation: "Mutual trust creates fearless society." },
      { id: 3, question: "Undivided society means:", options: ["No countries", "Feeling of relatedness with all", "Single government", "No diversity"], correctAnswer: 1, explanation: "Undivided society: seeing all humans as related." },
      { id: 4, question: "Five dimensions of human order include:", options: ["Only education", "Education, health, production, etc.", "Only money", "Only power"], correctAnswer: 1, explanation: "Education, health, production, justice, exchange are dimensions." },
      { id: 5, question: "Ethical human conduct involves:", options: ["Self-interest only", "Mutual fulfillment", "Competition", "Exploitation"], correctAnswer: 1, explanation: "Ethics = behavior beneficial for self and others." },
      { id: 6, question: "Professional ethics means:", options: ["Making money", "Right assessment of competence", "Cheating customers", "Profit maximization only"], correctAnswer: 1, explanation: "Professional ethics: using competence for mutual benefit." },
      { id: 7, question: "Humanistic education aims at:", options: ["Job only", "Right understanding + competence", "Memory only", "Degrees only"], correctAnswer: 1, explanation: "Education should develop values and skills both." },
      { id: 8, question: "Justice in society means:", options: ["Punishment", "Recognition and fulfillment of relationships", "Revenge", "Control"], correctAnswer: 1, explanation: "Social justice: ensuring harmony through right relationships." },
      { id: 9, question: "Exchange in society should be:", options: ["Exploitative", "Mutually enriching", "One-sided", "Forced"], correctAnswer: 1, explanation: "Exchange should benefit all parties involved." },
      { id: 10, question: "World family (Vasudhaiva Kutumbakam) means:", options: ["Single government", "Entire world as one family", "No countries", "Uniform culture"], correctAnswer: 1, explanation: "Seeing entire humanity as one interconnected family." }
    ],
    5: [ // Unit V - Harmony in Nature
      { id: 1, question: "Nature consists of:", options: ["Only humans", "All units including humans", "Only plants", "Only animals"], correctAnswer: 1, explanation: "Nature = all units (matter, plants, animals, humans)." },
      { id: 2, question: "Interconnectedness means:", options: ["Everything is isolated", "Everything is related", "Nothing matters", "Only humans matter"], correctAnswer: 1, explanation: "All existence is interconnected and interdependent." },
      { id: 3, question: "Cyclical nature of resources means:", options: ["Resources are infinite", "Resources recycle in nature", "Resources disappear", "Resources multiply"], correctAnswer: 1, explanation: "Natural resources follow cycles (water cycle, etc.)." },
      { id: 4, question: "Sustainable development means:", options: ["Exploit all resources", "Meet present needs without harming future", "No development", "Only economic growth"], correctAnswer: 1, explanation: "Sustainability: development that doesn't compromise future." },
      { id: 5, question: "Human responsibility towards nature:", options: ["Exploitation", "Enrichment and protection", "Domination", "Destruction"], correctAnswer: 1, explanation: "Humans should enrich and protect nature, not exploit." },
      { id: 6, question: "Coexistence means:", options: ["Humans alone", "Living in harmony with all nature", "Dominating other species", "Separation"], correctAnswer: 1, explanation: "Coexistence: mutually fulfilling existence with nature." },
      { id: 7, question: "Environmental pollution is result of:", options: ["Nature", "Human activities ignoring harmony", "Animals", "Plants"], correctAnswer: 1, explanation: "Pollution comes from human activities violating natural order." },
      { id: 8, question: "Holistic worldview sees:", options: ["Only parts", "Everything as connected whole", "Nothing", "Only differences"], correctAnswer: 1, explanation: "Holistic view: understanding the entire interconnected reality." },
      { id: 9, question: "Technology should be:", options: ["Only for profit", "People and nature friendly", "Harmful", "Uncontrolled"], correctAnswer: 1, explanation: "Technology should serve humanity without harming nature." },
      { id: 10, question: "Ultimate goal is:", options: ["Economic growth only", "Harmony at all levels (self, family, society, nature)", "Power", "Fame"], correctAnswer: 1, explanation: "Goal: comprehensive harmony from individual to universal." }
    ]
  },

  // PYTHON - Programming in Python
  "python": {
    1: [ // Unit I - Python Basics
      { id: 1, question: "Python is:", options: ["Compiled language", "Interpreted language", "Assembly language", "Machine language"], correctAnswer: 1, explanation: "Python is an interpreted, high-level language." },
      { id: 2, question: "Which symbol starts a comment in Python?", options: ["//", "/*", "#", "--"], correctAnswer: 2, explanation: "# is used for single-line comments in Python." },
      { id: 3, question: "Variable declaration in Python:", options: ["Requires type specification", "Doesn't require type", "Uses 'var' keyword", "Uses 'let' keyword"], correctAnswer: 1, explanation: "Python is dynamically typed - no type declaration needed." },
      { id: 4, question: "print('Hello') outputs:", options: ["'Hello'", "Hello", "hello", "ERROR"], correctAnswer: 1, explanation: "print() outputs the string without quotes." },
      { id: 5, question: "type(42) returns:", options: ["float", "str", "int", "number"], correctAnswer: 2, explanation: "42 is an integer, so type() returns <class 'int'>." },
      { id: 6, question: "Which is correct string declaration?", options: ["str = Hello", "str = 'Hello'", "string str = 'Hello'", "var str = Hello"], correctAnswer: 1, explanation: "Strings are declared using quotes (single or double)." },
      { id: 7, question: "Python indentation is:", options: ["Optional", "Mandatory for blocks", "Only for comments", "Only for functions"], correctAnswer: 1, explanation: "Python uses indentation to define code blocks." },
      { id: 8, question: "Input function returns:", options: ["int", "float", "str", "bool"], correctAnswer: 2, explanation: "input() always returns a string." },
      { id: 9, question: "5 / 2 in Python 3 gives:", options: ["2", "2.5", "2.0", "Error"], correctAnswer: 1, explanation: "/ is true division in Python 3, returns 2.5." },
      { id: 10, question: "5 // 2 gives:", options: ["2.5", "2", "3", "2.0"], correctAnswer: 1, explanation: "// is floor division, returns 2 (integer division)." }
    ],
    2: [ // Unit II - Control Structures
      { id: 1, question: "if condition ends with:", options: ["Semicolon", "Colon", "Parenthesis", "Nothing"], correctAnswer: 1, explanation: "Python if statement: if condition:" },
      { id: 2, question: "elif is short for:", options: ["else if", "element if", "elseif", "end if"], correctAnswer: 0, explanation: "elif = else if, for multiple conditions." },
      { id: 3, question: "for i in range(3) iterates:", options: ["1,2,3", "0,1,2", "0,1,2,3", "1,2"], correctAnswer: 1, explanation: "range(3) generates 0, 1, 2." },
      { id: 4, question: "while True creates:", options: ["Error", "Infinite loop", "Single iteration", "No loop"], correctAnswer: 1, explanation: "while True runs forever unless break is used." },
      { id: 5, question: "break statement:", options: ["Skips iteration", "Exits loop entirely", "Continues loop", "Does nothing"], correctAnswer: 1, explanation: "break exits the innermost loop." },
      { id: 6, question: "continue statement:", options: ["Exits loop", "Skips to next iteration", "Breaks program", "Loops forever"], correctAnswer: 1, explanation: "continue skips rest of iteration, goes to next." },
      { id: 7, question: "pass statement:", options: ["Exits program", "Does nothing (placeholder)", "Prints pass", "Causes error"], correctAnswer: 1, explanation: "pass is a null statement, placeholder for empty blocks." },
      { id: 8, question: "range(1, 6, 2) gives:", options: ["1,2,3,4,5,6", "1,3,5", "1,2,3", "2,4,6"], correctAnswer: 1, explanation: "range(1,6,2) = 1, 3, 5 (start, stop, step)." },
      { id: 9, question: "Nested loop is:", options: ["Not allowed", "Loop inside loop", "Same as if", "Only for while"], correctAnswer: 1, explanation: "Nested loop: loop within another loop." },
      { id: 10, question: "else with for loop runs when:", options: ["Loop never runs", "Loop completes normally", "Loop breaks", "Always"], correctAnswer: 1, explanation: "for-else: else runs if loop finishes without break." }
    ],
    3: [ // Unit III - Functions & Modules
      { id: 1, question: "Function definition starts with:", options: ["function", "def", "func", "define"], correctAnswer: 1, explanation: "Python uses 'def' keyword to define functions." },
      { id: 2, question: "return statement:", options: ["Prints value", "Sends value back", "Ends program", "Loops again"], correctAnswer: 1, explanation: "return sends value back to the caller." },
      { id: 3, question: "Default parameter example:", options: ["def f(a=5)", "def f(a)", "def f(5=a)", "def f(a:5)"], correctAnswer: 0, explanation: "Default parameters: def func(param=default_value)" },
      { id: 4, question: "Lambda function is:", options: ["Named function", "Anonymous function", "Main function", "Built-in function"], correctAnswer: 1, explanation: "Lambda creates small anonymous functions." },
      { id: 5, question: "*args allows:", options: ["Fixed arguments", "Variable positional arguments", "Keyword arguments", "No arguments"], correctAnswer: 1, explanation: "*args collects extra positional arguments as tuple." },
      { id: 6, question: "**kwargs allows:", options: ["Positional arguments", "Variable keyword arguments", "Fixed arguments", "No arguments"], correctAnswer: 1, explanation: "**kwargs collects extra keyword arguments as dictionary." },
      { id: 7, question: "import math allows:", options: ["Deleting math", "Using math functions", "Creating math", "None"], correctAnswer: 1, explanation: "import makes module's functions available." },
      { id: 8, question: "from math import pi imports:", options: ["Entire math module", "Only pi constant", "Nothing", "All constants"], correctAnswer: 1, explanation: "Specific import: only pi is imported from math." },
      { id: 9, question: "Module is:", options: ["Function", "Python file with definitions", "Variable", "Loop"], correctAnswer: 1, explanation: "Module = .py file containing functions, classes, variables." },
      { id: 10, question: "global keyword:", options: ["Creates function", "Accesses global variable", "Deletes variable", "Loops"], correctAnswer: 1, explanation: "global allows modifying global variable inside function." }
    ],
    4: [ // Unit IV - OOP in Python
      { id: 1, question: "Class is defined using:", options: ["define class", "class", "struct", "object"], correctAnswer: 1, explanation: "class keyword defines a class in Python." },
      { id: 2, question: "__init__ is:", options: ["Destructor", "Constructor", "Normal method", "Static method"], correctAnswer: 1, explanation: "__init__ is the constructor, called when object is created." },
      { id: 3, question: "self refers to:", options: ["Class", "Instance of class", "Function", "Module"], correctAnswer: 1, explanation: "self refers to the current instance of the class." },
      { id: 4, question: "Inheritance allows:", options: ["Hiding data", "Deriving new class from existing", "Multiple values", "Printing"], correctAnswer: 1, explanation: "Inheritance: child class inherits from parent class." },
      { id: 5, question: "Encapsulation means:", options: ["Hiding implementation details", "Showing everything", "Deleting class", "Printing data"], correctAnswer: 0, explanation: "Encapsulation bundles data and methods, hides internals." },
      { id: 6, question: "Polymorphism allows:", options: ["Only one form", "Multiple forms of same method", "No methods", "Deleting methods"], correctAnswer: 1, explanation: "Polymorphism: same method behaves differently in subclasses." },
      { id: 7, question: "_variable indicates:", options: ["Public variable", "Protected (internal use)", "Constant", "Global"], correctAnswer: 1, explanation: "Single underscore suggests internal/protected use." },
      { id: 8, question: "__variable indicates:", options: ["Protected", "Private (name mangling)", "Public", "Global"], correctAnswer: 1, explanation: "Double underscore invokes name mangling for privacy." },
      { id: 9, question: "Multiple inheritance:", options: ["Not allowed", "Class inherits from multiple classes", "Only single parent", "Error"], correctAnswer: 1, explanation: "Python supports multiple inheritance." },
      { id: 10, question: "super() is used to:", options: ["Create objects", "Call parent class methods", "Delete objects", "Print class"], correctAnswer: 1, explanation: "super() accesses parent class methods." }
    ],
    5: [ // Unit V - File Handling & Libraries
      { id: 1, question: "open('file.txt', 'r') opens file for:", options: ["Writing", "Reading", "Appending", "Deleting"], correctAnswer: 1, explanation: "'r' mode opens file for reading." },
      { id: 2, question: "'w' mode:", options: ["Reads file", "Creates/overwrites file", "Appends to file", "Deletes file"], correctAnswer: 1, explanation: "'w' creates new file or overwrites existing." },
      { id: 3, question: "'a' mode:", options: ["Reads", "Overwrites", "Appends to end", "Deletes"], correctAnswer: 2, explanation: "'a' mode adds content to end of file." },
      { id: 4, question: "with open() ensures:", options: ["File stays open", "File is properly closed", "File is deleted", "Error"], correctAnswer: 1, explanation: "with statement ensures file is closed after use." },
      { id: 5, question: "read() returns:", options: ["Single line", "Entire file content", "First character", "Nothing"], correctAnswer: 1, explanation: "read() returns entire file as string." },
      { id: 6, question: "readline() returns:", options: ["Entire file", "Single line", "Single character", "Nothing"], correctAnswer: 1, explanation: "readline() reads one line at a time." },
      { id: 7, question: "NumPy is used for:", options: ["Web development", "Numerical computing", "Game development", "Text processing"], correctAnswer: 1, explanation: "NumPy provides support for large arrays and matrices." },
      { id: 8, question: "Pandas is used for:", options: ["Image processing", "Data analysis", "Web scraping only", "Game development"], correctAnswer: 1, explanation: "Pandas provides data structures for data analysis." },
      { id: 9, question: "Exception handling uses:", options: ["if-else", "try-except", "for-while", "def-return"], correctAnswer: 1, explanation: "try-except handles exceptions in Python." },
      { id: 10, question: "pip is:", options: ["Python function", "Package installer", "Python IDE", "Loop type"], correctAnswer: 1, explanation: "pip installs Python packages from PyPI." }
    ]
  },

  // ==================== 1ST SEMESTER ====================

  // Engineering Chemistry
  "eng-chemistry": {
    1: [ // Unit I - Atomic & Molecular Structure
      { id: 1, question: "Which model introduced electron orbits around nucleus?", options: ["Dalton's model", "Thomson's model", "Bohr's model", "Quantum model"], correctAnswer: 2, explanation: "Bohr's model introduced quantized electron orbits around the nucleus." },
      { id: 2, question: "Heisenberg's uncertainty principle states:", options: ["Position is certain", "Momentum is certain", "Cannot know both precisely", "Energy is uncertain"], correctAnswer: 2, explanation: "Cannot simultaneously know exact position and momentum of electron." },
      { id: 3, question: "Molecular orbital theory was developed by:", options: ["Bohr", "Mulliken and Hund", "Dalton", "Rutherford"], correctAnswer: 1, explanation: "MOT was developed by Mulliken and Hund." },
      { id: 4, question: "Bonding molecular orbital has:", options: ["Higher energy", "Lower energy than atomic orbitals", "Same energy", "No energy"], correctAnswer: 1, explanation: "BMO has lower energy, stabilizing the molecule." },
      { id: 5, question: "Anti-bonding orbital is denoted by:", options: ["σ", "π", "σ* or π*", "δ"], correctAnswer: 2, explanation: "Asterisk (*) denotes anti-bonding orbitals." },
      { id: 6, question: "Bond order = ?", options: ["Bonding - Antibonding", "(Bonding - Antibonding)/2", "Bonding + Antibonding", "Bonding × Antibonding"], correctAnswer: 1, explanation: "Bond order = (electrons in BMO - electrons in ABMO)/2" },
      { id: 7, question: "O2 molecule is:", options: ["Diamagnetic", "Paramagnetic", "Non-magnetic", "Ferromagnetic"], correctAnswer: 1, explanation: "O2 has unpaired electrons, making it paramagnetic." },
      { id: 8, question: "sp3 hybridization gives:", options: ["Linear shape", "Trigonal planar", "Tetrahedral shape", "Octahedral"], correctAnswer: 2, explanation: "sp3 gives tetrahedral geometry (e.g., CH4)." },
      { id: 9, question: "VSEPR theory predicts:", options: ["Bond energy", "Molecular shape", "Bond order", "Atomic size"], correctAnswer: 1, explanation: "VSEPR predicts molecular geometry based on electron repulsion." },
      { id: 10, question: "Pi bond is formed by:", options: ["Head-on overlap", "Lateral overlap", "No overlap", "s-s overlap"], correctAnswer: 1, explanation: "Pi bonds form by side-by-side (lateral) overlap of p orbitals." }
    ],
    2: [ // Unit II - Spectroscopic Techniques
      { id: 1, question: "UV-Visible spectroscopy measures:", options: ["Mass", "Nuclear spin", "Electronic transitions", "Molecular vibrations"], correctAnswer: 2, explanation: "UV-Vis measures electronic transitions in molecules." },
      { id: 2, question: "Beer-Lambert law relates:", options: ["Mass to volume", "Absorbance to concentration", "Pressure to temperature", "Speed to time"], correctAnswer: 1, explanation: "A = εcl, absorbance proportional to concentration and path length." },
      { id: 3, question: "IR spectroscopy studies:", options: ["Electronic transitions", "Molecular vibrations", "Nuclear transitions", "X-ray diffraction"], correctAnswer: 1, explanation: "IR spectroscopy detects molecular vibrations." },
      { id: 4, question: "Fingerprint region in IR is:", options: ["4000-1500 cm⁻¹", "1500-400 cm⁻¹", "Above 4000 cm⁻¹", "Below 400 cm⁻¹"], correctAnswer: 1, explanation: "Fingerprint region (1500-400 cm⁻¹) is unique to each compound." },
      { id: 5, question: "NMR spectroscopy uses:", options: ["UV light", "Radio waves", "X-rays", "Gamma rays"], correctAnswer: 1, explanation: "NMR uses radio frequency radiation in magnetic field." },
      { id: 6, question: "Chemical shift in NMR is measured in:", options: ["Hz", "ppm", "cm⁻¹", "nm"], correctAnswer: 1, explanation: "Chemical shift is measured in parts per million (ppm)." },
      { id: 7, question: "Mass spectrometry measures:", options: ["Absorbance", "Mass-to-charge ratio", "Wavelength", "Temperature"], correctAnswer: 1, explanation: "MS separates ions based on mass-to-charge ratio (m/z)." },
      { id: 8, question: "TMS is used as reference in:", options: ["UV spectroscopy", "NMR spectroscopy", "IR spectroscopy", "Mass spectrometry"], correctAnswer: 1, explanation: "Tetramethylsilane (TMS) is the reference standard in NMR." },
      { id: 9, question: "Chromophore is:", options: ["Colorless group", "Light-absorbing group", "Radioactive group", "Fluorescent only"], correctAnswer: 1, explanation: "Chromophore is a group responsible for color/absorption." },
      { id: 10, question: "Red shift means shift towards:", options: ["Shorter wavelength", "Longer wavelength", "No change", "UV region"], correctAnswer: 1, explanation: "Red shift (bathochromic) moves absorption to longer wavelength." }
    ],
    3: [ // Unit III - Electrochemistry
      { id: 1, question: "Electrochemical cell converts:", options: ["Light to electricity", "Chemical to electrical energy", "Heat to electricity", "Sound to electricity"], correctAnswer: 1, explanation: "Electrochemical cells convert chemical energy to electrical." },
      { id: 2, question: "At anode:", options: ["Reduction occurs", "Oxidation occurs", "No reaction", "Both occur"], correctAnswer: 1, explanation: "Oxidation occurs at anode (electrons are released)." },
      { id: 3, question: "At cathode:", options: ["Oxidation occurs", "Reduction occurs", "No reaction", "Electrons released"], correctAnswer: 1, explanation: "Reduction occurs at cathode (electrons are gained)." },
      { id: 4, question: "Nernst equation relates EMF to:", options: ["Temperature only", "Concentration", "Pressure only", "Volume"], correctAnswer: 1, explanation: "Nernst equation: E = E° - (RT/nF)ln Q" },
      { id: 5, question: "Standard hydrogen electrode potential is:", options: ["1 V", "-1 V", "0 V", "0.5 V"], correctAnswer: 2, explanation: "SHE is defined as 0 V (reference electrode)." },
      { id: 6, question: "Faraday's constant value is approximately:", options: ["96,500 C/mol", "8.314 J/mol", "6.022 × 10²³", "1.6 × 10⁻¹⁹"], correctAnswer: 0, explanation: "F ≈ 96,500 coulombs per mole of electrons." },
      { id: 7, question: "In fuel cell, fuel is:", options: ["Stored inside", "Continuously supplied", "Never used", "Solid only"], correctAnswer: 1, explanation: "Fuel cells are continuously fed with fuel (unlike batteries)." },
      { id: 8, question: "Lithium-ion battery is:", options: ["Primary cell", "Secondary cell", "Fuel cell", "Electrolytic cell"], correctAnswer: 1, explanation: "Li-ion batteries are rechargeable (secondary cells)." },
      { id: 9, question: "Conductance is reciprocal of:", options: ["Capacitance", "Resistance", "Inductance", "Reactance"], correctAnswer: 1, explanation: "Conductance = 1/Resistance, unit is Siemens (S)." },
      { id: 10, question: "Electrolysis requires:", options: ["External electrical energy", "No energy", "Only heat", "Only light"], correctAnswer: 0, explanation: "Electrolysis uses external electricity to drive non-spontaneous reactions." }
    ],
    4: [ // Unit IV - Corrosion
      { id: 1, question: "Corrosion is:", options: ["Physical change", "Electrochemical degradation", "Nuclear reaction", "Photochemical reaction"], correctAnswer: 1, explanation: "Corrosion is electrochemical oxidation of metals." },
      { id: 2, question: "Rusting of iron requires:", options: ["Only oxygen", "Only water", "Oxygen and water", "Only heat"], correctAnswer: 2, explanation: "Iron rusting needs both oxygen and moisture." },
      { id: 3, question: "In galvanic corrosion, which metal corrodes?", options: ["More noble", "More active (anodic)", "Both equally", "Neither"], correctAnswer: 1, explanation: "More active (less noble) metal acts as anode and corrodes." },
      { id: 4, question: "Galvanization uses coating of:", options: ["Copper", "Zinc", "Silver", "Gold"], correctAnswer: 1, explanation: "Galvanization coats iron/steel with zinc for protection." },
      { id: 5, question: "Cathodic protection makes metal:", options: ["Anode", "Cathode", "Neutral", "Inert"], correctAnswer: 1, explanation: "Making metal cathodic prevents its oxidation (corrosion)." },
      { id: 6, question: "Pitting corrosion creates:", options: ["Uniform surface damage", "Localized deep pits", "No damage", "Color change only"], correctAnswer: 1, explanation: "Pitting produces small, deep holes that can cause failure." },
      { id: 7, question: "Passivation creates:", options: ["Active surface", "Protective oxide layer", "Rough surface", "Porous layer"], correctAnswer: 1, explanation: "Passivation forms protective oxide film (e.g., on stainless steel)." },
      { id: 8, question: "Sacrificial anode is:", options: ["More noble metal", "More active metal", "Same metal", "Non-metal"], correctAnswer: 1, explanation: "Sacrificial anode is more active, corrodes instead of protected metal." },
      { id: 9, question: "Stress corrosion requires:", options: ["Stress only", "Corrosive environment only", "Both stress and corrosive environment", "Neither"], correctAnswer: 2, explanation: "Stress corrosion cracking needs both tensile stress and corrosive medium." },
      { id: 10, question: "Impressed current protection uses:", options: ["No current", "External DC source", "AC current", "Natural current"], correctAnswer: 1, explanation: "Impressed current uses external DC to make structure cathodic." }
    ],
    5: [ // Unit V - Water Treatment
      { id: 1, question: "Hard water contains:", options: ["No minerals", "Ca²⁺ and Mg²⁺ ions", "Only NaCl", "Only organic matter"], correctAnswer: 1, explanation: "Hard water contains dissolved calcium and magnesium salts." },
      { id: 2, question: "Temporary hardness is due to:", options: ["Chlorides", "Bicarbonates", "Sulfates", "Nitrates"], correctAnswer: 1, explanation: "Temporary hardness: Ca/Mg bicarbonates (removed by boiling)." },
      { id: 3, question: "Permanent hardness is removed by:", options: ["Boiling", "Chemical treatment", "Cooling", "Heating only"], correctAnswer: 1, explanation: "Permanent hardness requires chemical softening methods." },
      { id: 4, question: "Ion exchange uses:", options: ["Filters only", "Resins that exchange ions", "Chemicals", "Heat"], correctAnswer: 1, explanation: "Ion exchange resins replace Ca/Mg with Na (softening)." },
      { id: 5, question: "Zeolite softening removes hardness by:", options: ["Precipitation", "Ion exchange", "Filtration", "Distillation"], correctAnswer: 1, explanation: "Zeolite (permutit) exchanges Na⁺ for Ca²⁺/Mg²⁺." },
      { id: 6, question: "EDTA is used to:", options: ["Kill bacteria", "Determine hardness", "Add hardness", "Remove chlorine"], correctAnswer: 1, explanation: "EDTA titration measures total hardness of water." },
      { id: 7, question: "Reverse osmosis works by:", options: ["Heating", "Pressure greater than osmotic pressure", "Cooling", "Adding chemicals"], correctAnswer: 1, explanation: "RO forces water through membrane using pressure > osmotic pressure." },
      { id: 8, question: "Chlorination is used for:", options: ["Softening", "Disinfection", "Hardness removal", "Color removal"], correctAnswer: 1, explanation: "Chlorination kills microorganisms in water." },
      { id: 9, question: "BOD measures:", options: ["Hardness", "Oxygen needed by microbes", "pH", "Color"], correctAnswer: 1, explanation: "BOD = Biochemical Oxygen Demand for organic decomposition." },
      { id: 10, question: "Boiler scale formation causes:", options: ["Better heat transfer", "Poor heat transfer, damage", "No effect", "Faster heating"], correctAnswer: 1, explanation: "Scale reduces heat transfer and can cause boiler failure." }
    ]
  },

  // Engineering Mechanics
  "eng-mechanics": {
    1: [ // Unit I - Force Systems
      { id: 1, question: "Force is a:", options: ["Scalar quantity", "Vector quantity", "Dimensionless", "Unit less"], correctAnswer: 1, explanation: "Force has both magnitude and direction, hence a vector." },
      { id: 2, question: "SI unit of force is:", options: ["kg", "Newton", "Joule", "Watt"], correctAnswer: 1, explanation: "Newton (N) is the SI unit of force." },
      { id: 3, question: "Resultant of two forces at 90° each of 3N and 4N:", options: ["7N", "1N", "5N", "12N"], correctAnswer: 2, explanation: "R = √(3² + 4²) = √25 = 5N" },
      { id: 4, question: "Parallelogram law is used for:", options: ["Single force", "Addition of two vectors", "Subtraction only", "Scalar quantities"], correctAnswer: 1, explanation: "Parallelogram law adds two vectors graphically." },
      { id: 5, question: "Moment of force is:", options: ["Force × distance perpendicular", "Force ÷ distance", "Force + distance", "Force only"], correctAnswer: 0, explanation: "Moment M = Force × perpendicular distance from axis." },
      { id: 6, question: "Couple consists of:", options: ["Single force", "Two equal parallel opposite forces", "Concurrent forces", "Collinear forces"], correctAnswer: 1, explanation: "Couple = two equal, opposite, parallel forces separated by distance." },
      { id: 7, question: "Varignon's theorem relates to:", options: ["Equilibrium", "Moments of forces", "Friction", "Energy"], correctAnswer: 1, explanation: "Moment of resultant = sum of moments of component forces." },
      { id: 8, question: "Free body diagram shows:", options: ["Only body", "Body with all external forces", "Only forces", "Only reactions"], correctAnswer: 1, explanation: "FBD isolates body and shows all forces acting on it." },
      { id: 9, question: "Concurrent forces:", options: ["Act at same point", "Act parallel", "Never meet", "Are always equal"], correctAnswer: 0, explanation: "Concurrent forces pass through a common point." },
      { id: 10, question: "Coplanar forces lie in:", options: ["Different planes", "Same plane", "No plane", "Perpendicular planes"], correctAnswer: 1, explanation: "Coplanar forces act in the same plane." }
    ],
    2: [ // Unit II - Equilibrium
      { id: 1, question: "For equilibrium, ΣF = ?", options: ["Maximum", "Minimum", "Zero", "Infinity"], correctAnswer: 2, explanation: "For equilibrium, sum of all forces = 0 (ΣF = 0)." },
      { id: 2, question: "Lami's theorem applies to:", options: ["Two forces", "Three concurrent forces in equilibrium", "Parallel forces", "Moments"], correctAnswer: 1, explanation: "Lami's theorem: three forces in equilibrium at a point." },
      { id: 3, question: "Conditions for equilibrium are:", options: ["ΣF = 0 only", "ΣM = 0 only", "ΣF = 0 and ΣM = 0", "Neither"], correctAnswer: 2, explanation: "Both force and moment equilibrium must be satisfied." },
      { id: 4, question: "Reaction at roller support is:", options: ["Horizontal only", "Perpendicular to surface", "At any angle", "Zero"], correctAnswer: 1, explanation: "Roller provides reaction normal to rolling surface." },
      { id: 5, question: "Fixed support provides:", options: ["Only vertical reaction", "Vertical, horizontal reaction, and moment", "Only moment", "No reaction"], correctAnswer: 1, explanation: "Fixed support restrains all movements (2 forces + 1 moment in 2D)." },
      { id: 6, question: "Pin joint provides:", options: ["Only one reaction", "Two force reactions", "Moment also", "No reaction"], correctAnswer: 1, explanation: "Pin joint provides two perpendicular force reactions (Hx, Vy)." },
      { id: 7, question: "Simply supported beam has:", options: ["Fixed ends", "One pin + one roller", "Both fixed", "No supports"], correctAnswer: 1, explanation: "Simple beam: pin support at one end, roller at other." },
      { id: 8, question: "Cantilever beam is:", options: ["Supported at both ends", "Fixed at one end, free at other", "Simply supported", "Hanging"], correctAnswer: 1, explanation: "Cantilever: one end fixed, other end free." },
      { id: 9, question: "Center of gravity is point where:", options: ["Force is zero", "Weight acts as single force", "No mass", "Velocity is zero"], correctAnswer: 1, explanation: "CG is point where entire weight can be considered concentrated." },
      { id: 10, question: "Stable equilibrium:", options: ["Returns to position if disturbed", "Stays in new position", "Falls over", "Is impossible"], correctAnswer: 0, explanation: "Stable: body returns to original position when displaced." }
    ],
    3: [ // Unit III - Friction
      { id: 1, question: "Friction force opposes:", options: ["Weight", "Normal reaction", "Relative motion", "Acceleration"], correctAnswer: 2, explanation: "Friction always opposes relative motion or tendency of motion." },
      { id: 2, question: "Static friction is:", options: ["Always constant", "Variable up to limiting value", "Always maximum", "Zero"], correctAnswer: 1, explanation: "Static friction varies from 0 to maximum (limiting) value." },
      { id: 3, question: "Limiting friction = ?", options: ["μN", "μ/N", "μ + N", "N/μ"], correctAnswer: 0, explanation: "Limiting friction F = μN (coefficient × normal reaction)." },
      { id: 4, question: "Coefficient of friction depends on:", options: ["Weight only", "Surface properties", "Speed only", "Temperature only"], correctAnswer: 1, explanation: "μ depends on nature and condition of contact surfaces." },
      { id: 5, question: "Angle of friction (φ) is:", options: ["tan⁻¹(μ)", "sin⁻¹(μ)", "cos⁻¹(μ)", "μ itself"], correctAnswer: 0, explanation: "Angle of friction φ = tan⁻¹(μ)." },
      { id: 6, question: "Kinetic friction is usually:", options: ["Greater than static", "Less than static", "Equal to static", "Zero"], correctAnswer: 1, explanation: "Kinetic friction < limiting static friction." },
      { id: 7, question: "Angle of repose equals:", options: ["90°", "Angle of friction", "Zero", "45°"], correctAnswer: 1, explanation: "Angle of repose = angle of friction (for impending motion)." },
      { id: 8, question: "Friction in belt drive:", options: ["Is harmful", "Helps power transmission", "Should be zero", "Causes slipping"], correctAnswer: 1, explanation: "Friction enables belts to transmit power between pulleys." },
      { id: 9, question: "Ladder friction problem involves:", options: ["Only one friction surface", "Friction at floor and wall", "No friction", "Air friction"], correctAnswer: 1, explanation: "Ladder typically has friction at both floor and wall." },
      { id: 10, question: "Rolling friction is:", options: ["Greater than sliding", "Much less than sliding", "Same as sliding", "Zero"], correctAnswer: 1, explanation: "Rolling friction << sliding friction (hence wheels are efficient)." }
    ],
    4: [ // Unit IV - Kinematics
      { id: 1, question: "Kinematics studies motion:", options: ["With forces", "Without considering forces", "Only forces", "Only energy"], correctAnswer: 1, explanation: "Kinematics describes motion geometry without force analysis." },
      { id: 2, question: "Displacement is:", options: ["Total distance", "Distance with direction", "Speed", "Acceleration"], correctAnswer: 1, explanation: "Displacement = shortest distance from initial to final position (vector)." },
      { id: 3, question: "For uniform velocity, acceleration = ?", options: ["Maximum", "Minimum", "Zero", "Variable"], correctAnswer: 2, explanation: "Constant velocity means no acceleration (a = 0)." },
      { id: 4, question: "v = u + at is equation for:", options: ["Velocity-time", "Displacement-time", "Variable acceleration", "Circular motion"], correctAnswer: 0, explanation: "This is the first equation of motion (constant acceleration)." },
      { id: 5, question: "s = ut + ½at² gives:", options: ["Velocity", "Displacement", "Acceleration", "Time"], correctAnswer: 1, explanation: "Second equation of motion gives displacement." },
      { id: 6, question: "v² = u² + 2as eliminates:", options: ["Displacement", "Velocity", "Time", "Acceleration"], correctAnswer: 2, explanation: "Third equation eliminates time from calculations." },
      { id: 7, question: "Projectile motion is:", options: ["Linear only", "Parabolic in uniform gravity", "Circular", "Straight up only"], correctAnswer: 1, explanation: "Projectile follows parabolic path under gravity." },
      { id: 8, question: "Maximum range of projectile is at angle:", options: ["30°", "45°", "60°", "90°"], correctAnswer: 1, explanation: "Maximum range occurs at 45° launch angle." },
      { id: 9, question: "In circular motion, centripetal acceleration = ?", options: ["v/r", "v²/r", "vr", "v²r"], correctAnswer: 1, explanation: "Centripetal acceleration = v²/r = ω²r toward center." },
      { id: 10, question: "Relative velocity of A w.r.t. B:", options: ["VA + VB", "VA - VB", "VA × VB", "VA / VB"], correctAnswer: 1, explanation: "Relative velocity V(A/B) = VA - VB." }
    ],
    5: [ // Unit V - Kinetics
      { id: 1, question: "Newton's second law: F = ?", options: ["mv", "ma", "m/a", "m + a"], correctAnswer: 1, explanation: "Force = mass × acceleration (F = ma)." },
      { id: 2, question: "Momentum = ?", options: ["m × v", "m × a", "m / v", "v / m"], correctAnswer: 0, explanation: "Linear momentum = mass × velocity (p = mv)." },
      { id: 3, question: "Impulse equals:", options: ["Change in velocity", "Change in momentum", "Force only", "Mass only"], correctAnswer: 1, explanation: "Impulse = F×t = change in momentum (Δp)." },
      { id: 4, question: "Work done = ?", options: ["F + s", "F × s × cosθ", "F / s", "F × s × sinθ"], correctAnswer: 1, explanation: "Work = Force × displacement × cos(angle between them)." },
      { id: 5, question: "Kinetic energy = ?", options: ["mgh", "½mv²", "mv", "ma"], correctAnswer: 1, explanation: "KE = ½ × mass × velocity²." },
      { id: 6, question: "Potential energy = ?", options: ["½mv²", "mgh", "mv", "ma"], correctAnswer: 1, explanation: "Gravitational PE = mass × g × height." },
      { id: 7, question: "Power = ?", options: ["Work × time", "Work / time", "Force × time", "Energy × time"], correctAnswer: 1, explanation: "Power = work done per unit time (P = W/t)." },
      { id: 8, question: "Conservation of momentum applies when:", options: ["External force is present", "No external force", "Always", "Never"], correctAnswer: 1, explanation: "Momentum conserved when net external force = 0." },
      { id: 9, question: "D'Alembert's principle converts dynamics to:", options: ["Thermodynamics", "Statics problem", "Fluid mechanics", "Nothing"], correctAnswer: 1, explanation: "D'Alembert: adds inertia force to treat as equilibrium." },
      { id: 10, question: "Work-energy theorem: Work done = ?", options: ["Change in PE", "Change in KE", "Total energy", "Zero"], correctAnswer: 1, explanation: "Net work = change in kinetic energy." }
    ]
  },

  // Basic Electronics
  "basic-electronics": {
    1: [ // Unit I - Semiconductor Devices
      { id: 1, question: "Intrinsic semiconductor is:", options: ["Heavily doped", "Pure semiconductor", "N-type", "P-type"], correctAnswer: 1, explanation: "Intrinsic = pure semiconductor without dopants." },
      { id: 2, question: "N-type semiconductor has majority carriers as:", options: ["Holes", "Electrons", "Protons", "Neutrons"], correctAnswer: 1, explanation: "N-type: doped with pentavalent impurity, electrons are majority." },
      { id: 3, question: "P-type semiconductor has majority carriers as:", options: ["Electrons", "Holes", "Protons", "Ions"], correctAnswer: 1, explanation: "P-type: doped with trivalent impurity, holes are majority." },
      { id: 4, question: "Depletion region is formed at:", options: ["Cathode", "Anode", "P-N junction", "Power supply"], correctAnswer: 2, explanation: "Depletion region forms at P-N junction due to diffusion." },
      { id: 5, question: "Forward bias makes diode:", options: ["Non-conducting", "Conducting", "Neutral", "Damaged"], correctAnswer: 1, explanation: "Forward bias reduces barrier, allowing current flow." },
      { id: 6, question: "Knee voltage of silicon diode is:", options: ["0.3V", "0.7V", "1.1V", "2V"], correctAnswer: 1, explanation: "Silicon diode forward voltage drop ≈ 0.7V." },
      { id: 7, question: "Germanium diode knee voltage is:", options: ["0.3V", "0.7V", "1.1V", "0.5V"], correctAnswer: 0, explanation: "Germanium diode forward voltage ≈ 0.3V." },
      { id: 8, question: "Zener diode operates in:", options: ["Forward bias", "Reverse breakdown", "Both", "Neither"], correctAnswer: 1, explanation: "Zener is designed to operate in reverse breakdown region." },
      { id: 9, question: "LED emits light when:", options: ["Reverse biased", "Forward biased", "Not connected", "Overheated"], correctAnswer: 1, explanation: "LED emits light when forward biased (recombination)." },
      { id: 10, question: "Photodiode converts:", options: ["Electricity to light", "Light to electricity", "Heat to light", "Sound to light"], correctAnswer: 1, explanation: "Photodiode generates current when exposed to light." }
    ],
    2: [ // Unit II - Diode Applications
      { id: 1, question: "Half-wave rectifier uses:", options: ["4 diodes", "2 diodes", "1 diode", "No diodes"], correctAnswer: 2, explanation: "Half-wave rectifier uses single diode." },
      { id: 2, question: "Full-wave rectifier efficiency is:", options: ["40.6%", "81.2%", "50%", "100%"], correctAnswer: 1, explanation: "Full-wave rectifier has 81.2% efficiency." },
      { id: 3, question: "Bridge rectifier uses:", options: ["1 diode", "2 diodes", "4 diodes", "6 diodes"], correctAnswer: 2, explanation: "Bridge rectifier uses 4 diodes." },
      { id: 4, question: "Filter capacitor reduces:", options: ["DC component", "Ripple", "All voltage", "None"], correctAnswer: 1, explanation: "Filter capacitor smooths output by reducing ripples." },
      { id: 5, question: "PIV in half-wave rectifier = ?", options: ["Vm", "2Vm", "Vm/2", "4Vm"], correctAnswer: 0, explanation: "PIV for half-wave = Vm (peak secondary voltage)." },
      { id: 6, question: "Ripple factor for half-wave rectifier:", options: ["0.482", "1.21", "0.707", "1.414"], correctAnswer: 1, explanation: "Ripple factor for HWR ≈ 1.21 (121%)." },
      { id: 7, question: "Zener diode is used for:", options: ["Amplification", "Voltage regulation", "Rectification", "Oscillation"], correctAnswer: 1, explanation: "Zener maintains constant voltage - voltage regulator." },
      { id: 8, question: "Clipper circuit:", options: ["Amplifies signal", "Clips portion of waveform", "Rectifies AC", "Filters noise"], correctAnswer: 1, explanation: "Clipper removes/clips portions of input waveform." },
      { id: 9, question: "Clamper circuit:", options: ["Clips signal", "Shifts DC level", "Rectifies AC", "Amplifies"], correctAnswer: 1, explanation: "Clamper adds DC level to AC signal (DC restorer)." },
      { id: 10, question: "Voltage multiplier uses:", options: ["Inductors only", "Diodes and capacitors", "Resistors only", "Transformers only"], correctAnswer: 1, explanation: "Voltage multiplier uses diode-capacitor ladders." }
    ],
    3: [ // Unit III - Transistors
      { id: 1, question: "BJT has how many terminals?", options: ["2", "3", "4", "5"], correctAnswer: 1, explanation: "BJT has 3 terminals: Base, Collector, Emitter." },
      { id: 2, question: "In NPN transistor, current flows:", options: ["E to B to C", "C to B to E", "B to E to C", "E to C to B"], correctAnswer: 0, explanation: "Conventional current: Emitter → Base → Collector in NPN." },
      { id: 3, question: "α (alpha) of transistor = ?", options: ["IC/IE", "IC/IB", "IE/IC", "IB/IC"], correctAnswer: 0, explanation: "α = IC/IE (common base current gain)." },
      { id: 4, question: "β (beta) of transistor = ?", options: ["IC/IE", "IC/IB", "IB/IC", "IE/IB"], correctAnswer: 1, explanation: "β = IC/IB (common emitter current gain)." },
      { id: 5, question: "Relation between α and β:", options: ["β = α/(1-α)", "α = β/(1-β)", "α = β", "β = 1/α"], correctAnswer: 0, explanation: "β = α/(1-α) or α = β/(1+β)." },
      { id: 6, question: "CE configuration gives:", options: ["Voltage gain only", "Current gain only", "Both voltage and current gain", "No gain"], correctAnswer: 2, explanation: "Common Emitter provides both voltage and current gain." },
      { id: 7, question: "FET is a:", options: ["Current controlled device", "Voltage controlled device", "Power device", "Passive device"], correctAnswer: 1, explanation: "FET is voltage controlled (by gate voltage)." },
      { id: 8, question: "MOSFET has:", options: ["2 types only", "Enhancement and depletion types", "Only enhancement", "Only depletion"], correctAnswer: 1, explanation: "MOSFET comes in enhancement and depletion modes." },
      { id: 9, question: "Transistor in saturation acts as:", options: ["Open switch", "Closed switch", "Amplifier", "Oscillator"], correctAnswer: 1, explanation: "Saturation: transistor fully ON (switch closed)." },
      { id: 10, question: "Transistor in cutoff acts as:", options: ["Open switch", "Closed switch", "Amplifier", "Oscillator"], correctAnswer: 0, explanation: "Cutoff: transistor fully OFF (switch open)." }
    ],
    4: [ // Unit IV - Amplifiers
      { id: 1, question: "Amplifier increases:", options: ["Frequency", "Signal strength", "Resistance", "Capacitance"], correctAnswer: 1, explanation: "Amplifier increases amplitude/power of input signal." },
      { id: 2, question: "CE amplifier has phase shift of:", options: ["0°", "90°", "180°", "360°"], correctAnswer: 2, explanation: "Common Emitter amplifier inverts signal (180° phase shift)." },
      { id: 3, question: "Voltage gain Av = ?", options: ["Vin/Vout", "Vout/Vin", "Vout + Vin", "Vout × Vin"], correctAnswer: 1, explanation: "Voltage gain = Output voltage / Input voltage." },
      { id: 4, question: "dB = ?", options: ["10 log(Pout/Pin)", "20 log(Vout/Vin)", "Both A and B", "Neither"], correctAnswer: 2, explanation: "dB = 20log(voltage ratio) = 10log(power ratio)." },
      { id: 5, question: "Negative feedback:", options: ["Increases gain", "Stabilizes gain", "Removes signal", "None"], correctAnswer: 1, explanation: "Negative feedback reduces but stabilizes gain." },
      { id: 6, question: "Bandwidth of amplifier with feedback:", options: ["Decreases", "Increases", "Stays same", "Becomes zero"], correctAnswer: 1, explanation: "Negative feedback increases bandwidth (gain-bandwidth trade-off)." },
      { id: 7, question: "Op-amp has:", options: ["1 input", "2 inputs", "3 inputs", "No inputs"], correctAnswer: 1, explanation: "Op-amp has two inputs: inverting (-) and non-inverting (+)." },
      { id: 8, question: "Ideal op-amp gain is:", options: ["Zero", "Unity", "Finite", "Infinite"], correctAnswer: 3, explanation: "Ideal op-amp has infinite open-loop gain." },
      { id: 9, question: "Op-amp inverting amplifier gain = ?", options: ["-Rf/Rin", "Rf/Rin", "1 + Rf/Rin", "Rin/Rf"], correctAnswer: 0, explanation: "Inverting amplifier: Av = -Rf/Rin (negative = inversion)." },
      { id: 10, question: "Op-amp non-inverting gain = ?", options: ["-Rf/Rin", "Rf/Rin", "1 + Rf/Rin", "-1 - Rf/Rin"], correctAnswer: 2, explanation: "Non-inverting amplifier: Av = 1 + Rf/Rin." }
    ],
    5: [ // Unit V - Digital Electronics
      { id: 1, question: "Binary number system base is:", options: ["8", "10", "2", "16"], correctAnswer: 2, explanation: "Binary uses base 2 (only 0 and 1)." },
      { id: 2, question: "1010 binary = decimal?", options: ["8", "10", "12", "5"], correctAnswer: 1, explanation: "1010 = 8+0+2+0 = 10 in decimal." },
      { id: 3, question: "AND gate output is 1 when:", options: ["Any input is 1", "All inputs are 1", "Any input is 0", "All inputs are 0"], correctAnswer: 1, explanation: "AND: output = 1 only when ALL inputs = 1." },
      { id: 4, question: "OR gate output is 0 when:", options: ["Any input is 1", "All inputs are 1", "Any input is 0", "All inputs are 0"], correctAnswer: 3, explanation: "OR: output = 0 only when ALL inputs = 0." },
      { id: 5, question: "NOT gate:", options: ["Has 2 inputs", "Inverts input", "Amplifies input", "Has no output"], correctAnswer: 1, explanation: "NOT gate inverts: 0→1 and 1→0." },
      { id: 6, question: "NAND gate is:", options: ["AND + NOT", "OR + NOT", "AND only", "OR only"], correctAnswer: 0, explanation: "NAND = NOT + AND (universal gate)." },
      { id: 7, question: "XOR gives 1 when inputs are:", options: ["Same", "Different", "Both 0", "Both 1"], correctAnswer: 1, explanation: "XOR: output = 1 when inputs are different." },
      { id: 8, question: "Universal gates are:", options: ["AND, OR", "NAND, NOR", "NOT, AND", "XOR, XNOR"], correctAnswer: 1, explanation: "NAND and NOR can implement any logic function." },
      { id: 9, question: "Flip-flop is:", options: ["Combinational circuit", "Sequential memory element", "Amplifier", "Oscillator"], correctAnswer: 1, explanation: "Flip-flop stores 1 bit (sequential circuit with memory)." },
      { id: 10, question: "Counter is used for:", options: ["Amplification", "Counting pulses", "Rectification", "Filtering"], correctAnswer: 1, explanation: "Counter counts input pulses and stores count." }
    ]
  },

  // Mathematics-I
  "math-1": {
    1: [ // Unit I - Matrices & Linear Algebra
      { id: 1, question: "A square matrix with all diagonal elements 1 and rest 0:", options: ["Null matrix", "Identity matrix", "Scalar matrix", "Symmetric matrix"], correctAnswer: 1, explanation: "Identity matrix I has 1s on diagonal, 0s elsewhere." },
      { id: 2, question: "If A = Aᵀ, matrix is:", options: ["Skew-symmetric", "Symmetric", "Orthogonal", "Singular"], correctAnswer: 1, explanation: "Symmetric matrix equals its transpose." },
      { id: 3, question: "Determinant of identity matrix:", options: ["0", "1", "-1", "n"], correctAnswer: 1, explanation: "|I| = 1 always." },
      { id: 4, question: "If |A| = 0, matrix is:", options: ["Non-singular", "Singular", "Identity", "Orthogonal"], correctAnswer: 1, explanation: "Singular matrix has determinant = 0, no inverse." },
      { id: 5, question: "Rank of matrix is:", options: ["Number of rows", "Number of columns", "Number of linearly independent rows/columns", "Determinant"], correctAnswer: 2, explanation: "Rank = maximum number of linearly independent rows (or columns)." },
      { id: 6, question: "For Ax = 0, trivial solution means:", options: ["x ≠ 0", "x = 0", "Infinite solutions", "No solution"], correctAnswer: 1, explanation: "Trivial solution: all variables = 0." },
      { id: 7, question: "Eigenvalue equation is:", options: ["Ax = x", "Ax = λx", "A = λI", "x = λA"], correctAnswer: 1, explanation: "Eigenvalue equation: Ax = λx" },
      { id: 8, question: "Characteristic equation is formed from:", options: ["|A|", "|A - λI| = 0", "|A + λI| = 0", "A = λ"], correctAnswer: 1, explanation: "Characteristic equation: det(A - λI) = 0" },
      { id: 9, question: "Cayley-Hamilton theorem states:", options: ["Every matrix satisfies its characteristic equation", "A = Aᵀ", "A² = I", "|A| = 0"], correctAnswer: 0, explanation: "A matrix satisfies its own characteristic polynomial." },
      { id: 10, question: "Orthogonal matrix satisfies:", options: ["AAᵀ = I", "A = Aᵀ", "|A| = 0", "A² = A"], correctAnswer: 0, explanation: "For orthogonal matrix: AAᵀ = AᵀA = I" }
    ],
    2: [ // Unit II - Differential Calculus
      { id: 1, question: "Limit of sin(x)/x as x→0:", options: ["0", "1", "∞", "Does not exist"], correctAnswer: 1, explanation: "lim(x→0) sin(x)/x = 1 (fundamental limit)." },
      { id: 2, question: "Derivative of xⁿ:", options: ["nxⁿ", "nxⁿ⁻¹", "xⁿ⁻¹", "nxⁿ⁺¹"], correctAnswer: 1, explanation: "d/dx(xⁿ) = nxⁿ⁻¹ (power rule)." },
      { id: 3, question: "Derivative of eˣ:", options: ["xeˣ⁻¹", "eˣ", "1", "eˣ⁻¹"], correctAnswer: 1, explanation: "d/dx(eˣ) = eˣ (exponential is its own derivative)." },
      { id: 4, question: "Derivative of ln(x):", options: ["1/x", "x", "ln(x)/x", "e^x"], correctAnswer: 0, explanation: "d/dx(ln x) = 1/x" },
      { id: 5, question: "L'Hopital's rule applies to:", options: ["All limits", "0/0 or ∞/∞ forms", "Continuous functions only", "Polynomials only"], correctAnswer: 1, explanation: "L'Hopital applies to indeterminate forms 0/0 or ∞/∞." },
      { id: 6, question: "Maclaurin series is Taylor series at:", options: ["x = 1", "x = 0", "x = ∞", "x = -1"], correctAnswer: 1, explanation: "Maclaurin series is Taylor series expanded about x = 0." },
      { id: 7, question: "For maxima, f''(x):", options: ["= 0", "> 0", "< 0", "= f'(x)"], correctAnswer: 2, explanation: "At maximum, f''(x) < 0 (concave down)." },
      { id: 8, question: "For minima, f''(x):", options: ["= 0", "> 0", "< 0", "Does not exist"], correctAnswer: 1, explanation: "At minimum, f''(x) > 0 (concave up)." },
      { id: 9, question: "Chain rule for d/dx[f(g(x))]:", options: ["f'(x)g'(x)", "f'(g(x))·g'(x)", "f(g'(x))", "f'(x) + g'(x)"], correctAnswer: 1, explanation: "Chain rule: d/dx[f(g(x))] = f'(g(x)) × g'(x)" },
      { id: 10, question: "Partial derivative ∂f/∂x treats:", options: ["x as constant", "y as constant", "All variables constant", "Nothing constant"], correctAnswer: 1, explanation: "Partial derivative with respect to x treats other variables as constants." }
    ],
    3: [ // Unit III - Integral Calculus
      { id: 1, question: "∫xⁿ dx = ?", options: ["xⁿ⁺¹/(n+1) + C", "nxⁿ⁻¹ + C", "xⁿ + C", "xⁿ/(n+1) + C"], correctAnswer: 0, explanation: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ -1)." },
      { id: 2, question: "∫eˣ dx = ?", options: ["xeˣ + C", "eˣ + C", "eˣ/x + C", "eˣ⁻¹ + C"], correctAnswer: 1, explanation: "∫eˣ dx = eˣ + C" },
      { id: 3, question: "∫(1/x) dx = ?", options: ["ln|x| + C", "1/x² + C", "-1/x + C", "x + C"], correctAnswer: 0, explanation: "∫(1/x) dx = ln|x| + C" },
      { id: 4, question: "Integration by parts formula:", options: ["∫u dv = uv - ∫v du", "∫u dv = uv + ∫v du", "∫u dv = u + v", "∫u dv = uv"], correctAnswer: 0, explanation: "∫u dv = uv - ∫v du (integration by parts)." },
      { id: 5, question: "Definite integral gives:", options: ["Function", "Number", "Derivative", "Indefinite integral"], correctAnswer: 1, explanation: "Definite integral ∫ₐᵇf(x)dx gives a numerical value." },
      { id: 6, question: "∫sin(x) dx = ?", options: ["cos(x) + C", "-cos(x) + C", "sin(x) + C", "-sin(x) + C"], correctAnswer: 1, explanation: "∫sin(x) dx = -cos(x) + C" },
      { id: 7, question: "∫cos(x) dx = ?", options: ["sin(x) + C", "-sin(x) + C", "cos(x) + C", "-cos(x) + C"], correctAnswer: 0, explanation: "∫cos(x) dx = sin(x) + C" },
      { id: 8, question: "Area under curve y = f(x) is:", options: ["∫f(x)dx", "f'(x)", "f(x)", "d/dx f(x)"], correctAnswer: 0, explanation: "Area = ∫ₐᵇ f(x) dx (definite integral)." },
      { id: 9, question: "Substitution u = g(x) requires:", options: ["du = g(x)dx", "du = g'(x)dx", "du = dx", "No change"], correctAnswer: 1, explanation: "If u = g(x), then du = g'(x)dx." },
      { id: 10, question: "∫₋ₐᵃ f(x)dx = 0 if f(x) is:", options: ["Even function", "Odd function", "Constant", "Polynomial"], correctAnswer: 1, explanation: "Integral of odd function over symmetric interval = 0." }
    ],
    4: [ // Unit IV - Differential Equations
      { id: 1, question: "Order of DE is:", options: ["Degree of highest derivative", "Order of highest derivative", "Number of terms", "Coefficient"], correctAnswer: 1, explanation: "Order = order of highest derivative in the equation." },
      { id: 2, question: "First order linear DE form:", options: ["dy/dx + Py = Q", "d²y/dx² + y = 0", "y = mx + c", "y' + y'' = 0"], correctAnswer: 0, explanation: "Linear first order: dy/dx + P(x)y = Q(x)" },
      { id: 3, question: "Integrating factor for dy/dx + Py = Q:", options: ["e^(∫Pdx)", "e^P", "∫Pdx", "P"], correctAnswer: 0, explanation: "IF = e^(∫P dx)" },
      { id: 4, question: "Separable equation can be written as:", options: ["f(x)dx = g(y)dy", "f(x) + g(y) = 0", "xy = c", "dy/dx = x + y"], correctAnswer: 0, explanation: "Separable: M(x)dx + N(y)dy = 0" },
      { id: 5, question: "Homogeneous DE of degree n: f(tx,ty) = ?", options: ["tⁿf(x,y)", "f(x,y)", "t⁻ⁿf(x,y)", "nf(x,y)"], correctAnswer: 0, explanation: "Homogeneous function: f(tx,ty) = tⁿf(x,y)" },
      { id: 6, question: "Solution of dy/dx = ky is:", options: ["y = ekx", "y = Ce^(kx)", "y = kx", "y = x + k"], correctAnswer: 1, explanation: "Exponential growth/decay: y = Ce^(kx)" },
      { id: 7, question: "Complementary function (CF) solves:", options: ["Complete equation", "Homogeneous part only", "Particular part", "None"], correctAnswer: 1, explanation: "CF is solution of homogeneous equation (RHS = 0)." },
      { id: 8, question: "General solution = ?", options: ["CF only", "PI only", "CF + PI", "CF × PI"], correctAnswer: 2, explanation: "General solution = Complementary Function + Particular Integral." },
      { id: 9, question: "For d²y/dx² + y = 0, auxiliary equation:", options: ["m + 1 = 0", "m² + 1 = 0", "m² - 1 = 0", "m = 0"], correctAnswer: 1, explanation: "Replace d²y/dx² with m²: m² + 1 = 0" },
      { id: 10, question: "If roots are complex a±bi, solution involves:", options: ["e^ax only", "e^ax(cos bx, sin bx)", "ax + b", "cos(ax)"], correctAnswer: 1, explanation: "Complex roots: y = e^(ax)(C₁cos(bx) + C₂sin(bx))" }
    ],
    5: [ // Unit V - Vector Calculus
      { id: 1, question: "Gradient of scalar field φ is:", options: ["Scalar", "Vector", "Matrix", "Tensor"], correctAnswer: 1, explanation: "Gradient ∇φ is a vector pointing in direction of maximum increase." },
      { id: 2, question: "Divergence of vector field F is:", options: ["Vector", "Scalar", "Zero always", "Undefined"], correctAnswer: 1, explanation: "Divergence ∇·F is a scalar measuring outward flux." },
      { id: 3, question: "Curl of vector field F is:", options: ["Scalar", "Vector", "Zero always", "Gradient"], correctAnswer: 1, explanation: "Curl ∇×F is a vector measuring rotation." },
      { id: 4, question: "∇²φ is called:", options: ["Gradient", "Divergence", "Laplacian", "Curl"], correctAnswer: 2, explanation: "Laplacian ∇²φ = div(grad φ) = ∂²φ/∂x² + ∂²φ/∂y² + ∂²φ/∂z²" },
      { id: 5, question: "If ∇×F = 0, field is:", options: ["Solenoidal", "Irrotational", "Zero", "Undefined"], correctAnswer: 1, explanation: "Zero curl means irrotational (conservative) field." },
      { id: 6, question: "If ∇·F = 0, field is:", options: ["Irrotational", "Solenoidal", "Zero", "Conservative"], correctAnswer: 1, explanation: "Zero divergence means solenoidal (incompressible) field." },
      { id: 7, question: "Line integral ∫F·dr gives:", options: ["Area", "Work done", "Volume", "Surface area"], correctAnswer: 1, explanation: "∫F·dr represents work done by force F along path." },
      { id: 8, question: "Green's theorem relates:", options: ["Volume and surface", "Line and area integrals", "Gradient and curl", "None"], correctAnswer: 1, explanation: "Green's theorem: ∮F·dr = ∬(∂Q/∂x - ∂P/∂y)dA" },
      { id: 9, question: "Stokes' theorem relates:", options: ["Line and surface integrals", "Volume and surface", "Two line integrals", "Two surface integrals"], correctAnswer: 0, explanation: "Stokes': ∮F·dr = ∬(∇×F)·dS (line ↔ surface)" },
      { id: 10, question: "Gauss divergence theorem relates:", options: ["Line and area", "Surface and volume integrals", "Two volumes", "Curl and divergence"], correctAnswer: 1, explanation: "Gauss: ∬F·dS = ∭(∇·F)dV (surface ↔ volume)" }
    ]
  },

  // PPS - Programming for Problem Solving
  "pps": {
    1: [ // Unit I - Introduction to Programming
      { id: 1, question: "C language was developed by:", options: ["James Gosling", "Dennis Ritchie", "Bjarne Stroustrup", "Guido van Rossum"], correctAnswer: 1, explanation: "Dennis Ritchie developed C at Bell Labs in 1972." },
      { id: 2, question: "C is a:", options: ["Low-level language", "High-level language", "Middle-level language", "Machine language"], correctAnswer: 2, explanation: "C is middle-level (combines high and low-level features)." },
      { id: 3, question: "Every C program must have:", options: ["printf()", "scanf()", "main()", "return"], correctAnswer: 2, explanation: "main() is the entry point of every C program." },
      { id: 4, question: "Header file for printf is:", options: ["conio.h", "stdio.h", "stdlib.h", "string.h"], correctAnswer: 1, explanation: "stdio.h contains standard I/O functions like printf, scanf." },
      { id: 5, question: "Variable declaration includes:", options: ["Only name", "Only type", "Type and name", "Only value"], correctAnswer: 2, explanation: "Declaration specifies both data type and variable name." },
      { id: 6, question: "int holds:", options: ["Decimal numbers", "Integer numbers", "Characters", "Strings"], correctAnswer: 1, explanation: "int data type stores whole numbers (integers)." },
      { id: 7, question: "Character constant is enclosed in:", options: ["Double quotes", "Single quotes", "Square brackets", "Parentheses"], correctAnswer: 1, explanation: "Character constants use single quotes: 'A'" },
      { id: 8, question: "sizeof(int) in 32-bit system is usually:", options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"], correctAnswer: 2, explanation: "int is typically 4 bytes on 32-bit systems." },
      { id: 9, question: "// is used for:", options: ["Multi-line comment", "Single-line comment", "Printing", "Division"], correctAnswer: 1, explanation: "// starts a single-line comment in C." },
      { id: 10, question: "= operator is for:", options: ["Comparison", "Assignment", "Addition", "Declaration"], correctAnswer: 1, explanation: "= is the assignment operator." }
    ],
    2: [ // Unit II - Control Statements
      { id: 1, question: "if statement executes code when condition is:", options: ["False", "True (non-zero)", "Zero", "Negative"], correctAnswer: 1, explanation: "if executes when condition is non-zero (true)." },
      { id: 2, question: "else is used with:", options: ["while", "for", "if", "switch"], correctAnswer: 2, explanation: "else provides alternative when if condition is false." },
      { id: 3, question: "switch statement uses:", options: ["float values", "Integer/char values", "Strings", "Arrays"], correctAnswer: 1, explanation: "switch works with int, char, and enumeration types." },
      { id: 4, question: "break in switch:", options: ["Continues to next case", "Exits switch block", "Repeats case", "Does nothing"], correctAnswer: 1, explanation: "break exits the switch statement." },
      { id: 5, question: "for(i=0; i<5; i++) runs:", options: ["4 times", "5 times", "6 times", "Infinite"], correctAnswer: 1, explanation: "Runs for i = 0,1,2,3,4 (5 times)." },
      { id: 6, question: "while loop checks condition:", options: ["At end", "At beginning", "Never", "In middle"], correctAnswer: 1, explanation: "while is entry-controlled (checks before execution)." },
      { id: 7, question: "do-while executes at least:", options: ["Zero times", "One time", "Two times", "Infinite times"], correctAnswer: 1, explanation: "do-while is exit-controlled (executes once minimum)." },
      { id: 8, question: "continue statement:", options: ["Exits loop", "Skips to next iteration", "Terminates program", "Does nothing"], correctAnswer: 1, explanation: "continue skips remaining code and starts next iteration." },
      { id: 9, question: "Nested loop means:", options: ["Adjacent loops", "Loop inside loop", "No loops", "Sequential loops"], correctAnswer: 1, explanation: "Nested loop: one loop inside another." },
      { id: 10, question: "default in switch:", options: ["Must be first", "Executes when no case matches", "Is required", "Must have break"], correctAnswer: 1, explanation: "default handles unmatched cases (optional)." }
    ],
    3: [ // Unit III - Arrays & Strings
      { id: 1, question: "Array index in C starts from:", options: ["1", "0", "-1", "Any number"], correctAnswer: 1, explanation: "C arrays are 0-indexed (first element at index 0)." },
      { id: 2, question: "int arr[5] allocates:", options: ["5 bytes", "10 bytes", "20 bytes", "40 bytes"], correctAnswer: 2, explanation: "5 integers × 4 bytes each = 20 bytes." },
      { id: 3, question: "2D array declaration:", options: ["int arr[][]", "int arr[3][4]", "int arr[3,4]", "int arr{3}{4}"], correctAnswer: 1, explanation: "2D array: type name[rows][columns]" },
      { id: 4, question: "String in C is:", options: ["int array", "char array", "float array", "void array"], correctAnswer: 1, explanation: "String is array of characters ending with '\\0'." },
      { id: 5, question: "String terminator is:", options: ["'\\0'", "'\\n'", "'0'", "' '"], correctAnswer: 0, explanation: "Null character '\\0' terminates C strings." },
      { id: 6, question: "strlen() returns:", options: ["With null", "Without null character", "Total memory", "First character"], correctAnswer: 1, explanation: "strlen() returns length excluding null terminator." },
      { id: 7, question: "strcpy(dest, src) copies:", options: ["dest to src", "src to dest", "Both ways", "Nothing"], correctAnswer: 1, explanation: "strcpy copies source string to destination." },
      { id: 8, question: "strcmp returns 0 when:", options: ["Strings are different", "Strings are equal", "First is greater", "First is smaller"], correctAnswer: 1, explanation: "strcmp returns 0 when strings are identical." },
      { id: 9, question: "gets() is used to:", options: ["Print string", "Read string with spaces", "Compare strings", "Copy strings"], correctAnswer: 1, explanation: "gets() reads entire line including spaces." },
      { id: 10, question: "strcat() does:", options: ["Comparison", "Concatenation", "Copying", "Length calculation"], correctAnswer: 1, explanation: "strcat() appends source to end of destination string." }
    ],
    4: [ // Unit IV - Functions & Pointers
      { id: 1, question: "Function definition includes:", options: ["Declaration only", "Body only", "Both declaration and body", "Neither"], correctAnswer: 2, explanation: "Definition has return type, name, parameters, and body." },
      { id: 2, question: "Function returns value using:", options: ["break", "return", "continue", "exit"], correctAnswer: 1, explanation: "return statement sends value back to caller." },
      { id: 3, question: "Call by value:", options: ["Passes address", "Passes copy", "Modifies original", "Uses pointers"], correctAnswer: 1, explanation: "Call by value passes copy of variable (original unchanged)." },
      { id: 4, question: "Call by reference uses:", options: ["Values", "Pointers/addresses", "Constants", "Void"], correctAnswer: 1, explanation: "Call by reference passes address (can modify original)." },
      { id: 5, question: "Recursion is:", options: ["Loop inside loop", "Function calling itself", "Multiple functions", "Array function"], correctAnswer: 1, explanation: "Recursion: function calls itself." },
      { id: 6, question: "Pointer stores:", options: ["Value", "Memory address", "Character", "Float"], correctAnswer: 1, explanation: "Pointer variable holds memory address of another variable." },
      { id: 7, question: "int *p declares:", options: ["Integer", "Pointer to integer", "Array", "Function"], correctAnswer: 1, explanation: "int *p declares pointer to integer." },
      { id: 8, question: "&x gives:", options: ["Value of x", "Address of x", "Pointer to x", "Size of x"], correctAnswer: 1, explanation: "& (address-of operator) returns variable's address." },
      { id: 9, question: "*p (when p is pointer) gives:", options: ["Address", "Value at that address", "Size", "Type"], correctAnswer: 1, explanation: "* (dereference) gives value at pointer's address." },
      { id: 10, question: "NULL pointer points to:", options: ["First memory", "Last memory", "Nothing/zero address", "Stack"], correctAnswer: 2, explanation: "NULL pointer doesn't point to any valid memory." }
    ],
    5: [ // Unit V - Structures & File Handling
      { id: 1, question: "Structure groups:", options: ["Same type data", "Different type data", "Only integers", "Only characters"], correctAnswer: 1, explanation: "Structure can contain members of different data types." },
      { id: 2, question: "struct keyword is used to:", options: ["Declare array", "Define structure", "Create pointer", "Make function"], correctAnswer: 1, explanation: "struct defines a user-defined composite data type." },
      { id: 3, question: "Structure member is accessed using:", options: ["*", "&", ". (dot)", "->"], correctAnswer: 2, explanation: "Dot operator (.) accesses structure members." },
      { id: 4, question: "Arrow operator (->) is used with:", options: ["Structure variable", "Structure pointer", "Array", "Function"], correctAnswer: 1, explanation: "-> accesses members through structure pointer." },
      { id: 5, question: "sizeof(struct) includes:", options: ["Only first member", "All members with padding", "Without padding", "Only largest member"], correctAnswer: 1, explanation: "sizeof includes all members plus any padding bytes." },
      { id: 6, question: "fopen() returns:", options: ["Integer", "Character", "File pointer", "Void"], correctAnswer: 2, explanation: "fopen() returns FILE pointer (NULL if failed)." },
      { id: 7, question: "\"r\" mode opens file for:", options: ["Writing", "Reading", "Appending", "Reading and writing"], correctAnswer: 1, explanation: "\"r\" opens existing file for reading only." },
      { id: 8, question: "\"w\" mode:", options: ["Appends to file", "Creates/overwrites file", "Reads file", "Does nothing"], correctAnswer: 1, explanation: "\"w\" creates new file or overwrites existing." },
      { id: 9, question: "fclose() is used to:", options: ["Open file", "Close file", "Delete file", "Read file"], correctAnswer: 1, explanation: "fclose() closes an opened file." },
      { id: 10, question: "fprintf() writes to:", options: ["Console", "File", "Memory", "Printer"], correctAnswer: 1, explanation: "fprintf() writes formatted output to file." }
    ]
  },

  // EVS - Environmental Studies
  "evs": {
    1: [ // Unit I - Environment & Ecosystem
      { id: 1, question: "Environment includes:", options: ["Only living things", "Only non-living things", "Both living and non-living", "Only air"], correctAnswer: 2, explanation: "Environment = biotic (living) + abiotic (non-living) components." },
      { id: 2, question: "Ecosystem is:", options: ["Only organisms", "Only environment", "Organisms interacting with environment", "Only producers"], correctAnswer: 2, explanation: "Ecosystem = community of organisms + their physical environment." },
      { id: 3, question: "Producers in ecosystem are:", options: ["Animals", "Green plants", "Bacteria only", "Fungi"], correctAnswer: 1, explanation: "Producers (autotrophs) make own food through photosynthesis." },
      { id: 4, question: "Consumers depend on:", options: ["Sunlight directly", "Other organisms for food", "Air only", "Water only"], correctAnswer: 1, explanation: "Consumers (heterotrophs) eat other organisms." },
      { id: 5, question: "Decomposers are:", options: ["Plants", "Animals", "Bacteria and fungi", "Viruses"], correctAnswer: 2, explanation: "Decomposers break down dead organic matter." },
      { id: 6, question: "Food chain shows:", options: ["Random eating", "Energy flow in one direction", "Circular flow", "No flow"], correctAnswer: 1, explanation: "Food chain shows linear flow of energy." },
      { id: 7, question: "Food web is:", options: ["Single food chain", "Interconnected food chains", "No connection", "Only consumers"], correctAnswer: 1, explanation: "Food web = multiple interconnected food chains." },
      { id: 8, question: "Energy decreases at each trophic level by:", options: ["50%", "90%", "10%", "100%"], correctAnswer: 1, explanation: "Only ~10% energy transfers to next level (10% rule)." },
      { id: 9, question: "Ecological pyramid shows:", options: ["Random data", "Relationship between trophic levels", "Only plants", "Only animals"], correctAnswer: 1, explanation: "Ecological pyramids show numbers, biomass, or energy at each level." },
      { id: 10, question: "Biosphere includes:", options: ["Only land", "Only water", "All ecosystems on Earth", "Only air"], correctAnswer: 2, explanation: "Biosphere = sum of all ecosystems (life zone of Earth)." }
    ],
    2: [ // Unit II - Natural Resources
      { id: 1, question: "Renewable resources are:", options: ["Coal, oil", "Solar, wind", "Minerals", "Fossil fuels"], correctAnswer: 1, explanation: "Renewable resources can be replenished naturally." },
      { id: 2, question: "Non-renewable resources are:", options: ["Sunlight, water", "Coal, petroleum", "Wind, biomass", "Forests"], correctAnswer: 1, explanation: "Non-renewable resources take millions of years to form." },
      { id: 3, question: "Forest resources provide:", options: ["Only timber", "Only oxygen", "Timber, oxygen, biodiversity, etc.", "Nothing"], correctAnswer: 2, explanation: "Forests provide multiple ecosystem services." },
      { id: 4, question: "Water covers approximately __ of Earth:", options: ["50%", "71%", "90%", "30%"], correctAnswer: 1, explanation: "About 71% of Earth's surface is covered by water." },
      { id: 5, question: "Groundwater is:", options: ["Surface water", "Water below Earth's surface", "Rain water", "Sea water"], correctAnswer: 1, explanation: "Groundwater is water stored underground in aquifers." },
      { id: 6, question: "Overexploitation leads to:", options: ["More resources", "Resource depletion", "No effect", "Balanced ecosystem"], correctAnswer: 1, explanation: "Overexploitation depletes resources faster than replenishment." },
      { id: 7, question: "Mineral resources are:", options: ["Renewable", "Non-renewable", "Unlimited", "Artificial"], correctAnswer: 1, explanation: "Minerals take geological time to form - non-renewable." },
      { id: 8, question: "Solar energy is:", options: ["Non-renewable", "Clean and renewable", "Polluting", "Expensive only"], correctAnswer: 1, explanation: "Solar is clean, renewable, and inexhaustible." },
      { id: 9, question: "Energy conservation means:", options: ["Wasting energy", "Using energy efficiently", "Not using energy", "Producing more"], correctAnswer: 1, explanation: "Conservation = using resources wisely without waste." },
      { id: 10, question: "Land degradation results from:", options: ["Afforestation", "Soil erosion, pollution", "Conservation", "Rainfall"], correctAnswer: 1, explanation: "Land degradation: erosion, pollution, over-cultivation." }
    ],
    3: [ // Unit III - Biodiversity
      { id: 1, question: "Biodiversity means:", options: ["Only species", "Variety of life forms", "Single species", "No life"], correctAnswer: 1, explanation: "Biodiversity = variety of all living organisms." },
      { id: 2, question: "Levels of biodiversity:", options: ["One", "Two", "Three (genetic, species, ecosystem)", "Four"], correctAnswer: 2, explanation: "Three levels: genetic, species, and ecosystem diversity." },
      { id: 3, question: "Hotspot has:", options: ["Low diversity", "High diversity, high threat", "No species", "Only animals"], correctAnswer: 1, explanation: "Biodiversity hotspots: high endemism + high threat." },
      { id: 4, question: "Endemic species are found:", options: ["Everywhere", "In specific region only", "In all countries", "In water only"], correctAnswer: 1, explanation: "Endemic species are unique to a particular area." },
      { id: 5, question: "India is a:", options: ["Desert country", "Mega-biodiversity country", "Low diversity country", "Island nation"], correctAnswer: 1, explanation: "India is one of 17 mega-biodiversity countries." },
      { id: 6, question: "In-situ conservation means:", options: ["Conservation in natural habitat", "Conservation in zoos", "No conservation", "Lab conservation"], correctAnswer: 0, explanation: "In-situ: conservation in natural habitat (e.g., national parks)." },
      { id: 7, question: "Ex-situ conservation includes:", options: ["National parks", "Zoos, botanical gardens", "Forests", "Rivers"], correctAnswer: 1, explanation: "Ex-situ: conservation outside natural habitat." },
      { id: 8, question: "Red Data Book lists:", options: ["Common species", "Threatened species", "Extinct only", "Insects only"], correctAnswer: 1, explanation: "Red Data Book catalogs threatened and endangered species." },
      { id: 9, question: "Endangered species are:", options: ["Common", "At risk of extinction", "Already extinct", "Invasive"], correctAnswer: 1, explanation: "Endangered species face high risk of extinction." },
      { id: 10, question: "Biodiversity is important for:", options: ["Economy only", "Ecological balance, medicine, food, etc.", "Nothing", "Decoration"], correctAnswer: 1, explanation: "Biodiversity provides ecological, economic, and social benefits." }
    ],
    4: [ // Unit IV - Environmental Pollution
      { id: 1, question: "Air pollution sources include:", options: ["Only vehicles", "Industries, vehicles, burning", "Only factories", "Only homes"], correctAnswer: 1, explanation: "Multiple sources: vehicles, industries, agriculture, burning." },
      { id: 2, question: "Major air pollutants include:", options: ["Oxygen", "CO, SO2, NOx, particulates", "Nitrogen", "Water vapor"], correctAnswer: 1, explanation: "Common pollutants: CO, SO2, NOx, PM, ozone, etc." },
      { id: 3, question: "Water pollution is caused by:", options: ["Purification", "Industrial effluents, sewage", "Evaporation", "Condensation"], correctAnswer: 1, explanation: "Sources: industrial waste, sewage, agricultural runoff." },
      { id: 4, question: "BOD indicates:", options: ["Oxygen level", "Organic pollution level", "Metal content", "Acidity"], correctAnswer: 1, explanation: "High BOD = high organic pollution = low oxygen." },
      { id: 5, question: "Eutrophication is caused by:", options: ["Less nutrients", "Excess nutrients", "Clean water", "Drought"], correctAnswer: 1, explanation: "Excess nutrients cause algal blooms and oxygen depletion." },
      { id: 6, question: "Soil pollution is caused by:", options: ["Fertilizers, pesticides, waste", "Rain", "Sunlight", "Wind"], correctAnswer: 0, explanation: "Sources: chemicals, waste disposal, industrial activities." },
      { id: 7, question: "Noise level is measured in:", options: ["Hertz", "Decibels (dB)", "Watts", "Joules"], correctAnswer: 1, explanation: "Sound intensity measured in decibels (dB)." },
      { id: 8, question: "Safe noise level for humans:", options: ["Below 85 dB", "100-120 dB", "Above 140 dB", "Any level"], correctAnswer: 0, explanation: "Prolonged exposure above 85 dB can cause hearing damage." },
      { id: 9, question: "Greenhouse gases include:", options: ["Only O2", "CO2, CH4, N2O", "Only N2", "Only Ar"], correctAnswer: 1, explanation: "GHGs: CO2, methane, nitrous oxide, CFCs, etc." },
      { id: 10, question: "Ozone layer protects from:", options: ["Visible light", "Ultraviolet radiation", "Infrared", "Radio waves"], correctAnswer: 1, explanation: "Ozone layer absorbs harmful UV radiation." }
    ],
    5: [ // Unit V - Sustainable Development
      { id: 1, question: "Sustainable development meets:", options: ["Only present needs", "Present needs without compromising future", "Only future needs", "No needs"], correctAnswer: 1, explanation: "Definition from Brundtland Report (1987)." },
      { id: 2, question: "3Rs of waste management:", options: ["Reduce, Reuse, Recycle", "Remove, Replace, Repair", "Run, Rest, Repeat", "None"], correctAnswer: 0, explanation: "3Rs: Reduce, Reuse, Recycle (in order of priority)." },
      { id: 3, question: "Rainwater harvesting:", options: ["Wastes water", "Collects and stores rainwater", "Pollutes water", "Heats water"], correctAnswer: 1, explanation: "Harvesting captures rainwater for later use." },
      { id: 4, question: "Solar panels convert:", options: ["Heat to electricity", "Light to electricity", "Wind to electricity", "Sound to electricity"], correctAnswer: 1, explanation: "Photovoltaic cells convert sunlight to electricity." },
      { id: 5, question: "EIA stands for:", options: ["Environmental Impact Assessment", "Electrical Industry Association", "Energy Information Administration", "None"], correctAnswer: 0, explanation: "EIA evaluates environmental effects of proposed projects." },
      { id: 6, question: "Afforestation means:", options: ["Cutting trees", "Planting trees", "Burning forests", "No change"], correctAnswer: 1, explanation: "Afforestation = planting trees in non-forested areas." },
      { id: 7, question: "Carbon footprint measures:", options: ["Forest area", "CO2 emissions", "Water usage", "Noise level"], correctAnswer: 1, explanation: "Carbon footprint = total greenhouse gas emissions." },
      { id: 8, question: "Environmental laws in India include:", options: ["Only Constitution", "Environment Protection Act, Water Act, etc.", "No laws", "Only state laws"], correctAnswer: 1, explanation: "India has multiple environmental protection acts." },
      { id: 9, question: "Public awareness about environment:", options: ["Is not important", "Is crucial for sustainability", "Wastes time", "Has no effect"], correctAnswer: 1, explanation: "Public participation is essential for environmental protection." },
      { id: 10, question: "Goal of environmental ethics:", options: ["Exploit nature", "Live in harmony with nature", "Ignore nature", "Destroy ecosystems"], correctAnswer: 1, explanation: "Environmental ethics promotes responsible behavior toward nature." }
    ]
  },

  // Soft Skills
  "soft-skills": {
    1: [ // Unit I - Communication Skills
      { id: 1, question: "Communication is:", options: ["One-way process", "Two-way process", "No process", "Random process"], correctAnswer: 1, explanation: "Communication involves sender, message, receiver, and feedback." },
      { id: 2, question: "Verbal communication uses:", options: ["Gestures", "Words (spoken/written)", "Body language", "Silence"], correctAnswer: 1, explanation: "Verbal communication uses spoken or written words." },
      { id: 3, question: "Non-verbal communication includes:", options: ["Letters", "Body language, gestures", "Reports", "Emails"], correctAnswer: 1, explanation: "Non-verbal: facial expressions, gestures, posture, etc." },
      { id: 4, question: "Effective listening requires:", options: ["Interrupting", "Active attention", "Thinking about reply", "Ignoring speaker"], correctAnswer: 1, explanation: "Active listening involves full concentration and understanding." },
      { id: 5, question: "Barrier to communication:", options: ["Clarity", "Noise, language, emotions", "Understanding", "Feedback"], correctAnswer: 1, explanation: "Barriers: noise, language, emotions, cultural differences." },
      { id: 6, question: "Feedback in communication:", options: ["Is not important", "Confirms message receipt", "Should be avoided", "Creates noise"], correctAnswer: 1, explanation: "Feedback confirms understanding and completes communication loop." },
      { id: 7, question: "Formal communication follows:", options: ["No rules", "Official channels", "Personal preference", "Random paths"], correctAnswer: 1, explanation: "Formal communication uses official organizational channels." },
      { id: 8, question: "Email etiquette includes:", options: ["No subject line", "Clear subject, professional tone", "Using slang", "Writing in caps"], correctAnswer: 1, explanation: "Professional emails: clear subject, proper greeting, concise content." },
      { id: 9, question: "Good speaker should:", options: ["Speak very fast", "Know audience and be clear", "Use complex words", "Avoid eye contact"], correctAnswer: 1, explanation: "Good speakers adapt to audience and communicate clearly." },
      { id: 10, question: "Written communication advantage:", options: ["No record", "Permanent record", "Instant feedback", "No proof"], correctAnswer: 1, explanation: "Written communication provides documented record." }
    ],
    2: [ // Unit II - Presentation Skills
      { id: 1, question: "Presentation preparation includes:", options: ["No planning", "Research, outline, practice", "Only speaking", "Reading script"], correctAnswer: 1, explanation: "Good presentations require research, structure, and practice." },
      { id: 2, question: "Eye contact during presentation:", options: ["Should be avoided", "Builds connection with audience", "Shows nervousness", "Is not important"], correctAnswer: 1, explanation: "Eye contact engages audience and builds credibility." },
      { id: 3, question: "Visual aids should be:", options: ["Cluttered with text", "Simple and relevant", "Optional always", "Copied from internet"], correctAnswer: 1, explanation: "Visuals should support, not replace, the speaker." },
      { id: 4, question: "Stage fright can be managed by:", options: ["Avoiding presentations", "Practice and deep breathing", "Reading slides", "Speaking very fast"], correctAnswer: 1, explanation: "Preparation and relaxation techniques reduce nervousness." },
      { id: 5, question: "Body language in presentation:", options: ["Doesn't matter", "Enhances message", "Should be minimal", "Is negative"], correctAnswer: 1, explanation: "Positive body language reinforces verbal message." },
      { id: 6, question: "Opening of presentation should:", options: ["Be boring", "Capture attention", "Start with apology", "Skip introduction"], correctAnswer: 1, explanation: "Strong opening hooks audience interest." },
      { id: 7, question: "Conclusion should:", options: ["Be abrupt", "Summarize key points", "Introduce new topics", "Be longest part"], correctAnswer: 1, explanation: "Conclusion reinforces main message and ends memorably." },
      { id: 8, question: "Handling questions:", options: ["Ignore them", "Answer honestly, admit if unsure", "Give wrong answers", "Skip questions"], correctAnswer: 1, explanation: "Handle questions professionally; it's okay to say 'I'll find out'." },
      { id: 9, question: "Voice modulation means:", options: ["Speaking monotonously", "Varying pitch and tone", "Speaking softly", "Shouting"], correctAnswer: 1, explanation: "Voice variation keeps audience engaged." },
      { id: 10, question: "Time management in presentation:", options: ["Not important", "Essential for effectiveness", "Speak as long as possible", "Ignore time"], correctAnswer: 1, explanation: "Staying within time shows respect and preparation." }
    ],
    3: [ // Unit III - Group Discussion
      { id: 1, question: "GD evaluates:", options: ["Only knowledge", "Communication, teamwork, leadership", "Only speaking", "Only listening"], correctAnswer: 1, explanation: "GD assesses multiple skills: communication, reasoning, teamwork." },
      { id: 2, question: "In GD, one should:", options: ["Dominate discussion", "Listen and contribute constructively", "Stay silent", "Argue aggressively"], correctAnswer: 1, explanation: "Balance speaking and listening; respect others' views." },
      { id: 3, question: "Starting a GD:", options: ["Is risky always", "Shows initiative if done well", "Should be avoided", "Guarantees selection"], correctAnswer: 1, explanation: "Good initiation shows leadership; poor start can backfire." },
      { id: 4, question: "Interrupting others in GD:", options: ["Shows leadership", "Is generally negative", "Is always good", "Wins points"], correctAnswer: 1, explanation: "Interrupting shows poor listening and etiquette." },
      { id: 5, question: "Relevant points in GD:", options: ["Don't matter", "Strengthen your position", "Should be avoided", "Waste time"], correctAnswer: 1, explanation: "Relevant, logical points demonstrate knowledge and reasoning." },
      { id: 6, question: "Eye contact in GD:", options: ["With one person only", "With all participants", "Should be avoided", "With moderator only"], correctAnswer: 1, explanation: "Engage all participants, not just one person." },
      { id: 7, question: "Summarizing in GD:", options: ["Shows leadership", "Is not useful", "Should be avoided", "Is time waste"], correctAnswer: 0, explanation: "Good summary shows you tracked discussion and can synthesize." },
      { id: 8, question: "Body language in GD:", options: ["Not observed", "Impacts evaluation", "Should be aggressive", "Doesn't matter"], correctAnswer: 1, explanation: "Evaluators observe body language and composure." },
      { id: 9, question: "If you disagree in GD:", options: ["Attack the person", "Disagree respectfully with reasons", "Stay silent", "Leave"], correctAnswer: 1, explanation: "Disagree with ideas, not people; give logical reasons." },
      { id: 10, question: "GD topics can be:", options: ["Only current affairs", "Varied: social, technical, abstract", "Only technical", "Only abstract"], correctAnswer: 1, explanation: "Topics range from current affairs to abstract concepts." }
    ],
    4: [ // Unit IV - Interview Preparation
      { id: 1, question: "Interview preparation includes:", options: ["No preparation", "Company research, self-assessment", "Memorizing answers", "Going unprepared"], correctAnswer: 1, explanation: "Research company, know yourself, prepare common answers." },
      { id: 2, question: "First impression is based on:", options: ["Words only", "Appearance, body language, greeting", "Resume only", "References"], correctAnswer: 1, explanation: "First impression: dress, posture, handshake, smile." },
      { id: 3, question: "Tell me about yourself should:", options: ["Recite resume", "Highlight relevant skills briefly", "Tell life story", "Skip question"], correctAnswer: 1, explanation: "Give concise, relevant professional summary." },
      { id: 4, question: "Strengths discussion should:", options: ["Exaggerate", "Be honest with examples", "List 20 strengths", "Say 'I have none'"], correctAnswer: 1, explanation: "Give genuine strengths with supporting examples." },
      { id: 5, question: "Weaknesses discussion should:", options: ["Say 'I have none'", "Show awareness and improvement efforts", "List all weaknesses", "Blame others"], correctAnswer: 1, explanation: "Show self-awareness and what you're doing to improve." },
      { id: 6, question: "STAR method is for:", options: ["Rating system", "Answering behavioral questions", "Star gazing", "Salary negotiation"], correctAnswer: 1, explanation: "STAR: Situation, Task, Action, Result - for behavioral questions." },
      { id: 7, question: "Asking questions shows:", options: ["Confusion", "Interest and preparation", "Weakness", "Desperation"], correctAnswer: 1, explanation: "Good questions show genuine interest and research." },
      { id: 8, question: "Salary discussion should:", options: ["Happen first", "Be handled professionally", "Never happen", "Demand maximum"], correctAnswer: 1, explanation: "Discuss salary professionally, usually after offer stage." },
      { id: 9, question: "Thank you note after interview:", options: ["Is not needed", "Shows professionalism", "Is desperate", "Should be lengthy"], correctAnswer: 1, explanation: "Brief thank-you email reinforces interest and courtesy." },
      { id: 10, question: "Honesty in interview:", options: ["Can be avoided", "Is essential", "Doesn't matter", "Is risky"], correctAnswer: 1, explanation: "Honesty builds trust; lies can be discovered later." }
    ],
    5: [ // Unit V - Professional Ethics
      { id: 1, question: "Ethics are:", options: ["Laws only", "Moral principles guiding behavior", "Personal opinions", "Company rules only"], correctAnswer: 1, explanation: "Ethics = moral principles that govern behavior." },
      { id: 2, question: "Professional ethics include:", options: ["Cheating", "Integrity, honesty, responsibility", "Lying", "Laziness"], correctAnswer: 1, explanation: "Professional ethics: integrity, accountability, respect." },
      { id: 3, question: "Integrity means:", options: ["Dishonesty", "Consistency in values and actions", "Flexibility in ethics", "Changing principles"], correctAnswer: 1, explanation: "Integrity = adherence to moral and ethical principles." },
      { id: 4, question: "Conflict of interest occurs when:", options: ["There's no conflict", "Personal interest affects professional duty", "Everyone agrees", "Rules are followed"], correctAnswer: 1, explanation: "COI: personal interests interfere with professional judgment." },
      { id: 5, question: "Confidentiality means:", options: ["Sharing all information", "Protecting sensitive information", "Hiding everything", "Lying"], correctAnswer: 1, explanation: "Keep confidential information secure and private." },
      { id: 6, question: "Accountability means:", options: ["Blaming others", "Taking responsibility for actions", "Avoiding responsibility", "Hiding mistakes"], correctAnswer: 1, explanation: "Being answerable for your actions and decisions." },
      { id: 7, question: "Workplace harassment:", options: ["Is acceptable", "Should be reported and stopped", "Should be ignored", "Is normal"], correctAnswer: 1, explanation: "Harassment is unethical and should be addressed." },
      { id: 8, question: "Time management ethically means:", options: ["Wasting time", "Using work time productively", "Personal work at office", "Extended breaks"], correctAnswer: 1, explanation: "Use work hours for work; respect employer's time." },
      { id: 9, question: "Plagiarism is:", options: ["Ethical", "Unethical copying without credit", "Encouraged", "Legal always"], correctAnswer: 1, explanation: "Plagiarism: presenting others' work as your own - unethical." },
      { id: 10, question: "Corporate Social Responsibility:", options: ["Ignores society", "Business contribution to society", "Only profit focus", "Illegal activity"], correctAnswer: 1, explanation: "CSR: businesses contributing to social welfare." }
    ]
  },

  // Engineering Physics
  "eng-physics": {
    1: [ // Unit I - Optics & Lasers
      { id: 1, question: "Interference occurs when:", options: ["One wave exists", "Two coherent waves superpose", "Light is blocked", "Sound waves interact"], correctAnswer: 1, explanation: "Interference requires two coherent waves overlapping." },
      { id: 2, question: "Constructive interference gives:", options: ["Darkness", "Maximum brightness", "No effect", "Diffraction"], correctAnswer: 1, explanation: "When waves are in phase, amplitude adds (bright fringe)." },
      { id: 3, question: "Diffraction is:", options: ["Reflection of light", "Bending of light around obstacles", "Absorption", "Polarization"], correctAnswer: 1, explanation: "Diffraction: light spreads around edges and obstacles." },
      { id: 4, question: "Polarization proves light is:", options: ["Longitudinal wave", "Transverse wave", "No wave", "Sound wave"], correctAnswer: 1, explanation: "Only transverse waves can be polarized." },
      { id: 5, question: "LASER stands for:", options: ["Light Amplification by Sound Emission", "Light Amplification by Stimulated Emission of Radiation", "Low Amplitude Signal Emission", "None"], correctAnswer: 1, explanation: "LASER = Light Amplification by Stimulated Emission of Radiation." },
      { id: 6, question: "Population inversion is needed for:", options: ["Absorption", "Laser action", "Reflection", "Refraction"], correctAnswer: 1, explanation: "More atoms in excited state than ground state for lasing." },
      { id: 7, question: "Ruby laser produces:", options: ["Blue light", "Red light", "Green light", "UV light"], correctAnswer: 1, explanation: "Ruby laser emits red light at 694.3 nm." },
      { id: 8, question: "Optical fiber works on:", options: ["Refraction", "Total internal reflection", "Diffraction", "Absorption"], correctAnswer: 1, explanation: "Light propagates through fiber by TIR." },
      { id: 9, question: "Holography records:", options: ["Only intensity", "Amplitude and phase", "Only phase", "Only color"], correctAnswer: 1, explanation: "Hologram records both amplitude and phase information." },
      { id: 10, question: "Coherent light means:", options: ["Same color", "Constant phase relationship", "High intensity", "Low intensity"], correctAnswer: 1, explanation: "Coherent: waves maintain constant phase difference." }
    ],
    2: [ // Unit II - Wave Mechanics
      { id: 1, question: "De Broglie wavelength λ = ?", options: ["h/p", "hp", "h+p", "h-p"], correctAnswer: 0, explanation: "λ = h/p = h/(mv), matter wave wavelength." },
      { id: 2, question: "Wave-particle duality means:", options: ["Only wave nature", "Only particle nature", "Both wave and particle properties", "Neither"], correctAnswer: 2, explanation: "Matter exhibits both wave and particle characteristics." },
      { id: 3, question: "Heisenberg uncertainty principle:", options: ["Position and momentum both certain", "Cannot know both precisely simultaneously", "Only position uncertain", "Only momentum uncertain"], correctAnswer: 1, explanation: "ΔxΔp ≥ ℏ/2; both cannot be precisely known." },
      { id: 4, question: "Schrödinger equation describes:", options: ["Particle position", "Wave function of particle", "Velocity only", "Mass only"], correctAnswer: 1, explanation: "Schrödinger equation gives wave function ψ." },
      { id: 5, question: "Wave function ψ gives:", options: ["Energy", "Probability of finding particle", "Mass", "Speed"], correctAnswer: 1, explanation: "|ψ|² gives probability density." },
      { id: 6, question: "Particle in a box has:", options: ["Any energy", "Quantized energy levels", "Zero energy", "Infinite energy"], correctAnswer: 1, explanation: "Confined particle has discrete (quantized) energy levels." },
      { id: 7, question: "Zero-point energy means:", options: ["No energy", "Minimum energy even at 0K", "Maximum energy", "Infinite energy"], correctAnswer: 1, explanation: "Even at absolute zero, particle has minimum energy." },
      { id: 8, question: "Tunneling occurs when:", options: ["Energy > barrier", "Particle passes through barrier classically forbidden", "No barrier", "Energy = 0"], correctAnswer: 1, explanation: "Quantum tunneling: particle penetrates potential barrier." },
      { id: 9, question: "Compton effect proves:", options: ["Wave nature", "Particle nature of photon", "No photon", "Sound wave"], correctAnswer: 1, explanation: "Compton scattering shows photon has momentum (particle-like)." },
      { id: 10, question: "Photoelectric effect proves:", options: ["Wave nature", "Particle nature of light", "Both", "Neither"], correctAnswer: 1, explanation: "Photoelectric effect shows light has particle (photon) nature." }
    ],
    3: [ // Unit III - Quantum Mechanics
      { id: 1, question: "Planck's constant h = ?", options: ["6.626 × 10⁻³⁴ J·s", "1.6 × 10⁻¹⁹ C", "9.11 × 10⁻³¹ kg", "3 × 10⁸ m/s"], correctAnswer: 0, explanation: "h = 6.626 × 10⁻³⁴ Joule-seconds (Planck's constant)." },
      { id: 2, question: "Energy quantization means:", options: ["Continuous energy", "Energy in discrete packets", "No energy", "Infinite energy"], correctAnswer: 1, explanation: "Energy exists in discrete amounts (quanta)." },
      { id: 3, question: "Photon energy E = ?", options: ["hf", "h/f", "f/h", "h + f"], correctAnswer: 0, explanation: "E = hf (energy = Planck's constant × frequency)." },
      { id: 4, question: "Bohr model applies to:", options: ["All atoms", "Hydrogen-like atoms", "Molecules", "Solids"], correctAnswer: 1, explanation: "Bohr model works for single-electron (hydrogen-like) atoms." },
      { id: 5, question: "Electron spin can be:", options: ["Any value", "+1/2 or -1/2", "0 only", "1 only"], correctAnswer: 1, explanation: "Electron spin quantum number: +½ or -½." },
      { id: 6, question: "Pauli exclusion principle states:", options: ["Electrons attract", "No two electrons have same quantum numbers", "All electrons identical", "Electrons repel"], correctAnswer: 1, explanation: "No two electrons in an atom can have identical quantum states." },
      { id: 7, question: "Orbital shapes are determined by:", options: ["n only", "l quantum number", "m only", "s only"], correctAnswer: 1, explanation: "Azimuthal quantum number l determines orbital shape (s,p,d,f)." },
      { id: 8, question: "Ground state has:", options: ["Maximum energy", "Minimum energy", "Zero energy", "Infinite energy"], correctAnswer: 1, explanation: "Ground state is lowest energy configuration." },
      { id: 9, question: "Quantum numbers for electron:", options: ["1", "2", "4 (n, l, m, s)", "3"], correctAnswer: 2, explanation: "Four quantum numbers: principal, azimuthal, magnetic, spin." },
      { id: 10, question: "Emission spectrum results from:", options: ["Electron gaining energy", "Electron losing energy", "No electron change", "Proton change"], correctAnswer: 1, explanation: "Electrons emit photons when transitioning to lower energy." }
    ],
    4: [ // Unit IV - Semiconductor Physics
      { id: 1, question: "Band gap in semiconductors is:", options: ["Very large", "Moderate (1-3 eV)", "Zero", "Negative"], correctAnswer: 1, explanation: "Semiconductors have moderate band gap (~1-3 eV)." },
      { id: 2, question: "Intrinsic semiconductor at 0K is:", options: ["Conductor", "Insulator", "Superconductor", "Semiconductor"], correctAnswer: 1, explanation: "At 0K, no thermal excitation; acts as insulator." },
      { id: 3, question: "N-type doping adds:", options: ["Holes", "Electrons", "Protons", "Neutrons"], correctAnswer: 1, explanation: "N-type: pentavalent dopant provides extra electrons." },
      { id: 4, question: "P-type doping creates:", options: ["Extra electrons", "Holes", "Protons", "Ions"], correctAnswer: 1, explanation: "P-type: trivalent dopant creates holes (missing electrons)." },
      { id: 5, question: "Fermi level in intrinsic semiconductor is:", options: ["In conduction band", "In valence band", "Middle of band gap", "Above conduction band"], correctAnswer: 2, explanation: "For intrinsic semiconductor, Fermi level is at mid-gap." },
      { id: 6, question: "Conductivity increases with temperature in:", options: ["Metals", "Semiconductors", "Insulators", "Superconductors"], correctAnswer: 1, explanation: "More carriers are thermally excited in semiconductors." },
      { id: 7, question: "Hall effect is used to determine:", options: ["Temperature", "Carrier type and concentration", "Resistance", "Capacitance"], correctAnswer: 1, explanation: "Hall effect identifies carrier type (n or p) and density." },
      { id: 8, question: "Silicon band gap is approximately:", options: ["0.7 eV", "1.1 eV", "2.0 eV", "3.5 eV"], correctAnswer: 1, explanation: "Silicon band gap ≈ 1.12 eV at room temperature." },
      { id: 9, question: "Germanium band gap is approximately:", options: ["0.67 eV", "1.1 eV", "2.0 eV", "0.1 eV"], correctAnswer: 0, explanation: "Germanium band gap ≈ 0.67 eV." },
      { id: 10, question: "Mobility is higher for:", options: ["Holes", "Electrons", "Both equal", "Depends on material"], correctAnswer: 1, explanation: "Electrons generally have higher mobility than holes." }
    ],
    5: [ // Unit V - Nanotechnology
      { id: 1, question: "Nanotechnology deals with:", options: ["Meter scale", "Centimeter scale", "Nanometer scale (10⁻⁹ m)", "Kilometer scale"], correctAnswer: 2, explanation: "Nano = 10⁻⁹, nanotechnology: 1-100 nm scale." },
      { id: 2, question: "Surface to volume ratio in nanomaterials is:", options: ["Low", "Very high", "Zero", "Same as bulk"], correctAnswer: 1, explanation: "Smaller size → larger surface area relative to volume." },
      { id: 3, question: "Carbon nanotube structure is:", options: ["Flat sheet", "Rolled graphene cylinder", "Sphere", "Random"], correctAnswer: 1, explanation: "CNT: graphene sheet rolled into cylindrical tube." },
      { id: 4, question: "Quantum dots exhibit:", options: ["Classical behavior", "Size-dependent optical properties", "No special properties", "Magnetic only"], correctAnswer: 1, explanation: "QD color depends on size due to quantum confinement." },
      { id: 5, question: "Fullerene C60 has:", options: ["30 carbons", "60 carbon atoms", "100 carbons", "12 carbons"], correctAnswer: 1, explanation: "Buckminsterfullerene has 60 carbon atoms in cage structure." },
      { id: 6, question: "Top-down approach means:", options: ["Building from atoms", "Breaking down bulk material", "No change", "Chemical synthesis"], correctAnswer: 1, explanation: "Top-down: start with bulk, reduce to nanoscale." },
      { id: 7, question: "Bottom-up approach means:", options: ["Starting from bulk", "Building from atoms/molecules", "Destruction", "Melting"], correctAnswer: 1, explanation: "Bottom-up: assemble nanomaterials from atomic level." },
      { id: 8, question: "SPM stands for:", options: ["Scanning Probe Microscopy", "Simple Probe Method", "Standard Probe Machine", "None"], correctAnswer: 0, explanation: "SPM: Scanning Probe Microscopy (AFM, STM)." },
      { id: 9, question: "Nanoparticles are used in:", options: ["Only research", "Medicine, electronics, cosmetics", "Nothing practical", "Only space"], correctAnswer: 1, explanation: "Applications: drug delivery, sensors, sunscreens, catalysis." },
      { id: 10, question: "Graphene is:", options: ["3D structure", "Single layer of carbon atoms", "Multi-layer only", "Not carbon"], correctAnswer: 1, explanation: "Graphene: single-atom-thick layer of carbon in hexagonal lattice." }
    ]
  },

  // Electrical Engineering
  "electrical-eng": {
    1: [ // Unit I - DC Circuits
      { id: 1, question: "Ohm's law states V = ?", options: ["I/R", "IR", "R/I", "I+R"], correctAnswer: 1, explanation: "V = IR (Voltage = Current × Resistance)." },
      { id: 2, question: "Unit of resistance is:", options: ["Ampere", "Volt", "Ohm (Ω)", "Watt"], correctAnswer: 2, explanation: "Resistance is measured in Ohms (Ω)." },
      { id: 3, question: "Series resistors: total R = ?", options: ["R1 + R2", "1/R1 + 1/R2", "R1 × R2", "R1/R2"], correctAnswer: 0, explanation: "Series: Rtotal = R1 + R2 + R3 + ..." },
      { id: 4, question: "Parallel resistors: 1/Req = ?", options: ["R1 + R2", "1/R1 + 1/R2", "R1 × R2", "R1 - R2"], correctAnswer: 1, explanation: "Parallel: 1/Req = 1/R1 + 1/R2 + ..." },
      { id: 5, question: "Kirchhoff's Current Law states:", options: ["ΣV = 0", "ΣI = 0 at junction", "V = IR", "P = VI"], correctAnswer: 1, explanation: "KCL: sum of currents at a node = 0." },
      { id: 6, question: "Kirchhoff's Voltage Law states:", options: ["ΣI = 0", "ΣV = 0 in closed loop", "V = IR", "P = VI"], correctAnswer: 1, explanation: "KVL: sum of voltages around closed loop = 0." },
      { id: 7, question: "Power P = ?", options: ["V/I", "VI", "V-I", "V+I"], correctAnswer: 1, explanation: "P = VI = I²R = V²/R (Power equations)." },
      { id: 8, question: "Unit of power is:", options: ["Ohm", "Volt", "Watt", "Ampere"], correctAnswer: 2, explanation: "Power is measured in Watts (W)." },
      { id: 9, question: "Energy = ?", options: ["P×t", "P/t", "P+t", "P-t"], correctAnswer: 0, explanation: "Energy = Power × Time (measured in Joules or kWh)." },
      { id: 10, question: "Conductance is reciprocal of:", options: ["Voltage", "Current", "Resistance", "Power"], correctAnswer: 2, explanation: "Conductance G = 1/R, measured in Siemens (S)." }
    ],
    2: [ // Unit II - AC Circuits
      { id: 1, question: "AC current varies:", options: ["Constantly in one direction", "Sinusoidally with time", "Not at all", "Randomly"], correctAnswer: 1, explanation: "AC alternates direction, typically sinusoidal." },
      { id: 2, question: "Frequency of AC is measured in:", options: ["Ohms", "Volts", "Hertz (Hz)", "Watts"], correctAnswer: 2, explanation: "Frequency = cycles per second, measured in Hz." },
      { id: 3, question: "Peak value to RMS value: Vrms = ?", options: ["Vpeak", "Vpeak/√2", "Vpeak × 2", "Vpeak/2"], correctAnswer: 1, explanation: "RMS = Peak/√2 = 0.707 × Peak value." },
      { id: 4, question: "Reactance of inductor XL = ?", options: ["ωL", "1/ωL", "ωC", "1/ωC"], correctAnswer: 0, explanation: "Inductive reactance XL = ωL = 2πfL" },
      { id: 5, question: "Reactance of capacitor XC = ?", options: ["ωC", "1/ωC", "ωL", "1/ωL"], correctAnswer: 1, explanation: "Capacitive reactance XC = 1/ωC = 1/(2πfC)" },
      { id: 6, question: "Impedance Z combines:", options: ["Only R", "R and reactance", "Only X", "Nothing"], correctAnswer: 1, explanation: "Z = √(R² + X²), combines resistance and reactance." },
      { id: 7, question: "Power factor = ?", options: ["sin φ", "cos φ", "tan φ", "cot φ"], correctAnswer: 1, explanation: "Power factor = cos φ (angle between V and I)." },
      { id: 8, question: "In pure inductor, current lags voltage by:", options: ["0°", "90°", "180°", "45°"], correctAnswer: 1, explanation: "In pure inductor, current lags voltage by 90°." },
      { id: 9, question: "In pure capacitor, current leads voltage by:", options: ["0°", "90°", "180°", "45°"], correctAnswer: 1, explanation: "In pure capacitor, current leads voltage by 90°." },
      { id: 10, question: "Resonance in RLC occurs when:", options: ["XL > XC", "XL < XC", "XL = XC", "R = 0"], correctAnswer: 2, explanation: "At resonance, XL = XC, impedance is minimum (= R)." }
    ],
    3: [ // Unit III - Transformers
      { id: 1, question: "Transformer works on:", options: ["DC only", "AC only", "Both AC and DC", "Neither"], correctAnswer: 1, explanation: "Transformers need changing flux, hence AC only." },
      { id: 2, question: "Transformer works on principle of:", options: ["Ohm's law", "Electromagnetic induction", "Electrostatic", "Thermoelectric"], correctAnswer: 1, explanation: "EMI: changing magnetic flux induces voltage." },
      { id: 3, question: "Turns ratio = ?", options: ["N1/N2", "V1/V2 = N1/N2", "I1/I2", "R1/R2"], correctAnswer: 1, explanation: "V1/V2 = N1/N2 (voltage ratio = turns ratio)." },
      { id: 4, question: "Step-up transformer:", options: ["V2 < V1", "V2 > V1", "V2 = V1", "No output"], correctAnswer: 1, explanation: "Step-up increases voltage (more secondary turns)." },
      { id: 5, question: "Step-down transformer:", options: ["V2 > V1", "V2 < V1", "V2 = V1", "No output"], correctAnswer: 1, explanation: "Step-down decreases voltage (fewer secondary turns)." },
      { id: 6, question: "Ideal transformer losses are:", options: ["Very high", "Zero", "Cannot be determined", "Infinite"], correctAnswer: 1, explanation: "Ideal transformer: 100% efficient, no losses." },
      { id: 7, question: "Transformer core is made of:", options: ["Copper", "Laminated iron/steel", "Aluminum", "Plastic"], correctAnswer: 1, explanation: "Laminated core reduces eddy current losses." },
      { id: 8, question: "Copper losses are due to:", options: ["Core", "Winding resistance", "Air", "Oil"], correctAnswer: 1, explanation: "I²R losses in primary and secondary windings." },
      { id: 9, question: "Iron losses include:", options: ["Only hysteresis", "Hysteresis and eddy current", "Only eddy current", "Copper losses"], correctAnswer: 1, explanation: "Core losses = hysteresis + eddy current losses." },
      { id: 10, question: "Transformer efficiency η = ?", options: ["Input/Output", "Output/Input × 100%", "Losses/Input", "Input × Output"], correctAnswer: 1, explanation: "Efficiency = (Output power / Input power) × 100%." }
    ],
    4: [ // Unit IV - Electrical Machines
      { id: 1, question: "DC motor converts:", options: ["Mechanical to electrical", "Electrical to mechanical", "AC to DC", "DC to AC"], correctAnswer: 1, explanation: "Motor: electrical energy → mechanical energy." },
      { id: 2, question: "DC generator converts:", options: ["Electrical to mechanical", "Mechanical to electrical", "AC to DC", "Heat to electrical"], correctAnswer: 1, explanation: "Generator: mechanical energy → electrical energy." },
      { id: 3, question: "Motor works on:", options: ["Faraday's law", "Force on current-carrying conductor in magnetic field", "Ohm's law", "Coulomb's law"], correctAnswer: 1, explanation: "Motor action: F = BIL (force on conductor in field)." },
      { id: 4, question: "Generator works on:", options: ["Motor action", "Electromagnetic induction", "Heating effect", "Chemical effect"], correctAnswer: 1, explanation: "Generator: changing flux induces EMF (Faraday's law)." },
      { id: 5, question: "Synchronous speed = ?", options: ["120f/P", "P/120f", "fP/120", "120/fP"], correctAnswer: 0, explanation: "Ns = 120f/P (f = frequency, P = poles)." },
      { id: 6, question: "Induction motor runs at:", options: ["Synchronous speed", "Below synchronous speed", "Above synchronous speed", "Zero speed"], correctAnswer: 1, explanation: "Induction motor runs slightly below synchronous speed." },
      { id: 7, question: "Slip in induction motor = ?", options: ["(Ns-Nr)/Ns", "(Nr-Ns)/Ns", "Ns × Nr", "Ns/Nr"], correctAnswer: 0, explanation: "Slip s = (Ns - Nr)/Ns, where Nr = rotor speed." },
      { id: 8, question: "Squirrel cage motor has:", options: ["External resistance", "Rotor bars short-circuited by end rings", "Wound rotor", "No rotor"], correctAnswer: 1, explanation: "Squirrel cage: rotor bars permanently short-circuited." },
      { id: 9, question: "Starter is used to:", options: ["Increase speed", "Limit starting current", "Stop motor", "Reverse motor"], correctAnswer: 1, explanation: "Starter reduces high inrush current during startup." },
      { id: 10, question: "Three-phase motor advantage:", options: ["No starting torque", "Self-starting, smooth operation", "More expensive always", "Lower efficiency"], correctAnswer: 1, explanation: "3-phase motors are self-starting with smooth torque." }
    ],
    5: [ // Unit V - Electrical Installations
      { id: 1, question: "Earthing/grounding is for:", options: ["Increasing current", "Safety from electric shock", "Increasing voltage", "Power factor correction"], correctAnswer: 1, explanation: "Earthing provides safe path for fault currents." },
      { id: 2, question: "Fuse protects against:", options: ["Low current", "Overcurrent", "Low voltage", "High resistance"], correctAnswer: 1, explanation: "Fuse melts and breaks circuit during overcurrent." },
      { id: 3, question: "MCB stands for:", options: ["Main Circuit Box", "Miniature Circuit Breaker", "Motor Control Box", "Multiple Circuit Board"], correctAnswer: 1, explanation: "MCB: Miniature Circuit Breaker (reusable protection)." },
      { id: 4, question: "ELCB protects against:", options: ["Overcurrent", "Earth leakage/shock", "Overvoltage", "Undervoltage"], correctAnswer: 1, explanation: "ELCB detects current leakage to earth, prevents shock." },
      { id: 5, question: "Wiring color for live (phase) in India:", options: ["Green", "Black", "Red", "Yellow"], correctAnswer: 2, explanation: "Red (or brown in new code) is phase/live wire." },
      { id: 6, question: "Neutral wire color is:", options: ["Red", "Black", "Green", "Yellow"], correctAnswer: 1, explanation: "Black (or blue in new code) is neutral wire." },
      { id: 7, question: "Earth wire color is:", options: ["Red", "Black", "Green", "Yellow"], correctAnswer: 2, explanation: "Green (or green-yellow stripe) is earth/ground wire." },
      { id: 8, question: "Two-way switch is used for:", options: ["Single point control", "Controlling load from two locations", "Motor control", "High power loads"], correctAnswer: 1, explanation: "Two-way switch controls light from two different locations." },
      { id: 9, question: "Power factor improvement uses:", options: ["Resistors", "Capacitors", "Inductors always", "Fuses"], correctAnswer: 1, explanation: "Capacitors compensate lagging power factor." },
      { id: 10, question: "Domestic supply voltage in India is:", options: ["110V", "230V", "440V", "11kV"], correctAnswer: 1, explanation: "Single-phase domestic supply: 230V, 50Hz in India." }
    ]
  }
};

// Helper function to get quiz for a specific subject and unit
export const getQuiz = (subjectId: string, unitId: number): QuizQuestion[] => {
  return quizData[subjectId]?.[unitId] || [];
};

// Helper function to check if quiz exists for a subject/unit
export const hasQuiz = (subjectId: string, unitId: number): boolean => {
  return !!(quizData[subjectId]?.[unitId]?.length);
};
