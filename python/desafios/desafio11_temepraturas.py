temp = float(input('Digite a temperatura '))

k = 273.15 + temp
f = (temp * 9/5) + 32

print('A temperatura digitada é de {}ºC \n Fahrenheit {}ºF \n Kelvin {}K'.format(temp, k ,f))