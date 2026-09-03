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

def cuadrados_medios(seed, n):
    #!lista donde pondremos los numeros random
    lista_random = []
    seed_aux = seed
    
    for i in range(n):
        print("x")
        #sacamos el cuadrado, convertimos en str y sacamos len
        seed_square = seed_aux**2
        seed_square_str = str(seed_square) 
        seed_square_len = len(seed_square_str)
        
        #sacamos str y len de la semilla
        seed_for_str = str(seed_aux)
        seed_for_len = len(seed_for_str)
        
        #definimso en caso de que de algo como 12*12= 144 asi que haremos 0144 
        if seed_square_len < (seed_for_len*2):
            new_seed_square = seed_square_str.zfill(seed_for_len*2)
            seed_square_str = new_seed_square
        
        #llamo a la funcion corte_inicio_fin 
        corte = corte_inicio_fin(seed_aux)
        seed_cortada = seed_square_str[corte[0]:corte[1]]
        seed_cortada = int(seed_cortada)
            
        #ingreso los valores a la lista
        lista_random.append(seed_cortada) 
        
        seed_aux = lista_random[i]
    
    return lista_random


