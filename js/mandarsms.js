function mostrard()
{
    var fecha = new Date();
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var saludo ="";
    if(minutos<37 )
    {
        saludo ="Buenos dias, ";
    }
    else
    {
        saludo= "Buenas tardes, ";
    }
    var id1=document.getElementById("idnombre").value;
    var id2=document.getElementById("idmensaje").value;
    var linkito = "https://wa.me/+59165555895?text=" +saludo + "mi nombre es "+id1  + " %0A%0A" + id2 + "%0A";
    window.open(linkito);
}