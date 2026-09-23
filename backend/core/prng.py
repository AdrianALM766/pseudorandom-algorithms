def congruencial_mixto(seed: int, a: int, c: int, m: int, iterations: int):
    """
    X_{n+1} = (a * X_n + c) mod m
    """
    results = []
    x = seed
    
    for _ in range(iterations):
        x = (a*x+c)%m
        u = x/m
        results.append({"x": x, "u":u})
    
    return results

def congruencial_multiplicativo(seed: int, a: int, m: int, iterations: int):
    """
    X_{n+1} = (a * X_n) mod m
    """
    results = []
    x = seed
    for _ in range(iterations):
        x = (a*x)%m
        u = x/m
        results.append({"x":x,"u":u})
    return results

def cuadrados_medios(seed: int, digits: int, iterations: int):
    """
    Extrae los dígitos centrales del cuadrado del número.
    """
    results = []
    x = seed
    for _ in range(iterations):
        square_str = str(x ** 2).zfill(2 * digits)
        start = (len(square_str) - digits) // 2
        x = int(square_str[start: start+digits])
        u = x / (10 ** digits)
        results.append({"x":x,"u":u})
    return results