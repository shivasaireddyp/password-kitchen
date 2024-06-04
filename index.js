const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let keyword="";

let passwordEl1 = document.getElementById("pwd-el1");
let passwordEl2 = document.getElementById("pwd-el2");
let checkTheseEl = document.getElementById("check-these");
let keywordsHeadingEl = document.getElementById("keywords-list-heading");
let keywordEl = document.getElementById("keyword-input");
let addKeywordBtn = document.getElementById("add-keyword-btn");
let ulEl = document.getElementById("ul-el");
let copyMsgEl = document.getElementById("copy-msg");

function pickRandomChar() {
  return characters[Math.floor(Math.random() * characters.length)];
}

function printKeyword() {
  if(keyword!=""){
  ulEl.innerHTML = "";
  ulEl.innerHTML = "<li style='display:inline'>" +
  keyword +
  "</li>" +
  " " +
  "<button onclick='checkfun()' style='display:inline; background-color:gray;color: white; border-radius:50%' > x </button>" +
  "<br/>";
  }
}

function checkfun() {
  keyword=""
  ulEl.textContent=""
  printKeyword();
}

addKeywordBtn.addEventListener("click", function () {
  let keywordInput = keywordEl.value;
  keywordEl.value = "";
  if(keywordInput!=""){
    keyword = keywordInput
  }
  printKeyword();
});

function generatePassword() {
  let password1 = createPassword();
  let password2 = createPassword();
  passwordEl1.textContent = password1;
  passwordEl2.textContent = password2;
  checkTheseEl.textContent = "Pick up the dish at your table!";
}

function getRandomNumberUnder(number) {
  return Math.floor(Math.random() * number);
}

function createPassword() {
  let password = "";
  const keywordLen = keyword.length
  const iterations = keywordLen>0?12-keywordLen:12
  keywordLen>0?password+=keyword:password+=""

  for (let i = 0; i < iterations ; i++) {
      password += pickRandomChar();
  }
  return password;
}

function copyPassword(number) {
  if (
    passwordEl1.textContent != "Password 1" ||
    passwordEl2.textContent != "Password 2"
  ) {
    if (number === 1) {
      navigator.clipboard.writeText(passwordEl1.textContent);
    } else {
      navigator.clipboard.writeText(passwordEl2.textContent);
    }
    copyMsgEl.textContent = "password packed!";
    const myTimeOut = setTimeout(clearMsg, 3000);
  }
}

function clearMsg() {
  copyMsgEl.textContent = "";
}
