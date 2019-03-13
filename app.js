const puzzles = document.querySelectorAll(".container div");
const reload = document.querySelector(".reload");

const wintable = document.querySelector(".result h2");
const x = document.querySelector(".x span");
const o = document.querySelector(".o span");

let countX = 0;
let countO = 0;

let win = false;

const puzzlesAI = () => {
  let array = [];

  puzzles.forEach(item => {
    if (
      item.innerHTML === "" &&
      item.innerHTML !== "X" &&
      item.innerHTML !== "O"
    ) {
      array.push(item);
    }
  });

  const getRandom = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  const random = getRandom(0, array.length - 1);

  array[random].innerHTML = "O";
};

const winFunc = (varible, indexs) => {
  win = true;

  puzzles.forEach(item => {
    item.onclick = null;
  });

  indexs.forEach(item => {
    puzzles[item].classList.add("win-color");
  });

  if (varible === "X") {
    countX++;
    x.innerHTML = countX;
    wintable.innerHTML = "WIN - X";
  }

  if (wintable.innerHTML !== "WIN - X") {
    if (varible === "O") {
      countO++;
      o.innerHTML = countO;
      wintable.innerHTML = "WIN - O";
    }
  }
};

const puzzlesPlayer = e => {
  const items = e.target;

  if (
    items.innerHTML === "" &&
    items.innerHTML !== "X" &&
    items.innerHTML !== "O"
  ) {
    items.innerHTML = "X";
    puzzlesAI();
  }

  //HORIZONTAL

  if (
    puzzles[0].innerHTML === "X" &&
    puzzles[1].innerHTML === "X" &&
    puzzles[2].innerHTML === "X"
  ) {
    winFunc("X", [0, 1, 2]);
  } else if (
    puzzles[0].innerHTML === "O" &&
    puzzles[1].innerHTML === "O" &&
    puzzles[2].innerHTML === "O"
  ) {
    winFunc("O", [0, 1, 2]);
  }

  if (
    puzzles[3].innerHTML === "X" &&
    puzzles[4].innerHTML === "X" &&
    puzzles[5].innerHTML === "X"
  ) {
    winFunc("X", [3, 4, 5]);
  } else if (
    puzzles[3].innerHTML === "O" &&
    puzzles[4].innerHTML === "O" &&
    puzzles[5].innerHTML === "O"
  ) {
    winFunc("O", [3, 4, 5]);
  }

  if (
    puzzles[6].innerHTML === "X" &&
    puzzles[7].innerHTML === "X" &&
    puzzles[8].innerHTML === "X"
  ) {
    winFunc("X", [6, 7, 8]);
  } else if (
    puzzles[6].innerHTML === "O" &&
    puzzles[7].innerHTML === "O" &&
    puzzles[8].innerHTML === "O"
  ) {
    winFunc("O", [6, 7, 8]);
  }

  //VERTICAL

  if (
    puzzles[0].innerHTML === "X" &&
    puzzles[3].innerHTML === "X" &&
    puzzles[6].innerHTML === "X"
  ) {
    winFunc("X", [0, 3, 6]);
  } else if (
    puzzles[0].innerHTML === "O" &&
    puzzles[3].innerHTML === "O" &&
    puzzles[6].innerHTML === "O"
  ) {
    winFunc("O", [0, 3, 6]);
  }

  if (
    puzzles[1].innerHTML === "X" &&
    puzzles[4].innerHTML === "X" &&
    puzzles[7].innerHTML === "X"
  ) {
    winFunc("X", [1, 4, 7]);
  } else if (
    puzzles[1].innerHTML === "O" &&
    puzzles[4].innerHTML === "O" &&
    puzzles[7].innerHTML === "O"
  ) {
    winFunc("O", [1, 4, 7]);
  }

  if (
    puzzles[2].innerHTML === "X" &&
    puzzles[5].innerHTML === "X" &&
    puzzles[8].innerHTML === "X"
  ) {
    winFunc("X", [2, 5, 8]);
  } else if (
    puzzles[2].innerHTML === "O" &&
    puzzles[5].innerHTML === "O" &&
    puzzles[8].innerHTML === "O"
  ) {
    winFunc("O", [2, 5, 8]);
  }

  //DIAGONAL

  if (
    puzzles[0].innerHTML === "X" &&
    puzzles[4].innerHTML === "X" &&
    puzzles[8].innerHTML === "X"
  ) {
    winFunc("X", [0, 4, 8]);
  } else if (
    puzzles[0].innerHTML === "O" &&
    puzzles[4].innerHTML === "O" &&
    puzzles[8].innerHTML === "O"
  ) {
    winFunc("O", [0, 4, 8]);
  }

  if (
    puzzles[2].innerHTML === "X" &&
    puzzles[4].innerHTML === "X" &&
    puzzles[6].innerHTML === "X"
  ) {
    winFunc("X", [2, 4, 6]);
  } else if (
    puzzles[2].innerHTML === "O" &&
    puzzles[4].innerHTML === "O" &&
    puzzles[6].innerHTML === "O"
  ) {
    winFunc("O", [2, 4, 6]);
  }
};

puzzles.forEach(item => {
  item.onclick = puzzlesPlayer;
});

reload.onclick = () => {
  puzzles.forEach(item => {
    item.innerHTML = "";
    item.onclick = puzzlesPlayer;
    wintable.innerHTML = "...";
    item.classList.remove("win-color");
    win = false;
  });
};
