function scrollAnim(){
    var animText =document.querySelector('.animText');
    var textPosition= animText.getBoundingClientRect().top;
    var screenSize =window.innerHeight;

    if ((screenSize/1.8) > textPosition){
animText.classList.add('animActive');

    }
}
window.addEventListener('scroll', scrollAnim);