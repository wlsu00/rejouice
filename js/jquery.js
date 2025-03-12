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
    $("#mobile_menu").slideToggle(function () {
      if ($("#mobile_menu").is(":visible")) {
        $(".btn_menu a").text("Close");
        $("header").css("background-color", "#000");
      } else {
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

  //클릭하면 라이트박스 동영상 나오기 💡회전시키기
  $(".main_video .sec1_lightbox").slideToggle();

  $(".main_video > div").on("click", function () {
    $(".main_video .sec1_lightbox").slideToggle();
    $(".main_video > div > h2, .main_video > div > h2::after").toggle(300);
  });

  $(".main_video > div .main_video1").on("click", function () {
    $(".main_video .play").text("X Close Reel").css({
      fontWeight: "400",
      color: "#000",
    });
  });
  $(".main_video .sec1_lightbox").on("click", function (e) {
    $(".main_video .play").text("▶ Play Reel").css({
      fontWeight: "300",
      color: "#fff",
    });
  });

  /* 섹션2 */
  //ain_text 첫줄만 들여쓰기
  // $(document).ready(function () {
  //   // 첫 번째 span의 상단 위치를 기준으로 첫 줄의 위치를 결정
  //   var firstLineTop = $(".ani_text span").first().position().top;

  //   // 약간의 오차를 고려해, top 위치가 firstLineTop과 거의 같은 (< 5px 차이) span들을 선택
  //   var firstLineSpans = $(".ani_text span").filter(function () {
  //     return Math.abs($(this).position().top - firstLineTop) < 5;
  //   });

  //   // 선택된 첫 줄의 span들을 하나의 래퍼로 감싸기
  //   firstLineSpans.wrapAll('<div class="first-line"></div>');

  //   // 감싼 컨테이너에 오른쪽 정렬 CSS 적용
  //   $(".first-line").css({
  //     display: "block", // 인라인 요소가 아니라 블록 요소로 처리해서 정렬 적용
  //     "text-align": "right",
  //   });
  // });
  /* 섹션4 */

  // work1
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

  //work2랑 3은 gsap으로 다르게함
  /*
  //work2
  $(".img_sm_l .hover_img_sm_l").hide();

  $(".hover_area_l").on("mouseenter", function () {
    // $(".img_sm_l .hover_img_sm_l").slideDown();
    $(".img_sm_l img:first-of-type").css("opacity", "0.5");
    $(".img_sm_l img:nth-of-type(2)").css("opacity", "0");
  });
  $(".hover_area_l").on("mouseleave", function () {
    // $(".img_sm_l .hover_img_sm_l").slideUp();
    $(".img_sm_l img:first-of-type").css("opacity", "1");
    $(".img_sm_l img:nth-of-type(2)").css("opacity", "1");
  });

  //work3
  $(".hover_area-r").on("mouseenter", function () {
    $(".img_sm_r .hover_img_sm_r").slideDown();
    $(".img_sm_r img:first-of-type").css("opacity", "0.5");
    $(".img_sm_r img:nth-of-type(2)").css("opacity", "0");
  });
  $(".hover_area-r").on("mouseleave", function () {
    $(".img_sm_r .hover_img_sm_r").slideUp();
    $(".img_sm_r img:first-of-type").css("opacity", "1");
    $(".img_sm_r img:nth-of-type(2)").css("opacity", "1");
  });
  */

  $(".hover_img_sm_l").on("mouseenter", function () {
    $(".img_sm_l img:first-of-type").css("opacity", "0.5");
    $(".img_sm_l img:nth-of-type(2)").css("opacity", "0");
  });

  $(".hover_img_sm_l").on("mouseleave", function () {
    $(".img_sm_l img:first-of-type").css("opacity", "1");
    $(".img_sm_l img:nth-of-type(2)").css("opacity", "1");
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
