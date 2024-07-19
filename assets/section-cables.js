if(!customElements.get('section-cables')){
    customElements.define('section-cables', class SectionCables extends HTMLElement{
        constructor(){
            super()
            this.init()
        }
        init(){
            const tabs = this.querySelectorAll('.cables-tab-item')
            const swiper = this.querySelector('swiper-component').swiper
            tabs.forEach((item,index)=>{
                item.onclick=function(){
                    $(tabs).not(item).removeClass('active')
                    item.classList.add('active')
                    swiper.slideTo(index)
                }
            })
            swiper.on('slideChange',(e)=>{
                $(tabs).not(tabs[e.activeIndex]).removeClass('active')
                tabs[e.activeIndex].classList.add('active')
            })
        }
    })
}