/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let button = document.getElementById('btn-element');
let counter = document.getElementById('btn-state');
let num = 0;
// let number = 0;
// let counterNumber = parseInt(counter, number);

button.addEventListener('click', functionAdd);

function functionAdd() {
  num = num + 1;
  console.log(num);
  counter.textContent = num;
}
