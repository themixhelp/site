from random import randint

def losuj():
    score = randint(0, len(phrase))
    end = phrase[score - 1]
    str(end)
    print('Wylosowana fraza to: ' + end)
                        
inp = str(input('Podaj frazy [oddziel srednikami, bez spacji]: '))
inp2 = int(input('Ile fraz chcesz wylosowac?: '))
                        
phrase = inp.split(";")
                        
for i in range(0, inp2):
    losuj()