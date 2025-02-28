"use strict";

$(function () {
  /* 섹션2 */

  //마우스올리면 .play 나오고, 벗어나면 사라지기
  $(".main_video .play").hide();

  $(".main_video > div").hover(
    function () {
      $(".main_video .play").show();
    },
    function () {
      $(".main_video .play").hide();
    }
  );

  //.play가 마우스 따라다니기
  $(".main_video > div").on("scroll mousemove", function (e) {
    // 마우스 좌표값
    $(".main_video .play").css({
      left: (e.pageX += 30) + "px",
      top: (e.pageY -= 924) + "px",
    });
  });

  //클릭하면 라이트박스 동영상 나오기 💡회전시키기
  $(".main_video .sec1_lightbox").slideToggle();
  $(".main_video > div").on("click", function () {
    $(".main_video .sec1_lightbox").slideToggle();
    $(".main_video > div > h2, .main_video > div > h2::after").toggle(300);
    $(".main_video .play").toggle();
  });

  /* 섹션4 */

  // work1
  //마우스올리면 .hover_img_lg 나오고, 벗어나면 사라지기
  $(".img_lg > .hover_img_lg").hide();
  $(".img_lg > .hover_area").hover(
    function () {
      $(".sec4 .img_lg > .hover_img_lg").fadeIn(1000);
    },
    function () {
      $(".sec4 .img_lg > .hover_img_lg").fadeOut(500);
    }
  );

  // .hover_img_lg가 마우스 따라다니기
  $(".sec4 .img_lg > .hover_area").on("scroll mousemove", function (e) {
    $(".sec4 .img_lg > .hover_img_lg").css({
      left: (e.pageX -= 20) + "px",
      top: (e.pageY -= 3080) + "px",
    });
  });

  // work2
  $(".img_sm-l .hover_img_sm-l").hide();
  $(".img_sm-l > .hover_area").hover(
    function () {
      $(".img_sm-l .hover_img_sm-l").fadeIn(1000);
    },
    function () {
      $(".img_sm-l .hover_img_sm-l").fadeOut(500);
    }
  );

  $(".img_sm-l").on("scroll mousemove", function (e) {
    $(".img_sm-l .hover_img_sm-l").css({
      left: (e.pageX -= 0) + "px",
      top: (e.pageY -= 4280) + "px",
    });
  });

  //work3
  $(".img_sm-r .hover_img_sm-r").hide();
  $(".img_sm-r > .hover_area").hover(
    function () {
      $(".img_sm-r .hover_img_sm-r").fadeIn(1000);
    },
    function () {
      $(".img_sm-r .hover_img_sm-r").fadeOut(500);
    }
  );

  $(".img_sm-r").on("scroll mousemove", function (e) {
    $(".img_sm-r .hover_img_sm-r").css({
      left: (e.pageX -= 910) + "px",
      top: (e.pageY -= 4280) + "px",
    });
  });

  //----------------------
});
