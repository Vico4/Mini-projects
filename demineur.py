import sys
import random
import copy

def arrayGrid(n):
    n = int(n)
    grid = []
    for i in range(n):
        line = []
        for j in range(n):
            line.append('0')
        grid.append(line)
    return grid

def putMines(grid, m): 
    new = copy.deepcopy(grid)
    for i in range(m):
        x = random.randrange(len(new))
        y = random.randrange(len(new))
        if new[y][x] != 'X':
            new[y][x] = 'X'
        else:
            x = random.randrange(len(new))
            new[y][x] = 'X'
    return new


def printGrid(array):
    for i in range(len(array)):
        line = "| "
        underline = ""
        for j in range(len(array[i])):
            line += array[i][j] + " | "
            underline += "----"
        if i == 0 :
            print(underline)
        print(line)
        print(underline)

# game 
def game(grid):
    minesNum = 9
    round = 0
    mined = putMines(grid, minesNum)
    printGrid(mined)
    print("Here is you grid, it is " + str(len(grid)) + " by " + str(len(grid)))
    print("Columns and rows are numbered from 1 to 6 : the top-left case is 1,1, the next one is 1,2 etc.")
    gameOn = True 
    while(gameOn):
        printGrid(grid)
        print("guess a position : give coordinates separated by a space, for example 1 1 for the top-left")
        guess = input()
        if guess: 
        # ajouter un check de l'input 
            x = int(guess[0]) - 1
            y = int(guess[2]) - 1
            if x >= 0 and y >= 0 and x < len(grid) and y < len(grid):
                mineCount = 0
                if mined[y][x] == 'X':
                    print("aouch, you found a mine")
                    printGrid(mined)
                    print('Sorry, you loose')
                    gameOn = False
                    break
                for i in range(y-1, y+2):
                    for j in range(x-1, x+2):
                        print(i,j) 
                        if i >= 0 and i < len(grid) and j >= 0 and j < len(grid) and mined[i][j] == "X":
                            mineCount += 1
                grid[y][x] = str(mineCount)
                round += 1
                if round == len(grid) * len(grid) - minesNum:
                    print("You found all unmined positions, you win !")
                    printGrid(mined) 
                    gameOn = False               
            else:
                print("invalid coordinates")


arr = arrayGrid(4)
#mined = putMines(arr, 3)   
game(arr)




