const slider1 = new Swiper('#slider1', {
      /*autoplay loop*/
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
      breakpoints: {
        1000: {
          slidesPerView: 1.5,
          spaceBetween: 20
        }
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
    });

const standimage = new Swiper('#standimage', {
      /*autoplay loop*/
      spaceBetween: 0,
      loop: true,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });