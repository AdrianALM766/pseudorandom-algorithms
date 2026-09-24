def congruencial_mult(seed, mult, m,n):
    lista = []
    lista.append(seed)
    modulo = m
    for i in range(n):
        aux = lista[i] * mult
        aux = aux % modulo
        lista.append(aux)
    return lista
