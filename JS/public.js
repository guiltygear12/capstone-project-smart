$(document).ready(function() { 
    $(".gnb_menu>li").mouseover(function() { 
        $(this).children(".sub").stop().slideDown(); 
    }); 
    $(".gnb_menu>li").mouseleave(function() { 
        $(this).children(".sub").stop().slideUp();
     }); 
    });

$('.search').click(function(){
    $(this).toggleClass('active')
})
$('.gnb_right a i').click(function(){
    $('.user').toggleClass('active')
})