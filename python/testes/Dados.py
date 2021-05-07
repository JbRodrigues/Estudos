import random

dado = random.randrange(1,6)

num = int(input('Advinhe o número'))
aux = 1;


while aux != 0:
    num = int(input('Tente Outra vez !!! '))
    if num == dado:
        print('Parabens, você Acertou!!!')
        aux = 0;