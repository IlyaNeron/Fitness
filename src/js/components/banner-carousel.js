import Swiper from "../swiper.js";

export class BannerCarousel {
    constructor() {
        const swiper = new Swiper('.banner-carousel', {
            speed: 1000,
            parallax: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
}