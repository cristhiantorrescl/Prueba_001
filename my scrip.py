import torch
a =torch.tensor([1, 2, 3])
print (a)

b=torch.zeros((2, 3))
print (b)

c=torch.rand(2, 3)
print (c)

x=torch.tensor([1.0, 2.0, 3.0, 4.0]) 
y=torch.tensor([5.0, 6.0, 7.0, 8.0])
print(x)
print(y)
suma=x+y
print(suma)
resta=x-y
print(resta)
multiplicacion=x*y
print(multiplicacion)
division=x/y
print(division) 
producto =x*y
print(producto)

z=torch.tensor(2.0, requires_grad=True)
t=z**2 + 3*z 
t.backward()
print(z.grad)