/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function pisi(tekst, tarca, overwrite = true)
{
    var tar = document.getElementById(tarca);
    if (overwrite)
        tar.innerHTML = tekst;
    else
        tar.innerHTML += tekst;
}

