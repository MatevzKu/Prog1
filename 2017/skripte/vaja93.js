/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function pisi(tekst = "upsi", id = "tukaj", newLine = false) {
    var tar = document.getElementById(id);
    if (newLine) {
        tar.innerHTML += "<br>";
    }
    tar.innerHTML += tekst;
}
