def congruencial_mixto(seed,a,c,m,n):
    lista = []
    lista.append(seed)
    
    for i in range(n):
        aux = (a*lista[i])+c
        aux = aux%m
        lista.append(aux)
    return lista
