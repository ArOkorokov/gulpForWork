require('./js_modules/burger.js');
require('./js_modules/gsap.js');

import Swiper from 'swiper';
import { Navigation, Pagination,Autoplay,EffectCoverflow } from 'swiper/modules';
const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination,Autoplay,EffectCoverflow],
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween:50,
    autoplay: {
      delay: 2500,
    },
    speed: 2500,
    coverflowEffect: {
      rotate: 60,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },
    breakpoints: {
      1380: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1.5,
        coverflowEffect: {
          rotate: 80,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        },
      },
      320: {
        slidesPerView: 1,
        coverflowEffect: {
          rotate: 80,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        },
      }
    }
  });

