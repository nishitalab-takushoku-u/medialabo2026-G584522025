let b = document.querySelector('#calc');
b.addEventListener('click', calc);

function calc() {
    let i1 = document.querySelector('#left');
    let left = Number(i1.value);

    let i2 = document.querySelector('#right');
    let right = Number(i2.value);

    let kekka = left + right;

    let s = document.querySelector('#answer');
    s.textContent = kekka;
}