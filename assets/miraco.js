 function expandVideo(videoId) {
        var selectedVideoContainer = document.getElementById(videoId);
        var otherVideoContainer = (videoId === 'video1') ? document.getElementById('video2') : document.getElementById('video1');

        selectedVideoContainer.classList.add('active');
        otherVideoContainer.classList.remove('active');

        selectedVideoContainer.style.width = '896px';
        otherVideoContainer.style.width = '288px';

        var video = selectedVideoContainer.querySelector('.video');
        video.play();

        // Display text for the selected video
        var textContainer = selectedVideoContainer.querySelector('.video-text');
        textContainer.style.display = 'block';
    }

    function collapseVideo(videoId) {
        var videoContainer = document.getElementById(videoId);
        var video = videoContainer.querySelector('.video');
        video.pause();

        // Hide text when collapsing the video
        var textContainer = videoContainer.querySelector('.video-text');
        textContainer.style.display = 'none';
    }



    function showTab(tabId, clickedButton) {
        // 隐藏所有的标签内容
        var tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(content => {
            content.style.display = 'none';
        });

        // 移除所有按钮的 active 类
        var tabButtons = document.querySelectorAll('.tab-button');
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });

        // 显示所选标签内容
        var selectedTab = document.getElementById(tabId);
        if (selectedTab) {
            selectedTab.style.display = 'block';
        }

        // 添加 active 类到被点击的按钮
        if (clickedButton) {
            clickedButton.classList.add('active');
        }
    }
    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true, // 循环模式选项
    });

    $("#slider").on("input change", (e)=>{
        const sliderPos = e.target.value;
        // Update the width of the foreground image
        $('.foreground-img').css('width', `${sliderPos}%`)
        // Update the position of the slider button
        $('.slider-button').css('left', `calc(${sliderPos}% - 18px)`)
    });