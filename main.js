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
            wrp.classList.remove('top_mute');
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
        // body.classList.remove('top_mute')
        wrp.classList.remove('top_mute')
    })
})('#top_block_form_sub', '.top_block_form', '.success_send', '.success_send_button', '.top', '.wrp');

;(function getTreatment (selectorService, selectorServicePrice, selectorWrp) {
    let servicePrice = document.querySelector(selectorServicePrice);
    let service = document.querySelector(selectorService);
    let wrp = service.querySelector('.service_wrp_in');
    let buttonsShowPrice = service.querySelectorAll('.service_block_price');
    let servicePriceClose = servicePrice.querySelector('.service_button_close');
    let fixed;
    let wrpAll = document.querySelector(selectorWrp);
    let serviceButton = servicePrice.querySelector('.service_button');
    let body = document.querySelector('body')
    for (let buttonShowPrice of buttonsShowPrice) {
        buttonShowPrice.addEventListener('click', function() {
            event.preventDefault();
            servicePrice.classList.remove('service_price_treatment_wrp_disable');
            wrp.classList.add('top_mute');
            // servicePrice.classList.add('service_price_treatment_wrp_add')
            wrpAll.classList.add('top_mute');
            fixed = document.createElement('div');
            fixed.classList.add('fixed-1');
            fixed.addEventListener('click', function() {
                servicePrice.classList.add('service_price_treatment_wrp_disable');
                wrp.classList.remove('top_mute');
                wrpAll.classList.remove('top_mute');
                servicePrice.removeChild(fixed);
            });
            servicePrice.appendChild(fixed);
        });
    }
    serviceButton.addEventListener('click', function() {
        servicePrice.removeChild(fixed);
        wrp.classList.remove('top_mute');
        // wrpAll.classList.remove('top_mute');
    })
    servicePriceClose.addEventListener('click', function() {
        servicePrice.classList.add('service_price_treatment_wrp_disable');
        wrp.classList.remove('top_mute');
        wrpAll.classList.remove('top_mute');
        servicePrice.removeChild(fixed);
    });

})('.service_wrp', '.service_price_treatment_wrp', '.wrp');

;(function getPhoto (selectorPortfolio) {
    let portfolio = document.querySelector(selectorPortfolio);
    let portfolioScrol = portfolio.querySelector('.portfolio_scroll');
    let portfolioPhotoBefore = portfolio.querySelector('.portfolio_photo_before');
    let portfolioPhotoAftrer = portfolio.querySelector('.portfolio_photo_after');
    let portfolioPhotoWrp = portfolio.querySelector('.portfolio_photo_wrp');
    let width = 500
    portfolioScrol.addEventListener ('mousedown', function(e) {
        e.preventDefault();
        portfolioScrol.style.pointerEvents = 'none';
        portfolioPhotoWrp.addEventListener('mousemove', getMove)
    });

    portfolioPhotoWrp.addEventListener ('mouseup', function(e) {
        e.preventDefault();
        portfolioScrol.style.pointerEvents = 'all';
        portfolioPhotoWrp.removeEventListener('mousemove', getMove)
    });

    portfolioScrol.addEventListener('click', function() {
        event.preventDefault();
    })

    function getMove(e) {
        portfolioScrol.style.left = e.layerX + 'px';
        portfolioPhotoBefore.style.clip = 'rect(0px,500px,400px,' + e.layerX + 'px)'; 
        portfolioPhotoAftrer.style.clip = 'rect(0px,' + e.layerX + 'px,400px, 0)'; 
    }

})('.portfolio');

;(function getSliderPhotoDoctor(selectorDoctor) {
    let doctor = document.querySelector(selectorDoctor);
    let slidesWrp = doctor.querySelector('.doctor_block_wrp')
    let slides = doctor.querySelectorAll('.doctor_block');
    let buttonPrev = doctor.querySelector('.doctor_slide_prev_wrp');
    let buttonNext = document.querySelector('.doctor_slide_next_wrp');
    let i = 1;
    let k = slides.length;
        buttonNext.addEventListener('click', function() {
            if (i > slides.length - 4) {
                return i = 1;
            }
            let lastChild = doctor.querySelector('.doctor_block_wrp .doctor_block:nth-child(' + slides.length + ')');
            let childPrev = doctor.querySelector('.doctor_block_wrp .doctor_block:nth-child(' + i + ')');
            let childNext = doctor.querySelector('.doctor_block_wrp .doctor_block:nth-child(' + (4 + i) + ')');
            childPrev.classList.add('doctor_block_disable');
            childNext.classList.remove('doctor_block_disable');
            i++;
        });
        buttonPrev.addEventListener('click', function() {
            if (k <=  4) {
                return k = slides.length;
            }
            let childPrev = doctor.querySelector('.doctor_block_wrp .doctor_block:nth-child(' + (k - 4) + ')');
            let childNext = doctor.querySelector('.doctor_block_wrp .doctor_block:nth-child(' + (k) + ')');
            childPrev.classList.remove('doctor_block_disable');
            childNext.classList.add('doctor_block_disable');
            k--;
        });
})('.doctor');

