;(function getFormTopBlock (selectorButton, selectorForm, selectorTop, selectorClose, selectorServicePrice, selectorWrp, selectorWrpPrice) {
    let buttons = document.querySelectorAll(selectorButton);
    let form = document.querySelector(selectorForm);
    let top = document.querySelector(selectorTop);
    let buttonClose = document.querySelector(selectorClose);
    let fixed;
    let body = document.querySelector('body');
    let wrp = document.querySelector(selectorWrp);
    let wrpPrice = document.querySelector(selectorWrpPrice)
    let servicePrice = document.querySelector(selectorServicePrice);
    for (let button of buttons) {
        button.addEventListener ('click', function () {
            form.classList.remove('top_block_form_disable');
            wrp.classList.add('top_mute');
            fixed = document.createElement('div');
            fixed.classList.add('fixed');
            fixed.addEventListener('click', function(event) {
                form.classList.add('top_block_form_disable');
                wrp.classList.remove('top_mute');
                body.removeChild(fixed);
            });
            servicePrice.classList.add('service_price_treatment_wrp_disable')
            body.appendChild(fixed);
        })        
    }
    buttonClose.addEventListener ('click', function(event) {
        form.classList.add('top_block_form_disable');
        wrp.classList.remove('top_mute');
        event.stopImmediatePropagation(); 
        body.removeChild(fixed);
        wrpPrice.classList.remove('top_mute');
    })

})('.button_consult' ,'.top_block_form', '.top', '.top_block_form_close', '.service_price_treatment_wrp', '.wrp', '.service_wrp_in');

;(function getTextUp (selectorInput, selectorSpan) {
    let input = document.querySelectorAll(selectorInput);
    let span = document.querySelectorAll(selectorSpan);
    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener('focus', function() {
            span[i].classList.add('top_block_form_input_focus');
            span[i].classList.remove('top_block_form_label_text');
        })
        input[i].addEventListener('blur', function() {
            if (input[i].value == '') {
            span[i].classList.remove('top_block_form_input_focus');
            span[i].classList.add('top_block_form_label_text');
            console.log(input[i].value);
            }
        })
    }     
})('.top_block_form_input', '.top_block_form_label_text');

;(function getSubmitForm (selectorForm, selectorDivForm, selectorSuccessSend, selectorSuccessButton, selectorTop, selectorWrp) {
    function getFormSubmit (event) {
        event.preventDefault();
        // console.log('отправлено')
        let data = serializeForm(registrationForm);
        divForm.classList.add('top_block_form_disable');
        successSend.classList.remove('success_send_disable');
        close = document.createElement('div');
        close.classList.add('fixed');
        close.addEventListener('click', function(event) {
            successSend.classList.add('success_send_disable');
            top.classList.remove('top_mute');
            body.removeChild(close)
        })
        body.appendChild(close);
    }
    function serializeForm(form) {
        let {elements} = form;
        function filterElements (item) {
            if (item.name == '') {
                return false;
            } else {
                return true;
            }
        }
        let filtrArr = Array.from(elements).filter(filterElements);
        let arr = filtrArr.map(function(element) {
            let {name, value} = element;
            return {name, value};
        });
        console.log(arr);
    }
    let registrationForm = document.querySelector(selectorForm);
    let divForm = document.querySelector(selectorDivForm);
    let successSend = document.querySelector(selectorSuccessSend);
    let successSendButton = document.querySelector(selectorSuccessButton);
    let body = document.querySelector('body');
    let close;
    let top = document.querySelector(selectorTop)
    let wrp = document.querySelector(selectorWrp);
    registrationForm.addEventListener('submit', getFormSubmit);
    successSendButton.addEventListener('click', function(event) {
        event.stopImmediatePropagation();
        successSend.classList.add('success_send_disable');
        top.classList.remove('top_mute');
        body.removeChild(close);
        wrp.classList.remove('top_mute')
    })
})('#top_block_form_sub', '.top_block_form', '.success_send', '.success_send_button', '.top', '.wrp');

;(function getTreatment (selectorService, selectorServicePrice) {
    let servicePrice = document.querySelector(selectorServicePrice);
    let service = document.querySelector(selectorService);
    let wrp = service.querySelector('.service_wrp_in');
    let buttonsShowPrice = service.querySelectorAll('.service_block_price');
    let servicePriceClose = servicePrice.querySelector('.service_button_close');
    let fixed;
    let serviceButton = servicePrice.querySelector('.service_button');
    for (let buttonShowPrice of buttonsShowPrice) {
        buttonShowPrice.addEventListener('click', function() {
            event.preventDefault();
            servicePrice.classList.remove('service_price_treatment_wrp_disable');
            wrp.classList.add('top_mute');
            fixed = document.createElement('div');
            fixed.classList.add('fixed');
            fixed.addEventListener('click', function() {
                servicePrice.classList.add('service_price_treatment_wrp_disable');
                wrp.classList.remove('top_mute');
                wrp.removeChild(fixed);
            });
            wrp.appendChild(fixed);
        });
    }
    serviceButton.addEventListener('click', function() {
        wrp.removeChild(fixed);
        wrp.classList.remove('top_mute');
    })
    servicePriceClose.addEventListener('click', function() {
        servicePrice.classList.add('service_price_treatment_wrp_disable');
        wrp.classList.remove('top_mute');
        wrp.removeChild(fixed);
    });

})('.service_wrp', '.service_price_treatment_wrp');