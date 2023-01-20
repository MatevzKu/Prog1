/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function pisi(tekst, newline)
{
    if (newline == undefined)
        newline = true;
    if (newline)
        document.write("<br>");
    document.write(tekst);
}


