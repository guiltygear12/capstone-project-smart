$(".my_page_list>h3").click(function(){
    $(this).addClass("active")
    $(this).siblings().removeClass("active")

    if($(".my_page_list>h3#barsket.active").length) {
        $('.my_page_right_title>h2').text("장바구니")
        $('.barsket_wrap').addClass("active")
        $('.barsket_wrap').siblings().removeClass("active")
    } else if($(".my_page_list>h3#order.active").length) {
        $('.my_page_right_title>h2').text("주문내역")
        $('.order_wrap').addClass("active")
        $('.order_wrap').siblings().removeClass("active")
    } else if($(".my_page_list>h3#product.active").length) {
        $('.my_page_right_title>h2').text("구매한 상품 관리")
        $('.product_wrap').addClass("active")
        $('.product_wrap').siblings().removeClass("active")
    } else if($(".my_page_list>h3#as.active").length) {
        $('.my_page_right_title>h2').text("A/S 예약관리")
        $('.as_wrap').addClass("active")
        $('.as_wrap').siblings().removeClass("active")
    }
})