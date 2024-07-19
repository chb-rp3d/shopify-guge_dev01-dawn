if (!customElements.get('section-scans')) {
    customElements.define('section-scans', class SectionScans extends HTMLElement {
        swiper_options = {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: false,
            autoplay: false,
            watchOverflow: true
        };
        constructor() {
            super()

            this.initSwiper()

        }
        initSwiper() {
            const swiper = new Swiper(this.querySelector(".swiper-container"), {
                ...this.swiper_options,
                allowTouchMove: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints:{
                    769:{
                        allowTouchMove: false,
                        slidesPerView:4
                    }
                }

            })

            this.querySelector('.swiper-button-prev-cu').addEventListener('click',()=>{
                swiper.slidePrev()
            })
            this.querySelector('.swiper-button-next-cu').addEventListener('click',()=>{
                swiper.slideNext()
            })
        }
    })
}