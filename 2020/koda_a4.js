/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
kodirnik = Object();

kodirnik.zamik = 3;
kodirnik.tabela = ['a', 'b', 'c', 'č', 'd', 0];

kodirnik.najdiZnak = function (crka) {
    for (i = 0; kodirnik.tabela[i] != 0; i++) {
        if (kodirnik.tabela[i] == crka) {
            return i;
        }
    }
    return -99;
}

function sproziAlarm(tekst = "bu"){
    alert(tekst);
}

