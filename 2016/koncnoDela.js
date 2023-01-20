/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function pisiNekam(vsebina, target, overwrite = true)
{
    var tar = document.getElementById(target);
    if (overwrite) {
        tar.innerHTML = vsebina;
    }
    else
    {
        tar.innerHTML += vsebina;
    }
}
