function fonksiyonum(){



   





    var liste = document.getElementById("linkListesi");

    if(liste.classList.contains("inaktif")){
        liste.classList.remove("inaktif");
        liste.classList.add("aktif");
    }
    else if(liste.classList.contains("aktif"))
    {
        liste.classList.remove("aktif");
        liste.classList.add("inaktif2");
    }
    else
    {
        liste.classList.remove("inaktif2");
        liste.classList.add("aktif");

        
    }


}