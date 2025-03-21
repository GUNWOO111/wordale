const 정답 = "APPLE";

let attempts = 0;
let index = 0;

function appStart() {
  const nextLine = () => {
    attempts += 1;
    index = 0;
  };
  const handleEnterkey = () => {
    for (let i = 0; i < 5; i++) {
      const block = document.querySelector(
        `.board-block[data-index='${attempts}${i}']`
      );
      const 입력한_글자 = block.innerText;
      const 정답_글자 = 정답[i];
      if (입력한_글자 === 정답_글자) block.style.background = "#67B360";
      else if (정답.includes(입력한_글자)) block.style.background = "#D6BE52";
      else block.style.background = "#777E7F";

      block.style.color = "white";
    }
    nextLine();
  };
  const handlekeydown = (event) => {
    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
    const thisBlock = document.querySelector(
      `.board-block[data-index='${attempts}${index}']`
    );

    if (index === 5) {
      if (event.key === "Enter") handleEnterkey();
      else return;
    } else if (65 <= keyCode && keyCode <= 90) {
      thisBlock.innerText = key;
      index += 1;
    }
  };

  window.addEventListener("keyup", handlekeydown);
}

appStart();
