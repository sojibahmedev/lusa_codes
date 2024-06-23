document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tabs ul li");
    const contentDivs = document.querySelectorAll(".content div");
    const borderIndicator = document.querySelector(".border-indicator");

    function clearActive() {
      contentDivs.forEach((div) => {
        div.classList.remove("active");
      });
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
    }

    function setActiveTab(tab) {
      const targetClass = tab.dataset.target;
      clearActive();
      document.querySelector(`.${targetClass}`).classList.add("active");
      tab.classList.add("active");

      const tabRect = tab.getBoundingClientRect();
      const tabsRect = tab.parentNode.getBoundingClientRect();
      borderIndicator.style.width = `${tabRect.width}px`;
      borderIndicator.style.left = `${tabRect.left - tabsRect.left}px`;
    }

    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        setActiveTab(this);
      });
    });

    // Show the first tab content and set the initial position of the border indicator
    setActiveTab(tabs[0]);
  });