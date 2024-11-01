/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
    let code = `var num=prompt("How Times Do You Want This Page To Show Up In your History?\\nMade%20By:%20Veracity#6969%22);done=false;x=window.__cpLocation.href;for%20(var%20i=1;%20i%3C=num;%20i++){history.pushState(0,%200,%20i==num?x:i.toString());if(i==num){done=true}}if(done===true){alert(%22History%20Flooding%20Successful!\\n%20%22+window.__cpLocation.href+%22%20\\nNow%20Appears%20In%20Your%20History%20%22+num+(num==1?%22%20time.%22:%22%20Times.%20\\nMade%20By:%20BlazerHM%22))}`;
    eval(code);
  }
});
