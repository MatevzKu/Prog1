kodirnik = new Object();
kodirnik.slovar = ['a','b','c','č','d','e','f',0];
kodirnik.zamik = 3;
kodirnik.getChar = function(znak){
    for(var i = 0; kodirnik.slovar[i]!=0;i++){
        if(kodirnik.slovar[i]==znak){
            return i;
        }
    }
    return -99;
}