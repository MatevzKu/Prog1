function vektorji(a,b,r1,r2){
    temp = 0;
    for(i = 0; i < a.length; i++){
            r1.push(a[i]*b[i]);
            temp += a[i]*b[i]
    }
    r2.push(temp)
}


kodirnik = new Object()
kodirnik.slovar = ['a','b','c','č','d','e','f','g','h',0]
kodirnik.zamik = 3;

kodirnik.getChar = function(znak){
    for(i = 0; kodirnik.slovar[i] != 0; i++){
        if(kodirnik.slovar[i] == znak){
            return i
        }
    }
    return -99;
}