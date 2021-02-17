//出題設定

//チェックボックス
function check() {
    const grpChxBoxes = Array.from(document.getElementsByClassName("grp"));
    const chk_cnt = grpChxBoxes.filter(v => v).length

    if (chk_cnt == 0) {
        // 1個もチェックがされていない場合
        startflg2 = false;
        document.getElementById("err1").style.visibility="visible"
    } else {
        const allCheck = chk_cnt == grpChxBoxes.length
        document.getElementById("grp_all").checked = allCheck;

        startflg2 = true;
        document.getElementById("err1").style.visibility="hidden"
    }
}

//全ての元素選択
function check_all() {
    const grpChxBoxes = Array.from(document.getElementsByClassName("grp"));
    const allChckBoxCheck = document.getElementById("grp_all").checked;
    grpChxBoxes.forEach(v => {v.checked = allChckBoxCheck})
    startflg2 = allChckBoxCheck;
    document.getElementById("err1").style.visibility= allChckBoxCheck ? "hidden" : "visible";
}
