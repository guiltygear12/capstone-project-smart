let tel_option = true;

$(".service_tap").click(function(){
    $(this).toggleClass("active")
    $(this).siblings().removeClass("active")
})
$(".tel_option").click(function(){
    if(tel_option == true){
        $(".tel_option>h1").text("E-mail")
        $(".tel_option_input>.email").addClass("active")
        $(".tel_option_input>.sms").removeClass("active")
        tel_option = false
    }else{(tel_option == false)
        $(".tel_option>h1").text("SMS")
        $(".tel_option_input>.sms").addClass("active")
        $(".tel_option_input>.email").removeClass("active")
        tel_option = true
    }
})