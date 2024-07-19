if(!customElements.get('section-scan')){
    customElements.define('section-scan', class SectionScan extends HTMLElement{
        constructor(){
            super()
            this.init()
        }
        init(){
            const modal = this.querySelector('.section-scan-modal')
            // document.querySelector('.home-banner-btn').onclick=function(){
            //     modal.classList.add('open')
            //     document.body.classList.add('overflow-y-hide')
            // }

            $('.comparison-btn_').on("click",()=>{
                modal.classList.add('open')
                document.body.classList.add('overflow-y-hide')
            })

            const items = this.querySelectorAll('.section-scan-item-title')
            const modalContainer = Array.from(document.querySelectorAll('.section-modal-json'))
            items.forEach((item,index)=>{
                item.onclick=()=>{
                    modalContainer[index].classList.add('open')
                }
            })

            const backBtns =  Array.from(document.querySelectorAll('.section-modal-back-btn'))
            backBtns.forEach((item,index)=>{
                item.onclick=()=>{
                    modalContainer[index].classList.remove('open')
                }
            })

            this.querySelector('.section-scan-back-btn').onclick=function(){
                document.body.classList.remove('overflow-y-hide')
                modal.classList.remove('open')
            }
        }
    })
}