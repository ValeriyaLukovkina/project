;(function(selectorJoinWrp) {
    let joinWrp = document.querySelector(selectorJoinWrp);
    let form = joinWrp.querySelector('#join_form')
    let input = joinWrp.querySelectorAll('.join_form_input');
    let span = joinWrp.querySelectorAll('.join_form_span');
    let button = joinWrp.querySelector('.join_button');
    let spanAdd = joinWrp.querySelectorAll('.join_add');
    let success = joinWrp.querySelector('.join_success')
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
    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener('focus', function() {
            span[i].classList.add('join_form_span_focus');
            span[i].classList.remove('join_form_span');
        });
        input[i].addEventListener('blur', function() {
            if (input[i].value == '') {
            span[i].classList.remove('join_form_span_focus');
            span[i].classList.add('join_form_span');
            }
        });
        button.addEventListener('click', function() {
            // event.preventDefault();
            if (input[i].value == '') {
                spanAdd[i].classList.remove('join_add_mute');
            } else {
                spanAdd[i].classList.add('join_add_mute');
            }
        })
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            if (input[0].value != '' && input[1].value != '') {
                serializeForm(form);
                success.classList.remove('join_success_mute')
            }
        })
    }
})('.join_wrp');