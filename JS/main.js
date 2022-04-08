let slideNum=0;
function slideCount(slideNum) {
    return slideNum + 1;
  }
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