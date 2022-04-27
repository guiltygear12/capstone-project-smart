let slideNum=0;
function slideCount(slideNum) {
    return slideNum + 1;
  }
// gnb 메뉴
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

// 슬라이드 배너
// 넥스트 버튼
$('.slide_next').mouseenter(function(){
    switch (slideNum) {
        case 0:
            $('.slide_item:nth-child(2)').css({'transform':'scale(1.5)'})
          break;
        case 1:
            $('.slide_item:nth-child(3)').css({'transform':'scale(1.5)'})
          break;

      }
})
$('.slide_next').mouseleave(function(){
    switch (slideNum) {
        case 0:
            $('.slide_item:nth-child(2)').css({'transform':'scale(1)'})
          break;
        case 1:
            $('.slide_item:nth-child(3)').css({'transform':'scale(1)'})
          break;

      }
})
$('.slide_next').click(function(){
            
    switch (slideNum) {
        case 0:
            slideNum=1
            $('.slide_item:nth-child(2)').css({'transform':'scale(1)'})
            $('.slide_content').css({'transform':'translateX(-100vw)'})
            break;
        case 1:
            slideNum=2
            $('.slide_item:nth-child(3)').css({'transform':'scale(1)'})
            $('.slide_content').css({'transform':'translateX(-200vw)'})
            break;
        case 2:
            slideNum=0
            $('.slide_item:nth-child(1)').css({'transform':'scale(1)'})
            $('.slide_content').css({'transform':'translateX(0)'})
            break;
        default:
            alert(slideNum)
      }
})
// 이전 버튼
$('.slide_prev').mouseenter(function(){
    switch (slideNum) {
        case 1:
            $('.slide_item:nth-child(1)').css({'transform':'scale(1.5)'})
            $('.slide_item:nth-child(1)').css({'z-index':'10'})
          break;
        case 2:
            $('.slide_item:nth-child(2)').css({'transform':'scale(1.5)'})
            $('.slide_item:nth-child(2)').css({'z-index':'10'})
        break;

      }
})
$('.slide_prev').mouseleave(function(){
    switch (slideNum) {
        case 1:
            $('.slide_item:nth-child(1)').css({'transform':'scale(1)'})
            $('.slide_item:nth-child(1)').css({'z-index':'1'})
          break;
        case 2:
            $('.slide_item:nth-child(2)').css({'transform':'scale(1)'})
            $('.slide_item:nth-child(2)').css({'z-index':'1'})
        break;

      }
})
$('.slide_prev').click(function(){
            
    switch (slideNum) {
        case 0:
            slideNum=2
            $('.slide_item:nth-child(1)').css({'z-index':'1'})
            $('.slide_item:nth-child(2)').css({'z-index':'1'})
            $('.slide_item:nth-child(3)').css({'z-index':'1'})
            $('.slide_item:nth-child(3)').css({'transform':'scale(1)'})
            $('.slide_content').css({'transform':'translateX(-200vw)'})
            break;
        case 1:
            slideNum=0
            $('.slide_item:nth-child(1)').css({'z-index':'1'})
            $('.slide_item:nth-child(2)').css({'z-index':'1'})
            $('.slide_item:nth-child(3)').css({'z-index':'1'})
            $('.slide_item:nth-child(1)').css({'transform':'scale(1)'})
            $('.slide_content').css({'transform':'translateX(0)'})
            break;
        case 2:
            slideNum=1
            $('.slide_item:nth-child(1)').css({'z-index':'1'})
            $('.slide_item:nth-child(2)').css({'z-index':'1'})
            $('.slide_item:nth-child(3)').css({'z-index':'1'})
            $('.slide_item:nth-child(2)').css({'transform':'scale(1)'})
            $('.slide_content').css({'transform':'translateX(-100vw)'})
            break;
        default:
            alert(slideNum)
      }
})

// 이벤트 영역
$('.discount_side div').click(function(){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
    if($(".discount_side div:nth-child(1).active").length) {
        $('.discount_main img:nth-child(1)').addClass('active')
        $('.discount_main img:nth-child(1)').siblings().removeClass('active')
       } else {
        if($(".discount_side div:nth-child(2).active").length) {
            $('.discount_main img:nth-child(2)').addClass('active')
            $('.discount_main img:nth-child(2)').siblings().removeClass('active')
           } else {
            if($(".discount_side div:nth-child(3).active").length) {
                $('.discount_main img:nth-child(3)').addClass('active')
                $('.discount_main img:nth-child(3)').siblings().removeClass('active')
               } 
           }
       }
})

// 추천 상품 영역
$('.recommend_side h4').click(function(){
    $('.recommend_side h4').removeClass('active')
    $(this).addClass('active')
    if($(".recommend_side h4.reco1.active").length) {
        $('.recommend_main').css({'background-image': 'url("../IMG/wallpaper_1.jpg")'})
    } else {
        if($(".recommend_side h4.reco2.active").length) {
            $('.recommend_main').css({'background-image': 'url("../IMG/wallpaper_2.jpg")'})
        } else {
            if($(".recommend_side h4.reco3.active").length) {
                $('.recommend_main').css({'background-image': 'url("../IMG/wallpaper_3.jpg")'})
            } else {
                if($(".recommend_side h4.reco4.active").length) {
                    $('.recommend_main').css({'background-image': 'url("../IMG/wallpaper_4.jpg")'})
                } else {
                    if($(".recommend_side h4.reco5.active").length) {
                        $('.recommend_main').css({'background-image': 'url("../IMG/wallpaper_5.jpg")'})
                    } else {
                        if($(".recommend_side h4.reco6.active").length) {
                            $('.recommend_main').css({'background-image': 'url("../IMG/wallpaper_6.jpg")'})
                        } else {
                    
                        }
                    }
                }
            }
        }
    }
})

// 브랜드 대표 시리즈 소개
$('.samsung .brand_products_img div h4').click(function(){
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
    if($(".samsung .brand_products_img div h4:nth-child(1).active").length) {
        $('.samsung .brand_products_img').css({'background-image':'url("../IMG/sam1.jpg")'})
       } else {
        if($(".samsung .brand_products_img div h4:nth-child(2).active").length) {
            $('.samsung .brand_products_img').css({'background-image':'url("../IMG/sam2.png")'})
           } else {
            if($(".samsung .brand_products_img div h4:nth-child(3).active").length) {
                $('.samsung .brand_products_img').css({'background-image':'url("../IMG/sam3.jpg")'})
               } 
           }
       }
})
$('.lg .brand_products_img div h4').click(function(){
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
    if($(".lg .brand_products_img div h4:nth-child(1).active").length) {
        $('.lg .brand_products_img').css({'background-image':'url("../img/wallpaper_4.jpg")'})
       } else {
        if($(".lg .brand_products_img div h4:nth-child(2).active").length) {
            $('.lg .brand_products_img').css({'background-image':'url("../IMG/wallpaper_1.jpg")'})
           } else {
            if($(".lg .brand_products_img div h4:nth-child(3).active").length) {
                $('.lg .brand_products_img').css({'background-image':'url("../IMG/wallpaper_2.jpg")'})
               } 
           }
       }
})
$('.apple .brand_products_img div h4').click(function(){
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
    if($(".apple .brand_products_img div h4:nth-child(1).active").length) {
        $('.apple .brand_products_img').css({'background-image':'url("../IMG/apple1.jpg")'})
       } else {
        if($(".apple .brand_products_img div h4:nth-child(2).active").length) {
            $('.apple .brand_products_img').css({'background-image':'url("../IMG/apple2.jpg")'})
           } else {
            if($(".apple .brand_products_img div h4:nth-child(3).active").length) {
                $('.apple .brand_products_img').css({'background-image':'url("../IMG/wallpaper_3.jpg")'})
               } 
           }
       }
})