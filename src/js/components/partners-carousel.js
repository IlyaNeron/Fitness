import Swiper from "../swiper.js";

export class PartnersCarousel {
    constructor() {
        const swiper = new Swiper('.partners-carousel', {
            slidesPerView: 'auto',
            spaceBetween: 60,
            navigation: {
                nextEl: '.partners-carousel-wrapper .swiper-button-next',
                prevEl: '.partners-carousel-wrapper .swiper-button-prev',
            },
        });
    }
}