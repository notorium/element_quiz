let quizarray = [];
let tmparray = [];
let dummyarray = [];
let resultarray = [];
let quizcount = 0;
let cnt_r = 0;
let q_str = ["元素記号 ", "", "原子番号 "];
let a_str = [" の元素記号は何？", " の元素名は何？", " の原子番号は何？"];

function start() {
    if (startflg1 == false || startflg2 == false) {
        alert("出題範囲を正しく設定してください");
    } else {
        cnt_r = 0;
        quizcount = 0;
        makequiz();
        document.getElementById("form1").style.visibility = "hidden";
        document.getElementById("start").style.visibility = "hidden";
        document.getElementById("form2").style.visibility = "visible";
        tmparray.sort((a, b) => a - b);
        if (document.getElementById("n_sct").value == 0) {
            num = tmparray.length;
        } else {
            num = document.getElementById("n_sct").value;
        }
        shuffle(tmparray);
        next();
    }
}

function makequiz() {
    tmparray.splice(0);
    dummyarray.splice(0);
    for (i = 0; i < 10; i++) {
        if (chkbox[i] == true) {
            eval("g_num" + (i + 1)).forEach(r => tmparray.push(r));
            eval("g_num" + (i + 1)).forEach(r => dummyarray.push(r));
        }
    }
}

function next() {
    makequizlist();
    quizcount++;
    document.getElementById("quizcnt").innerHTML = quizcount + " / " + num + " 問目";
    document.getElementById("question").innerHTML = q_str[q_num - 1] + elements[tmparray[0] - 1][q_num - 1] + a_str[a_num - 1];
    for (i = 0; i < quizarray.length; i++) {
        document.getElementById(`chos${i + 1}`).setAttribute("value", elements[quizarray[i] - 1][a_num - 1]);
    }
    document.getElementById("tmp").innerHTML = "";
    document.getElementById("chos1").removeAttribute("disabled");
    document.getElementById("chos2").removeAttribute("disabled");
    document.getElementById("chos3").removeAttribute("disabled");
    document.getElementById("chos4").removeAttribute("disabled");
}

function makequizlist() {
    quizarray.push(tmparray[0]);
    while (true) {
        shuffle(dummyarray);
        if (dummyarray[0] != quizarray[0] && dummyarray[1] != quizarray[0] && dummyarray[2] != quizarray[0]) {
            break;
        }
    }
    quizarray.push(dummyarray[0], dummyarray[1], dummyarray[2]);
    shuffle(quizarray);
}

function shuffle(array) {
    for (i = 0; i < 100; i++) {
        let rnd1 = Math.floor(Math.random() * array.length);
        let rnd2 = Math.floor(Math.random() * array.length);
        [array[rnd1], array[rnd2]] = [array[rnd2], array[rnd1]];
    }
}

function restart() {
    document.getElementById("form1").style.visibility = "visible";
    document.getElementById("start").style.visibility = "visible";
    document.getElementById("form3").style.visibility = "hidden";
}

function chose(chos_num) {
    quizarray.splice(0);
    if (chos_num == elements[tmparray[0] - 1][a_num - 1]) {
        document.getElementById("tmp").style.color = "red";
        document.getElementById("tmp").innerHTML = "正解!!";
        cnt_r++;
    } else {
        document.getElementById("tmp").style.color = "blue";
        document.getElementById("tmp").innerHTML = "不正解...";
    }
    tmparray.shift();
    if (tmparray.length == 0) {
        makequiz();
    }
    document.getElementById("chos1").setAttribute("disabled", true);
    document.getElementById("chos2").setAttribute("disabled", true);
    document.getElementById("chos3").setAttribute("disabled", true);
    document.getElementById("chos4").setAttribute("disabled", true);
    if (quizcount == num) {
        setTimeout(function () { fin() }, 500);
    } else {
        setTimeout(function () { next() }, 500);
    }
}

function fin() {
    document.getElementById("fin").style.visibility = "visible";
    document.getElementById("form2").style.visibility = "hidden";
    setTimeout(function () {
        document.getElementById("fin").style.visibility = "hidden";
        document.getElementById("form3").style.visibility = "visible";
        document.getElementById("result").innerHTML = cnt_r + " / " + num;
    }, 2000);
}