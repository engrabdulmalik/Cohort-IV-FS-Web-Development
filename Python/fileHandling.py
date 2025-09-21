# # # file = open("test.txt", "r")

# # # content = file.readline()

# # # print(content)

# # # file.close()
# try:
#     with open("./test.txt", "r") as file:
#         content = file.readlines()
#         print(content)
# except FileNotFoundError as e:
#     print("Error:", e)
# # with open("test.txt", "r") as file:
# #     content = file.readline()
# #     print(content)

# # with open("test.txt", "a") as file:
# #     file.writelines(["The Class is sleeping","why everyone sleeping"])
    
menuOfCoffee = ["Espresso","cortado", "Latte", "Cappuccino", "Americano", "Mocha", "Macchiato", "Flat White", "Irish Coffee", "Iced Coffee", "Affogato"]

def displayMenu(coffee):
    if coffee[0]=="c" or coffee[0]=="C":
        return coffee
    
mappedMenu = filter(displayMenu, menuOfCoffee)
print(list(mappedMenu))