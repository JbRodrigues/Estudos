largura = float(input('Digite a largura da parede em Metros '))
altura = float(input('Digite a altura da parede em Metros '))

parede = largura*altura
tinta = parede/2

print('Um Quarto de {} Metros quadrados precisará de {} Litros de tinta !'.format(parede, tinta))