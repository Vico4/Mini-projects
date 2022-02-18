def bubble_sort(list):
        for j in range(len(list)):
                over = True
                print(j)
                for i in range(len(list)-1):
                        if list[i] > list[i+1]:
                                temp = list[i]
                                list[i] = list[i+1]
                                list[i+1] = temp
                                over = False
                if over == True:
                        return list

liste = bubble_sort([2, 54, 7, 38, 22, 13, 19, 45, 31, 77, 98, 5, 12, 28, 81, 26, 72, 4, 20, 42])
print(liste)