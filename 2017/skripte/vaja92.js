/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function printaj(tekst, id, novavrstica = false) {
    var tar = document.getElementById(id);
    tar.innerHTML += tekst;
    if (novavrstica) {
        tar.innerHTML += "<br>";
}
}

