# # # writing a function to add two numbers

# # def addNumbers(a, b):
# #     return a + b

# # #function call

# # firstNumber = int(input("Enter first number: "))
# # secondNumber = int(input("Enter second number: "))


# # result = addNumbers(firstNumber, secondNumber)
# # print("The sum is:", result)

# strings = "Cats & Dogs"

# # print(strings.index("&"))

# # print(strings[:4])

# # print(strings[1:4])

# # print("Cats" in strings)

# # result = strings.strip("Cats & Dogs")


# # print(" Cats & Dogs ".rstrip())

# print(strings.count("s"))
# string2 = "12345"
# string3 ="..."
# print(string2.isnumeric() )

# print(string3.join(["my", "name", "is", "khan"]))


# print(  strings.split(" "))

# name = "Abdullah"
# number = len(name) * 2

# print("Hello {}, your lucky number is {}".format(name, number))



price = 49
with_tax = 1.09
print("The price is ${:.2f}".format(price * with_tax))


def toCelcius(fahrenheit):
    return (fahrenheit - 32) * 5/9
for x in range(0, 101, 10):
    print("{:<3} F | {:<6.2f} C".format(x, toCelcius(x))) 

def get_word(sentence, n):
    
    if n > 0 :
        words = sentence.split()
        if n <= len(words):
            return words[n-1]
    return ""
print(get_word("This is a lesson about functions", 4))
print(get_word("This is a lesson about functions", -4))
print(get_word("Now we are cooking!", 1))
print(get_word("Now we are cooking!", 5))
print(get_word("", 1))
print(get_word("This is a lesson about functions", 10))


# Online Student Registration System

# Step 1: Take comma-separated input
student_input = input("Enter student names (comma-separated): ")

# Step 2: Split input into a list
students = student_input.split(",")

# Step 3: Check each student’s name and filter valid ones
valid_students = []
for name in students:
    name = name.strip()  # remove extra spaces
    if len(name) > 4:   # condition
        valid_students.append(name)

# Step 4: Display valid students using join
if valid_students:
    print("Valid Students:", " | ".join(valid_students))
else:
    print("No valid students found.")

