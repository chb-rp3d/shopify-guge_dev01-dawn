if (!customElements.get('section-faq')) {
    customElements.define('section-faq', class SectionFaq extends HTMLElement {
        constructor() {
            super()
            this.mobileWidht = 768
            this.faqItems = Array.from(this.querySelectorAll('.section-faq-item'))
            this.tabs = Array.from(this.querySelectorAll('.section-faq-tab'))
            this.faqWards = Array.from(this.querySelectorAll('.section-faq-ward'))
            this.faqWardsTitle =Array.from(this.querySelectorAll('.section-faq-ward-title'))
            this.faqTitles = Array.from(this.querySelectorAll('.section-faq-title'))
            this.faqTexts = Array.from(this.querySelectorAll('.section-faq-ward-text'))
            this.currenTabIndex = 0
            this.init()
            this.handleTitle()
            this.handleWardTitle(0)
        }

        init() {
            const _this = this
            _this.selectItem(0)
            $(_this.tabs).on('click', function () {
                $(_this.tabs).not(this).removeClass('active')
                this.classList.add('active')
                _this.currenTabIndex = this.dataset.index
                _this.selectItem(this.dataset.index)
                // _this.handleWardTitle(this.dataset.index)
            })


        }
        handleWardTitle(index){
           const _this = this
            $( this.faqWardsTitle).on('click',function(){
                const currentItem =  _this.faqItems[_this.currenTabIndex]
                const currentWardTitles = currentItem.querySelectorAll('.section-faq-ward-title')
                $(currentWardTitles).not(this).removeClass('active')
                $(currentItem.querySelectorAll('.section-faq-ward-text')).not($(this).next()).slideUp()
                $(this).toggleClass('active')
                $(this).next().slideToggle()
                
            })
        }
        handleTitle() {
            const _this = this
            $(this.faqTitles).on("click", function () {
                if (_this.isMobile()) {
                    const currentTab = _this.tabs[this.dataset.index]
                    $(_this.tabs).not(currentTab).removeClass('active')
                    $(currentTab).addClass('active')
                    _this.selectItem(this.dataset.index)
                }
            })
        }

        selectItem(index) {
            const currentItem = this.faqItems[index]
            const currenTitle = currentItem.querySelector('.section-faq-title')
            const currenWard = currentItem.querySelector('.section-faq-ward')
            $(this.faqItems).not(currentItem).removeClass('active')
            $(currentItem).addClass('active')
            $(this.faqTitles).not(currenTitle).removeClass('active')
            $(currenTitle).toggleClass('active')
            $(this.faqWards).not(currenWard).slideUp()
            $(currenWard).slideToggle()
        }

        isMobile() {
            return this.getBrowserWidth() <= this.mobileWidht
        }
        getBrowserWidth() {
            return (
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth
            );
        }
    })
}