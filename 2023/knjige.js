kodirnik = new Object()

kodirnik.slovar = ['a','b','c','d','e','f','g','h','i',0];

kodirnik.getChar = function(znak){
    for(i = 0; kodirnik.slovar[i] != 0; i++){
        if(kodirnik.slovar[i] == znak){
            return i;
        }
    }
    return -99;
}  