//  // if(window.XMLHttpRequest){
// //     //(包括IE7/8/9)firefox chrome浏览器支持，IE6不支持
// //     alert("标准写法(仅IE6不支持)");
// // }
// // if(window.ActiveXObject){
// //     //IE所有浏览器支持
// //     alert("所有IE支持，IE6只支持之中写法");
// // }


var ok = "输入正确";
    var no = "输入错误"
    document.getElementById("username").onkeyup = function () {
        var namereg = /^\w{3}$/;
        if (namereg.test(this.value)) {
            document.getElementById("namemsg").innerHTML = ok;
            // document.getElementById("namemsg").setAttribute("class", "glyphicon glyphicon-remove");
        } else {
            document.getElementById("namemsg").innerHTML = no;
            // document.getElementById("namemsg").setAttribute("class", "glyphicon glyphicon-ok");
        }
    }
    document.getElementById("pwd").onkeyup = function () {
        var namereg = /^\w{6,30}$/
        if (namereg.test(this.value)) {
            document.getElementById("pwdmsg").innerHTML = ok;
            // document.getElementById("pwdmsg").setAttribute("class", "r");
        } else {
            document.getElementById("pwdmsg").innerHTML = "密码错误";
            // document.getElementById("pwdmsg").setAttribute("class", "w");
        }
    }
    document.getElementById("userclass").onkeyup = function () {
        var namereg = /^\d{1,3}$/
        if (namereg.test(this.value)) {
            document.getElementById("classmsg").innerHTML = ok;
            // document.getElementById("classmsg").setAttribute("class", "r");
        } else {
            document.getElementById("classmsg").innerHTML = "班级错误";
            // document.getElementById("classmsg").setAttribute("class", "w");
        }
    }
    // document.getElementById("btn").onclick=function() {
    //     if (document.getElementById("namemsg").innerHTML !== ok) {
    //         document.getElementById("username").focus();
    //         alert("用户名输入错误！");
    //         // return false;
    //     }
    //     else if (document.getElementById("namemsg").innerHTML == ok & document.getElementById("pwdmsg").innerHTML !== ok) {
    //         document.getElementById("pwd").focus();
    //         document.getElementById("username").blur();
    //         window.alert("密码输入错误！");
    //         // return false;
    //     }
    //     else if (document.getElementById("namemsg").innerHTML == ok & document.getElementById("pwdmsg").innerHTML == ok & document.getElementById("classmsg").innerHTML !== ok) {
    //         document.getElementById("userclass").focus();
    //         alert("班级输入错误！");
    //         // return false;
    //     }
    // }
// function checklogin(){
//     // 1、创建Ajax对象
//     var xmlHttp;
//     if(window.XMLHttpRequest){
//         xmlHttp = new XMLHttpRequest();
//     }else if(window.ActiveXObject){
//         xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
//     }
//     // 2、打开服务器地址
//     xmlHttp.open("post","http://www.qhdlink-student.top/student/login.php",true);
//     // 设置参数
//     var names = document.getElementById("username").value;
//     var pwds = document.getElementById("pwd").value;
//     var classes = document.getElementById("userclass").value;
//     var types = document.getElementById("types").value;
//     var postmsg = 'username='+names+'&userpwd='+pwds+'&userclass='+classes+'&type='+types;
//     // 3、设置头信息
//     xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//     // 4、写服务器相应事件
//     xmlHttp.onreadystatechange = getNav;
//     // 5、发送
//     xmlHttp.send(postmsg);
//     function getNav(){
//         if(xmlHttp.readyState == 4&&xmlHttp.status == 200){
//             var menu = xmlHttp.responseText;
//             // var menujson = eval("("+menu+")")
//             // console.log(menu);
//             if(menu == "ok"){
//                 location.href = "../html/index.html";
//             }else{
//                alert("输入错误")
//             }
//         }
//     }
// }

// 封装cookie
// function setCookie($name, $value, $day) {
//     var data = $name + "=" + encodeURI($value);// 拼凑数据 变量名=值
//     var myDate = new Date();
//     var mSecond = $day * 24 * 3600 * 1000;
//     myDate.setTime(myDate.getTime() + mSecond);// 设置获得时间戳
//     data = data + ";expires=" + myDate.toGMTString(); // 变量名=值；expires
//     document.cookie = data; // 创建cookie
// }
// setCookie("data", "1", 7); // 调用函数创建cookie
$(function () {
    $("input[name=btn]").click(function () {
        $.ajax({
            url: "http://www.qhdlink-student.top/student/login.php",
            type: "post",
            // dataType:"json", // 返回的ok不是json类型
            data: {
                username: $("input[name=username]").val(),
                userpwd: $("input[name=userpwd]").val(),
                userclass: $("input[name=userclass]").val(),
                type: 2,
            },
            success: function (data) {
                if (data == "ok") {
                    // setCookie('token', '{tokenc:"' + data + '" ,username:"' + $("#nameid").val() + '" ,userpwd:' + $("#pwdid").val() + ' ,userclass:' + $("#classid").val() + '}', 7);
                    localStorage.setItem("tokenc","ok")
                    location.href = "../html/index.html";
                    console.log(localStorage.setItem);
                    // console.log(document.cookie);
                } else {
                    alert("请重新输入")
                }
            }
        })
    })
})