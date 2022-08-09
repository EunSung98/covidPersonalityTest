let cleanCount = 0;
let extrovert = 0;
let introvert = 0;
//let content = document.querySelector(".content");
let prog = document.querySelector(".progress");
let ques = document.querySelector(".question");
let adBanner = document.querySelector(".ad-banner");
let loading = document.querySelector(".loading");
let select1 = document.querySelector("#select1");
let select2 = document.querySelector("#select2");
let question = document.querySelector(".question1");
let qCount = 0;

let progress = document.querySelector(".progressing");
let progressBar = document.querySelector(".progressBar");
let width = progressBar.offsetWidth;

let quesNum = document.querySelector(".quesNum");
let num = 1;

const selections = document.querySelectorAll(".selection > .select");

const selection = [
  {
    question: "점심 약속이 있는 날..<br>확진자가 다시 50만명?",
    answer: [
      { a1: "다 필요없어 나간다", type: "extrovert" },
      { a2: "50만명은 아니지! 안 나간다", type: "introvert" },
    ],
  },
  {
    question: "평소 나갈 때 쓰는 마스크는?",
    answer: [
      { a1: "KF 마스크", type: "cleanCount" },
      { a2: "덴탈 마스크 or 면 마스크", type: "" },
    ],
  },
  {
    question: "식당에서 밥 먹기 전에<br>마스크 벗을까?",
    answer: [
      { a1: "어차피 먹을 건데 벗지 뭐!", type: "" },
      { a2: "밥 나오기 전까지는 쓰자", type: "cleanCount" },
    ],
  },
  {
    question: "저녁 늦은 시간,<br>잠시 외출을 하려 한다",
    answer: [
      { a1: "아침에 쓴 마스크를 그대로 다시 쓴다", type: "" },
      { a2: "새로 뜯는다", type: "cleanCount" },
    ],
  },
  {
    question: "집에 들어와서 나는",
    answer: [
      { a1: "손을 씻고 마스크를 버린다", type: "" },
      { a2: "마스크를 버리고 손을 씻는다", type: "cleanCount" },
    ],
  },
  {
    question: "피곤한 몸을 이끌고 집에 도착!<br>아 씻어야 하는데..",
    answer: [
      { a1: "귀찮으니 내일 씻자", type: "" },
      { a2: "밖에 나갔으니 그래도 씻어야지", type: "cleanCount" },
    ],
  },
  {
    question: "나는 마스크를 한 번 쓴 것은",
    answer: [
      { a1: "바로 쓰레기통", type: "cleanCount" },
      { a2: "방안에 모셔둔다", type: "" },
    ],
  },
  {
    question: "다음달부터<br>비대면 수업(재택근무)라고?",
    answer: [
      { a1: "사람들과 안 만나니 좋다", type: "introvert" },
      { a2: "사람들 만나고 싶다", type: "extrovert" },
    ],
  },
  {
    question: "이번에 체육대회 한대!",
    answer: [
      { a1: "와! 무조건 참여한다", type: "extrovert" },
      { a2: "아 별로 안하고 싶은데..", type: "introvert" },
    ],
  },
  {
    question: "마스크 해제 후<br>나는 실외에서 마스크를",
    answer: [
      { a1: "쓴다", type: "cleanCount" },
      { a2: "안 쓴다", type: "" },
    ],
  },
];
let progressWidth = width / selection.length;
changeSelection();

select1.addEventListener("click", changeQ);
select2.addEventListener("click", changeQ);

function changeSelection() {
  question.innerHTML = selection[qCount].question;
  select1.innerText = selection[qCount].answer[0].a1;
  select2.innerText = selection[qCount].answer[1].a2;
  type();
}

function changeQ() {
  num += 1;
  qCount++;
  if (qCount < selection.length) {
    quesNum.innerText = num;
    if (progressWidth < width) {
      progressWidth += width / selection.length;
    }
    progress.style.width = progressWidth + "px";
    changeSelection();
  } else {
    setTimeout(
      () => (location.href = `/result/${resultAnimal}Result.html`),
      3000
    );
    prog.style.display = "none";
    ques.style.display = "none";
    adBanner.style.display = "none";
    loading.style.display = "block";
    result();
  }
}

function type() {
  selections.forEach((el, index) => {
    el.onclick = () => {
      let selected = selection[qCount].answer[index];
      let userType = selected.type;
      if (userType == "extrovert") {
        extrovert++;
      } else if (userType == "introvert") {
        introvert++;
      } else if (userType == "cleanCount") {
        cleanCount++;
      } else {
        return;
      }
    };
  });
}

function result() {
  if (cleanCount >= 5) {
    if (extrovert > introvert) {
      resultAnimal = "beluga";
    } else {
      resultAnimal = "cat";
    }
  } else if (cleanCount >= 2) {
    if (extrovert > introvert) {
      resultAnimal = "dog";
    } else {
      resultAnimal = "shark";
    }
  } else {
    if (extrovert > introvert) {
      resultAnimal = "capybara";
    } else {
      resultAnimal = "pigeon";
    }
  }
}
