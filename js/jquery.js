"use strict";

$(function () {
  //마우스오버하면 play reel 나오기
  // $(".main_video > div").on("mouseover", function () {
  //   $(".main_video .play").show();
  // });

  $(".main_video > div").mousemove(function (e) {
    var mouseX = e.pageX;
    var mouseY = e.pageY;

    $(".main_video .play").css({
      left: mouseX + "px",
      top: mouseY + "px",
    });
  });

  $(".sec4 .img_lg").mousemove(function (e) {
    var mouseX = e.pageX;
    var mouseY = e.pageY;

    $(".sec4 .img_lg > .hover_video").css({
      left: mouseX + "px",
      top: mouseY + "px",
    });
  });
  //클릭하면 라이트박스 동영상 나오기 💡회전시키기
  $(".main_video .sec1_lightbox").slideToggle();
  $(".main_video > div").on("click", function () {
    $(".main_video .sec1_lightbox").slideToggle();
    $(".main_video > div > h2, .main_video > div > h2::after").toggle(300);
  });

  //----------------------
});
