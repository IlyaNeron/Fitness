import {NavMenu} from "./components/nav-menu";
import {BannerCarousel} from "./components/banner-carousel";
import {PartnersCarousel} from "./components/partners-carousel";
import {HeaderFixed} from "./components/header-fixed";

export class Init {
    constructor() {
        const nav_menu = new NavMenu();
        const banner_carousel = new BannerCarousel();
        const partners_carousel = new PartnersCarousel();
        const header_fixed = new HeaderFixed();
    }
}