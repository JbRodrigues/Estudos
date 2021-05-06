num = float(input('Digite Sua Nota do Primeiro Bimestre '))
num2 = float(input('Digite Sua Nota do Segundo Bimestre '))
num3 = float(input('Digite Sua Nota do Terceiro Bimestre '))
num4 = float(input('Digite Sua Nota do Quarto Bimestre '))

media = (num+num2+num3+num4) / 4;

print('A nota do primeiro bimestre foi {}, \ndo segundo foi {} \ndo terceiro foi {} \ne do quarto foi {} \nsua média no semestre foi de {:.1f}'.format(num, num2, num3, num4, media))