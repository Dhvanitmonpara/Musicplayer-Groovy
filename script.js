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
      nextSong.classList.add("absolute");
    });
  });

  const minimalPlayer = document.querySelector("#minimalPlayerPage");

  const goToMiniPlayer = document.querySelector("#goToMiniPlayer");
  goToMiniPlayer.addEventListener("click", () => {
    minimalPlayer.classList.add("lg:inline-block");
  });

  const backFromMiniPlayer = document.querySelector("#backFromMiniPlayer");
  backFromMiniPlayer.addEventListener("click", () => {
    minimalPlayer.classList.remove("lg:inline-block");
  });

  const fadeMinimal = document.querySelectorAll(".fadeMinimal");
  const headerFader = document.querySelectorAll(".headerFader");

  minimalPlayer.addEventListener("click", () => {
    const headerOfMinimal = document.querySelector("#minimalPlayerHeader");
    headerOfMinimal.classList.add("lg:visible");
    fadeMinimal.forEach((elem) => {
      elem.classList.add("activeHeaderMini");
      elem.classList.remove("inactiveHeaderMini");
      // headerfaderRun(headerOfMinimal)
    });
});
// function headerfaderRun(header) {
//   header.classList.remove("lg:visible");
// fadeMinimal.forEach((elem) => {
// elem.classList.remove("activeHeaderMini");
// elem.classList.add("inactiveHeaderMini");
// })

  const cardBtn = document.querySelector("#cardBtn");
  const lyricBtn = document.querySelector("#lyricBtn");

  cardBtn.addEventListener("click", () => {
    cardBtn.classList.toggle("activeMini");
    checkIfActivatedMiniplayer;
  });

  lyricBtn.addEventListener("click", () => {
    lyricBtn.classList.toggle("activeMini");
    checkIfActivatedMiniplayer;
  });

  function checkIfActivatedMiniplayer() {
    if (
      cardBtn.classList.contains("activeMini") &&
      !lyricBtn.classList.contains("activeMini")
    ) {
      // code here
    } else if (
      !cardBtn.classList.contains("ativeMini") &&
      lyricBtn.classList.contains("activeMini")
    ) {
      // code here
    } else if (
      cardBtn.classList.contains("activeMini") &&
      lyricBtn.classList.contains("activeMini")
    ) {
      // code here
    } else {
      // code here
    }
  }
});
