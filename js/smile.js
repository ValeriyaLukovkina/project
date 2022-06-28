;(function getSmile(selectorLink) {
    let links = document.querySelectorAll(selectorLink);
    for (let link of links) {
        if (link.getAttribute('href') == '#') {
            link.classList.add('top_here')
        }
    }
})('.top_item_link')