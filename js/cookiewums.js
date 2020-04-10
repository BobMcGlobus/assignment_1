function openBanner() {
    var isCookie = Cookies.get('initCookie');
    if (isCookie) {
        document.getElementById("cookieBanner").style.display = "none";
    }
}

function setInitCookie(ok) {
    if (ok ==='yep') {
        Cookies.set('initCookie', 'allow');
    }
    document.getElementById("cookieBanner").style.display = "none";
}

