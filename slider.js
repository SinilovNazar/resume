let myImageSlider = new Swiper('.page-slider' , {
    loop: true,
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    speed: 1500,
    simulateTouch: false
});

let sliderBlock = document.querySelector(".page-slider");

sliderBlock.addEventListener("mouseleave" , function (e) {
    myImageSlider.params.autoplay.disableOnInteraction = false
    myImageSlider.params.autoplay.delay = 3000
    myImageSlider.autoplay.start()
})
sliderBlock.addEventListener("mouseenter" , function (e) {
    myImageSlider.autoplay.stop()
})











