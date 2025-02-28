document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.timeline({
    //시작 소문자
    scrollTrigger: {
      trigger: ".main_video", //어느 영역에서 스크롤트리거를 발생시킬껀지
      start: "0% 10%", //첫번째값은 요소의 top위치(요소의 100%) / 두번째값은 뷰포트의 top위치. 두 개의 선이 만나면 애니메이션 동작
      end: "0% 10%", //첫번째값은 요소의 bottom위치 / 두번째값은 뷰포트의 50%위치. 두 개의 선이 만나면 애니메이션 종료
      scrub: 1, //되감기효과 및 애니메이션 부드럽게 풀어주기효과
      duration: 0.3, //요소가 변할 때 소요되는 시간
      markers: true, //작업끝나면 지우기
    },
  });
  to("header h1 div", {
    display: "none",
  });

  // ---------------
});
