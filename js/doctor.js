;(function getSertificate(selectorDoctor) {
    let doctor = document.querySelector(selectorDoctor);
    let button = doctor.querySelectorAll('.doctor_sertificate');
    let sertificate = doctor.querySelectorAll('.sertificate_list');
    let hand = doctor.querySelectorAll('.doctor_sertificate_hand');
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function() {
            sertificate[i].classList.toggle('sertificate_list_open');
            hand[i].classList.toggle('doctor_sertificate_hand_open');
            hand[i].classList.toggle('doctor_sertificate_hand_close');
        })
    }
})('.doctor_wrp');