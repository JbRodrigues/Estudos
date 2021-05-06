num = float(input('Digite Sua Nota do Primeiro Bimestre '))
num2 = float(input('Digite Sua Nota do Segundo Bimestre '))
num3 = float(input('Digite Sua Nota do Terceiro Bimestre '))
num4 = float(input('Digite Sua Nota do Quarto Bimestre '))

media = (num+num2+num3+num4) / 4;

print('A nota do primeiro bimestre foi {}, do segundo foi {} do terceiro foi {} e do quarto foi {} e sua média no semestre foi de {}'.format(num, num2, num3, num4, media))