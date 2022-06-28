;(function getSlider(selectorAboutUs) {
    let aboutUs = document.querySelector(selectorAboutUs);
    let photos = aboutUs.querySelectorAll('.about_us_info_slider_photo');
    let photosWrp = aboutUs.querySelector('.about_us_info_slider');
    let span = aboutUs.querySelectorAll('.about_us_info_slider_span');
    let slider = [];
    let img;
    for (let i = 0; i < photos.length; i++) {
        slider[i] = photos[i].src;
        if (i != 0) {
            photos[i].remove();
        }
        // if (img.src != ''){
        //     span[i].classList.add('about_us_info_slider_span_change')
        // }
        span[i].addEventListener('click', function(){
            if (step != i) {
                span[step-1].classList.remove('about_us_info_slider_span_change');
            }
            draw(i);
            step = i;

            // span[slider.length-1].classList.remove('about_us_info_slider_span_change');
        })
    }

    setInterval(function(){
        draw(step);
    }, 3000)
    console.log(slider);
    let step = 0;
    function draw(count) {
        span[count].classList.add('about_us_info_slider_span_change');
        if (count > 0) {
            span[count-1].classList.remove('about_us_info_slider_span_change');
        } else if (count == 0) {
            span[slider.length-1].classList.remove('about_us_info_slider_span_change');
        }

        img = document.createElement('img');
        img.src = slider[count];
        img.classList.add('about_us_info_slider_photo');
        // img.style.left = offset*600 + 'px';
        photosWrp.appendChild(img);
        if (step + 1 == slider.length) {
            step = 0;
        } else {
            step++;
        }
        
    }
    
})('.about_us_info')