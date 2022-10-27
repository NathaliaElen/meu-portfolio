// faz a cor do navbar aparecer quando o scroll é utilizado 
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else{
            $('.navbar').removeClass("sticky");
        }
    });
});

// instância que tem o objetivo de digitar o que definimos no string
var typed = new Typed(".typing",
{
    strings:["Developer Front-End"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2",
{
    strings:["Developer Front-End"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// mostrar e esconder o conteúdo dos ícones
$('#passar_mouse').mouseover(function(){
    $('#mostrar').css('display', 'block');
  });

  $('#passar_mouse').mouseout(function(){
    $('#mostrar').css('display', 'none');
  });