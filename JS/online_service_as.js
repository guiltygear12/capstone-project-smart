$(".service_tap").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    if($(this).hasClass("tabmenu1")){
        $(".tab1").addClass("active")
        $(".tab1").siblings().removeClass("active")
    }
    if($(this).hasClass("tabmenu2")){
        $(".tab2").addClass("active")
        $(".tab2").siblings().removeClass("active")
    } 
    if($(this).hasClass("tabmenu3")){
        $(".tab3").addClass("active")
        $(".tab3").siblings().removeClass("active")
    } 
    if($(this).hasClass("tabmenu4")){
        $(".tab4").addClass("active")
        $(".tab4").siblings().removeClass("active")
    } 
    if($(this).hasClass("tabmenu5")){
        $(".tab5").addClass("active")
        $(".tab5").siblings().removeClass("active")
    }
})