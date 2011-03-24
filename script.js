$(function (){
	
	$('#hide_regular').bind('click', function (){
  
    $(this).siblings().filter('.large').find('.regular').hide();
    
	});
  
  $('#change_colors').bind('click', function (){
	
    $('.large').css('background-color','black');
    
    $('.regular').css('background-color','orange');
    
    $('.tiny').css('background-color','red');
	});

});



