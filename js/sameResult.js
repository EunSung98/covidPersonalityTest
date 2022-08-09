let tip = document.querySelector(".tip");

const covidTip = [
  "거리두기와 실외 마스크는 해제!<br>하지만 50인 이상 실외 및 모든 실내에서는 마스크 착용이 의무이니 꼭 기억하세요!",
  "손소독제를 바르는 것보다<br>손을 비누로 씻는게 더 효과적입니다!",
  "마스크를 버리고 나서도<br>손을 씻어야 합니다!",
  "기침은 마스크안에서!<br>소매로 가리고 하세요!",
];
tip.innerHTML = covidTip[Math.floor(Math.random() * covidTip.length)];
