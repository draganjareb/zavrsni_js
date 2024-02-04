const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal img");
const img = document.querySelector(".threeCardCar");
//za svaku sliku posebno task, moreButtonInfo i div
const taskTwo = document.querySelector(".threeCardTopRightTwo");
const taskOne = document.querySelector(".threeCardTopRightOne");
const taskThree = document.querySelector(".threeCardTopRightThree");
const taskFour = document.querySelector(".threeCardTopRightFour");
const taskFive = document.querySelector(".threeCardTopRightFive");
const taskSix = document.querySelector(".threeCardTopRightSix");
const moreInfButtonTwo = document.querySelector(".infoCarTwo");
const moreInfButtonOne = document.querySelector(".infoCarOne");
const moreInfButtonThree = document.querySelector(".infoCarThree");
const moreInfButtonFour = document.querySelector(".infoCarFour");
const moreInfButtonFive = document.querySelector(".infoCarFive");
const moreInfButtonSix = document.querySelector(".infoCarSix");
const divOne = document.querySelector(".imgOne");
const divTwo = document.querySelector(".imgTwo");
const divThree = document.querySelector(".imgThree");
const divFour = document.querySelector(".imgFour");
const divFive = document.querySelector(".imgFive");
const divSix = document.querySelector(".imgSix");
const meni = document.querySelector(".burger-manu-icon");
const slide = document.querySelector(".burger_meni");
const visible = document.querySelector(".unvisible");
const list = document.querySelector(".ul_list");

const showModal = (src) => {
  modal.classList.add("modal-visible");
  modalImg.src = src;
};

const closeModal = () => {
  modal.classList.remove("modal-visible");
};

let a = 0;

moreInfButtonOne.addEventListener("click", () => {
  if (a == 0) {
    divOne.classList.add("removeImg");
    taskOne.classList.add("showTask");
    a = 1;
    moreInfButtonOne.innerHTML = "NAZAD";
  } else {
    divOne.classList.remove("removeImg");
    taskOne.classList.remove("showTask");
    a = 0;
    moreInfButtonOne.innerHTML = "VIŠE INFORMACIJA";
  }
});

moreInfButtonTwo.addEventListener("click", () => {
  if (a == 0) {
    divTwo.classList.add("removeImg");
    taskTwo.classList.add("showTask");
    a = 1;
    moreInfButtonTwo.innerHTML = "NAZAD";
  } else {
    divTwo.classList.remove("removeImg");
    taskTwo.classList.remove("showTask");
    a = 0;
    moreInfButtonTwo.innerHTML = "VIŠE INFORMACIJA";
  }
});

moreInfButtonThree.addEventListener("click", () => {
  if (a == 0) {
    divThree.classList.add("removeImg");
    taskThree.classList.add("showTask");
    a = 1;
    moreInfButtonThree.innerHTML = "NAZAD";
  } else {
    divThree.classList.remove("removeImg");
    taskThree.classList.remove("showTask");
    a = 0;
    moreInfButtonThree.innerHTML = "VIŠE INFORMACIJA";
  }
});

moreInfButtonFour.addEventListener("click", () => {
  if (a == 0) {
    divFour.classList.add("removeImg");
    taskFour.classList.add("showTask");
    a = 1;
    moreInfButtonFour.innerHTML = "NAZAD";
  } else {
    divFour.classList.remove("removeImg");
    taskFour.classList.remove("showTask");
    a = 0;
    moreInfButtonFour.innerHTML = "VIŠE INFORMACIJA";
  }
});

moreInfButtonFive.addEventListener("click", () => {
  if (a == 0) {
    divFive.classList.add("removeImg");
    taskFive.classList.add("showTask");
    a = 1;
    moreInfButtonFive.innerHTML = "NAZAD";
  } else {
    divFive.classList.remove("removeImg");
    taskFive.classList.remove("showTask");
    a = 0;
    moreInfButtonFive.innerHTML = "VIŠE INFORMACIJA";
  }
});

moreInfButtonSix.addEventListener("click", () => {
  if (a == 0) {
    divSix.classList.add("removeImg");
    taskSix.classList.add("showTask");
    a = 1;
    moreInfButtonSix.innerHTML = "NAZAD";
  } else {
    divSix.classList.remove("removeImg");
    taskSix.classList.remove("showTask");
    a = 0;
    moreInfButtonSix.innerHTML = "VIŠE INFORMACIJA";
  }
});

b = 0;
meni.addEventListener("click", () => {
  if (b == 0) {
    slide.classList.remove("unvisible");
    b = 1;
  } else {
    slide.classList.add("unvisible");
    b = 0;
  }
});
