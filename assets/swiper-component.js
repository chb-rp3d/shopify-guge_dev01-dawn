if (!customElements.get("swiper-component")) {
  customElements.define(
    "swiper-component",
    class SwiperComponent extends HTMLElement {

      /**
       * 拓展属性 navigation pagination
       */
      // navigation: {
      //     nextEl: '.button-next-{{section.id}}',
      //     prevEl: '.button-prev-{{section.id}}',
      //   },
      //   pagination: {
      //     el: '.home-swiper-pagination',
      //     clickable: true,
      //   },

      swiper_options = {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false,
        autoplay: false,
        watchOverflow: true
      };
      constructor() {
        super();
        if (this.querySelector(".swiper-button-next")) {
          this.swiper_options.navigation = {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          };
        }
        if(this.querySelector('.swiper-pagination')){
          this.swiper_options.pagination={
            el: '.swiper-pagination',
            clickable: true,
          }
        }
        this.initSwiper();
      }
      initSwiper() {
        if (this.dataset.open == "true") {
          Object.keys(this.dataset).forEach((key) => {
            this.swiper_options[key] =  JSON.parse(this.dataset[key]);
          });
          this.swiper = new Swiper(this.querySelector(".swiper-container"), {
            ...this.swiper_options,
          });
        }
      }
      slideTo(index) {
        this.swiper.slideTo(index);
      }
    }
  );
}
