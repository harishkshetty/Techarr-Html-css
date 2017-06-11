
$(document).ready(function(){
    $(".content").click(function(){
        $(".overlay").show();
         $(".popup").show(500);

    });
    $("#close").click(function(){
        $(".overlay").hide();
         $(".popup").hide(500);

    });

    $(document).keyup(function(e) {
  if (e.keyCode == 27) { 

$(".overlay").hide();
         $(".popup").hide(500);

  }   
});

$(document).mouseup(function (e) {
     var popup = $(".popup");
     var over = $(".overlay");

     if (!$('.content').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
         popup.hide(500);
         over.hide();
     }
     
});
});
