if (!customElements.get('drawer-menu-type')) {
    customElements.define('drawer-menu-type', class DrawerMenuType extends HTMLElement {
        constructor() {
            super()
            this.init()
        }

        init() {
            const _this = this

            const subItems =this.querySelectorAll('.drawer-menu-sub-item')
            const menuItemLinks = this.querySelectorAll('.drawer-menu-item-link')
            menuItemLinks.forEach((item, inde) => {
                item.onclick = () => {
                    const subItem = $(item).next()
                    $(menuItemLinks).not(item).removeClass('open')
                    $(item).toggleClass('open')
                    $(subItems).not(subItem).slideUp()
                    $(subItem).slideToggle()
                }
            })

            const menuSubItemTexts = this.querySelectorAll('.drawer-menu-sub-item-text')
            const itemWards = this.querySelectorAll('.drawer-menu-sub-item-ward')
            menuSubItemTexts.forEach((t,i)=>{
                t.onclick=()=>{
                    const itemWard = $(t).next()
                    $(menuSubItemTexts).not(t).removeClass('open')
                    $(t).toggleClass('open')
                    $(itemWards).not(itemWard).slideUp()
                    $(itemWard).slideToggle()
                }
            })

            $('.header-menu-event').on('click',function(){
                $(this).toggleClass('open')
                $(_this.querySelector('.drawer-menu-container')).toggleClass('open')
                $('#epb_container').toggleClass('hide')
                $('#launcher').toggleClass('hide').next().toggleClass('hide')
                if(_this.querySelector('.drawer-menu-container').classList.contains('open')){
                    document.body.classList.add('overflow-y-hide')
                }else{
                    document.body.classList.remove('overflow-y-hide')
                }
            })
            
        }
    })
}