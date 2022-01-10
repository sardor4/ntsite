document.body.onload = function () {
    const preloader = document.getElementById('page__preload');
    setTimeout(() => {
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done')
        }
    }, 1000);
}

const btn = document.querySelector('.nav__menu');
btn.addEventListener('click', function (e) {
    if (btn.getAttribute('id') == '') {
        btn.setAttribute('id', 'nav__menu_active');
        btn.style = `box-shadow: 5px 15px 40px rgba(0, 201, 224, 0.3);background: #00C9E0;transition: .4s;`
    }else{
        btn.setAttribute('id', '');
        btn.style = `box-shadow: none;background: none;transition: .4s;`
    }
})


const animItems = document.querySelectorAll('._anim_items');
if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(e) {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = (animItem).clientTop;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight  / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            }else{
                animItem.classList.remove('_active')
            }
        }
    }
    function offset(elem) {
        const rect = elem.getBoundingClientRect(),
              scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
              scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top:rect.top + scrollTop, left:rect.left + screenLeft}
    }
    animOnScroll();
}