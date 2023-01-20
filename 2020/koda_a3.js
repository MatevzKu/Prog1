/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

kodirnik = new Object();

kodirnik.slovar = ['a', 'b', 'c', 'č', 'd', 0];
kodirnik.zamik = 3;

kodirnik.najdiCrko = function (crka) {
    for (i = 0; kodirnik.slovar[i] != 0; i++) {
        if (kodirnik.slovar[i] == crka) {
            return i;
        }
    }
    return -99;
}


