var listaa = document.getElementById("menuotro");
var listab = document.getElementsByClassName("subtitulos");
var btnact = document.getElementsByClassName("btnmo");

var mosmu = document.getElementById("menut");
var ancho = screen.width;

function mos(elemento)
{
    if(listab[elemento].style.display=="block")
        {
            listab[elemento].style.display="none";
            btnact[elemento].style.transform = "rotate("+0+"deg)";
        }
    else
        {
            listab[elemento].style.display="block";
            btnact[elemento].style.transform = "rotate("+180+"deg)";
            for (let index = 0; index < listab.length; index++) 
            {
                if(elemento!=index)
                {
                    listab[index].style.display="none"; 
                    btnact[index].style.transform = "rotate("+0+"deg)";
                }
            }
           
        }
}
function mosmenu()
{
    if(listaa.style.display=="block")
        {
            listaa.style.display="none";
        }
    else
        {
            listaa.style.display="block";
        }
 

}


