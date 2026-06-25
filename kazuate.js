
let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);


let kaisu = 0;


let seikai = false;


function hantei() {


  let i = document.querySelector('#yoso');
  let yoso = Number(i.value);

  
  let p = document.querySelector('#result');

  
  if (kaisu >= 3 || seikai) {
    p.textContent = '答えは ' + kotae + ' でした．すでにゲームは終わっています';
    return;
  }

  
  kaisu = kaisu + 1;

  
  let s = document.querySelector('#kaisu');
  s.textContent = kaisu;

  
  if (yoso === kotae) {
    p.textContent = '正解です．おめでとう!';
    seikai = true;
  }
  else if (kaisu === 3) {
    p.textContent = 'まちがい．残念でした．答えは ' + kotae + ' です．';
  }
  else if (yoso < kotae) {
    p.textContent = 'まちがい．答えはもっと大きいですよ';
  }
  else {
    p.textContent = 'まちがい．答えはもっと小さいですよ';
  }
}


let b = document.querySelector('#kaitou');
b.addEventListener('click', hantei);