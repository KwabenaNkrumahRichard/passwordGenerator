"use strict";

let form = document.querySelector("form");
let passwordValue = document.querySelector(".password");
let range = document.querySelector("input[type=range]");
let passwordLength = document.querySelector(".password-length");
let lowercaseCheckbox = document.querySelector("#lowercase");
let uppercaseCheckbox = document.querySelector("#uppercase");
let symbolCheckbox = document.querySelector("#symbols");
let numberCheckbox = document.querySelector("#number");

let strength = document.querySelector(".text");
let bars = document.querySelectorAll(".bar");
let copyIcon = document.querySelector(".img");
let copyText = document.querySelector(".copy-text");
let canCopy = false;

const CHARACTERS = {
  uppercase: "ZXCVBNMLKJHGFDSAQWERTYUIOP",
  lowercase: "zxcvbnmlkjhgfdsaqwertyuiop",
  numbers: "1234567890",
  symbols: '`~!@#$%^&*()-_+=:;<>,{}[].?/*|"',
};

// ============= Function that check strength ===============
function checkStrength() {
  // ============= function that remove class from bars======
  function removeclass() {
    bars.forEach((bar) => {
      bar.classList.remove("too-weak");
      bar.classList.remove("weak");
      bar.classList.remove("medium");
      bar.classList.remove("strong");
    });
  }
  if (+range.value <= 5) {
    removeclass();
    bars[0].classList.add("too-weak");
    strength.textContent = "Too-Weak";
  }
  if (+range.value > 5 && +range.value <= 10) {
    removeclass();

    bars[0].classList.add("weak");
    bars[1].classList.add("weak");
    strength.textContent = "Weak";
  }
  if (+range.value > 10 && +range.value <= 15) {
    removeclass();

    bars[0].classList.add("medium");
    bars[1].classList.add("medium");
    bars[2].classList.add("medium");
    strength.textContent = "Medium";
  }
  if (+range.value > 15 && +range.value <= 20) {
    removeclass();

    bars.forEach((bar) => bar.classList.add("strong"));
    strength.textContent = "Strong";
  }
}

////////////// display range value on change////////////////
range.addEventListener("input", () => {
  passwordLength.textContent = range.value;
});

//////////////// function one checkbox is selected ////////////
function generatePassworOneChecked(character, repeat) {
  let value = [];
  for (let i = 0; i < repeat; i++) {
    let random = Math.trunc(Math.random() * character.length);
    let char = character[random];
    value.push(char);
  }

  checkStrength();
  canCopy = true;
  passwordValue.style.color = "rgb(231, 230, 235)";

  return value;
}

//////////////// function for two checkboxs are selected ////////////
function generatePassworTwoChecked(character1, character2) {
  let value = [];
  let pass1, pass2;

  if (+range.value % 2 === 0) {
    let each = +range.value / 2;

    pass1 = generatePassworOneChecked(character1, each);
    pass2 = generatePassworOneChecked(character2, each);
    value = [...pass1, ...pass2];
    value.sort(() => 0.5 - Math.random());
    return value.join("");
  }
  if (+range.value % 2 === 1) {
    let each = (+range.value - 1) / 2;
    let charCombine = character1.concat(character2);
    let random = Math.trunc(Math.random() * charCombine.length);

    pass1 = generatePassworOneChecked(character1, each);
    pass2 = generatePassworOneChecked(character2, each);
    value = [...pass1, ...pass2, charCombine[random]];

    value.sort(() => 0.5 - Math.random());
    return value.join("");
  }
}

//////////////// function for three checkboxs are selected ////////////
function generatePassworThreeChecked(character1, character2, character3) {
  let value = [];
  let pass1, pass2, pass3;

  if (+range.value % 3 === 0) {
    let each = +range.value / 3;

    pass1 = generatePassworOneChecked(character1, each);
    pass2 = generatePassworOneChecked(character2, each);
    pass3 = generatePassworOneChecked(character3, each);
    value = [...pass1, ...pass2, ...pass3];
    value.sort(() => 0.5 - Math.random());
    return value.join("");
  }
  if (+range.value % 3 === 1) {
    let each = (+range.value - 1) / 3;
    let charCombine = character1.concat(character2, character3);
    let random = Math.trunc(Math.random() * charCombine.length);

    pass1 = generatePassworOneChecked(character1, each);
    pass2 = generatePassworOneChecked(character2, each);
    pass3 = generatePassworOneChecked(character3, each);
    value = [...pass1, ...pass2, ...pass3, charCombine[random]];

    value.sort(() => 0.5 - Math.random());
    return value.join("");
  }

  if (+range.value % 3 === 2) {
    let each = (+range.value - 2) / 3;
    let charCombine = character1.concat(character2, character3);
    let random = Math.trunc(Math.random() * charCombine.length);
    let random2 = Math.trunc(Math.random() * charCombine.length);

    pass1 = generatePassworOneChecked(character1, each);
    pass2 = generatePassworOneChecked(character2, each);
    pass3 = generatePassworOneChecked(character3, each);
    value = [
      ...pass1,
      ...pass2,
      ...pass3,
      charCombine[random],
      charCombine[random2],
    ];

    value.sort(() => 0.5 - Math.random());
    return value.join("");
  }
}

//////////////// function for all checkboxs are selected ////////////
function generatePassworFourChecked(
  character1,
  character2,
  character3,
  character4
) {
  let value = [];
  let pass1, pass2, pass3, pass4;

  if (+range.value % 4 === 0) {
    let each = +range.value / 4;

    pass1 = generatePassworOneChecked(character1, each);
    pass2 = generatePassworOneChecked(character2, each);
    pass3 = generatePassworOneChecked(character3, each);
    pass4 = generatePassworOneChecked(character4, each);

    value = [...pass1, ...pass2, ...pass3, ...pass4];
    value.sort(() => 0.5 - Math.random());
    return value.join("");
  }
  if (+range.value % 4 === 1) {
    let each = (+range.value - 1) / 4;
    let charCombine = character1.concat(character2, character3);
    let random = Math.trunc(Math.random() * charCombine.length);

    pass1 = generatePassworOneChecked(character1, each);
    pass2 = generatePassworOneChecked(character2, each);
    pass3 = generatePassworOneChecked(character3, each);
    pass4 = generatePassworOneChecked(character4, each);
    value = [...pass1, ...pass2, ...pass3, ...pass4, charCombine[random]];

    value.sort(() => 0.5 - Math.random());
    return value.join("");
  }

  if (+range.value % 4 === 2) {
    let each = (+range.value - 2) / 4;
    let charCombine = character1.concat(character2, character3);
    let random = Math.trunc(Math.random() * charCombine.length);
    let random2 = Math.trunc(Math.random() * charCombine.length);

    pass1 = generatePassworOneChecked(character1, each);
    pass2 = generatePassworOneChecked(character2, each);
    pass3 = generatePassworOneChecked(character3, each);
    pass4 = generatePassworOneChecked(character4, each);
    value = [
      ...pass1,
      ...pass2,
      ...pass3,
      ...pass4,
      charCombine[random],
      charCombine[random2],
    ];

    value.sort(() => 0.5 - Math.random());
    return value.join("");
  }
  if (+range.value % 4 === 3) {
    let each = (+range.value - 3) / 4;
    let charCombine = character1.concat(character2, character3);
    let random = Math.trunc(Math.random() * charCombine.length);
    let random2 = Math.trunc(Math.random() * charCombine.length);
    let random3 = Math.trunc(Math.random() * charCombine.length);

    pass1 = generatePassworOneChecked(character1, each);
    pass2 = generatePassworOneChecked(character2, each);
    pass3 = generatePassworOneChecked(character3, each);
    pass4 = generatePassworOneChecked(character4, each);

    value = [
      ...pass1,
      ...pass2,
      ...pass3,
      ...pass4,
      charCombine[random],
      charCombine[random2],
      charCombine[random3],
    ];

    value.sort(() => 0.5 - Math.random());
    return value.join("");
  }
}

////////////// form on submit ////////////////////
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userPassword;
  //=============== if all four selected===================
  if (
    lowercaseCheckbox.checked &&
    uppercaseCheckbox.checked &&
    numberCheckbox.checked &&
    symbolCheckbox.checked
  ) {
    userPassword = generatePassworFourChecked(
      CHARACTERS.lowercase,
      CHARACTERS.uppercase,
      CHARACTERS.numbers,
      CHARACTERS.symbols
    );
    passwordValue.textContent = userPassword;
  }

  //=============== if three is selected ===================
  else if (
    lowercaseCheckbox.checked &&
    uppercaseCheckbox.checked &&
    numberCheckbox.checked
  ) {
    userPassword = generatePassworThreeChecked(
      CHARACTERS.lowercase,
      CHARACTERS.uppercase,
      CHARACTERS.numbers
    );
    passwordValue.textContent = userPassword;
  } else if (
    lowercaseCheckbox.checked &&
    uppercaseCheckbox.checked &&
    symbolCheckbox.checked
  ) {
    userPassword = generatePassworThreeChecked(
      CHARACTERS.lowercase,
      CHARACTERS.uppercase,
      CHARACTERS.symbols
    );
    passwordValue.textContent = userPassword;
  } else if (
    numberCheckbox.checked &&
    uppercaseCheckbox.checked &&
    symbolCheckbox.checked
  ) {
    userPassword = generatePassworThreeChecked(
      CHARACTERS.numbers,
      CHARACTERS.uppercase,
      CHARACTERS.symbols
    );
    passwordValue.textContent = userPassword;
  } else if (
    lowercaseCheckbox.checked &&
    numberCheckbox.checked &&
    symbolCheckbox.checked
  ) {
    userPassword = generatePassworThreeChecked(
      CHARACTERS.lowercase,
      CHARACTERS.numbers,
      CHARACTERS.symbols
    );
    passwordValue.textContent = userPassword;
  }

  //=============== if two is selected ===================
  else if (lowercaseCheckbox.checked && uppercaseCheckbox.checked) {
    userPassword = generatePassworTwoChecked(
      CHARACTERS.lowercase,
      CHARACTERS.uppercase
    );
    passwordValue.textContent = userPassword;
  } else if (numberCheckbox.checked && uppercaseCheckbox.checked) {
    userPassword = generatePassworTwoChecked(
      CHARACTERS.numbers,
      CHARACTERS.uppercase
    );
    passwordValue.textContent = userPassword;
  } else if (symbolCheckbox.checked && uppercaseCheckbox.checked) {
    userPassword = generatePassworTwoChecked(
      CHARACTERS.symbols,
      CHARACTERS.uppercase
    );
    passwordValue.textContent = userPassword;
  } else if (symbolCheckbox.checked && lowercaseCheckbox.checked) {
    userPassword = generatePassworTwoChecked(
      CHARACTERS.symbols,
      CHARACTERS.lowercase
    );
    passwordValue.textContent = userPassword;
  } else if (numberCheckbox.checked && lowercaseCheckbox.checked) {
    userPassword = generatePassworTwoChecked(
      CHARACTERS.numbers,
      CHARACTERS.lowercase
    );
    passwordValue.textContent = userPassword;
  } else if (symbolCheckbox.checked && numberCheckbox.checked) {
    userPassword = generatePassworTwoChecked(
      CHARACTERS.symbols,
      CHARACTERS.numbers
    );
    passwordValue.textContent = userPassword;
  }

  //=============== if one is selected ===================
  else if (lowercaseCheckbox.checked) {
    userPassword = generatePassworOneChecked(
      CHARACTERS.lowercase,
      +range.value
    );
    passwordValue.textContent = userPassword.join("");
  } else if (uppercaseCheckbox.checked) {
    userPassword = generatePassworOneChecked(
      CHARACTERS.uppercase,
      +range.value
    );
    passwordValue.textContent = userPassword.join("");
  } else if (numberCheckbox.checked) {
    userPassword = generatePassworOneChecked(CHARACTERS.numbers, +range.value);
    passwordValue.textContent = userPassword.join("");
  } else if (symbolCheckbox.checked) {
    userPassword = generatePassworOneChecked(CHARACTERS.symbols, +range.value);
    passwordValue.textContent = userPassword.join("");
  }

  // ================ if none is selected =================
  else return;
});

///////// copy icon ///////////////
copyIcon.addEventListener("click", () => {
  if (!canCopy) return;
  navigator.clipboard.writeText(passwordValue.textContent);
  copyText.textContent = "Copied";

  setTimeout(() => {
    copyText.textContent = "";
  }, 1000);
});
