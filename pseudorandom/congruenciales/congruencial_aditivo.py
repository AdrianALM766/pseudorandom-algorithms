def congruencial_aditiva(m,lista_k,n):
    lista_nueva = lista_k
    k = len(lista_k)
    i = k-1
    
    lista_xi = []
    
    for y in range(n):
        i=i+1
        xi_1 = lista_nueva[i-1]
        xi_k = lista_nueva[i-k]
        suma = (xi_1 + xi_k)%m
        lista_xi.append(i)
        lista_xi.append(k)
        lista_nueva.append(suma)
    
    return lista_nueva

# lista_prueba = [15,28,63,42]
# modulo = 100
# n = 2

# total = congruencial_aditiva(modulo,lista_prueba,n)
# print(total)
        
        
    