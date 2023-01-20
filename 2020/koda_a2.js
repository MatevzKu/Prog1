/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

kodirnik = new Object();

kodirnik.zamik = 3;
kodirnik.tab = ['a', 'b', 'c', 'č', 'd', 'e', 0];

kodirnik.najdiZnak = function (crka) {
    for (i = 0; kodirnik.tab[i] != 0; i++) {
        if (kodirnik.tab[i] == crka) {
            return i;
        }
    }
    return -99;
}


function bu(tekst="ustraši se"){
    alert(tekst);
}


