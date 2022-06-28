;(function getNumberList(selectorServiceWrp) {
    let serviceWrp = document.querySelector(selectorServiceWrp);
    let servicesName = serviceWrp.querySelectorAll('.service_name');
    let count = 1;
    for (let serviceName of servicesName) {
        if (count < 10) {
            serviceName.setAttribute('data-count', '0' + count++ + '.');
        } else {
            serviceName.setAttribute('data-count', count++ + '.');
        }
    }
})('.service_wrp');