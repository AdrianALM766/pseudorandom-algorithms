def corte_inicio_fin(seed):
    #se ingresa la semilla pura ejemplo 4989
    #sacamos su longitud
    seed_len = str(seed)
    seed_len = len(seed_len)
    
    #definimos el inicio del corte como semilla_len al cuadrado
    # menos seed_len dividido todo entre 2 con division de enteros
    corte_inicio = ((seed_len*2) - seed_len )//2
    corte_fin = corte_inicio + seed_len
    
    #!lista donde ponemos el incio y fin del corte que usaremos despues
    list_corte = [corte_inicio, corte_fin]
    return list_corte


def productos_medios(seed1, seed2, n):
    #!lista donde pondremos los numeros random
    lista_random = []
    seed_one = seed1
    seed_two = seed2
    lista_random.append(seed1)
    lista_random.append(seed2)
    len_seed = len(str(seed1))
        
    for i in range(n):
        if i == 0:
            print("nada")
        else:
            print(i)
            
        multiplicacion_seed = lista_random[i]*lista_random[i+1]
        seed_mul_str = str(multiplicacion_seed)
        seed_mul_len = len(seed_mul_str)
        
        if seed_mul_len < (len_seed*2):
            new_seed_mul = seed_mul_str.zfill(len_seed*2)
            seed_mul_str = new_seed_mul
        
        corte = corte_inicio_fin(seed_one)
        seed_cortada = seed_mul_str[corte[0]:corte[1]]
        seed_cortada = int(seed_cortada)
        
        lista_random.append(seed_cortada)
    
    return lista_random

print(productos_medios(1234, 5678, 3))
