if (!customElements.get('section-modal-json')) {
    customElements.define('section-modal-json', class SectionModalJson extends HTMLElement {
        constructor() {
            super()
            this.isDragging = false;
            this.startPosition = 0;
            this.startTop = 0;
            this.content = this.querySelector(".section-modal-ward");
            this.thumb = this.querySelector(".modal-scrollbar-thumb");
            this.scrollbarContainer = this.querySelector(".section-modal-scroll-container");
            
            this.init()
        }
        init() {
            
            const _this = this
            this.initScrollbarPosition()
            _this.thumb.addEventListener("mousedown", function (e) {
                _this.isDragging = true;
                _this.startPosition = e.clientY;
                _this.startTop = parseFloat(getComputedStyle(_this.thumb).top);
            });

            document.addEventListener("mousemove", function (e) {
                if (_this.isDragging) {
                    const deltaY = e.clientY - _this.startPosition;
                    const newTop = _this.startTop + deltaY;
                    const maxTop = _this.content.clientHeight - _this.thumb.clientHeight;
                    _this.thumb.style.top = Math.min(Math.max(0, newTop), maxTop) + "px";
                    const percentage = newTop / maxTop;
                    _this.content.scrollTop =
                        percentage * (_this.content.scrollHeight - _this.content.clientHeight);
                }
            });


            window.addEventListener("load", ()=>_this.updateThumb());
            _this.content.addEventListener("scroll", ()=>_this.updateThumb());

            // 在窗口大小改变时重新计算滚动条 thumb
            window.addEventListener("resize", ()=>_this.updateThumb());
            document.addEventListener("mouseup", function () {
                _this.isDragging = false;
            });
        }

        initScrollbarPosition(){
            const itemType = Array.from(this.querySelectorAll('.modal-ward-item-type'))[0]
            this.querySelector('.modal-scrollbar-container').style.left = itemType.clientWidth + 'px'
        }            


        updateThumb() {
            const visibleHeight = this.content.clientHeight;
            const totalHeight = this.content.scrollHeight;
            const containerHeight = this.scrollbarContainer.clientHeight;

            // 计算滑块高度
            const thumbHeight = (visibleHeight / totalHeight) * containerHeight;
            this.thumb.style.height = thumbHeight + "px";

            // 计算滑块位置
            const scrollPercentage =
                this.content.scrollTop / (totalHeight - visibleHeight);
            const maxThumbTop = containerHeight - thumbHeight;
            this.thumb.style.top = scrollPercentage * maxThumbTop + "px";
            this.initScrollbarPosition()
        }

    })
}