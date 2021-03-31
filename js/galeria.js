
function f24(indicador)
{
    var ele = document.getElementById(indicador); 
ele.style.left = 0;
}
function f25(indicador)
{
    var ele = document.getElementById(indicador); 
    ele.style.left = "-"+100+"%";
}

var slider1 = $('#girat1');
$('#girat1 section:last').insertBefore('#girat1 section:first');
slider1.animate({marginLeft:'-'+33+'%'});

function moverD1()
{
    slider1.animate({marginLeft:'-'+66+'%'},500,function()
         {
            $('#girat1 section:first').insertAfter('#girat1 section:last');
            slider1.css('margin-left', '-'+33+'%');
         });
};
function moverI1()
{
    slider1.animate({marginLeft:0},500,function()
         {
            $('#girat1 section:last').insertBefore('#girat1 section:first');
            slider1.css('margin-left', '-'+33+'%');

         });
}
var slider2 = $('#girat2');
$('#girat2 section:last').insertBefore('#girat2 section:first');
slider2.animate({marginLeft:'-'+33+'%'});

function moverD2()
{
    slider2.animate({marginLeft:'-'+66+'%'},500,function()
         {
            $('#girat2 section:first').insertAfter('#girat2 section:last');
            slider2.css('margin-left', '-'+33+'%');
         });
};
function moverI2()
{
    slider2.animate({marginLeft:0},500,function()
         {
            $('#girat2 section:last').insertBefore('#girat2 section:first');
            slider2.css('margin-left', '-'+33+'%');

         });
}
var slider3 = $('#girat3');
$('#girat3 section:last').insertBefore('#girat3 section:first');
slider3.animate({marginLeft:'-'+33+'%'});

function moverD3()
{
    slider3.animate({marginLeft:'-'+66+'%'},500,function()
         {
            $('#girat3 section:first').insertAfter('#girat3 section:last');
            slider3.css('margin-left', '-'+33+'%');
         });
};
function moverI3()
{
    slider3.animate({marginLeft:0},500,function()
         {
            $('#girat3 section:last').insertBefore('#girat3 section:first');
            slider3.css('margin-left', '-'+33+'%');

         });
}