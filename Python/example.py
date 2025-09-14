# # creating a function to add two numbers
# # print("Hello, World!") #` This line prints a greeting message to the console`

# # countDoeNumber = 0.0 #` This line initializes a counter variable to zero`
# # print("Count is:", type(countNumber), countNumber)

# # dict = {'stu1': 1, 'stu2': 2, 'stu3': 3} #` This line prints the current value of the counter`
# # print("Dictionary is:", type(dict), dict['stu1'])

# # name="0" #` This line initializes a string variable with a name`

# # print(name+"1") #` This line prints the length of the string variable`

# # num1 = input("Enter first number: ") #` This line prompts the user to enter the first number`
# # num2 = input("Enter second number: ") #` This line prompts the user to enter

# # print(num1 , num2) #` This line prints the concatenation of the two input numbers as strings`

# a= True
# b= False

# if a or b:
#     print("Both are true")
# else:
#     print("One is false")

#bubble sort
def bubble_sort(arr):
    n = len(arr)
    # Traverse through all array elements
    for i in range(n):
        # Last i elements are already sorted
        for j in range(0, n-i-1):
            # Traverse the array from 0 to n-i-1
            # Swap if the element found is greater than the next element
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

arr = [64, 34, 25, 12, 22, 11, 90]
sorted_arr = bubble_sort(arr)
print("Sorted array is:", sorted_arr)