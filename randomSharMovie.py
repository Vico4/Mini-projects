import urllib
import bs4
from bs4 import BeautifulSoup
import random
from random import seed
from random import randint

url_sharks = "https://fr.wikipedia.org/wiki/Liste_de_films_de_requins_tueurs"

from urllib import request 

request_text = request.urlopen(url_sharks).read()

page = bs4.BeautifulSoup(request_text, features="html.parser")

#print(page.find('table').findAll({'i'})[0:5])

#print(page.find("title"))


num = randint(0, 50)

#with open('sharks.txt', 'w') as file :
for item in page.find('table').findAll({'a'})[num:num+1] : 
    if (item.getText() != "(en)"):
        #file.write(item.getText() + '\n')
        print(item.getText())

