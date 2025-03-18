document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  /* 헤더 */
  //로고 바뀌기
  gsap.to(".logo_text", {
    opacity: 0,
    duration: 0.3,
    scrollTrigger: {
      trigger: ".main_video",
      start: "872px top",
      end: "top top",
      scrub: 1,
      // markers: true,
      onEnter: () => {
        $(".logo_text").addClass("hide"); // - 텍스트 로고
        $(".logo_img").addClass("show"); // + 이미지 로고
      },
      onLeaveBack: () => {
        $(".logo_text").removeClass("hide"); // + 텍스트 로고
        $(".logo_img").removeClass("show"); // - 이미지 로고
      },
    },
  });

  /* 섹션2 */
  //글자 아래로 떨어지기
  gsap.fromTo(
    ".sec2 .ani_text p",
    { y: "-20%", opacity: 0 },
    {
      y: "0%",
      opacity: 1,
      duration: 0.3,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".sec2",
        start: "bottom 26%",
        //markers: true,
      },
    }
  );

  /* 섹션3 */
  //글자 아래로 떨어지기
  gsap.fromTo(
    ".sec3 .left_txt span",
    { y: "-100%", opacity: 0 },
    {
      y: "0px",
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".sec3",
        start: "bottom 30%",
        // markers: true,
      },
    }
  );
  gsap.fromTo(
    ".sec3 .right_txt div",
    { y: "-50px", opacity: 0 },
    {
      y: "0px",
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".sec3",
        start: "bottom 30%",
        // markers: true,
      },
    }
  );
  /* 섹션4 */
  //work1 호버이미지
  gsap.set(".hover_img_lg", { xPercent: -50, yPercent: -50 });

  let xTo = gsap.quickTo(".hover_img_lg", "x", {
      duration: 0.6,
      ease: "power3",
    }),
    yTo = gsap.quickTo(".hover_img_lg", "y", {
      duration: 0.6,
      ease: "power3",
    });

  window.addEventListener("mousemove", (e) => {
    xTo(e.pageX);
    yTo(e.pageY);
  });

  //work2
  gsap.set(".hover_img_sm_l", { xPercent: -50, yPercent: -50 });

  let xTo2 = gsap.quickTo(".hover_img_sm_l", "x", {
      duration: 0.6,
      ease: "power3",
    }),
    yTo2 = gsap.quickTo(".hover_img_sm_l", "y", {
      duration: 0.6,
      ease: "power3",
    });

  document.querySelector(".hover_area_l").addEventListener("mouseenter", () => {
    document.querySelector(".hover_img_sm_l").classList.add("on");
    // 뒤 이미지 투명도 조절 추가
    $(".img_sm_l img:first-of-type").css("opacity", "0.5");
    $(".img_sm_l img:nth-of-type(2)").css("opacity", "0");
  });
  //마우스좌표
  document.querySelector(".hover_area_l").addEventListener("mousemove", (e) => {
    xTo2(e.pageX);
    yTo2(e.pageY);
  });

  document.querySelector(".hover_area_l").addEventListener("mouseleave", () => {
    document.querySelector(".hover_img_sm_l").classList.remove("on");
    // 뒤 이미지 원래 상태로 복구
    $(".img_sm_l img:first-of-type").css("opacity", "1");
    $(".img_sm_l img:nth-of-type(2)").css("opacity", "1");
  });

  //work3
  gsap.set(".hover_img_sm_r", { xPercent: -50, yPercent: -50 });

  let xTo3 = gsap.quickTo(".hover_img_sm_r", "x", {
      duration: 0.6,
      ease: "power3",
    }),
    yTo3 = gsap.quickTo(".hover_img_sm_r", "y", {
      duration: 0.6,
      ease: "power3",
    });

  document.querySelector(".hover_area_r").addEventListener("mouseenter", () => {
    document.querySelector(".hover_img_sm_r").classList.add("on");
    // 뒤 이미지 투명도 조절 추가
    $(".img_sm_r img:first-of-type").css("opacity", "0.5");
    $(".img_sm_r img:nth-of-type(2)").css("opacity", "0");
  });
  //마우스좌표
  document.querySelector(".hover_area_r").addEventListener("mousemove", (e) => {
    xTo3(e.pageX);
    yTo3(e.pageY);
  });

  document.querySelector(".hover_area_r").addEventListener("mouseleave", () => {
    document.querySelector(".hover_img_sm_r").classList.remove("on");
    // 뒤 이미지 원래 상태로 복구
    $(".img_sm_r img:first-of-type").css("opacity", "1");
    $(".img_sm_r img:nth-of-type(2)").css("opacity", "1");
  });

  /* 섹션5 */

  //반응형 768이하는 로고슬라이드

  $(window).on("load", function () {
    if ($(window).outerWidth() <= 768) {
      let isDragging = false;
      const $logoCon = $(".sec5 .logo_con");

      // 복제: 원본 로고 8개를 복제하여 무한 루프 효과
      if (!$logoCon.data("duplicated")) {
        $logoCon.append($logoCon.html());
        $logoCon.data("duplicated", true);
      }

      // 원본 로고 8개의 총 너비 계산 (이미지가 로드된 후라면 값이 올바르게 나와야 함)
      let originalWidth = 0;
      $logoCon
        .children("li")
        .slice(0, 8)
        .each(function () {
          // outerWidth(true)가 0인 경우가 있다면 fallback 값 지정(예: 100px)
          let w = $(this).outerWidth(true);
          originalWidth += w > 0 ? w : 100;
        });
      console.log("originalWidth:", originalWidth);

      const duration = 60000; // 60초 (60000ms)
      let startTime = Date.now();

      // 자동 슬라이드 애니메이션: requestAnimationFrame 사용
      function animateMarquee() {
        if (!isDragging) {
          let elapsed = Date.now() - startTime; // 밀리초 단위 경과시간
          let progress = (elapsed % duration) / duration; // 0 ~ 1 사이 진행률
          let x = -progress * originalWidth; // 선형 계산한 x값
          gsap.set($logoCon, { x: x });
        }
        requestAnimationFrame(animateMarquee);
      }
      animateMarquee();

      // Draggable 적용: GSAP Draggable을 사용해 로고 영역을 드래그 가능하게 함
      Draggable.create($logoCon[0], {
        type: "x",
        // bounds를 설정하지 않으면 드래그 시 자연스러운 이동이 가능합니다.
        inertia: true,
        onDragStart: function () {
          isDragging = true;
          console.log("드래그 시작, x =", this.x);
        },
        onDragEnd: function () {
          isDragging = false;
          // 현재 x값 가져오기 (DOM 요소로 전달)
          var currentX = gsap.getProperty($logoCon[0], "x") || 0;
          // 진행률 계산: (-currentX / originalWidth) (0~1 사이)
          var progressFraction = -currentX / originalWidth;
          progressFraction = progressFraction % 1; // 소수점 부분만 취함
          if (progressFraction < 0) {
            progressFraction += 1;
          }
          // 현재 진행 시간 (밀리초)
          var currentProgress = progressFraction * duration;
          startTime = Date.now() - currentProgress;
          console.log(
            "드래그 종료, currentX =",
            currentX,
            "진행 시간:",
            currentProgress
          );
        },
      });
    }
  });

  /* 섹션6 - 슬라이드 */

  gsap.registerPlugin(Draggable);

  $(document).ready(function () {
    var $wrapper = $(".swiper-wrapper");

    // 1. 복제: 원본 슬라이드(첫 9개)가 복제되어 무한 루프 효과를 만듦
    if (!$wrapper.data("duplicated")) {
      $wrapper.append($wrapper.html());
      $wrapper.data("duplicated", true);
    }

    // 2. 원본 슬라이드(복제 전) 첫 9개의 총 너비 계산
    var originalWidth = 0;
    var $slides = $wrapper.children(".swiper-slide");
    var originalCount = $slides.length / 2; // 원본 슬라이드 수
    $slides.slice(0, originalCount).each(function () {
      originalWidth += $(this).outerWidth(true);
    });

    //잠깐 멈출때 여기 주석하기
    var duration = 60; // 한 사이클 이동 시간 (초)
    var startTime = Date.now();
    var isPaused = false;
    var isDragging = false;

    // 3. GSAP ticker: 매 프레임마다 자동 이동 (현재 진행률에 따라 x값 업데이트)
    //duration이나 epsilon으로 끊김현상 조절
    gsap.ticker.add(function () {
      if (isPaused || isDragging) return;
      var elapsed = (Date.now() - startTime) / 1000;
      var progress = (elapsed % duration) / duration - 0.000001;
      if (progress < 0) progress += 1;
      var xVal = -progress * originalWidth;
      gsap.set($wrapper, { x: xVal });
    });

    // 4. Draggable: 드래그 시 사용자가 이동하는 만큼 슬라이드가 따라가게 하고,
    //    드래그 종료 시 진행률을 재계산하여 자동 이동이 그 위치에서 이어지도록 함.
    Draggable.create($wrapper[0], {
      type: "x",
      // bounds 옵션을 제거하여 자유롭게 드래그하도록 함.
      inertia: true,
      onDragStart: function () {
        isDragging = true;
        isPaused = true;
        this.startX = this.x;
        console.log("Drag 시작, x =", this.x);
      },
      onDragEnd: function () {
        isDragging = false;
        // $wrapper를 DOM 요소로 전달
        var currentX = gsap.getProperty($wrapper[0], "x"); // now 올바른 값이 나와야 함
        var progressFraction = -currentX / originalWidth;
        progressFraction = progressFraction % 1; // 0~1 사이의 값
        var currentProgress = progressFraction * duration;
        startTime = Date.now() - currentProgress * 1000;
        isPaused = false;
        console.log(
          "드래그 종료, currentX =",
          currentX,
          "진행 시간:",
          currentProgress
        );
      },
    });

    // 5. 마우스 호버 이벤트: 슬라이드 영역에 마우스 오버 시 즉시 멈추고, 리브 시 현재 진행 상태에서 이어서 재생
    $(".mySwiper").hover(
      function () {
        isPaused = true;
      },
      function () {
        var currentX = gsap.getProperty($wrapper[0], "x");
        var progressFraction = -currentX / originalWidth;
        progressFraction = progressFraction % 1;
        var currentProgress = progressFraction * duration;
        startTime = Date.now() - currentProgress * 1000;
        isPaused = false;
      }
    );
  });

  //💡
  // 카드1 - 글자움직이기
  const $texts = $(".card1 .text p");
  const total = $texts.length;
  let index = 0;

  //줄간격 반응형
  const lineHeight =
    $(window).outerWidth() <= 425
      ? 14
      : $(window).outerWidth() <= 540
      ? 22
      : $(window).outerWidth() <= 767
      ? 30
      : $(window).outerWidth() <= 768
      ? 16
      : 22;

  // ① 초기: 각 p를 (i*lineHeight) 위치에 배치 (세로로 줄줄이)
  $texts.each(function (i, el) {
    gsap.set(el, {
      y: i * lineHeight, // i번째 줄에 위치 배정
      opacity: 0, // 기본적으로 안 보이게
    });
  });

  // ② 업데이트 함수: 한 줄씩 위로 이동하며 visible한 3줄의 위치와 opacities를 정함
  function updateText() {
    // 인덱스를 1 증가시켜 순환
    index = (index + 1) % total;

    $texts.each(function (i, el) {
      // pos: 현재 index 기준 상대 위치 (0부터 total-1)
      let pos = (i - index + total) % total;

      let targetY, targetOpacity;
      if (pos < 3) {
        // visible한 3줄: pos 0,1,2에 대해 애니메이션 적용
        let targetY = pos * lineHeight;
        let targetOpacity = pos === 0 ? 1 : pos === 1 ? 0.8 : 0.6;
        gsap.to(el, {
          y: targetY,
          opacity: targetOpacity,
          duration: 0.5,
          ease: "power3.out",
        });
      } else {
        // 나머지 텍스트는 애니메이션 없이 즉시 아래쪽 (lineHeight * 3)으로 배치하여 보이지 않게 함
        gsap.set(el, { y: lineHeight * 3, opacity: 0 });
      }

      gsap.to(el, {
        y: targetY,
        opacity: targetOpacity,
        duration: 0.5,
        ease: "power3.out",
      });
    });
  }
  // ③ 1초마다 updateText 실행
  setInterval(updateText, 1000);
  // 초기 상태 한 번 실행
  updateText();

  //카드 5 - 150%
  $(".card5").on("mouseenter", function () {
    let target = $(this).find(".bg_num");

    gsap.to(target, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.fromTo(
      target,
      { textContent: "75%" },
      {
        textContent: "150%",
        duration: 1,
        snap: { textContent: 1 },
        ease: "power1.out",
      }
    );
  });

  $(".card5").on("mouseleave", function () {
    let target = $(this).find(".bg_num");

    gsap.to(target, {
      textContent: "75%",
      duration: 0.5,
      snap: { textContent: 1 },
      ease: "power1.inOut",
    });

    gsap.to(target, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
    });
  });

  //카드6 비디오 호버하면 재생
  $(".card6").hover(
    function () {
      $(this).find("video")[0].play();
    },

    function () {
      $(this).find("video")[0].pause();
    }
  );

  //카드8 - 시계
  //미국
  function updateSanDiegoTime() {
    // hh:mm:ssPM
    let options = {
      timeZone: "America/Los_Angeles",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    let timeString = new Date().toLocaleTimeString("en-US", options);
    $(".us span:last-child").text(timeString);
  }

  updateSanDiegoTime(); // 초기 업데이트
  setInterval(updateSanDiegoTime, 1000); // 1초마다 업데이트

  //프랑스
  function updateParisTime() {
    let options2 = {
      timeZone: "Europe/Paris",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    let timeString2 = new Date().toLocaleTimeString("en-US", options2);
    $(".fr span:last-child").text(timeString2);
  }

  updateParisTime(); // 초기 업데이트
  setInterval(updateParisTime, 1000); // 1초마다 업데이트

  updateSanDiegoTime(); // 초기 업데이트
  setInterval(updateSanDiegoTime, 1000); // 1초마다 업데이트

  //시계테두리 반응형

  function getTranslateYValue() {
    const w = $(window).outerWidth();
    return w <= 375
      ? 20
      : w <= 425
      ? 0
      : w <= 540
      ? -20
      : w <= 767
      ? -40
      : w <= 768
      ? 0
      : w <= 1200
      ? -40 * ((w - 768) / (1023 - 768))
      : w <= 1439
      ? -40 - 40 * ((w - 1023) / (1439 - 1023))
      : -60;
  }

  function createTicks() {
    const translateYValue = getTranslateYValue();
    const $ticks = $(".ticks");
    $ticks.empty(); // 기존 tick 제거
    for (let i = 0; i < 60; i++) {
      const $tick = $("<div>").addClass("tick");
      $tick.css(
        "transform",
        `rotate(${i * 6}deg) translateY(${translateYValue}px)`
      );
      $ticks.append($tick);
    }
  }

  $(document).ready(function () {
    createTicks();
    $(window).on("resize", function () {
      createTicks();
    });
  });

  /* 섹션7 */
  //보더 늘어나기
  gsap.to(".sec7 .ani_border", {
    width: "100%",
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".sec7",
      start: "820px 80%",
      // markers: true,
    },
  });
  //글자 내려오기
  gsap.fromTo(
    ".sec7 p",
    { y: "-100%", opacity: 0 },
    {
      y: "0px",
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".sec7",
        start: "800px 80%",
        // markers: true,
      },
    }
  );

  /* 섹션8 */
  //스크롤 내리면 동영상 점점커지기
  gsap.fromTo(
    ".sec8 .con > div",
    { width: "83%" },
    {
      width: "100%",
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".sec8",
        scrub: 2,
        start: "800px 70%",
        // markers: true,
      },
    }
  );

  /* 섹션9 */

  $(".txt_wrap").hover(
    function () {
      /* 마우스 진입 - get us랑 밑줄 위로 사라지기 
      about us랑 밑줄 아래에서 위로 등장*/

      // 기존 텍스트 애니메이션
      gsap.to(".get_us span", { opacity: 0, y: -20, duration: 0.5 });
      // 밑줄 애니메이션: scaleX를 0으로 줄여서 사라지게
      gsap.to(".get_us .underline", { scaleX: 0, opacity: 0, duration: 0.3 });

      // 호버 텍스트 애니메이션
      gsap.fromTo(
        ".about_us span",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "back.out(1.7)",
        }
      );
      // 호버 텍스트 밑줄: 처음 0 상태에서 확장
      gsap.fromTo(
        ".about_us .underline",
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.3, delay: 0.2 }
      );
    },
    function () {
      /* 마우스아웃 - about_us이랑 밑줄 위로 사라지기
      get_us랑 밑줄 아래에서 위로 등장 */

      gsap.to(".about_us span", {
        opacity: 0,
        y: -20,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.in(1.7)",
      });
      gsap.to(".about_us .underline", { scaleX: 0, opacity: 0, duration: 0.3 });

      gsap.fromTo(
        ".get_us span",
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: 0.3,
          stagger: 0.05,
          ease: "back.out(1.7)",
        }
      );
      gsap.fromTo(
        ".get_us .underline",
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.3, delay: 0.3 }
      );
    }
  );

  /* footer */
  //footer 글씨

  if ($(window).outerWidth() > 768) {
    gsap.to("footer .con > div:first-child", {
      y: "0%",
      duration: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "footer",
        scrub: 1,
        start: "-30% 70%",
        // markers: true,
      },
    });
  }

  //footer로고
  gsap.to(".footer_logo img", {
    scaleY: 1,
    duration: 2.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "footer",
      // scrub: 1,
      start: "-30% 40%",
      // markers: true,
    },
  });

  // ---------------
});
