"use strict";

/* 섹션6 */
document.addEventListener("DOMContentLoaded", function () {
  const textContainer = document.querySelector(".text.card1");
  const paragraphs = textContainer.querySelectorAll("p");

  let currentIndex = 0;

  // 처음 3개의 p태그를 보이게 함
  const showNextText = () => {
    // 현재 3개 텍스트 숨기기
    for (let i = currentIndex; i < currentIndex + 3; i++) {
      if (paragraphs[i]) {
        paragraphs[i].classList.remove("show");
      }
    }

    // 다음 3개 텍스트 보이게 하기
    for (let i = currentIndex + 3; i < currentIndex + 6; i++) {
      if (paragraphs[i]) {
        paragraphs[i].classList.add("show");
      }
    }

    // 인덱스를 3씩 증가시켜서 순차적으로 텍스트를 바꿈
    currentIndex += 3;

    // 마지막까지 가면 처음으로 돌아가기
    if (currentIndex + 3 > paragraphs.length) {
      currentIndex = 0;
    }
  };

  // 초기 3개 텍스트 보이기
  for (let i = 0; i < 3; i++) {
    if (paragraphs[i]) {
      paragraphs[i].classList.add("show");
    }
  }

  // 1초마다 3개씩 텍스트 바꾸기
  setInterval(showNextText, 1000); // 1초마다 실행
});
