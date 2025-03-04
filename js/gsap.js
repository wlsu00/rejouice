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

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sec2", // .sec2 영역에서 스크롤 트리거 발생
        start: "top 90%", // sec2가 뷰포트에 들어오면
        end: "100% 5%", // sec2가 끝날 때
        scrub: true, // 스크롤에 따라 애니메이션이 부드럽게 진행되도록
        markers: true, // 디버그용, 작업 끝나면 지우기
      },
    })
    .from(".sec2 .ani_text p", {
      // y: 100, // 시작할 때 100px 아래로 떨어져 있음
      opacity: 0, // 처음에는 보이지 않음
      duration: 1, // 애니메이션 지속 시간
      stagger: 0.3, // 각 p 태그들이 순차적으로 떨어지게 함
      ease: "power3.out", // 애니메이션 속도
    });

  /* 섹션4 */
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
