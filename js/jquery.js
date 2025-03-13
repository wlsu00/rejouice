"use strict";

$(function () {
  /* 메인 로딩화면 */

  // 1. 로딩 화면이 뜬 상태에서 main 숨기기
  gsap.set(".logo_wrap", { display: "none" }); // 처음에 main을 숨김

  // 2. 로딩 화면 끝나면 main 보이게
  gsap.to(".loading", {
    opacity: 0,
    duration: 0.5,
    delay: 1.5, // 로딩 화면 유지 시간 (1.5초 추가)
    onStart: function () {
      $(".logo_wrap").css("display", "block"); // 로딩 화면이 시작될 때 main을 보이게 설정
    },
    onComplete: function () {
      $(".loading").hide(); // 로딩 화면 끝나면 숨기기
    },
  });

  // 3. main을 위에서 아래로 애니메이션으로 나타내기
  gsap.set("main", { y: "-100vh", opacity: 0 }); // 처음에는 숨긴 상태로 설정

  gsap.to("main", {
    y: "0vh",
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    delay: 2, // 로딩 끝난 후에 메인 등장
  });

  /* 모바일메뉴 */
  $("#mobile_menu").hide();
  $(".btn_menu a").on("click", function (e) {
    e.preventDefault();
    $("header").css({
      mixBlendMode: "normal",
    });
    $("#mobile_menu").slideToggle(function () {
      if ($("#mobile_menu").is(":visible")) {
        $(".btn_menu a").text("Close");
      } else {
        $("header").css({
          mixBlendMode: "difference",
        });
        $(".btn_menu a").text("Menu");
      }
    });
  });

  $("#mobile_menu > .mbtn_talk").on("click", function () {
    $("#mobile_menu > .mbtn_talk").css("opacity", "0.5");
  });

  /* 메인비주얼 큰 동영상 */

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

  //클릭하면 라이트박스 동영상 나오기
  $(".main_video .sec1_lightbox").slideToggle();

  $(".main_video > div").on("click", function () {
    $(".main_video .sec1_lightbox").slideToggle();
    $(".main_video > div > h2, .main_video > div > h2::after").toggle(300);
  });
  if (768 < $(window).outerWidth()) {
    $(".main_video > div .main_video1").on("click", function () {
      $(".main_video .play").text("X Close Reel").css({
        fontWeight: "400",
        color: "#000",
      });
    });
  }
  $(".main_video .sec1_lightbox").on("click", function (e) {
    $(".main_video .play").text("▶ Play Reel").css({
      fontWeight: "300",
      color: "#fff",
    });
  });
  //해상도 768 이하부터 라이트박스 엑스아이콘
  if ($(window).width() <= 768) {
    if ($(".sec1_lightbox").is(":visible")) {
      $(".sec1_lightbox .btn_close").show();
      $("header .con").css("opacity", "0");
      $(".main_video .play").css("opacity", "0");
    }
    $("header .con").css("opacity", "1");
  } else {
    $(".sec1_lightbox .btn_close").hide();
  }
  /* 섹션4 */

  // work1 (work2,3은 gsap으로 처리)

  //마우스올리면 .hover_img_lg 나오고, 벗어나면 사라지기
  $(".img_lg > .hover_img_lg").hide();
  $(".img_lg > .hover_area").on("mouseenter", function () {
    $(".sec4 .img_lg > .hover_img_lg").slideDown();
    $(".sec4 .img_lg img:first-child").css("opacity", "0.5");
    $(".sec4 .img_lg img:nth-of-type(2)").css("opacity", "0");
  });
  $(".img_lg > .hover_area").on("mouseleave", function () {
    $(".sec4 .img_lg > .hover_img_lg").slideUp();
    $(".sec4 .img_lg img:first-child").css("opacity", "1");
    $(".sec4 .img_lg img:nth-of-type(2)").css("opacity", "1");
  });

  //스크롤바 없이 사진3장 드래그
  $(document).ready(function () {
    let isDown = false;
    let startX, scrollLeft;
    const $container = $(".sec4 .highlights > div:last-child");

    $container.on("mousedown", function (e) {
      isDown = true;
      startX = e.pageX - $container.offset().left;
      scrollLeft = $container.scrollLeft();
    });

    // document 전체에 mouseup 이벤트를 걸어, 컨테이너 외부에서도 drag 상태를 해제
    $(document).on("mouseup", function () {
      isDown = false;
      $container.removeClass("active");
    });

    $container.on("mousemove", function (e) {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - $container.offset().left;
      const walk = (x - startX) * 3; // 드래그 이동 속도 조절
      $container.scrollLeft(scrollLeft - walk);
    });
  });

  /* 가상요소들 */
  //호버하면 애프터 앞으로 사라지면서 움직이기
  $(".main_video > div > h2").hover(
    function () {
      $(this).removeClass("removing").addClass("hovered"); // 왼쪽 → 오른쪽으로 나타남
    },
    function () {
      $(this).removeClass("hovered").addClass("removing"); // 오른쪽 → 왼쪽으로 사라짐
    }
  );
  $(".comEmail").hover(
    function () {
      $(this).removeClass("removing").addClass("hovered"); // 왼쪽 → 오른쪽으로 나타남
    },
    function () {
      $(this).removeClass("hovered").addClass("removing"); // 오른쪽 → 왼쪽으로 사라짐
    }
  );
  $(".right_up > .sitemap > li > a").hover(
    function () {
      $(this).removeClass("removing").addClass("hovered"); // 왼쪽 → 오른쪽으로 나타남
    },
    function () {
      $(this).removeClass("hovered").addClass("removing"); // 오른쪽 → 왼쪽으로 사라짐
    }
  );
  $(".right_up > ul:last-child > li > a").hover(
    function () {
      $(this).removeClass("removing").addClass("hovered"); // 왼쪽 → 오른쪽으로 나타남
    },
    function () {
      $(this).removeClass("hovered").addClass("removing"); // 오른쪽 → 왼쪽으로 사라짐
    }
  );
  $(".right_down > div:last-child > a").hover(
    function () {
      $(this).removeClass("removing").addClass("hovered"); // 왼쪽 → 오른쪽으로 나타남
    },
    function () {
      $(this).removeClass("hovered").addClass("removing"); // 오른쪽 → 왼쪽으로 사라짐
    }
  );
  $("#gnb > ul > li").hover(
    function () {
      $(this).removeClass("removing").addClass("hovered"); // 왼쪽 → 오른쪽으로 나타남
    },
    function () {
      $(this).removeClass("hovered").addClass("removing"); // 오른쪽 → 왼쪽으로 사라짐
    }
  );
  $(".sec6 .con > div > a").hover(
    function () {
      $(this).removeClass("removing").addClass("hovered"); // 왼쪽 → 오른쪽으로 나타남
    },
    function () {
      $(this).removeClass("hovered").addClass("removing"); // 오른쪽 → 왼쪽으로 사라짐
    }
  );

  //----------------------
});
