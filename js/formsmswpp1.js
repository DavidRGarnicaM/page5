var feolo = document.getElementById("formsmswpp");

var btnwpp  = document.getElementById("smswpp");
var btnwpp4 = document.getElementById("btnwpp2");
var ele1 = document.getElementById("sccll");

function funsmswpp ()
{
    if (feolo.style.transform =="scale(1)")
    {
        feolo.style.transform ="scale(0)";
    }
    else
    {
        feolo.style.transform ="scale(1)";
    }

}

function mostrarscroll()
{
    
    var techo1 = document.documentElement.scrollTop;
    var pos1 = ele1.offsetTop;
    var posf = btnwpp4.offsetTop;    
    var altura = screen.height;



    if (pos1 -200< techo1 && techo1< posf- altura+150 ) 
    {
        btnwpp.style.transform="scale("+1+")";
    }
    else
    {
        btnwpp.style.transform="scale("+0+")";
    }
  
    
    

}
window.addEventListener('scroll', mostrarscroll);