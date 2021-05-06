num = int(input('Digite um número '))

aux = 0

while aux <= 10:
    res = num * aux
    print('{} x {} == {}'.format(num, aux, res))
    aux = aux + 1
    
