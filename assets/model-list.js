function applyFilters() {
  let selectedFilters1 = Array.from(
    document.querySelectorAll("#myBtnContainer input:checked")
  ).map((input) => input.value);
  let selectedFilters2 = Array.from(
    document.querySelectorAll("#myBtnContainer1 input:checked")
  ).map((input) => input.value);

 let filterDivs = document.getElementsByClassName("filterDiv");
  let anyFiltersSelected = selectedFilters1.length > 0 || selectedFilters2.length > 0;

  for (let i = 0; i < filterDivs.length; i++) {
    filterDivs[i].style.display = "none";
    filterDivs[i].classList.remove("hide");
    if (anyFiltersSelected) {
      filterDivs[i].classList.remove("dehide");
    }
  }

  for (let i = 0; i < filterDivs.length; i++) {
    let element = filterDivs[i];
    let showElement =
      (selectedFilters1.length === 0 ||
        selectedFilters1.some((filter) =>
          element.classList.contains(filter)
        )) &&
      (selectedFilters2.length === 0 ||
        selectedFilters2.some((filter) => element.classList.contains(filter)));
    if (showElement) {
      element.style.display = "block";
    } else {
      element.classList.add("hide");
    }
  }

  let contentFilters = document.getElementsByClassName("content-filter");
  for (let i = 0; i < contentFilters.length; i++) {
    let contentFilter = contentFilters[i];
    let visibleChildren = Array.from(
      contentFilter.getElementsByClassName("filterDiv")
    ).some((filterDiv) => filterDiv.style.display === "block");
    if (visibleChildren) {
      contentFilter.style.display = "block";
    } else {
      contentFilter.style.display = "none";
    }
  }

  const viewMoreButtons = document.querySelectorAll(".view-more");
  viewMoreButtons.forEach((button) => {
    const parentContentFilter = button.closest(".content-filter");
    const parentFilterDivs = parentContentFilter.querySelectorAll(".filterDiv");
    const visibleParentFilterDivs = Array.from(parentFilterDivs).filter(
      (div) => div.style.display === "block"
    );
    if (visibleParentFilterDivs.length <= 6) {
      button.style.display = "none";
    } else {
      button.style.display = "block";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const filterItems = document.querySelectorAll(".filterDiv");
  const totalItems = filterItems.length;

  if (totalItems > 3) {
    for (let i = totalItems - 3; i < totalItems; i++) {
      filterItems[i].classList.add("hide");
    }
  }

  applyFilters();
});

function toggleViewMore(button) {
  const parent = button.parentElement;
  const items = parent.querySelectorAll(".filterDiv");
  const hiddenItems = Array.from(items).slice(6);
  
  let isAnyHidden = false;
  hiddenItems.forEach((item) => {
    item.classList.toggle("dehide");
    if (item.classList.contains("dehide")) {
      isAnyHidden = true;
    }
  });

  if (isAnyHidden) {
    button.textContent = "もっと見る";
  } else {
    button.textContent = "隠す";
  }
}


document.addEventListener("DOMContentLoaded", function () {
  let allFilters = document.getElementsByClassName("filterDiv");
  for (let i = 0; i < allFilters.length; i++) {
    allFilters[i].style.display = "block";
  }

  let checkboxes = document.querySelectorAll(
    "#myBtnContainer input, #myBtnContainer1 input"
  );
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", applyFilters);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".toggle-btn");
  const leftMenu = document.getElementById("lm");
  let isCollapsed = false;

  toggleBtn.addEventListener("click", function () {
    if (isCollapsed) {
      leftMenu.classList.remove("collapsed");
      toggleBtn.innerHTML =
        '<p>フィルター隠し</p><i class="navbar-arrow-right active"></i>';
    } else {
      leftMenu.classList.add("collapsed");
      toggleBtn.innerHTML =
        '<p>フィルター表示</p><i class="navbar-arrow-right"></i>';
    }
    isCollapsed = !isCollapsed;
  });
});
