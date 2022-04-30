$(".filter_btn").click(function(){
    $(".products_filter").toggleClass("active");
})

$(".wish_btn").click(function(){
    $(this).children(".fa-bookmark").toggleClass("active");
    $(this).children(".fa-bookmark-o").toggleClass("active");
})

$(".filter_select p").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
})