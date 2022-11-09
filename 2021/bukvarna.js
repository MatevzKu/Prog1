function pisem(tekst,alarm=false){
    if(alarm){
        alert(tekst);
        return;
    }
    else{
        console.log(tekst);
        return;
    }
    //console.log("Če se tole izpiše asistent nima pojma");
}

function matematika(x,y){
    var vsota = x+y;
    var razlika = x-y;
    var produkt = x*y;
    var kvocient = x/y;
    console.log(vsota +  " " + produkt);
    return [vsota,razlika,produkt,kvocient];
    return razlika;
}

function karnekaj(x,y){
    var rezultat = matematika(x,y);
    console.log("Vsota = " + rezultat[0]);
    console.log("Razlika = " + rezultat[0]);
    pisem("Javim se iz funkcije");
    return true;
}