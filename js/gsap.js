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
  //work1
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
  //work1 글자 움직이기

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

  /* 섹션6 - 슬라이드 */
  //💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡
  /*
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    loopFillGroupWithBlank: true,
    loopPreventsSlide: true,
    touchMoveStopPropagation: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      // stopOnLastSlide: false,
    },
    speed: 5000,
  });

  let swiperInstance = $(".mySwiper")[0].swiper;

  $(".mySwiper").on("mouseenter", function () {
    // 현재 translate 값을 가져와서 슬라이더 wrapper의 전환을 없애고 고정
    let currentTranslate = swiperInstance.getTranslate();
    swiperInstance.wrapperEl.style.transitionDuration = "0ms";
    swiperInstance.setTranslate(currentTranslate);
    // autoplay를 일시정지 (즉시 멈춤)
    swiperInstance.autoplay.stop();
  });

  $(".mySwiper").on("mouseleave", function () {
    // wrapper 전환 지속시간을 기본값(빈 문자열)으로 복원
    swiperInstance.wrapperEl.style.transitionDuration = "";
    // autoplay를 즉시 재개
    swiperInstance.autoplay.start();
  });

  */

  //임시주석 + 이거랑 아래랑 세트로 먹음
  // let swiper = new Swiper(".mySwiper", {
  //   slidesPerView: 4,
  //   grabCursor: true,
  //   allowTouchMove: true,
  //   loop: true,
  //   speed: 5000,
  //   autoplay: {
  //     delay: 0,
  //     disableOnInteraction: false,
  //     stopOnLastSlide: false,
  //   },
  //   on: {
  //     init: function () {
  //       let swiperEl = this.el;
  //       swiperEl.addEventListener("mouseenter", () => {
  //         this.autoplay.pause();
  //         swiper.setTranslate(swiper.getTranslate());
  //       });
  //       swiperEl.addEventListener("mouseleave", () => {
  //         swiper.params.autoplay.delay = 0;
  //         this.autoplay.resume();
  //         swiper.update();
  //       });
  //     },
  //   },
  // });

  //즉시 멈추긴함
  // $(".mySwiper").on("mouseenter", function () {
  //   swiper.autoplay.pause();
  //   swiper.setTranslate(swiper.getTranslate());
  // });
  // $(".mySwiper").on("mouseleave", function () {
  //   swiper.slidePrev(0);
  //   swiper.setTranslate(swiper.getTranslate());
  //   swiper.autoplay.resume();
  // });

  //  스르륵멈춤
  // $(".mySwiper").on("mouseenter", function () {
  //   if (swiper.autoplay) {
  //     swiper.autoplay.stop();
  //   }
  // });
  // $(".mySwiper").on("mouseleave", function () {
  //   if (swiper.autoplay) {
  //     swiper.autoplay.start();
  //   }
  // });
  /*
  $(".mySwiper").on("mouseenter", function () {
    swiper.autoplay.stop();
    swiper.setTranslate(swiper.getTranslate());
  });
  $(".mySwiper").on("mouseleave", function () {
    // swiper.slidePrev();
    // swiper.setTranslate(-swiper.progress * swiper.width);
    swiper.setTranslate(imagesReady);
    swiper.autoplay.start();
  });
  */

  //03.11
  $(document).ready(function () {
    // 1. inner_slide의 내용을 복제하여, 무한 루프를 위한 복제본을 추가합니다.
    let $inner = $(".swiper-wrapper");
    if (!$inner.data("duplicated")) {
      // 원본 HTML을 복제하여 append()합니다.
      $inner.append($inner.html());
      $inner.data("duplicated", true);
    }

    // 2. 원활한 무한 루프를 위해, 원본 슬라이드(복제 전)의 총 너비를 계산합니다.
    let originalWidth = 0;
    $inner
      .children(".swiper-slide")
      .slice(0, 9)
      .each(function () {
        originalWidth += $(this).outerWidth(true);
      });

    // 3. GSAP 타임라인 생성: inner_slide를 원본 너비만큼 왼쪽으로 이동한 후, x를 0으로 리셋하여 무한 반복합니다.
    let tl = gsap.timeline({
      repeat: -1,
      ease: "linear",
    });

    tl.to($inner, {
      x: -originalWidth,
      duration: 100, // 이동 속도 조절 (60초 동안 이동)
      onRepeat: function () {
        // 반복 시 inner_slide의 x값을 0으로 리셋
        gsap.set($inner, { x: 0 });
      },
    });
    Draggable.create(".swiper-wrapper", {
      type: "x",
      bounds: ".sec6",
      inertia: true,
      onDragStart: function () {
        isDragging = true;
        manualTween.pause();
      },
      onDragEnd: function () {
        isDragging = false;
        // 현재 x값을 기준으로 경과 시간을 계산하여 startTime 업데이트
        let currentX = this.x; // 음수 값
        // 현재 진행된 시간을 (비율 * 60)로 계산
        let currentProgress = (-currentX / originalWidth) * 60;
        startTime = Date.now() - currentProgress * 1000;
        manualTween.play();
      },
    });
    // 4. 마우스 오버 시 슬라이드 애니메이션을 즉시 멈추고, 마우스 나가면 즉시 재생
    $(".mySwiper").hover(
      function () {
        tl.pause();
      },
      function () {
        tl.play();
      }
    );
  });

  //💡
  // 카드1 - 글자움직이기
  const $texts = $(".card1 .text p");
  const total = $texts.length;
  let index = 0;

  const lineHeight = 24;

  // ① 초기: 각 p를 (i*lineHeight) 위치에 배치 (세로로 줄줄이)
  $texts.each(function (i, el) {
    gsap.set(el, {
      y: i * lineHeight, // i번째 줄에 위치 배정
      opacity: 0, // 기본적으로 안 보이게
    });
  });

  // ② 매번 호출될 때 실행
  function updateText() {
    // 한 줄씩 "위로" 이동 - index를 1 증가
    index = (index + 1) % total;

    $texts.each(function (i, el) {
      let dist = i - index;
      if (dist < 0) dist += total; // 음수면 순환

      if (dist === 0) {
        // 글자 1
        gsap.to(el, { y: 0, opacity: 1, duration: 0.5 });
      } else if (dist === 1) {
        // 글자 2
        gsap.to(el, { y: lineHeight, opacity: 0.8, duration: 0.5 });
      } else if (dist === 2) {
        // 글자 3
        gsap.to(el, { y: lineHeight * 2, opacity: 0.6, duration: 0.5 });
      } else {
        // ✨최상단 글자는 먼저 투명하게 만든 후, 나중에 위로 올림
        if (dist === total - 1) {
          gsap.to(el, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
              gsap.to(el, { y: -lineHeight, duration: 0.5 });
            },
          });
        } else {
          gsap.to(el, { y: lineHeight * 3, opacity: 0, duration: 0.5 });
        }
      }
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

  //카드6 비디오 호버효과
  $(".card6").hover(
    function () {
      $(".card6 > video").attr("autoplay", "true");
    },

    function () {
      $(".card6 > video").removeAttr("autoplay");
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

  //시계테두리
  const $ticks = $(".ticks");
  for (let i = 0; i < 60; i++) {
    const $tick = $("<div>").addClass("tick");

    $tick.css("transform", `rotate(${i * 6}deg) translateY(-40px)`);
    $ticks.append($tick);
  }

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
