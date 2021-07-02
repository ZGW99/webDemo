/**
 * 鍐欏叆 cookie
 * @param key
 * @param val
 * @param time  澶╂暟锛�1 = 1澶╋級
 */
 function setCookie(key, val, time) {
	var date = new Date();
	var expiresDays = time ? time : 7;
	date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000);
	document.cookie = key + "=" + escape(val) + ";expires=" + date.toGMTString() + ";path=/";
}

/**
 *  璇诲彇 cookie
 * @param key
 * @returns {string}
 */
function getCookie(key) {
	var getCookie = document.cookie.replace(/[ ]/g, "");
	var arrCookie = getCookie.split(";")
	var tips;
	for (var i = 0; i < arrCookie.length; i++) {
		var arr = arrCookie[i].split("=");
		if (key == arr[0]) {
			tips = arr[1];
			break;
		}
	}
	return tips;
}

/**
 * 鍒犻櫎 cookie
 * @param key
 */
function delCookie(key){
	var date = new Date(); //鑾峰彇褰撳墠鏃堕棿
	date.setTime(date.getTime() - 10000); //灏哾ate璁剧疆涓鸿繃鍘荤殑鏃堕棿
	document.cookie = key + "=v; expires =" + date.toGMTString() + ";path=/"; //璁剧疆cookie
	// document.cookie = key + "=v; expires =" + date.toGMTString() + ";path=/;domain=.xunjiecad.com"; //璁剧疆cookie
}