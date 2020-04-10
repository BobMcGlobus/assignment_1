

function light() {
    let root = document.documentElement;
    document.getElementById('light').style.display='none';
    document.getElementById('dark').style.display='block';
    root.style.setProperty('--bg', "white");
    root.style.setProperty('--main', "black");
    remember('light');

}
function dark() {
    let root = document.documentElement;
    document.getElementById('dark').style.display='none';
    document.getElementById('light').style.display='block';
    root.style.setProperty('--bg', "black");
    root.style.setProperty('--main', "white");
    remember('dark');
}
function remember(theme) {
    var isCookie = Cookies.get('initCookie');
    if (isCookie) {
        Cookies.set('themeCookie', theme);
    }
}

function load() {
    var themeCookie = Cookies.get('themeCookie');

    if(themeCookie){
        if (themeCookie==='dark'){
            dark();
        }else{ light();}

    }
}
