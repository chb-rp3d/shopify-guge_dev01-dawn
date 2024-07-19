var targetValues = {
        "counter1": 500,
    };
    var duration = 2000;
    var frameRate = 60;
    var countersStarted = {}; // 存储每个计数器的启动状态

    // 更新单个计数器
    function updateCounter(counterId) {
        var targetValue = targetValues[counterId];
        var currentValue = parseInt(document.getElementById(counterId).textContent);
        var increment = targetValue / (duration / 1000 * frameRate);
        var newValue = Math.min(currentValue + increment, targetValue);
        document.getElementById(counterId).textContent = Math.round(newValue);

        if (newValue < targetValue) {
            requestAnimationFrame(function() {
                updateCounter(counterId);
            });
        }
    }

    // 监听页面滚动事件
    window.addEventListener('scroll', function() {
        var triggerElement = document.getElementById('trigger');
        var triggerPosition = triggerElement.getBoundingClientRect().top + window.scrollY;
        var scrollPosition = window.scrollY;

        // 如果滚动到触发点位置，则开始计数器动画
        if (scrollPosition >= triggerPosition) {
            // 遍历所有计数器并开始动画
            document.querySelectorAll('.counter').forEach(function(counter) {
                var counterId = counter.getAttribute('id');
                if (!countersStarted[counterId]) {
                    countersStarted[counterId] = true;
                    counter.style.visibility = 'visible';
                    updateCounter(counterId);
                }
            });
        }
    });