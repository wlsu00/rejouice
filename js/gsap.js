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
        $(".logo_text").addClass("hide"); // 텍스트 로고 숨기기
        $(".logo_img").addClass("show"); // 이미지 로고 보이기
      },
      onLeaveBack: () => {
        $(".logo_text").removeClass("hide"); // 텍스트 로고 다시 보이기
        $(".logo_img").removeClass("show"); // 이미지 로고 숨기기
      },
    },
  });

  /* 섹션2 */
  //work1
  gsap.set(".hover_img_lg", { xPercent: -50, yPercent: -50 });

  let xTo = gsap.quickTo(".hover_img_lg", "x", {
      duration: 0.6,
      ease: "power3",
    }),
    yTo = gsap.quickTo(".hover_img_lg", "y", { duration: 0.6, ease: "power3" });

  window.addEventListener("mousemove", (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  });
  //work2
  gsap.set(".hover_img_sm-l", { xPercent: -50, yPercent: -50 });

  let xTo2 = gsap.quickTo(".hover_img_sm-l", "x", {
      duration: 0.6,
      ease: "power3",
    }),
    yTo2 = gsap.quickTo(".hover_img_sm-l", "y", {
      duration: 0.6,
      ease: "power3",
    });

  window.addEventListener("mousemove", (e) => {
    xTo2(e.clientX);
    yTo2(e.clientY);
  });

  //work3
  gsap.set(".hover_img_sm-r", { xPercent: -50, yPercent: -50 });

  let xTo3 = gsap.quickTo(".hover_img_sm-r", "x", {
      duration: 0.6,
      ease: "power3",
    }),
    yTo3 = gsap.quickTo(".hover_img_sm-r", "y", {
      duration: 0.6,
      ease: "power3",
    });

  window.addEventListener("mousemove", (e) => {
    xTo3(e.clientX);
    yTo3(e.clientY);
  });

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
