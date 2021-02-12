//出題設定

//チェックボックス
function check() {
    let chk_cnt = 0;
    for (i = 0; i < chkbox.length - 1; i++) {
        if (document.getElementById(`grp${i + 1}`).checked == true) {
            chkbox[i] = true;
            chk_cnt++;
        } else {
            chkbox[i] = false;
        }
    }

    if (chk_cnt == 0) {
        startflg2 = false;
        document.getElementById("err1").style.visibility="visible"
    } else {
        if (chk_cnt == 10) {
            document.getElementById(`grp11`).checked = true;
            chkbox[10] = true;
        } else {
            document.getElementById(`grp11`).checked = false;
            chkbox[10] = false;
        }
        startflg2 = true;
        document.getElementById("err1").style.visibility="hidden"
    }
}

//全ての元素選択
function check_all() {
    if (document.getElementById(`grp11`).checked == false) {
        for (i = 0; i < chkbox.length - 1; i++) {
            document.getElementById(`grp${i + 1}`).checked = false;
            chkbox[i] = false;
        }
        startflg2 = false;
        document.getElementById("err1").style.visibility="visible"
        chkbox[10] = false;
    } else {
        for (i = 0; i < chkbox.length - 1; i++) {
            document.getElementById(`grp${i + 1}`).checked = true;
            chkbox[i] = true;
        }
        chkbox[10] = true;
        startflg2 = true;
        document.getElementById("err1").style.visibility="hidden"
    }
}
