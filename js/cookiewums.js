function openBanner() {
    var isCookie = Cookies.get('initCookie');
    if (isCookie) {
        document.getElementById("cookieBanner").style.display = "none";
    }else {
        document.getElementById("cookieBanner").style.display = "block";
    }
}

function setInitCookie(ok) {
    if (ok ==='yep') {
        Cookies.set('initCookie', 'allow');
    }
    document.getElementById("cookieBanner").style.display = "none";
}

