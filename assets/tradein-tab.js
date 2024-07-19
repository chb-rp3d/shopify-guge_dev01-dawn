function openTab(tabId) {
  // 隐藏所有标签内容
  var tabContents = document.getElementsByClassName('tab-content');
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = 'none';
  }

  // 移除所有标签的active类
  var allTabs = document.querySelectorAll('.tab');
  allTabs.forEach(function (tab) {
    tab.classList.remove('active');
  });

  // 显示当前选中标签的内容
  var currentTab = document.getElementById(tabId);
  currentTab.style.display = 'flex';

  // 为当前选中标签添加active类
  var currentButton = document.querySelector('.tab[data-tab-id="' + tabId + '"]');
  currentButton.classList.add('active');
}

// Open the default tab on page load
window.onload = function () {
  openTab('tab1'); // 设置默认显示第一个标签页
};
