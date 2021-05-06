qtddias = float(input('Digite a quantidade de dias o carro foi alugado '))
qtdkm = float(input('Digite a quantidade de Kilometros rodados com o carro '))

dias = 60 * qtddias
km = 0.15 * qtdkm

val = dias + km

print('O carro foi alugado por {:.0f} Dias e rodou {}Km \n O valor a pagar é de R${:.2f} !'.format(qtddias, qtdkm, val))

