if (window.matchMedia("(max-width: 768px)").matches) {

            // 加载针对小屏幕设备的脚本

            // window.onload = function () {
            //     document.querySelectorAll(".swiper-slide-two").forEach(function (element) {
            //         element.style.display = "none";
            //     });
            //     document.querySelectorAll(".swiper-slide-three").forEach(function (element) {
            //         element.style.display = "none";
            //     });
            // };


            // const spanOne = document.querySelector(".span-one");
            // const spanTwo = document.querySelector(".span-two");
            // const spanThree = document.querySelector(".span-three");
            // let slideOneElements = document.querySelectorAll(".swiper-slide-one");
            // let slideTwoElements = document.querySelectorAll(".swiper-slide-two");
            // let slideThreeElements = document.querySelectorAll(".swiper-slide-three");

            // let mobile_swiper = new Swiper('.mobile-swiper-container', {
            //     pagination: '.swiper-pagination',
            //     nextButton: '.swiper-button-next',
            //     prevButton: '.swiper-button-prev',
            //     slidesPerView: 3.5,
            //     centeredSlides: false,
            //     paginationClickable: false,
            //     spaceBetween: 15,
            // });
            
            // // 监听 Popular Picks 按钮
            // spanOne.addEventListener("click", function () {
            //     spanOne.style.color = "#E74A4A";
            //     spanTwo.style.color = "#BABABA"
            //     spanThree.style.color = "#BABABA"
            //     slideOneElements.forEach(function (element) {
            //         element.style.display = "";
            //     });
            //     slideTwoElements.forEach(function (element) {
            //         element.style.display = "none";
            //     });
            //     slideThreeElements.forEach(function (element) {
            //         element.style.display = "none";
            //     });
            //     // 将轮播图返回到第一张
            //     mobile_swiper.slideTo(0);
            // });

            // // 监听 3D Scanners 按钮
            // spanTwo.addEventListener("click", function () {
            //     spanOne.style.color = "#BABABA";
            //     spanTwo.style.color = "#E74A4A";
            //     spanThree.style.color = "#BABABA";
            //     slideOneElements.forEach(function (element) {
            //         element.style.display = "none";
            //     });
            //     slideTwoElements.forEach(function (element) {
            //         element.style.display = "";
            //     });
            //     slideThreeElements.forEach(function (element) {
            //         element.style.display = "none";
            //     });
            //     mobile_swiper.slideTo(0);
            // });

            // // 监听 Accessories 按钮
            // spanThree.addEventListener("click", function () {
            //     spanOne.style.color = "#BABABA";
            //     spanTwo.style.color = "#BABABA";
            //     spanThree.style.color = "#E74A4A";
            //     slideOneElements.forEach(function (element) {
            //         element.style.display = "none";
            //     });
            //     slideTwoElements.forEach(function (element) {
            //         element.style.display = "none";
            //     });
            //     slideThreeElements.forEach(function (element) {
            //         element.style.display = "";
            //     });
            //     mobile_swiper.slideTo(0);
            // });


            function changeImage(imageSrc) {
                document.getElementById('mainImage').src = imageSrc;
            }

            
            const slider_one_one = document.querySelector(".slider-one");
            let currentIndex_one_one = 0;

            function prevSlide() {
                if (currentIndex_one_one > 0) {
                    currentIndex_one_one--;
                    updateSliderPosition();
                }
            }

            function nextSlide() {
                if (currentIndex_one_one < 2) {
                    currentIndex_one_one++;
                    updateSliderPosition();
                }
            }

            function updateSliderPosition() {
                const slideWidth = 100; // 每个 slide 的宽度
                const newPosition = -currentIndex_one_one * slideWidth;
                slider_one_one.style.transform = `translateX(${newPosition}vw)`;
            }


            const slider_one = document.querySelector(".slider-one");
            const slides_one = document.querySelectorAll(".slide-one");
            let currentIndex_one = 0;
            let startX_one = 0;
            let dist_one = 0;

            slider_one.addEventListener("touchstart", (e) => {
                startX_one = e.touches[0].clientX;
            });

            slider_one.addEventListener("touchmove", (e) => {
                dist_one = e.touches[0].clientX - startX_one;
                slider_one.style.transform = `translateX(${-(currentIndex_one * 375) + dist_one}px)`;
            });

            slider_one.addEventListener("touchend", () => {
                if (Math.abs(dist_one) > 50) {
                    if (dist_one > 0 && currentIndex_one > 0) {
                        currentIndex_one--;
                    } else if (dist_one < 0 && currentIndex_one < slides_one.length - 1) {
                        currentIndex_one++;
                    }
                }
                dist_one = 0;
                // 控制滑动的距离
                slider_one.style.transform = `translateX(${-(currentIndex_one * 375)}px)`;
            });
            

            const slider_two = document.querySelector(".slider-two");
            const slides_two = document.querySelectorAll(".slide-two");
            let currentIndex_two = 0;
            let startX_two = 0;
            let dist_two = 0;

            slider_two.addEventListener("touchstart", (e) => {
                startX_two = e.touches[0].clientX;
            });

            slider_two.addEventListener("touchmove", (e) => {
                dist_two = e.touches[0].clientX - startX_two;
                slider_two.style.transform = `translateX(${-(currentIndex_two * 100)}vw)`;
            });

            slider_two.addEventListener("touchend", () => {
                if (Math.abs(dist_two) > 50) {
                    if (dist_two > 0 && currentIndex_two > 0) {
                        currentIndex_two--;
                    } else if (dist_two < 0 && currentIndex_two < slides_two.length - 1) {
                        currentIndex_two++;
                    }
                }
                dist_two = 0;
                // 控制滑动的距离
                slider_two.style.transform = `translateX(${-(currentIndex_two * 100)}vw)`;
            });


            const slider_three = document.querySelector(".slider-three");
            const slides_three = document.querySelectorAll(".slide-three");
            let currentIndex_three = 0;
            let startX_three = 0;
            let dist_three = 0;

            slider_three.addEventListener("touchstart", (e) => {
                startX_three = e.touches[0].clientX;
            });

            slider_three.addEventListener("touchmove", (e) => {
                dist_three = e.touches[0].clientX - startX_three;
                slider_three.style.transform = `translateX(${-(currentIndex_three * 100)}vw)`;
            });

            slider_three.addEventListener("touchend", () => {
                if (Math.abs(dist_three) > 50) {
                    if (dist_three > 0 && currentIndex_three > 0) {
                        currentIndex_three--;
                    } else if (dist_three < 0 && currentIndex_three < slides_three.length - 1) {
                        currentIndex_three++;
                    }
                }
                dist_three = 0;
                // 控制滑动的距离
                slider_three.style.transform = `translateX(${-(currentIndex_three * 100)}vw)`;
            });


            const slider_four = document.querySelector(".slider-four");
            const slides_four = document.querySelectorAll(".slide-four");
            let currentIndex_four = 0;
            let startX_four = 0;
            let dist_four = 0;

            slider_four.addEventListener("touchstart", (e) => {
                startX_four = e.touches[0].clientX;
            });

            slider_four.addEventListener("touchmove", (e) => {
                dist_four = e.touches[0].clientX - startX_four;
                slider_four.style.transform = `translateX(${-(currentIndex_four * 100) + dist_four}vw)`;
            });

            slider_four.addEventListener("touchend", () => {
                if (Math.abs(dist_four) > 50) {
                    if (dist_four > 0 && currentIndex_four > 0) {
                        currentIndex_four--;
                    } else if (dist_four < 0 && currentIndex_four < slides_four.length - 1) {
                        currentIndex_four++;
                    }
                }
                dist_four = 0;
                slider_four.style.transform = `translateX(${-(currentIndex_four * 100)}vw)`;
            });

        } else {

            // 加载针对大屏幕设备的脚本
            
            // window.onload = function () {
            //     document.querySelectorAll(".pc-swiper-slide-two").forEach(function (element) {
            //         element.style.display = "none";
            //     });
            //     document.querySelectorAll(".pc-swiper-slide-three").forEach(function (element) {
            //         element.style.display = "none";
            //     });
            // };

            // let pc_swiper = new Swiper('.pc-swiper-container', {
            //     pagination: '.swiper-pagination',
            //     nextButton: '.swiper-button-next',
            //     prevButton: '.swiper-button-prev',
            //     slidesPerView: 3,
            //     centeredSlides: false,
            //     paginationClickable: false,
            //     spaceBetween: 15,
            //     breakpoints: {
            //         768: {
            //             slidesPerView: 1,
            //         },
            //     }
            // });
       
            // const spanOne = document.querySelector(".pc-span-one");
            // const spanTwo = document.querySelector(".pc-span-two");
            // const spanThree = document.querySelector(".pc-span-three");
            // let slideOneElements = document.querySelectorAll(".pc-swiper-slide-one");
            // let slideTwoElements = document.querySelectorAll(".pc-swiper-slide-two");
            // let slideThreeElements = document.querySelectorAll(".pc-swiper-slide-three");
            
            // // 监听 Popular Picks 按钮
            // spanOne.addEventListener("click", function () {
            //     spanOne.style.color = "#E74A4A";
            //     spanTwo.style.color = "#BABABA"
            //     spanThree.style.color = "#BABABA"
            //     slideOneElements.forEach(function (element) {
            //         element.style.display = "";
            //     });
            //     slideTwoElements.forEach(function (element) {
            //         element.style.display = "none";
            //     });
            //     slideThreeElements.forEach(function (element) {
            //         element.style.display = "none";
            //     });
            //     pc_swiper.slideTo(0);
            // });

            // // 监听 3D Scanners 按钮
            // spanTwo.addEventListener("click", function () {
            //     spanOne.style.color = "#BABABA";
            //     spanTwo.style.color = "#E74A4A";
            //     spanThree.style.color = "#BABABA";
            //     slideOneElements.forEach(function (element) {
            //         element.style.display = "none";
            //     });
            //     slideTwoElements.forEach(function (element) {
            //         element.style.display = "";
            //     });
            //     slideThreeElements.forEach(function (element) {
            //         element.style.display = "none";
            //     });
            //     pc_swiper.slideTo(0);
            // });

            // // 监听 Accessories 按钮
            // spanThree.addEventListener("click", function () {
            //     spanOne.style.color = "#BABABA";
            //     spanTwo.style.color = "#BABABA";
            //     spanThree.style.color = "#E74A4A";
            //     slideOneElements.forEach(function (element) {
            //         element.style.display = "none";
            //     });
            //     slideTwoElements.forEach(function (element) {
            //         element.style.display = "none";
            //     });
            //     slideThreeElements.forEach(function (element) {
            //         element.style.display = "";
            //     });
            //     pc_swiper.slideTo(0);
            // });


            const rectangles = document.querySelectorAll(".rectangle");

            rectangles.forEach((rectangle) => {
                rectangle.addEventListener("mouseover", () => {
                    // 在鼠标悬浮时执行的代码
                    rectangle.style.backgroundColor = "lightgray";
                });
    
                rectangle.addEventListener("mouseout", () => {
                    // 在鼠标移出时执行的代码
                    rectangle.style.backgroundColor = "initial";
                });
            });

            
            // 获取所有具有类名 "rectangle" 的元素
            let rectangles = document.querySelectorAll(".rectangle");

            // 获取需要更改背景的 div 元素
            let backgroundDiv = document.getElementById("background-div-one");

            // 遍历每个元素并为其添加点击事件监听器
            rectangles.forEach(function (rectangle) {
                rectangle.addEventListener("click", function () {

                    console.log("===")

                    // 获取当前点击的 div 中的 span 元素的文本内容
                    let text = rectangle.querySelector("span").textContent;

                    // 根据文本内容切换背景图
                    switch (text) {
                        case "3D Printing":
                            backgroundDiv.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/0538/9533/2027/files/image-applications-3dprinting_430x.jpg')";
                            break;
                        case "Reverse Engineering":
                            backgroundDiv.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/0538/9533/2027/files/image_applications_reverseengineering_2_2x_419a8d41-2881-4799-b501-33784652bd56_430x.png')";
                            break;
                        case "Healthcare":
                            backgroundDiv.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/0538/9533/2027/files/image_applications_healthcare_3_2x_4e343cee-bf0f-4d6e-80b3-3cdf2073d4d5_430x.png')";
                            break;
                        case "Arts and Design":
                            backgroundDiv.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/0538/9533/2027/files/image_applications_arts_4_2x_ab1bf262-2cac-4865-816b-6ba4a6dce35f_430x.png')";
                            break;
                        case "Digital Entertainment":
                            backgroundDiv.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/0538/9533/2027/files/image_applications_digitalentertainment_5_2x_c5a6f5e8-57b0-4d85-9542-81e588c5420a_430x.png')";
                            break;
                        case "Historic Preservation":
                            backgroundDiv.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/0538/9533/2027/files/image-applications-historic-6_2x_fab04dee-7a7e-4f57-994b-56759c392777_430x.png')";
                            break;
                        case "Vehicle Modification":
                            backgroundDiv.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/0538/9533/2027/files/image_applications_vehicle_7_2x_aa3f7c68-0d35-4675-862f-36f06df5f382_430x.png')";
                            break;
                        default:
                            backgroundDiv.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/0538/9533/2027/files/image-applications-3dprinting_430x.jpg?v=1697512130')";
                    }
                })
            })


            // 关于 数字累加 + 滚动条定位后开始累加 的功能
            const number1 = document.getElementById("number1");
            const number2 = document.getElementById("number2");
            const number3 = document.getElementById("number3");

            // 设置目标值
            const targetValue1 = 100000;
            const targetValue2 = 150;
            const targetValue3 = 100;

            // 初始化值
            let value1 = 0;
            let value2 = 0;
            let value3 = 0;

            function updateNumbers() {
                if (value1 < targetValue1) {
                    value1 += 1000;
                }
                if (value2 < targetValue2) {
                    value2 += 1;
                }
                if (value3 < targetValue3) {
                    value3 += 1;
                }

                const formattedValue1 = value1.toLocaleString();
                const formattedValue2 = value2.toLocaleString();
                const formattedValue3 = value3.toLocaleString();

                number1.textContent = formattedValue1 + '+';
                number2.textContent = formattedValue2 + '+';
                number3.textContent = formattedValue3 + '+';

                // 如果达到目标值，停止定时器
                if (value1 >= targetValue1 && value2 >= targetValue2 && value3 >= targetValue3) {
                    clearInterval(interval);
                }
            }

            let interval;
            window.addEventListener("scroll", function () {
                const scrollPosition = window.scrollY;
                const elementOffset = number1.getBoundingClientRect().top;
                if (elementOffset < window.innerHeight && scrollPosition >= elementOffset) {
                    if (!interval) {
                        const interval = setInterval(updateNumbers, 180);
                    }
                }
            });


            // 关于 What the Experts Say 的轮播箭头切换(轮播功能)
            const carouselList = document.querySelector('.carousel-list');
            const carouselItems = document.querySelectorAll('.carousel-item');
            const prevButton = document.querySelector('.carousel-arrow-left');
            const nextButton = document.querySelector('.carousel-arrow-right');
            let currentIndex = 0;

            const carouselItem = document.querySelector('.carousel-item');

            // 获取该 div 元素下的 img 元素
            let imgElement = carouselItem.querySelector('img');
            let imgSrc = imgElement.getAttribute('src');
            let currentImgSrc = 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/image-pr-sentence-1.png';

            // 添加事件监听器，用于切换轮播项
            prevButton.addEventListener('click', () => {

                if (currentImgSrc === 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/image-pr-sentence-1.png') {
                    currentImgSrc = 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/image-pr-sentence-1.png';
                    dots.forEach((dot) => {
                        dot.classList.remove('active');
                        dot.style.width = '10px';
                        dot.style.backgroundColor = '#ccc';
                        dot.style.borderRadius = '50%';
                        // 获取 data-index 属性的值
                        const dataIndex = dot.getAttribute('data-index');

                        // 检查是否是需要添加 active 类的元素（这里以 data-index="1" 为例）
                        if (dataIndex === '0') {
                            // 添加 active 类
                            dot.classList.add('active');

                            // 修改样式
                            dot.style.width = '30px';
                            dot.style.backgroundColor = '#FFFFFF';
                            dot.style.borderRadius = '30%';
                        }
                    });
                    return;
                }

                if (currentImgSrc === 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/mobile_image_pr_sentence_2.png') {
                    imgElement.setAttribute('src', 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/image-pr-sentence-1.png');
                    currentImgSrc = 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/image-pr-sentence-1.png';
                    document.getElementById("text_one").textContent = 'REVOPOINT Secures Prestigious Recognition for Product Design Excellence at IDEA 2023';
                    dots.forEach((dot) => {
                        dot.classList.remove('active');
                        dot.style.width = '10px';
                        dot.style.backgroundColor = '#ccc';
                        dot.style.borderRadius = '50%';
                        // 获取 data-index 属性的值
                        const dataIndex = dot.getAttribute('data-index');

                        // 检查是否是需要添加 active 类的元素（这里以 data-index="1" 为例）
                        if (dataIndex === '0') {
                            // 添加 active 类
                            dot.classList.add('active');

                            // 修改样式
                            dot.style.width = '30px';
                            dot.style.backgroundColor = '#FFFFFF';
                            dot.style.borderRadius = '30%';
                        }
                    });
                    return;
                }

                if (currentImgSrc === 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/mobile_image_pr_sentence_3.png') {
                    imgElement.setAttribute('src', 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/mobile_image_pr_sentence_2.png');
                    currentImgSrc = 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/mobile_image_pr_sentence_2.png';
                    document.getElementById("text_one").textContent = '"The new Revopoint INSPIRE 3D Scanner offers a wide range of features for straightforward, high-quality 3D scanning. "';
                    dots.forEach((dot) => {
                        dot.classList.remove('active');
                        dot.style.width = '10px';
                        dot.style.backgroundColor = '#ccc';
                        dot.style.borderRadius = '50%';
                        // 获取 data-index 属性的值
                        const dataIndex = dot.getAttribute('data-index');

                        // 检查是否是需要添加 active 类的元素（这里以 data-index="1" 为例）
                        if (dataIndex === '1') {
                            // 添加 active 类
                            dot.classList.add('active');

                            // 修改样式
                            dot.style.width = '30px';
                            dot.style.backgroundColor = '#FFFFFF';
                            dot.style.borderRadius = '30%';
                        }
                    });
                    return;
                }

                if (currentImgSrc === 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/mobile_image_pr_logo_7.png') {
                    imgElement.setAttribute('src', 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/mobile_image_pr_sentence_3.png');
                    currentImgSrc = 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/mobile_image_pr_sentence_3.png';
                    document.getElementById("text_one").textContent = '"Despite its cost-effective price and entry-level focus,the INSPIRE still packs impressive specs and features."';
                    dots.forEach((dot) => {
                        dot.classList.remove('active');
                        dot.style.width = '10px';
                        dot.style.backgroundColor = '#ccc';
                        dot.style.borderRadius = '50%';
                        // 获取 data-index 属性的值
                        const dataIndex = dot.getAttribute('data-index');

                        // 检查是否是需要添加 active 类的元素（这里以 data-index="1" 为例）
                        if (dataIndex === '2') {
                            // 添加 active 类
                            dot.classList.add('active');
                            dot.style.width = '30px';
                            dot.style.backgroundColor = '#FFFFFF';
                            dot.style.borderRadius = '30%';
                        }
                    });
                    return;
                }

            });

            nextButton.addEventListener('click', () => {

                if (currentImgSrc === 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/image-pr-sentence-1.png') {
                    imgElement.setAttribute('src', 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/mobile_image_pr_sentence_2.png');
                    currentImgSrc = 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/mobile_image_pr_sentence_2.png';
                    document.getElementById("text_one").textContent = '"The new Revopoint INSPIRE 3D Scanner offers a wide range of features for straightforward, high-quality 3D scanning. "';
                    dots.forEach((dot) => {
                        dot.classList.remove('active');
                        dot.style.width = '10px';
                        dot.style.backgroundColor = '#ccc';
                        dot.style.borderRadius = '50%';
                        // 获取 data-index 属性的值
                        const dataIndex = dot.getAttribute('data-index');

                        // 检查是否是需要添加 active 类的元素（这里以 data-index="1" 为例）
                        if (dataIndex === '1') {
                            // 添加 active 类
                            dot.classList.add('active');

                            // 修改样式
                            dot.style.width = '30px';
                            dot.style.backgroundColor = '#FFFFFF';
                            dot.style.borderRadius = '30%';
                        }
                    });
                    return;
                }

                if (currentImgSrc === 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/mobile_image_pr_sentence_2.png') {
                    imgElement.setAttribute('src', 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/mobile_image_pr_sentence_3.png');
                    currentImgSrc = 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/mobile_image_pr_sentence_3.png';
                    document.getElementById("text_one").textContent = '"Despite its cost-effective price and entry-level focus,the INSPIRE still packs impressive specs and features."';
                    // 移除所有 dot 的 active 类
                    dots.forEach((dot) => {
                        dot.classList.remove('active');
                        dot.style.width = '10px';
                        dot.style.backgroundColor = '#ccc';
                        dot.style.borderRadius = '50%';
                        // 获取 data-index 属性的值
                        const dataIndex = dot.getAttribute('data-index');

                        // 检查是否是需要添加 active 类的元素（这里以 data-index="1" 为例）
                        if (dataIndex === '2') {
                            // 添加 active 类
                            dot.classList.add('active');

                            // 修改样式
                            dot.style.width = '30px';
                            dot.style.backgroundColor = '#FFFFFF';
                            dot.style.borderRadius = '30%';
                        }
                    });
                    return;
                }

                if (currentImgSrc === 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/mobile_image_pr_sentence_3.png') {
                    imgElement.setAttribute('src', 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/mobile_image_pr_logo_7.png');
                    currentImgSrc = 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/mobile_image_pr_logo_7.png';
                    document.getElementById("text_one").textContent = '"whether you\'re scanning objects to put inside a game,replacing out-of-production machine parts,or preserving artifacts and antiques by creating their digital doubles,the Revopoint INSPIRE 3D scanner has got you covered."';
                    // 移除所有 dot 的 active 类
                    dots.forEach((dot) => {
                        dot.classList.remove('active');
                        dot.style.width = '10px';
                        dot.style.backgroundColor = '#ccc';
                        dot.style.borderRadius = '50%';
                        // 获取 data-index 属性的值
                        const dataIndex = dot.getAttribute('data-index');

                        // 检查是否是需要添加 active 类的元素（这里以 data-index="1" 为例）
                        if (dataIndex === '3') {
                            // 添加 active 类
                            dot.classList.add('active');

                            // 修改样式
                            dot.style.width = '30px';
                            dot.style.backgroundColor = '#FFFFFF';
                            dot.style.borderRadius = '30%';
                        }
                    });
                    return;
                }

            });


            // 关于 What the Experts Say 的 dot 切换
            // 获取所有 dot 元素
            const dots = document.querySelectorAll('.dot-one');

            // 添加点击事件监听器
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {

                    // 获取点击的 dot 的索引
                    const clickedIndex = parseInt(dot.getAttribute('data-index'));

                    if (clickedIndex === 0) {
                        imgElement.setAttribute('src', 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/image-pr-sentence-1.png');
                        currentImgSrc = 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/image-pr-sentence-1.png';
                        document.getElementById("text_one").textContent = 'REVOPOINT Secures Prestigious Recognition for Product Design Excellence at IDEA 2023';
                    }

                    if (clickedIndex === 1) {
                        imgElement.setAttribute('src', 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/mobile_image_pr_sentence_2.png');
                        currentImgSrc = 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/mobile_image_pr_sentence_2.png';
                        document.getElementById("text_one").textContent = '"The new Revopoint INSPIRE 3D Scanner offers a wide range of features for straightforward, high-quality 3D scanning. "';
                    }

                    if (clickedIndex === 2) {
                        imgElement.setAttribute('src', 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/mobile_image_pr_sentence_3.png');
                        currentImgSrc = 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/mobile_image_pr_sentence_3.png';
                        document.getElementById("text_one").textContent = '"Despite its cost-effective price and entry-level focus,the INSPIRE still packs impressive specs and features."';
                    }

                    if (clickedIndex === 3) {
                        imgElement.setAttribute('src', 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/mobile_image_pr_logo_7.png');
                        currentImgSrc = 'https://cdn.shopify.com/s/files/1/0538/9533/2027/files/mobile_image_pr_logo_7.png';
                        document.getElementById("text_one").textContent = '"whether you\'re scanning objects to put inside a game,replacing out-of-production machine parts,or preserving artifacts and antiques by creating their digital doubles,the Revopoint INSPIRE 3D scanner has got you covered."';
                    }

                    // 移除所有 dot 的 active 类
                    dots.forEach((d) => {
                        d.classList.remove('active');
                        d.style.width = '10px';
                        d.style.backgroundColor = '#ccc';
                        d.style.borderRadius = '50%';
                    });

                    // 将当前点击的 dot 添加 active 类
                    dot.classList.add('active');

                    // 添加新样式
                    if (dot.classList.contains('active')) {
                        dot.style.width = '30px';
                        dot.style.backgroundColor = '#FFFFFF';
                        dot.style.borderRadius = '30%';
                    }

                });
            });

            let divContainerOne = document.getElementById("div-container-one");
            let currentIndexOne = 0;

            // 计算每次点击移动的像素数
            function moveDivBlocks(direction) {
                const divWidth = 389 + 15;
                const maxIndex = divContainerOne.childElementCount - 5; 

                currentIndexOne += direction;

                if (currentIndexOne < 0) {
                    currentIndexOne = 0;
                } else if (currentIndexOne > maxIndex + 1) {
                    currentIndexOne = maxIndex - 1;
                }

                const distanceToMove = -currentIndexOne * divWidth;
                divContainerOne.style.transition = "transform 0.5s ease-in-out";
                divContainerOne.style.transform = `translateX(${distanceToMove}px)`;
            }
            
        }