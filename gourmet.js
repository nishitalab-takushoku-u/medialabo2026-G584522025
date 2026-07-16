// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
    let n = 1;

    for (let shop of data.results.shop) {
        console.log(n + "件目の検索結果");
        console.log("店名: " + shop.name);
        console.log("住所: " + shop.address);
        console.log("アクセス: " + shop.access);
        console.log("ジャンル: " + shop.genre.name);
        console.log("サブジャンル: " + shop.sub_genre.name);
        console.log("キャッチコピー: " + shop.catch);
        console.log("予算: " + shop.budget.average);
        console.log("営業時間: " + shop.open);
        console.log("最寄駅: " + shop.station_name);

        n = n + 1;
    }
}


// 課題5-1 の関数 printDom()
function printDom(data) {

    // 前回の検索結果を削除
    let old = document.querySelector("div#result");
    if (old) {
        old.remove();
    }

    // 検索結果を表示するdiv
    let result = document.createElement("div");
    result.id = "result";
    document.body.insertAdjacentElement("beforeend", result);

    let n = 1;

    for (let shop of data.results.shop) {

        let box = document.createElement("div");

        let h = document.createElement("h3");
        h.textContent = n + "件目の検索結果";
        box.insertAdjacentElement("beforeend", h);

        let nameP = document.createElement("p");
        nameP.textContent = "店名: " + shop.name;
        box.insertAdjacentElement("beforeend", nameP);

        let addrP = document.createElement("p");
        addrP.textContent = "住所: " + shop.address;
        box.insertAdjacentElement("beforeend", addrP);

        let accP = document.createElement("p");
        accP.textContent = "アクセス: " + shop.access;
        box.insertAdjacentElement("beforeend", accP);

        let genreP = document.createElement("p");
        genreP.textContent = "ジャンル: " + shop.genre.name;
        box.insertAdjacentElement("beforeend", genreP);

        let subP = document.createElement("p");
        subP.textContent = "サブジャンル: " + shop.sub_genre.name;
        box.insertAdjacentElement("beforeend", subP);

        let catchP = document.createElement("p");
        catchP.textContent = "キャッチコピー: " + shop.catch;
        box.insertAdjacentElement("beforeend", catchP);

        let budP = document.createElement("p");
        budP.textContent = "予算: " + shop.budget.average;
        box.insertAdjacentElement("beforeend", budP);

        let openP = document.createElement("p");
        openP.textContent = "営業時間: " + shop.open;
        box.insertAdjacentElement("beforeend", openP);

        let stP = document.createElement("p");
        stP.textContent = "最寄駅: " + shop.station_name;
        box.insertAdjacentElement("beforeend", stP);

        result.insertAdjacentElement("beforeend", box);

        n++;
    }
}


// 課題6-1 のイベントハンドラ登録処理
let b = document.querySelector("#btn");
b.addEventListener("click", sendRequest);


// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

    let genre = document.querySelector("#city").value;

    let url = "https://www.nishita-lab.org/web-contents/jsons/hotpepper/"
            + genre + ".json";

    axios.get(url)
        .then(showResult)
        .catch(showError)
        .then(finish);
}


// 課題6-1: 通信が成功した時の処理
function showResult(resp) {

    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === "string") {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    console.log(data);

    // 検索結果を表示
    printDom(data);
}


// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}


// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log("Ajax 通信が終わりました");
}
