export class HeaderFixed {
    constructor() {
        this.header = document.querySelector('.header');
        this.scrollOffset = 100;
        document.addEventListener('scroll', () => this.addFixed());
        this.state = false;
    }

    addFixed() {
        if (window.pageYOffset >= this.scrollOffset) {
            this.header.classList.add('fixed');
            this.header.classList.remove('up');
            this.state = true;
        } else {
            this.header.classList.remove('fixed');
        }
        if (window.pageYOffset < this.scrollOffset && this.state === true) {
            this.header.classList.add('up');
        }
    }
}