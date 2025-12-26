/**
 * Python Programs - Unit Wise (AKTU B.Tech)
 * Subject: Python Programming (BCC-302)
 * Based on: List of important Programs - Python Programming
 */

export interface PythonProgram {
  id: number;
  question: string;
  code: string;
  output: string;
}

export interface PythonProgramUnit {
  unitId: number;
  unitName: string;
  unitTitle: string;
  programs: PythonProgram[];
}

export const pythonPrograms: PythonProgramUnit[] = [
  {
    unitId: 1,
    unitName: "Unit I",
    unitTitle: "Python Basics",
    programs: [
      {
        id: 1,
        question: "Write a simple Python Program to INPUT two variables and print Addition, Subtraction, Multiplication and Division of both numbers.",
        code: `a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)`,
        output: `Enter first number: 10
Enter second number: 5
Addition: 15
Subtraction: 5
Multiplication: 50
Division: 2.0`
      },
      {
        id: 2,
        question: "Write a python program to show the importance of operator precedence and associativity of different operators.",
        code: `# Operator Precedence Example
result1 = 10 + 5 * 2
print("10 + 5 * 2 =", result1)  # * has higher precedence

result2 = (10 + 5) * 2
print("(10 + 5) * 2 =", result2)  # Parentheses first

# Associativity Example (Left to Right)
result3 = 100 / 10 / 2
print("100 / 10 / 2 =", result3)  # Left to right

# Associativity Example (Right to Left for **)
result4 = 2 ** 3 ** 2
print("2 ** 3 ** 2 =", result4)  # Right to left`,
        output: `10 + 5 * 2 = 20
(10 + 5) * 2 = 30
100 / 10 / 2 = 5.0
2 ** 3 ** 2 = 512`
      },
      {
        id: 3,
        question: "Python program to convert Celsius to Fahrenheit.",
        code: `celsius = float(input("Enter temperature in Celsius: "))
fahrenheit = (celsius * 9/5) + 32
print(f"{celsius}°C = {fahrenheit}°F")`,
        output: `Enter temperature in Celsius: 37
37.0°C = 98.6°F`
      },
      {
        id: 4,
        question: "Python program to solve quadratic equation.",
        code: `import math

a = float(input("Enter a: "))
b = float(input("Enter b: "))
c = float(input("Enter c: "))

discriminant = b**2 - 4*a*c

if discriminant > 0:
    root1 = (-b + math.sqrt(discriminant)) / (2*a)
    root2 = (-b - math.sqrt(discriminant)) / (2*a)
    print(f"Root 1: {root1}")
    print(f"Root 2: {root2}")
elif discriminant == 0:
    root = -b / (2*a)
    print(f"Equal roots: {root}")
else:
    print("No real roots")`,
        output: `Enter a: 1
Enter b: -5
Enter c: 6
Root 1: 3.0
Root 2: 2.0`
      },
      {
        id: 5,
        question: "Python Program to Swap Two Variables.",
        code: `a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

print(f"Before swap: a = {a}, b = {b}")

# Method 1: Using tuple unpacking
a, b = b, a

print(f"After swap: a = {a}, b = {b}")`,
        output: `Enter first number: 10
Enter second number: 20
Before swap: a = 10, b = 20
After swap: a = 20, b = 10`
      }
    ]
  },
  {
    unitId: 2,
    unitName: "Unit II",
    unitTitle: "Control Structures",
    programs: [
      {
        id: 1,
        question: "Write a program Python Program to Find the Largest Among Three Numbers.",
        code: `a = int(input("Enter first number: "))
b = int(input("Enter second number: "))
c = int(input("Enter third number: "))

if a >= b and a >= c:
    largest = a
elif b >= a and b >= c:
    largest = b
else:
    largest = c

print(f"Largest number is: {largest}")`,
        output: `Enter first number: 10
Enter second number: 25
Enter third number: 15
Largest number is: 25`
      },
      {
        id: 2,
        question: "Write Python code to find the factorial of a number.",
        code: `num = int(input("Enter a number: "))
factorial = 1

for i in range(1, num + 1):
    factorial *= i

print(f"Factorial of {num} is: {factorial}")`,
        output: `Enter a number: 5
Factorial of 5 is: 120`
      },
      {
        id: 3,
        question: "Write a program to check an input year is leap year or not.",
        code: `year = int(input("Enter a year: "))

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print(f"{year} is a Leap Year")
else:
    print(f"{year} is not a Leap Year")`,
        output: `Enter a year: 2024
2024 is a Leap Year`
      },
      {
        id: 4,
        question: "Program to check if a number is prime or not.",
        code: `num = int(input("Enter a number: "))

if num > 1:
    is_prime = True
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            is_prime = False
            break
    if is_prime:
        print(f"{num} is a Prime Number")
    else:
        print(f"{num} is not a Prime Number")
else:
    print(f"{num} is not a Prime Number")`,
        output: `Enter a number: 17
17 is a Prime Number`
      },
      {
        id: 5,
        question: "Write a program to find the sum of n natural numbers.",
        code: `n = int(input("Enter n: "))
sum = 0

for i in range(1, n + 1):
    sum += i

print(f"Sum of first {n} natural numbers: {sum}")`,
        output: `Enter n: 10
Sum of first 10 natural numbers: 55`
      },
      {
        id: 6,
        question: "Write a Python Program for Sum the digits of a given number.",
        code: `num = int(input("Enter a number: "))
sum_digits = 0
temp = num

while temp > 0:
    digit = temp % 10
    sum_digits += digit
    temp //= 10

print(f"Sum of digits of {num} is: {sum_digits}")`,
        output: `Enter a number: 12345
Sum of digits of 12345 is: 15`
      },
      {
        id: 7,
        question: "Write a program to Reverse a given integer number and check whether it is palindrome or not.",
        code: `num = int(input("Enter a number: "))
original = num
reverse = 0

while num > 0:
    digit = num % 10
    reverse = reverse * 10 + digit
    num //= 10

print(f"Reversed number: {reverse}")
if original == reverse:
    print(f"{original} is a Palindrome")
else:
    print(f"{original} is not a Palindrome")`,
        output: `Enter a number: 12321
Reversed number: 12321
12321 is a Palindrome`
      },
      {
        id: 8,
        question: "Write a recursive function to compute the factorial of an input number N.",
        code: `def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

num = int(input("Enter a number: "))
result = factorial(num)
print(f"Factorial of {num} is: {result}")`,
        output: `Enter a number: 6
Factorial of 6 is: 720`
      },
      {
        id: 9,
        question: "Write a Python Program to check Armstrong Number.",
        code: `num = int(input("Enter a number: "))
original = num
n = len(str(num))
sum = 0

while num > 0:
    digit = num % 10
    sum += digit ** n
    num //= 10

if original == sum:
    print(f"{original} is an Armstrong Number")
else:
    print(f"{original} is not an Armstrong Number")`,
        output: `Enter a number: 153
153 is an Armstrong Number`
      },
      {
        id: 10,
        question: "Write a Python Program for How to check if a given number is Fibonacci number.",
        code: `import math

def is_perfect_square(n):
    root = int(math.sqrt(n))
    return root * root == n

def is_fibonacci(n):
    return is_perfect_square(5*n*n + 4) or is_perfect_square(5*n*n - 4)

num = int(input("Enter a number: "))
if is_fibonacci(num):
    print(f"{num} is a Fibonacci Number")
else:
    print(f"{num} is not a Fibonacci Number")`,
        output: `Enter a number: 21
21 is a Fibonacci Number`
      },
      {
        id: 11,
        question: "Write a program which makes use of function to display all such numbers which are divisible by 7 but are not a multiple of 5, between 1000 and 2000.",
        code: `def find_numbers():
    result = []
    for i in range(1000, 2001):
        if i % 7 == 0 and i % 5 != 0:
            result.append(i)
    return result

numbers = find_numbers()
print("Numbers divisible by 7 but not by 5:")
print(numbers)`,
        output: `Numbers divisible by 7 but not by 5:
[1001, 1008, 1022, 1029, 1036, 1043, ...]`
      },
      {
        id: 12,
        question: "Write Python Programs to print patterns: 1, 010, 10101, 0101010 and *, ***, *****, *******",
        code: `# Pattern 1: Binary pattern
n = 4
for i in range(1, n + 1):
    for j in range(1, 2*i):
        print((i + j + 1) % 2, end="")
    print()

print()

# Pattern 2: Star pyramid
n = 4
for i in range(1, n + 1):
    print("*" * (2*i - 1))`,
        output: `1
010
10101
0101010

*
***
*****
*******`
      },
      {
        id: 13,
        question: "Write a Python program, triangle(N), that prints a right triangle having base and height consisting of N * symbols.",
        code: `def triangle(n):
    for i in range(1, n + 1):
        print("*" * i)

# Example usage
print("triangle(3):")
triangle(3)
print()
print("triangle(5):")
triangle(5)`,
        output: `triangle(3):
*
**
***

triangle(5):
*
**
***
****
*****`
      },
      {
        id: 14,
        question: "Write a Python program to construct the diamond pattern using nested for loop.",
        code: `n = 5

# Upper half
for i in range(1, n + 1):
    print("*" * i)

# Lower half
for i in range(n - 1, 0, -1):
    print("*" * i)`,
        output: `*
**
***
****
*****
****
***
**
*`
      },
      {
        id: 15,
        question: "Write a Python Program to create a lambda function to do total of two values passed.",
        code: `# Lambda function to add two numbers
add = lambda a, b: a + b

num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))

result = add(num1, num2)
print(f"Sum: {result}")`,
        output: `Enter first number: 15
Enter second number: 25
Sum: 40`
      },
      {
        id: 16,
        question: "Write a module in Python to implement arithmetic calculator with add(), sub(), mul(), div() functions.",
        code: `# calculator.py (Module)
def add(a, b):
    return a + b

def sub(a, b):
    return a - b

def mul(a, b):
    return a * b

def div(a, b):
    if b != 0:
        return a / b
    return "Cannot divide by zero"

# main.py (Using the module)
# import calculator

a = 20
b = 5
print(f"Addition: {add(a, b)}")
print(f"Subtraction: {sub(a, b)}")
print(f"Multiplication: {mul(a, b)}")
print(f"Division: {div(a, b)}")`,
        output: `Addition: 25
Subtraction: 15
Multiplication: 100
Division: 4.0`
      },
      {
        id: 17,
        question: "Write a Python function searchMany(s, x, k) that returns True if there are at most k occurrences of x in s.",
        code: `def searchMany(s, x, k):
    count = s.count(x)
    return count <= k

# Test cases
print(searchMany([10, 17, 15, 12], 15, 1))  # True
print(searchMany([10, 12, 12, 12], 12, 2))  # False
print(searchMany([10, 12, 15, 11], 17, 18)) # True`,
        output: `True
False
True`
      }
    ]
  },
  {
    unitId: 3,
    unitName: "Unit III",
    unitTitle: "Strings, Lists & Dictionaries",
    programs: [
      {
        id: 1,
        question: "Write Python program to convert uppercase letter to lowercase and vice versa.",
        code: `string = input("Enter a string: ")
result = string.swapcase()
print(f"Result: {result}")`,
        output: `Enter a string: Hello World
Result: hELLO wORLD`
      },
      {
        id: 2,
        question: "Python program to split and join a string.",
        code: `string = "Hello World Python"

# Split the string
words = string.split()
print(f"After split: {words}")

# Join the words
joined = "-".join(words)
print(f"After join with '-': {joined}")`,
        output: `After split: ['Hello', 'World', 'Python']
After join with '-': Hello-World-Python`
      },
      {
        id: 3,
        question: "Implement Python Script to perform various operations on string using string libraries.",
        code: `string = "  Hello Python World  "

print(f"Original: '{string}'")
print(f"Upper: {string.upper()}")
print(f"Lower: {string.lower()}")
print(f"Strip: '{string.strip()}'")
print(f"Replace: {string.replace('Python', 'AKTU')}")
print(f"Find 'Python': {string.find('Python')}")
print(f"Count 'o': {string.count('o')}")
print(f"Starts with 'Hello': {string.strip().startswith('Hello')}")`,
        output: `Original: '  Hello Python World  '
Upper:   HELLO PYTHON WORLD  
Lower:   hello python world  
Strip: 'Hello Python World'
Replace:   Hello AKTU World  
Find 'Python': 8
Count 'o': 3
Starts with 'Hello': True`
      },
      {
        id: 4,
        question: "Write a program to check whether a string is a palindrome or not.",
        code: `string = input("Enter a string: ")
clean = string.lower().replace(" ", "")

if clean == clean[::-1]:
    print(f"'{string}' is a Palindrome")
else:
    print(f"'{string}' is not a Palindrome")`,
        output: `Enter a string: madam
'madam' is a Palindrome`
      },
      {
        id: 5,
        question: "Write a program to find number of occurrences of each letter present in the given string.",
        code: `string = input("Enter a string: ")
freq = {}

for char in string:
    if char.isalpha():
        char = char.lower()
        freq[char] = freq.get(char, 0) + 1

print("Character frequencies:")
for char, count in freq.items():
    print(f"'{char}': {count}")`,
        output: `Enter a string: Hello World
Character frequencies:
'h': 1
'e': 1
'l': 3
'o': 2
'w': 1
'r': 1
'd': 1`
      },
      {
        id: 6,
        question: "Write Python Program to count the number of characters in a string using dictionaries. Display keys and values in alphabetical Order.",
        code: `string = input("Enter a string: ")
freq = {}

for char in string:
    if char.isalpha():
        char = char.lower()
        freq[char] = freq.get(char, 0) + 1

# Sort and display
for char in sorted(freq.keys()):
    print(f"'{char}': {freq[char]}")`,
        output: `Enter a string: Python
'd': 1
'h': 1
'n': 1
'o': 1
'p': 1
't': 1
'y': 1`
      },
      {
        id: 7,
        question: "Write a python program to count the vowels present in given input string.",
        code: `string = input("Enter a string: ")
vowels = "aeiouAEIOU"
count = 0

for char in string:
    if char in vowels:
        count += 1

print(f"Number of vowels: {count}")`,
        output: `Enter a string: Hello World
Number of vowels: 3`
      },
      {
        id: 8,
        question: "Write a program that accepts a sentence and calculate the number of digits, uppercase and lowercase letters.",
        code: `sentence = input("Enter a sentence: ")

digits = uppercase = lowercase = 0

for char in sentence:
    if char.isdigit():
        digits += 1
    elif char.isupper():
        uppercase += 1
    elif char.islower():
        lowercase += 1

print(f"Digits: {digits}")
print(f"Uppercase letters: {uppercase}")
print(f"Lowercase letters: {lowercase}")`,
        output: `Enter a sentence: Hello World 123
Digits: 3
Uppercase letters: 2
Lowercase letters: 8`
      },
      {
        id: 9,
        question: "Write a Python program to change a given string to a new string where the first and last chars have been exchanged.",
        code: `string = input("Enter a string: ")

if len(string) > 1:
    new_string = string[-1] + string[1:-1] + string[0]
else:
    new_string = string

print(f"New string: {new_string}")`,
        output: `Enter a string: Hello
New string: oellH`
      },
      {
        id: 10,
        question: "Write a program that accepts sequence of lines and prints all characters capitalized.",
        code: `lines = []
print("Enter lines (empty line to stop):")

while True:
    line = input()
    if line == "":
        break
    lines.append(line)

print("\\nOutput:")
for line in lines:
    print(line.upper())`,
        output: `Enter lines (empty line to stop):
Hello world
Practice makes perfect

Output:
HELLO WORLD
PRACTICE MAKES PERFECT`
      },
      {
        id: 11,
        question: "Write a Python program to add an item in a tuple.",
        code: `tuple1 = (1, 2, 3, 4)
print(f"Original tuple: {tuple1}")

# Convert to list, add item, convert back
temp = list(tuple1)
temp.append(5)
tuple1 = tuple(temp)

print(f"After adding 5: {tuple1}")`,
        output: `Original tuple: (1, 2, 3, 4)
After adding 5: (1, 2, 3, 4, 5)`
      },
      {
        id: 12,
        question: "Write a Python program for Reversing a List.",
        code: `my_list = [1, 2, 3, 4, 5]
print(f"Original list: {my_list}")

# Method 1: Using reverse()
my_list.reverse()
print(f"Reversed list: {my_list}")

# Method 2: Using slicing
my_list2 = [10, 20, 30, 40, 50]
reversed_list = my_list2[::-1]
print(f"Using slicing: {reversed_list}")`,
        output: `Original list: [1, 2, 3, 4, 5]
Reversed list: [5, 4, 3, 2, 1]
Using slicing: [50, 40, 30, 20, 10]`
      },
      {
        id: 13,
        question: "Write a Python program to find sum of elements in list.",
        code: `my_list = [10, 20, 30, 40, 50]
print(f"List: {my_list}")

# Method 1: Using sum()
total = sum(my_list)
print(f"Sum using sum(): {total}")

# Method 2: Using loop
total2 = 0
for num in my_list:
    total2 += num
print(f"Sum using loop: {total2}")`,
        output: `List: [10, 20, 30, 40, 50]
Sum using sum(): 150
Sum using loop: 150`
      },
      {
        id: 14,
        question: "Write a Python program to find smallest / largest number in a list.",
        code: `my_list = [34, 12, 89, 5, 67, 23]
print(f"List: {my_list}")

smallest = min(my_list)
largest = max(my_list)

print(f"Smallest: {smallest}")
print(f"Largest: {largest}")`,
        output: `List: [34, 12, 89, 5, 67, 23]
Smallest: 5
Largest: 89`
      },
      {
        id: 15,
        question: "Write a Python program to count Even and Odd numbers in a List.",
        code: `my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_count = 0
odd_count = 0

for num in my_list:
    if num % 2 == 0:
        even_count += 1
    else:
        odd_count += 1

print(f"List: {my_list}")
print(f"Even numbers: {even_count}")
print(f"Odd numbers: {odd_count}")`,
        output: `List: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Even numbers: 5
Odd numbers: 5`
      },
      {
        id: 16,
        question: "Write a Python Program to count unique values inside a list.",
        code: `my_list = [1, 2, 2, 3, 3, 3, 4, 5, 5]
print(f"List: {my_list}")

unique_values = set(my_list)
print(f"Unique values: {unique_values}")
print(f"Count of unique values: {len(unique_values)}")`,
        output: `List: [1, 2, 2, 3, 3, 3, 4, 5, 5]
Unique values: {1, 2, 3, 4, 5}
Count of unique values: 5`
      },
      {
        id: 17,
        question: "Write a program to display unique vowels present in the given word.",
        code: `word = input("Enter a word: ")
vowels = "aeiouAEIOU"
found_vowels = set()

for char in word:
    if char in vowels:
        found_vowels.add(char.lower())

print(f"Unique vowels: {found_vowels}")`,
        output: `Enter a word: Education
Unique vowels: {'e', 'u', 'a', 'i', 'o'}`
      },
      {
        id: 18,
        question: "Write a program to take a tuple of numbers from keyboard and print its sum and average.",
        code: `numbers = tuple(map(int, input("Enter numbers separated by space: ").split()))

total = sum(numbers)
average = total / len(numbers)

print(f"Tuple: {numbers}")
print(f"Sum: {total}")
print(f"Average: {average}") `,
        output: `Enter numbers separated by space: 10 20 30 40 50
Tuple: (10, 20, 30, 40, 50)
Sum: 150
Average: 30.0`
      },
      {
        id: 19,
        question: "Write a program to enter name and percentage marks in a dictionary and display information.",
        code: `students = {}
n = int(input("Enter number of students: "))

for i in range(n):
    name = input(f"Enter name of student {i+1}: ")
    marks = float(input(f"Enter percentage of {name}: "))
    students[name] = marks

print("\\nStudent Information:")
for name, marks in students.items():
    print(f"{name}: {marks}%")`,
        output: `Enter number of students: 2
Enter name of student 1: Rahul
Enter percentage of Rahul: 85.5
Enter name of student 2: Priya
Enter percentage of Priya: 92.0

Student Information:
Rahul: 85.5%
Priya: 92.0%`
      },
      {
        id: 20,
        question: "Python Program to convert list to dictionary.",
        code: `keys = ['a', 'b', 'c', 'd']
values = [1, 2, 3, 4]

# Method 1: Using zip
dictionary = dict(zip(keys, values))
print(f"Dictionary: {dictionary}")

# Method 2: Using dictionary comprehension
dict2 = {k: v for k, v in zip(keys, values)}
print(f"Using comprehension: {dict2}")`,
        output: `Dictionary: {'a': 1, 'b': 2, 'c': 3, 'd': 4}
Using comprehension: {'a': 1, 'b': 2, 'c': 3, 'd': 4}`
      },
      {
        id: 21,
        question: "Write a program to take dictionary from keyboard and print the sum of values.",
        code: `my_dict = {}
n = int(input("Enter number of items: "))

for i in range(n):
    key = input(f"Enter key {i+1}: ")
    value = int(input(f"Enter value for {key}: "))
    my_dict[key] = value

print(f"Dictionary: {my_dict}")
print(f"Sum of values: {sum(my_dict.values())}") `,
        output: `Enter number of items: 3
Enter key 1: a
Enter value for a: 10
Enter key 2: b
Enter value for b: 20
Enter key 3: c
Enter value for c: 30
Dictionary: {'a': 10, 'b': 20, 'c': 30}
Sum of values: 60`
      },
      {
        id: 22,
        question: "Write Python code snippet to display n terms of Fibonacci series using recursion.",
        code: `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

n = int(input("Enter number of terms: "))
print("Fibonacci Series:")
for i in range(n):
    print(fibonacci(i), end=" ")`,
        output: `Enter number of terms: 10
Fibonacci Series:
0 1 1 2 3 5 8 13 21 34`
      },
      {
        id: 23,
        question: "Write a program to sort a dictionary in ascending and descending order by key and value.",
        code: `my_dict = {'c': 3, 'a': 1, 'd': 4, 'b': 2}
print(f"Original: {my_dict}")

# Sort by key ascending
sorted_by_key = dict(sorted(my_dict.items()))
print(f"Sorted by key (asc): {sorted_by_key}")

# Sort by key descending
sorted_by_key_desc = dict(sorted(my_dict.items(), reverse=True))
print(f"Sorted by key (desc): {sorted_by_key_desc}")

# Sort by value ascending
sorted_by_value = dict(sorted(my_dict.items(), key=lambda x: x[1]))
print(f"Sorted by value (asc): {sorted_by_value}")

# Sort by value descending
sorted_by_value_desc = dict(sorted(my_dict.items(), key=lambda x: x[1], reverse=True))
print(f"Sorted by value (desc): {sorted_by_value_desc}")`,
        output: `Original: {'c': 3, 'a': 1, 'd': 4, 'b': 2}
Sorted by key (asc): {'a': 1, 'b': 2, 'c': 3, 'd': 4}
Sorted by key (desc): {'d': 4, 'c': 3, 'b': 2, 'a': 1}
Sorted by value (asc): {'a': 1, 'b': 2, 'c': 3, 'd': 4}
Sorted by value (desc): {'d': 4, 'c': 3, 'b': 2, 'a': 1}`
      },
      {
        id: 24,
        question: "Write a python program to manage student's details using dictionary.",
        code: `students = {}

# Add students
students[101] = {"name": "Rahul", "marks": 85, "grade": "A"}
students[102] = {"name": "Priya", "marks": 92, "grade": "A+"}
students[103] = {"name": "Amit", "marks": 78, "grade": "B+"}

# Display all students
print("Student Details:")
for roll, details in students.items():
    print(f"Roll: {roll}, Name: {details['name']}, Marks: {details['marks']}, Grade: {details['grade']}")

# Search student
search = int(input("\\nEnter roll number to search: "))
if search in students:
    print(f"Found: {students[search]}")
else:
    print("Student not found")`,
        output: `Student Details:
Roll: 101, Name: Rahul, Marks: 85, Grade: A
Roll: 102, Name: Priya, Marks: 92, Grade: A+
Roll: 103, Name: Amit, Marks: 78, Grade: B+

Enter roll number to search: 101
Found: {'name': 'Rahul', 'marks': 85, 'grade': 'A'}`
      },
      {
        id: 25,
        question: "Write a program to create three dictionaries and concatenate them to create fourth dictionary.",
        code: `dict1 = {'a': 1, 'b': 2}
dict2 = {'c': 3, 'd': 4}
dict3 = {'e': 5, 'f': 6}

print(f"Dict 1: {dict1}")
print(f"Dict 2: {dict2}")
print(f"Dict 3: {dict3}")

# Method 1: Using update()
dict4 = {}
dict4.update(dict1)
dict4.update(dict2)
dict4.update(dict3)
print(f"Concatenated: {dict4}")

# Method 2: Using ** operator
dict5 = {**dict1, **dict2, **dict3}
print(f"Using ** operator: {dict5}")`,
        output: `Dict 1: {'a': 1, 'b': 2}
Dict 2: {'c': 3, 'd': 4}
Dict 3: {'e': 5, 'f': 6}
Concatenated: {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6}
Using ** operator: {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6}`
      }
    ]
  },
  {
    unitId: 4,
    unitName: "Unit IV",
    unitTitle: "File Handling",
    programs: [
      {
        id: 1,
        question: "Write a Python program to remove newline characters from a file.",
        code: `# Reading file and removing newlines
with open("input.txt", "r") as file:
    content = file.read()
    clean_content = content.replace("\\n", " ")

print("Content without newlines:")
print(clean_content)

# Writing back to file
with open("output.txt", "w") as file:
    file.write(clean_content)
print("Saved to output.txt")`,
        output: `Content without newlines:
Hello World This is Python Programming
Saved to output.txt`
      },
      {
        id: 2,
        question: "Write a Python program to read a file line-by-line and store it into a variable.",
        code: `lines = []

with open("sample.txt", "r") as file:
    for line in file:
        lines.append(line.strip())

print("Lines stored in variable:")
for i, line in enumerate(lines, 1):
    print(f"Line {i}: {line}")`,
        output: `Lines stored in variable:
Line 1: Hello World
Line 2: Python Programming
Line 3: File Handling`
      },
      {
        id: 3,
        question: "Create a file 'P.txt', write your name and father's name, then read and print it.",
        code: `# Writing to file
with open("P.txt", "w") as file:
    file.write("Name: Rahul Kumar\\n")
    file.write("Father's Name: Suresh Kumar\\n")

print("Data written to P.txt")

# Reading from file
with open("P.txt", "r") as file:
    content = file.read()

print("\\nContent of P.txt:")
print(content)`,
        output: `Data written to P.txt

Content of P.txt:
Name: Rahul Kumar
Father's Name: Suresh Kumar`
      },
      {
        id: 4,
        question: "Read numbers from Input.txt, write odd numbers to ODD.TXT and even numbers to EVEN.TXT.",
        code: `# Create Input.txt with sample data
with open("Input.txt", "w") as f:
    f.write("1 2 3 4 5 6 7 8 9 10")

# Read numbers
with open("Input.txt", "r") as file:
    numbers = list(map(int, file.read().split()))

# Separate odd and even
odd = [n for n in numbers if n % 2 != 0]
even = [n for n in numbers if n % 2 == 0]

# Write to files
with open("ODD.TXT", "w") as f:
    f.write(" ".join(map(str, odd)))

with open("EVEN.TXT", "w") as f:
    f.write(" ".join(map(str, even)))

print(f"Odd numbers: {odd}")
print(f"Even numbers: {even}")
print("Files created: ODD.TXT, EVEN.TXT")`,
        output: `Odd numbers: [1, 3, 5, 7, 9]
Even numbers: [2, 4, 6, 8, 10]
Files created: ODD.TXT, EVEN.TXT`
      },
      {
        id: 5,
        question: "Write a program to read file 'message' one character at a time and print each character.",
        code: `# Create sample file
with open("message", "w") as f:
    f.write("Hello")

# Read character by character
print("Reading character by character:")
with open("message", "r") as file:
    while True:
        char = file.read(1)
        if not char:
            break
        print(f"'{char}'")`,
        output: `Reading character by character:
'H'
'e'
'l'
'l'
'o'`
      },
      {
        id: 6,
        question: "Write a Python program to copy the contents of a file to another file.",
        code: `# Create source file
with open("source.txt", "w") as f:
    f.write("This is the source file.\\n")
    f.write("Content to be copied.")

# Copy contents
with open("source.txt", "r") as source:
    content = source.read()

with open("destination.txt", "w") as dest:
    dest.write(content)

print("File copied successfully!")
print("\\nContent of destination.txt:")
with open("destination.txt", "r") as f:
    print(f.read())`,
        output: `File copied successfully!

Content of destination.txt:
This is the source file.
Content to be copied.`
      },
      {
        id: 7,
        question: "Write a program to modify the pointer position using seek() method in Python.",
        code: `# Create a file
with open("test.txt", "w") as f:
    f.write("Hello Python World")

with open("test.txt", "r") as file:
    # Read from beginning
    print(f"Position: {file.tell()}")
    print(f"First 5 chars: {file.read(5)}")
    
    # Move to position 6
    file.seek(6)
    print(f"Position after seek(6): {file.tell()}")
    print(f"Read from position 6: {file.read(6)}")
    
    # Move to beginning
    file.seek(0)
    print(f"After seek(0): {file.read()}")`,
        output: `Position: 0
First 5 chars: Hello
Position after seek(6): 6
Read from position 6: Python
After seek(0): Hello Python World`
      }
    ]
  },
  {
    unitId: 5,
    unitName: "Unit V",
    unitTitle: "NumPy, Matplotlib & GUI",
    programs: [
      {
        id: 1,
        question: "How to obtain type of elements, number of elements, base address and number of bytes occupied by a NumPy array.",
        code: `import numpy as np

arr = np.array([1, 2, 3, 4, 5])

print(f"Array: {arr}")
print(f"Data type: {arr.dtype}")
print(f"Number of elements: {arr.size}")
print(f"Shape: {arr.shape}")
print(f"Number of dimensions: {arr.ndim}")
print(f"Bytes per element: {arr.itemsize}")
print(f"Total bytes: {arr.nbytes}")`,
        output: `Array: [1 2 3 4 5]
Data type: int64
Number of elements: 5
Shape: (5,)
Number of dimensions: 1
Bytes per element: 8
Total bytes: 40`
      },
      {
        id: 2,
        question: "Python Program to Perform Arithmetic Operations on Array.",
        code: `import numpy as np

arr1 = np.array([10, 20, 30, 40])
arr2 = np.array([1, 2, 3, 4])

print(f"Array 1: {arr1}")
print(f"Array 2: {arr2}")
print(f"Addition: {arr1 + arr2}")
print(f"Subtraction: {arr1 - arr2}")
print(f"Multiplication: {arr1 * arr2}")
print(f"Division: {arr1 / arr2}")`,
        output: `Array 1: [10 20 30 40]
Array 2: [1 2 3 4]
Addition: [11 22 33 44]
Subtraction: [ 9 18 27 36]
Multiplication: [ 10  40  90 160]
Division: [10. 10. 10. 10.]`
      },
      {
        id: 3,
        question: "Given two matrices, add, subtract, multiply and divide corresponding elements.",
        code: `import numpy as np

matrix1 = np.array([[1, 2], [3, 4]])
matrix2 = np.array([[5, 6], [7, 8]])

print("Matrix 1:")
print(matrix1)
print("\\nMatrix 2:")
print(matrix2)

print("\\nAddition:")
print(matrix1 + matrix2)

print("\\nSubtraction:")
print(matrix1 - matrix2)

print("\\nMultiplication (element-wise):")
print(matrix1 * matrix2)

print("\\nDivision:")
print(matrix1 / matrix2)`,
        output: `Matrix 1:
[[1 2]
 [3 4]]

Matrix 2:
[[5 6]
 [7 8]]

Addition:
[[ 6  8]
 [10 12]]

Subtraction:
[[-4 -4]
 [-4 -4]]

Multiplication (element-wise):
[[ 5 12]
 [21 32]]

Division:
[[0.2        0.33333333]
 [0.42857143 0.5       ]]`
      },
      {
        id: 4,
        question: "Create a 50 element array and fill it with odd numbers starting from 1.",
        code: `import numpy as np

# Create array with first 50 odd numbers
arr = np.arange(1, 100, 2)[:50]

print("First 50 odd numbers:")
print(arr)
print(f"\\nTotal elements: {len(arr)}")`,
        output: `First 50 odd numbers:
[ 1  3  5  7  9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47
 49 51 53 55 57 59 61 63 65 67 69 71 73 75 77 79 81 83 85 87 89 91 93 95
 97 99]

Total elements: 50`
      },
      {
        id: 5,
        question: "Write a Python program to draw a line with suitable labels and title using Matplotlib.",
        code: `import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

plt.plot(x, y, marker='o', color='blue')
plt.xlabel('X-Axis')
plt.ylabel('Y-Axis')
plt.title('Simple Line Graph')
plt.grid(True)
plt.show()`,
        output: `[A line graph is displayed with:
- X-axis labeled "X-Axis"
- Y-axis labeled "Y-Axis"  
- Title "Simple Line Graph"
- Blue line with circle markers
- Grid lines enabled]`
      },
      {
        id: 6,
        question: "Write a Python program to display a bar chart of programming languages popularity.",
        code: `import matplotlib.pyplot as plt

languages = ['Python', 'Java', 'C++', 'JavaScript', 'C#']
popularity = [29.5, 17.2, 7.5, 8.1, 4.3]

bars = plt.bar(languages, popularity, color=['blue', 'red', 'green', 'orange', 'purple'])

# Add labels on bars
for bar, pop in zip(bars, popularity):
    plt.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 0.5, 
             f'{pop}%', ha='center')

plt.xlabel('Programming Languages')
plt.ylabel('Popularity (%)')
plt.title('Programming Languages Popularity')
plt.show()`,
        output: `[A bar chart is displayed showing:
- 5 colored bars for each language
- Python: 29.5%
- Java: 17.2%  
- C++: 7.5%
- JavaScript: 8.1%
- C#: 4.3%
- Labels displayed above each bar]`
      },
      {
        id: 7,
        question: "Write a Python program to create a pie chart of gold medal achievements in 2016 Olympics.",
        code: `import matplotlib.pyplot as plt

countries = ['USA', 'Great Britain', 'China', 'Russia', 'Germany']
gold_medals = [46, 27, 26, 19, 17]
colors = ['gold', 'blue', 'red', 'green', 'black']

plt.pie(gold_medals, labels=countries, colors=colors, 
        autopct='%1.1f%%', startangle=90)
plt.title('Gold Medals - 2016 Summer Olympics')
plt.axis('equal')
plt.show()`,
        output: `[A pie chart is displayed showing:
- USA: 34.1%
- Great Britain: 20.0%
- China: 19.3%
- Russia: 14.1%
- Germany: 12.6%
- Each slice in different colors]`
      },
      {
        id: 8,
        question: "Create a MultiIndex with names of each index level in Python Pandas.",
        code: `import pandas as pd

# Create MultiIndex
arrays = [
    ['Bar1', 'Bar1', 'Bar2', 'Bar2'],
    ['One', 'Two', 'One', 'Two']
]

tuples = list(zip(*arrays))
index = pd.MultiIndex.from_tuples(tuples, names=['First', 'Second'])

# Create DataFrame with MultiIndex
df = pd.DataFrame({'Value': [10, 20, 30, 40]}, index=index)

print("DataFrame with MultiIndex:")
print(df)
print(f"\\nIndex names: {df.index.names}")`,
        output: `DataFrame with MultiIndex:
              Value
First Second       
Bar1  One       10
      Two       20
Bar2  One       30
      Two       40

Index names: ['First', 'Second']`
      },
      {
        id: 9,
        question: "Create a GUI Calendar using Tkinter.",
        code: `import tkinter as tk
from tkinter import ttk
import calendar

def show_calendar():
    year = int(year_entry.get())
    month = int(month_entry.get())
    cal_text = calendar.month(year, month)
    cal_label.config(text=cal_text)

# Create window
root = tk.Tk()
root.title("Calendar")

# Year input
tk.Label(root, text="Year:").pack()
year_entry = tk.Entry(root)
year_entry.pack()

# Month input
tk.Label(root, text="Month:").pack()
month_entry = tk.Entry(root)
month_entry.pack()

# Button
tk.Button(root, text="Show Calendar", command=show_calendar).pack()

# Calendar display
cal_label = tk.Label(root, font=('Courier', 12))
cal_label.pack()

root.mainloop()`,
        output: `[A GUI window appears with:
- Year input field
- Month input field
- "Show Calendar" button
- Calendar display area showing:
    December 2024
Mo Tu We Th Fr Sa Su
                   1
 2  3  4  5  6  7  8
 9 10 11 12 13 14 15
16 17 18 19 20 21 22
23 24 25 26 27 28 29
30 31]`
      },
      {
        id: 10,
        question: "Create GUI digital clock using Tkinter.",
        code: `import tkinter as tk
from time import strftime

def update_time():
    current_time = strftime('%H:%M:%S')
    current_date = strftime('%A, %d %B %Y')
    time_label.config(text=current_time)
    date_label.config(text=current_date)
    time_label.after(1000, update_time)

# Create window
root = tk.Tk()
root.title("Digital Clock")
root.configure(bg='black')

# Time label
time_label = tk.Label(root, font=('Arial', 60, 'bold'),
                      bg='black', fg='green')
time_label.pack()

# Date label
date_label = tk.Label(root, font=('Arial', 20),
                      bg='black', fg='white')
date_label.pack()

update_time()
root.mainloop()`,
        output: `[A GUI window appears with:
- Large green digital time: 14:30:45
- White date below: Thursday, 26 December 2024
- Black background
- Time updates every second]`
      }
    ]
  }
];
