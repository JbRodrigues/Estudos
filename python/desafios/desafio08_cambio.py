saldo = float(input('Digite quanto saldo voce tem '))

dolar = 3.27
res = saldo/dolar

print('Com {:.0f} Reais, você pode comprar até {:.2f} dólares!'.format(saldo, res))