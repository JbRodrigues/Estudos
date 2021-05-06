preco = float(input('Digite o preço do produto '))

desc = preco-(0.05*preco)

print('O produto de preço R${:.2f}, na liquidaçao esta custando R${:.2f}'.format(preco, desc))

sal = float(input('Digite Seu Salario '))

aumento = sal+(sal*0.15)

print('O salario de R${:.2f} com aumento foi para R${:.2f} !'.format(sal, aumento))