document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tabs__btn_step").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path;

      console.log(path);
      document.querySelectorAll(".tab__content").forEach(function (tabContent) {
        tabContent.classList.remove("tab-content-active");
      });

      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("tab-content-active");
    });
  });
});
