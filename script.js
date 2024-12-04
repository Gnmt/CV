var i = false;
var görünürYap = true;


function fonksiyonum(){ // profil resmi tıklanınca

    
    fonksiyonum222(); // resmi küçültüp büyütür

    var liste = document.getElementById("linkListesi");
    
    if (görünürYap)
        {
            görünürYap = false;
            liste.style.display = "block";    
        }

    liste.classList.toggle("aktif");    // link listesini açar ve kapatır
    liste.classList.toggle("inaktif2");




    var a = document.getElementById("isim");    
    var b = document.getElementById("profill");
    var c = document.getElementById("pp");

    


    

    a.classList.toggle("isimm");   // isim yazısının rengini değiştirir
    a.classList.toggle("isimm2");


// aşşağısı profil resminin çerçevesini değiştirir 

    if(i)
        { 
            i = false;
            b.style.borderColor = "#281b45";
            b.classList.remove("borderShadowRed");
        }
    
    else
        {
            b.style.borderColor = "red";
            b.classList.add("borderShadowRed");
            i = true;
        }

}


function kirmiziYap(){  // eğer mouse profil resminin üzerine gelirse çerçevesini kırmızı yapar
    


    var a = document.getElementById("profill");

    a.style.transform = "scale(1.1)";
    
    if(!i)
        {
            a.style.borderColor = "red";
            
            a.classList.add("borderShadowRed");
            
        }
}

function morYap(){

    

    var a = document.getElementById("profill");


    a.style.transform = "scale(1)";
    
    if(!i){
        a.style.borderColor = "#281b45";
        
        a.classList.remove("borderShadowRed");
    }
}


function fonksiyonum222(){ // profil resmi tıklanınca
    var b = document.getElementById("profill");
    b.style.animation = "none";
    b.offsetHeight;
    b.style.animation = "rotate 0.15s ease-out";
    
}