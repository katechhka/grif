$(".veapon__btn").click(function(){
    $(this).toggleClass("_open");
    $(".veapon__text").toggleClass("_open");
    if($(this).hasClass("_open")){
        $(".veapon__btn span").html("Свернуть")
    }
    else{
         $(".veapon__btn span").html("Развернуть")
    }
})
$(".header__burger").click(function(){
    $(".menu").addClass("_open")
})
$(".menu__close, .menu a").click(function(){
    $(".menu").removeClass("_open")
})
$('.info__wrap-item').click(function(){
    let thisData=$(this).data("popup");
    console.log(thisData)
    $(".popup").each(function(){
        let thisPopup=$(this);
        if(thisPopup.data("popup")==thisData){
            thisPopup.addClass("_open");
        }
    })
    $("body").addClass("open-popup")
})
$('.popup__close').click(function(e){
   $("body").removeClass("open-popup")
    $(this).closest(".popup").removeClass("_open");
    
})
$(document).mouseup(function (e) {



var container2=$('.popup');



           if (
      container2.hasClass("_open") &&
      !container2.is(e.target) &&
      container2.has(e.target).length === 0
    ) {
      $(".popup._open").each(function () {
        $(this).removeClass("_open");
      });
        $("body").removeClass("open-popup");
    }
    
 

  });