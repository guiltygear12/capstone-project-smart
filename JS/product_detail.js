console.clear();

function dragSlide__init() {
  var $slideDrag = $('.slide1').find(' > .slide-draggable');
  var slideDuration = parseInt($slideDrag.parent().attr('data-slide-duration'));
  
  $slideDrag.data("data-slide-index", 0)
  var slideIndex = $slideDrag.data("data-slide-index");
  var dragAmount = 0;

  // slide setting
  function slideSet() {
    var $this = $slideDrag;
    var $parent = $this.parent();
    var slideWidth = $parent.width();
    
    var duration = slideDuration / 1000;
    
    $this.css('transition', 'transform ' + duration + 's');
    $this.css({ transform: "translateX(" + slideIndex * -slideWidth + "px)" });
  }
  
  //drag slide
  function dragSlide() {
    var $this = $(this);
    
    // drag prevent
    if ($this.hasClass('prevent')) {
      return ;
    }
    $this.addClass('prevent');
    
    // slide
    var $slide = $this.parent();
    
    var slideWidth = $slide.width();
    var minDistance = (slideWidth / 2) / 2;

    var dragPosition = parseInt($this.css("left"));
    slideDuration = parseInt($slide.attr('data-slide-duration'));
    var slideLimit = $this.find(" > .item").length - 1;
    
    //drag reset
    $this.stop().animate({ left: 0 }, {duration: slideDuration, complete: function(){
      $this.removeClass('prevent');
    }});
    
    
    // drag direction
    if (dragPosition < 0) {
      console.log("right");
      if (dragPosition > -minDistance || slideIndex >= slideLimit) return ;
      
      $this.data("data-slide-index", ++slideIndex);
      dragAmount += -slideWidth;
    }
    else {
      console.log("left");
      if (dragPosition < minDistance || slideIndex <= 0) return ;

      $this.data("data-slide-index", --slideIndex);
      dragAmount += slideWidth;
    }
    $this.css({ transform: "translateX(" + dragAmount + "px)" });
  }

  // draggable
  slideSet();
  $(".slide1 .slide-draggable").draggable({ axis: "x", stop: dragSlide });
  $(window).resize(_.throttle(slideSet, 100));
}

$(function () {
  dragSlide__init();
});

$("input").click(function(){
  $(".review:nth-of-type(3)").toggleClass("active")
})

