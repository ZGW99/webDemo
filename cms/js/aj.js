// var xmlHttp;
//     if(window.XMLHttpRequest){
//         xmlHttp = new XMLHttpRequest();
//     }else if(window.ActiveXObject){
//         xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
//     }
//     // 2、打开服务器地址
//     xmlHttp.open("post","http://www.qhdlink-student.top/student/coacha.php",true);
//     // 设置参数
//     // var names = document.getElementById("username").value;
//     // var pwds = document.getElementById("pwd").value;
//     // var classes = document.getElementById("userclass").value;
//     // var types = document.getElementById("types").value;
//     // var postmsg = 'username='+names+'&userpwd='+pwds+'&userclass='+classes+'&type='+types;
//     var postmsg = 'username=zgw&userpwd=12345678&userclass=67&type=2';
//     // 3、设置头信息
//     xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//     // 4、写服务器相应事件
//     xmlHttp.onreadystatechange = getNav;
//     // 5、发送
//     xmlHttp.send(postmsg);
//     function getNav(){
//         if(xmlHttp.readyState == 4&&xmlHttp.status == 200){
//             var menu = xmlHttp.responseText;
//             var menujson = eval("("+menu+")")
//             console.log(menujson)
//             var str='';
//             $.each(menujson,function(name,value){
//                 str +="<ul><li>" + value.id_coach  + "、" + value.name_coach  + "_"  + value.dage_coach  + "_"  + value.type_coach  +"</li></ul>";
//                 $("#show").html(str)
//             }
            
//             )}
//     }


// 验证是否cookie存有密码，若无返回登陆界面