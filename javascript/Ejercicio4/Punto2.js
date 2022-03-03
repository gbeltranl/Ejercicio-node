let mcd = (a,b) => a==b ? a: a > b ? mcd(b, a-b) : mcd(a, b-a); 


