
function corona() {
    var coronaCookie = Cookies.get('coronaCookie');
    if(!coronaCookie){
        document.getElementById('coronaPopup').style.display='block';
        setCoronaCookie();
    }
}
function setCoronaCookie() {
    var isCookie = Cookies.get('initCookie');
    if (isCookie) {
        Cookies.set('coronaCookie', 'true');
    }
}
function coronacolse() {
    document.getElementById('coronaPopup').style.display='none';
}