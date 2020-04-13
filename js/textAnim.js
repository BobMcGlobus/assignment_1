function scrollAnim(){
    var animText =document.querySelector('.animText');
    var textPosition= animText.getBoundingClientRect().top;
    var screenSize =window.innerHeight;

    if ((screenSize/1.8) > textPosition){
animText.classList.add('animActive');
        setTimeout(anim2, 1000);
    }
}
window.addEventListener('scroll', scrollAnim);


async function anim2(){
    if (document.querySelector('.animActive')){
        document.querySelector('.boxA').classList.add('animActive');
        await Sleep(300);
        document.querySelector('.boxB').classList.add('animActive');
        await Sleep(300);
        document.querySelector('.boxC').classList.add('animActive');

    }
}
function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}