var feolo = document.getElementById("formsmswpp");
var btnwpp  = document.getElementById("smswpp");
var btnwpp4 = document.getElementById("btnwpp2");
var ele1 = document.getElementById("sccll");

var feolo2 = document.getElementById("formdwln");
var btndwln  = document.getElementById("dwd");






function funsmswpp ()
{
    if (feolo.style.transform =="scale(1)")
    {
        feolo.style.transform ="scale(0)";
    }
    else
    {
        feolo.style.transform ="scale(1)";
        feolo2.style.transform ="scale(0)";
    }
}

function funsmswpp2 ()
{
    if (feolo2.style.transform =="scale(1)")
    {
        feolo2.style.transform ="scale(0)";
    }
    else
    {
        feolo2.style.transform ="scale(1)";
        feolo.style.transform ="scale(0)";
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
        btndwln.style.transform="scale("+1+")";
    }
    else
    {
        btnwpp.style.transform="scale("+0+")";
        btndwln.style.transform="scale("+0+")";
        feolo.style.transform ="scale(0)";
        feolo2.style.transform ="scale(0)";
    }
  
    
    

}
window.addEventListener('scroll', mostrarscroll);