num = int(input('Digite um número '))

aux = 0

print("-"*15)

while aux <= 10:
    res = num * aux
    print('{} x {:2} = {}'.format(num, aux, res))
    aux = aux + 1

print("-"*15)