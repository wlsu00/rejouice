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

  //슬라이드 전체

  // 카드1 - 글자움직이기
  const $texts = $(".card1 .text p");
  const total = $texts.length;
  let index = 0;

  // "한 줄 높이" (CSS의 line-height와 동일하게 맞춰야 깔끔함)
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
    // 한 줄씩 "위로" 이동한 느낌을 주기 위해 index를 1 증가
    index = (index + 1) % total;

    $texts.each(function (i, el) {
      let dist = i - index;
      if (dist < 0) dist += total; // 음수면 순환

      if (dist === 0) {
        // 맨 위 줄 (완전히 보여야 함)
        gsap.to(el, { y: 0, opacity: 1, duration: 0.5 });
      } else if (dist === 1) {
        // 두 번째 줄
        gsap.to(el, { y: lineHeight, opacity: 0.8, duration: 0.5 });
      } else if (dist === 2) {
        // 세 번째 줄
        gsap.to(el, { y: lineHeight * 2, opacity: 0.6, duration: 0.5 });
      } else {
        // ✨ "최상단 글자는 먼저 투명하게 만든 후, 나중에 위로 올림"
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

  // ③ 2초마다 updateText 실행
  setInterval(updateText, 2000);

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

  //카드8 - 시계
  // 초기 시간대: 미국
  let currentTZ = "America/Los_Angeles";

  // 1) 시계 매초 업데이트
  setInterval(function () {
    updateClock(currentTZ);
  }, 1000);

  gsap.to(".hand.hour", { rotation: hourDeg, duration: 0.5 });
  gsap.to(".hand.minute", { rotation: minuteDeg, duration: 0.5 });
  gsap.to(".hand.second", { rotation: secondDeg, duration: 0.5 });
  // 2) 카드(.clock-widget)에 마우스 올리면 초침 표시, 떼면 초침 숨기기
  $(".clock-widget").hover(
    function () {
      $(".hand.second").css("opacity", 1); // 초침 보이기
    },
    function () {
      $(".hand.second").css("opacity", 0); // 초침 숨기기
    }
  );

  // 3) 도시 정보 호버 → 해당 시간대로 변경
  $(".us").hover(
    function () {
      currentTZ = $(this).data("tz"); // "America/Los_Angeles"
    },
    function () {}
  );
  $(".fr").hover(
    function () {
      currentTZ = $(this).data("tz"); // "Europe/Paris"
    },
    function () {}
  );
  //실제 타임존 계산
  function getLocalTime(tz) {
    // UTC 시각
    let now = new Date();
    let utcH = now.getUTCHours();
    let utcM = now.getUTCMinutes();
    let utcS = now.getUTCSeconds();

    let offset = 0;
    if (tz === "America/Los_Angeles") offset = -7;
    if (tz === "Europe/Paris") offset = 1;
    let localH = (utcH + offset + 24) % 24;

    return { hour: localH, minute: utcM, second: utcS };
  }

  // 함수: 시계 업데이트 (GSAP로 바늘 회전)
  function updateClock(timezone) {
    // 3.1) 현재 시각 계산 (JS date + timezone offset)
    let now = getTimeForTZ(timezone); // 아래 getTimeForTZ 구현
    let hour = now.hours;
    let minute = now.minutes;
    let second = now.seconds;

    // 3.2) 각 바늘의 회전각 계산
    // 12시간제 기준
    let hourDeg = (hour % 12) * 30 + minute * 0.5 + second * (0.5 / 60);
    let minuteDeg = minute * 6 + second * 0.1;
    let secondDeg = second * 6;

    // 3.3) GSAP으로 바늘 회전
    gsap.to(".hand.hour", {
      rotation: hourDeg,
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(".hand.minute", {
      rotation: minuteDeg,
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(".hand.second", {
      rotation: secondDeg,
      duration: 0.5,
      ease: "power2.out",
    });

    // 3.4) 디지털 시간도 업데이트
    let ampm = hour >= 12 ? "PM" : "AM";
    let dispHour = hour % 12 || 12;
    let dispMin = minute < 10 ? "0" + minute : minute;
    let dispSec = second < 10 ? "0" + second : second;
    let displayTime = `${dispHour}:${dispMin}:${dispSec} ${ampm}`;

    if (timezone === "America/Los_Angeles") {
      $(".us-time .time").text(displayTime);
    } else {
      $(".fr-time .time").text(displayTime);
    }
  }

  // 함수: 특정 타임존 시간 구하기
  function getTimeForTZ(tz) {
    // 여기서는 moment-timezone 라이브러리 없이,
    // 간단히 JS Date + offset으로 처리 가능(정확도 제한)
    // 실제론 moment-timezone / dayjs.tz / luxon 추천

    // UTC 시각
    let now = new Date();
    // 시·분·초 (UTC)
    let utcHours = now.getUTCHours();
    let utcMinutes = now.getUTCMinutes();
    let utcSeconds = now.getUTCSeconds();

    // 예시: 미국 LA = UTC-7, 파리 = UTC+1 (썸머타임 고려는 직접)
    let offset = 0; // in hours
    if (tz === "America/Los_Angeles") offset = -7;
    if (tz === "Europe/Paris") offset = 1;

    let localHour = utcHours + offset;
    // 분, 초 그대로
    // 24시간 처리
    localHour = (localHour + 24) % 24;

    return {
      hours: localHour,
      minutes: utcMinutes,
      seconds: utcSeconds,
    };
  }

  /* 섹션8 */
  //💡💡스크롤 내리면 동영상 점점커지기
  // gsap.to(".sec8 video", {
  //   opacity: 0,
  //   duration: 0.3,
  //   scrollTrigger: {
  //     trigger: ".sec8 video",
  //     start: "-1100px 90%",
  //     end: "-1100px top",
  //     scrub: 1,
  //     markers: true,
  //   },
  //   onEnter: () => {
  //     $(".sec8 video").css("width", "100%");
  //   },
  //   onLeaveBack: () => {
  //     $(".sec8 video").css("width", "60%");
  //   },
  // });
  // ---------------
});
