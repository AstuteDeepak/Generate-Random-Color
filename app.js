let btn = document.querySelector("button");

function rgb() {
  function randNum() {
    return Math.floor(Math.random() * 255);
  }
  let r = randNum();
  let g = randNum();
  let b = randNum();
  return `rgb(${r},${g},${b})`;
}

function colorChange() {
  let body = document.querySelector("body");
  body.style.backgroundColor = rgb();
}
function textChange() {
  let h1 = document.querySelector("h1");
  h1.innerText = rgb();
}

btn.addEventListener("click", colorChange);
btn.addEventListener("click", textChange);
