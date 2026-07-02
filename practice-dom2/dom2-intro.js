function changeDom() {

    let l = document.createElement('li');
    l.textContent = 'ヨット';
    let u = document.querySelector('ul#kazoeuta');
    u.insertAdjacentElement('beforeend', l);

    let i = document.querySelector('img#bluemoon');
    i.setAttribute('src', 'bluemoon.jpg');

    let a = document.createElement('a');
    a.textContent = '拓殖大学HP';
    a.setAttribute('href', 'https://www.takushoku-u.ac.jp');

    let p = document.querySelector('p#takudai');
    p.insertAdjacentElement('afterend', a);

    let k = document.querySelector('ul#kassen');
    k.remove();

    let ul = document.createElement('ul');
    l = document.createElement('li');
    l.textContent = '赤';
    ul.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = '緑';
    ul.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = '青';
    ul.insertAdjacentElement('beforeend', l);
    let primary = document.querySelector('p#primary');
    primary.insertAdjacentElement('afterend', ul);
}

let b = document.querySelector('button#henkou');
b.addEventListener('click', changeDom);