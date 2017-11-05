$(function(){ 
//    DESLIZA MENU
  $('.main_menu a[class!="special"]').click(function(){
      var goto = $('.'+$(this).attr('href').replace('#', '')).position().top;
      $('html, body').animate({scrollTop: goto - $('.main_header').outerHeight()}, 1000);
      return false;
  });
//  MENU FIXED
    $(window).scroll(function(){
        if($(this).scrollTop() > $('.main_header').outerHeight() + 150){
            $('body').css('padding-top', $('.main_header').outerHeight());
            $('.main_header').addClass('main_header_fixed');
            $('.subir-topo').fadeIn(500);
        }else{
            $('body').css('padding-top', '0');
             $('.main_header').removeClass('main_header_fixed'); 
               $('.subir-topo').fadeOut(500);
        }
    });
//    VOLTAR A O TOPO
    $('.subir-topo').click(function(){
        $('html, body').animate({scrollTop: 0}, 1000);        
    });
//    FORM_SUBMIT AJAX
    $('.form_submit').submit(function(){
        var dados = $(this).serialize();
        
        $.ajax({
            url: 'js/ajax.php',
            data: dados,
            type: 'POST',
            dataType: 'HTML',
            beforeSend: function (){
                $('.form_load').fadeIn();
            },
            success: function(data) {
                $('.form_load').fadeOut();
                alert("ola " + data.nome + ". obrigado");
            }
        });
        return false;
    });
});

