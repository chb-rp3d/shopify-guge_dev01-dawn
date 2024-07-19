if (!customElements.get("product-comparison")) {
    customElements.define(
        "product-comparison",
        class ProductComparison extends HTMLElement {
            constructor() {
                super();
                this.mobileWidht = 768
                this.productJson = this.getProductJson();
                // console.log('this.productJson', this.productJson)
                this.currentData = this.productJson.slice(0, 3);
                this.initRow();
                this.tabs = this.querySelectorAll(".product-comparison-tab-text");
                this.tabDown = this.querySelectorAll(".product-comparison-tab-down");
                this.checkColRepeatable();
                this.tabsClick();
                // this.listenerScroll();
                this.listenerResize();
                this.initContent()
                this.initTabElementStatus(this.isMobile());

            }
            listenerScroll() {
                const _this = this;
                let row_1 = this.querySelector(".product-comparison-row-1");
                let header__wrapper = document.querySelector(".header__wrapper");
                const debouncedHandleScroll = this.debounce(function () {
                }, 300);
                window.addEventListener("scroll", function () {
                    let row_clientRect = row_1.getBoundingClientRect();
                    const scrollTop =
                        document.documentElement.scrollTop || document.body.scrollTop;

                });
            }

            debounce(func, delay = 300) {
                let timeoutId;
                return function () {
                    const context = this;
                    const args = arguments;
                    clearTimeout(timeoutId);
                    timeoutId = setTimeout(function () {
                        func.apply(context, args);
                    }, delay);
                };
            }

            listenerResize() {
                const _this = this;
                const debouncedHandleScroll = this.debounce(function () {

                    if (_this.isMobile()) {
                        _this.initTabElementStatus(true);
                        _this.listenerCheckStatus()

                    } else {
                        let ids = _this.currentData.map(t => t.id).slice(0, 2)
                        if (ids.includes(_this.currentData[2].id)) {
                            let productJson = Array.from(_this.productJson).filter(t => !(ids.includes(t.id)))
                            _this.updateCurrentData(2, productJson[0].id)
                        }

                    }
                }, 300);
                window.addEventListener("resize", debouncedHandleScroll);
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

            initRow() {
                this.rows = this.querySelectorAll(".product-comparison-row");
            }
            updateCurrentData(index, id) {
                this.currentData[Number(index)] = this.productJson.find(
                    (item) => item.id == id
                );
                this.initTabElementStatus();
                this.renderCol(index ?? 0);
                this.listenerCheckStatus()

            }

            initTabElementStatus() {
                let ids = this.currentData.map((t) => t.id);
                if (this.isMobile()) {
                    ids = ids.slice(0, 2);
                }
                this.tabDown.forEach((ele, index) => {
                    ele
                        .querySelectorAll(".product-comparison-tab-item")
                        .forEach((e, i) => {
                            let activeIndex = ids.indexOf(e.dataset.id)
                            activeIndex == index ? e.classList.add('active') : e.classList.remove('active')
                            e.disabled = activeIndex >= 0;
                        });
                });
            }

            renderCol(colIndex) {
                this.rows.forEach((row, index) => {
                    let col = Array.from(
                        row.querySelectorAll(".product-comparison-col")
                    ).splice(1)[colIndex];
                    let currentData = this.currentData?.[colIndex] ?? {};
                    console.log('currentData',currentData)
                    if (index != 0) {
                        let field = col.dataset.field ?? "";
                        col.querySelector(".product-comparison-item").innerText =
                            currentData[field];
                    } else {
                        let btn = col.querySelector(".product-comparison-link")
                        let priceItem = col.querySelector(".product-comparison-price")
                        btn.href = currentData.url;
                        priceItem.innerText = currentData.price;
                        col.querySelector("img").src = currentData.imgUrl;
                        col.querySelector(".product-comparison-tab-title").innerText = currentData.title
                        currentData.isHidePrice== 'true'? priceItem.classList.add('visibility-hidden'): priceItem.classList.remove('visibility-hidden')
                        currentData.isHideBtn=='true'? btn.classList.add('visibility-hidden'): btn.classList.remove('visibility-hidden')
                    }
                });
            }

            tabsClick() {
                const _this = this;
                $(this.tabs).on("click", function () {
                    const currentTab = $(this);
                    currentTab.toggleClass("active");
                    const dropdown = currentTab.next(".product-comparison-tab-down");
                    dropdown
                        .slideToggle()
                        .children()
                        .on("click", function () {
                            dropdown.slideUp()
                            currentTab.removeClass("active");
                            // currentTab.children("span").text(this.innerText);
                            // this.classList.add("active");
                            _this.updateCurrentData(
                                currentTab.data("index"),
                                this.dataset.id
                            );
                        });
                });
            }


            checkColRepeatable() {
                const _this = this
                this.querySelector("#product-comparison_checkbox").addEventListener(
                    "click",
                    (e) => {
                        _this.listenerCheckStatus()
                    }
                );
            }

            listenerCheckStatus() {

                this.initRow()
                const checkbox = this.querySelector("#product-comparison_checkbox")
                Array.from(this.rows).splice(1).forEach((row, i) => {
                    if (checkbox.checked) {
                        let textEles = Array.from(
                            row.querySelectorAll(".product-comparison-text")
                        )
                        if (this.isMobile()) {
                            textEles = textEles.splice(0, 2)
                        }
                        let texts = textEles.map((ele) => ele.innerText.trim());
                        let uniqueValues = new Set(texts);
                        if (uniqueValues.size == 1) {
                            row.classList.add("hide");
                        } else {
                            row.classList.remove("hide");
                        }
                    } else {
                        row.classList.remove("hide");
                    }
                });
            }

            initContent() {
                const variantId = this.getUrlParameter('variantId')
                if (!variantId) return
                const data = this.productJson.find(t => t.variantId == variantId)
                if (!data) return
                this.currentData = this.productJson.filter(t => t.variantId != variantId).slice(0, 2)
                this.currentData.unshift(data)
                for (let colIndex = 0; colIndex < this.currentData.length; colIndex++) {
                    this.renderCol(colIndex)
                }


            }

            getUrlParameter(name) {
                name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
                var results = regex.exec(location.search);
                return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
            }

            getProductJson() {
                const productJson = [];
                const productJsonEle = this.querySelectorAll(
                    ".product-comparison_json"
                );
                productJsonEle.forEach((item) => productJson.push(item.dataset));
                return productJson;
            }
        }
    );
}
