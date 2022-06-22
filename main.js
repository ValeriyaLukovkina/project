;(function getFormTopBlock (selectorButton, selectorForm, selectorTop, selectorClose) {
    let button = document.querySelector(selectorButton);
    let form = document.querySelector(selectorForm);
    let top = document.querySelector(selectorTop);
    let buttonClose = document.querySelector(selectorClose);
    button.addEventListener ('click', function () {
        form.classList.remove('top_block_form_disable');
        top.classList.add('top_mute');
    })

    buttonClose.addEventListener ('click', function(event) {
        form.classList.add('top_block_form_disable');
        top.classList.remove('top_mute');
        event.stopImmediatePropagation(); 
    })
    document.addEventListener('click', function(event) {
        form.classList.add('top_block_form_disable');
        top.classList.remove('top_mute');
    })
})('.top_block_button' ,'.top_block_form', '.top', '.top_block_form_close')
