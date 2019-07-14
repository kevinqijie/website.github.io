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
        var l = h *index;
       
        window.scrollTo(0, l)
        init();
    }
})
var clear = document.querySelector('.clear'),
    btnshow = document.querySelector('.btnshow'),
    btnbox = document.querySelector('.btnbox');
    clear.onclick = function(){
        btnbox.classList.add('hide');
    }
    btnshow.onclick = function(){
        btnbox.classList.remove('hide');
    }
function init() {
    // var rect = document.querySelector('.item').getBoundingClientRect();
    // if (rect.bottom <= 0) {
    //     return false;
    // }
    // if (rect.top >= document.documentElement.clientHeight) {
    //     return false;
    // }
    var item = $all('.item'),
        items = Array.from(item);
    item.forEach((it, index) => {
        var rect = it.getBoundingClientRect();
        // console.log(rect)
        var list = it.getElementsByClassName('list'),
            lists = Array.from(list);
            lists.forEach((item)=>{
                if (rect.bottom <= 0) {
            
                    item.classList.add('hide')
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

window.onscroll = function(){
    init();
   
}