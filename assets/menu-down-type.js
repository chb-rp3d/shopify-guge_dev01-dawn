if (!customElements.get('menu-down-type')) {
    customElements.define('menu-down-type', class MenuDownType extends HTMLElement {
        constructor() {
            super()
            this.init()
        }
        init() {
            const sub_items = this.querySelectorAll('.menu-down-sub-item')
            const sub_wards = Array.from(this.querySelectorAll('.menu-down-sub-ward'))
            sub_items.forEach((item, index) => {
                if (index == 0) {
                    item.classList.add('active')
                    sub_wards[index].classList.add('open')
                }
                item.addEventListener('mouseover', () => {
                    $(sub_items).not(item).removeClass('active')
                    $(sub_wards).not(sub_wards[index]).removeClass('open')
                    item.classList.add('active')
                    sub_wards[index].classList.add('open')
                })

            })
            //    $(document.querySelectorAll('.menu-down-content')).on('mouseleave', () => {
            //         $(sub_items).removeClass('active')
            //         $(sub_wards).removeClass('open')
            //     })
            // const swiperWrapper =this.querySelectorAll('.swiper-wrapper')
            // swiperWrapper.forEach(item=>{
            //    const threeTitles= item.querySelectorAll('.menu-down-three-title')
            // })
            // swiperWrapper.forEach(item=>{
            //     setTimeout(() => {
            //         $(item).css({
            //             height: item.clientHeight +   'px'
            //         })
            //     }, 100)
            // })
            


        }
    })
}