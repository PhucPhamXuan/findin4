import io
import os
from shutil import copyfile

file = open("dulieu.txt","r+")
lines = file.readlines()
for line in lines:
    a = line
    b,c = a.split(':')
    print(b,c)