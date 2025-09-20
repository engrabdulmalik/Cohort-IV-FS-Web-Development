# # # # # # # # # myList = [1,"mystring",1, True,{"a": "myvalue"},1, [1,2,3],1]



# # # # # # # # # # print(myList)

# # # # # # # # # for item in myList:
# # # # # # # # #     print(item)
    
    
# # # # # # # # def convert_seconds(seconds):
# # # # # # # #     minutes = seconds // 60
# # # # # # # #     remaining_seconds = seconds % 60
# # # # # # # #     hours = minutes // 60
# # # # # # # #     remaining_minutes = minutes % 60
# # # # # # # #     days = hours // 24
# # # # # # # #     remaining_hours = hours % 24
    
# # # # # # # #     return remaining_hours,hours, remaining_minutes, remaining_seconds, days

# # # # # # # # hours, minutes, seconds, days, r_hours = convert_seconds(100000)

# # # # # # # # print(r_hours)

# # # # # # # animals =["cat", "dog", "rabbit", "hamster", "parrot", "fish"]

# # # # # # # chars = 0
# # # # # # # for animal in animals:
# # # # # # #     char=0
# # # # # # #     for letter in animal:
        
# # # # # # #         char += len(letter)
# # # # # # #     print(animal,len(animal))    
    
# # # # # # # print(chars)


# # # # # # tasks = ["eat", "sleep", "code", "repeat"]
# # # # # # b = "laundry"

# # # # # # obj1= enumerate(tasks,1)
# # # # # # obj2=enumerate(b,2)

# # # # # # print((obj1))
# # # # # # print(list(obj2))

# # # # # def skip_elements(elements):
# # # # #     result = []
# # # # #     for index, element in enumerate(elements):
# # # # #         if index % 2 != 0:
# # # # #             result.append(element)
# # # # #     return result

# # # # # print(skip_elements(["a", "b", "c", "d", "e", "f", "g"]))

# # # # multiples = []
# # # # for x in range(1, 11):
# # # #     multiples.append(x * 7)
# # # # print(multiples)


# # # # languages = ["Python", "Perl", "Ruby", "Java", "C", "Haskell", "Erlang"]

# # # # lengths = [ len(language) for language in languages ]

# # # # print(lengths)

# # # z = [x * x for x in range(1, 11) if x % 2 == 0]
# # # print(z)

# # file_counts= {"jpg": 10, "txt": 14, "csv": 2, "py": 23}

# # for extension in file_counts.values():
# #     print(extension)


# def division(a,b):
#     try:
#         return a / b
#     except ZeroDivisionError as e:
#         print("Error:", e)
#         # print(e.__class__.__name__)
#         return None
# division(5,0)   

try:
    myList = [1, 2, 3]
    print(myList[3])
except Exception as e:
    # print("Error:", e)
    print(e.__class__.__name__)