// function $(event){
//     return document.querySelector(event);
// }
function $all(event) {
    return document.querySelectorAll(event);
}
var btns = Array.from($all('.btn'));

btns.forEach((item, index) => {
    item.onclick = function () {
        var h = window.innerHeight;
        var l = h * index;

        window.scrollTo(0, l);
        // item.classList.add('active');
        init();
        btns.forEach((it,i)=>{
            if(i == index){
                it.classList.add('active');
                return false;
            }
            it.classList.remove('active');
        })
    }
})
var clear = document.querySelector('.clear'),
    btnshow = document.querySelector('.btnshow'),
    btnbox = document.querySelector('.btnbox');
clear.onclick = function () {
    btnbox.classList.add('hide');
}
btnshow.onclick = function () {
    btnbox.classList.remove('hide');
}
function init() {
    var item = $all('.item'),
        items = Array.from(item);
    items.forEach((it) => {
        var rect = it.getBoundingClientRect();
        var list = it.getElementsByClassName('list'),
            lists = Array.from(list);
        lists.forEach((item,index) => {
            if (rect.bottom <= 0) {
                item.classList.add('hide');
                return false;
            }
            if (rect.top >= document.documentElement.clientHeight) {
                item.classList.add('hide')
                return false;
            }
            item.classList.remove('hide')
        })
       
    })
}
init();
var navbtn = Array.from($all('.navbtn'));
navbtn.forEach((item, index) => {
    item.onclick = function () {
        s(index);
    }
})
function s(index) {
    var cards = Array.from($all('.card'));
    cards.forEach((it, i) => {
        if (i == index) {
            it.style.display = 'block';
            return false;
        }
        it.style.display = 'none';
    })
}
window.onscroll = function () {
    init();
    
}

function an(){
    let an = document.querySelector('.an'),
    welt = document.querySelector('.welt');
      welt.style.display = 'block';
      an.style.animation = 'an 25s linear infinite';

}
window.onload = function(){
    an();
    var load = document.querySelector('.lading');
    load.style.display = 'none';
}
document.onreadystatechange = function () {
    if (document.readyState === "complete ") {
       let welt = document.querySelector('.welt');
        welt.style.zIndex = 88;
        var load = document.querySelector('.lading');
        load.style.display = 'none';
        
    }
}