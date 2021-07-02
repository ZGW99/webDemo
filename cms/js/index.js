if(localStorage.getItem("tokenc")!=="ok"){
    alert("请登录再进入系统");
    location.href = "../html/login.html";
}
function outmain(){
    location.href="../html/login.html";
    localStorage.clear();
}

function clearcache(){
    localStorage.clear();
}
