;(function openMenu(selectorTop) {
    let top = document.querySelector(selectorTop);
    let btn = top.querySelector('.top_nav_btn');
    let nav = top.querySelector('.top_nav');
    btn.addEventListener('click', function() {
        btn.classList.toggle('top_close_nav');
        btn.classList.toggle('top_open_nav');
        nav.classList.toggle('top_nav_visible')
    })
})('.top');