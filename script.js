document.addEventListener("DOMContentLoaded", function () {
  const tabSelect = document.querySelectorAll(".navTab");
  const tabSwitch = document.querySelectorAll(".tabSelector");

  tabSelect.forEach(function (item) {
    item.addEventListener("click", function () {
      // Remove 'active' class from all tabs
      tabSwitch.forEach(function (disable) {
        disable.classList.remove("active");
        disable.classList.add("hover:bg-slate-800");

        const colorSwitchWhite = disable.querySelectorAll(".iconCol");
        colorSwitchWhite.forEach(function (toggle) {
          toggle.setAttribute("fill", "#ffffff");
        });

        const conHide = document.querySelectorAll(".conSelect");
        conHide.forEach((Hidden) =>
          Hidden.setAttribute("style", "display: none;")
        );
      });

      // Identify the clicked tab and activate it
      const clickedTabId = item.id;
      const clickedTab = document.querySelector(`#${clickedTabId}`);
      tabActivate(clickedTab);
      // innerTabActivate(clickedTab)

      function tabActivate(tabId) {
        tabId.classList.add("active");
        tabId.classList.remove("hover:bg-slate-800");

        const activeTab = document.querySelector(".active");

        const colorSwitchBlack = activeTab.querySelectorAll(".iconCol");
        colorSwitchBlack.forEach(function (toggle) {
          toggle.setAttribute("fill", "#000000");
        });
      }
    });
  });

  const miniWin = document.querySelector("#miniPlayerWindow");
  const queuedSong = miniWin.querySelectorAll(".queuedFile");
  console.log(queuedSong);
  queuedSong.forEach((queuedSongElem) => {
    queuedSongElem.addEventListener("click", (elem) => {
      const nextSong = elem.querySelector(".playFromInQueueBtn");
      nextSong.classList.add('absolute')
    });
  });
});
