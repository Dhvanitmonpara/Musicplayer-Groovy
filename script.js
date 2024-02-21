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
    queuedSongElem.addEventListener("click", () => {
      const nextSong = queuedSongElem.querySelector(".playFromInQueueBtn");
      console.log(nextSong);
      nextSong.classList.add("absolute");
    });
  });

  const cardBtn = document.querySelector("#cardBtn");
  const lyricBtn = document.querySelector("#lyricBtn");

  cardBtn.addEventListener("click", () => {
    cardBtn.classList.toggle("activeMini");
    cardBtn.classList.toggle("inactiveMini");
    checkIfActivatedMiniplayer();
  });

  lyricBtn.addEventListener("click", () => {
    lyricBtn.classList.toggle("activeMini");
    lyricBtn.classList.toggle("inactiveMini");
    checkIfActivatedMiniplayer();
  });

  const onlyCard = document.querySelector("#onlyCard");
  const onlyLyric = document.querySelector("#onlyLyric");
  const bothCardAndLyric = document.querySelector("#bothCardAndLyric");
  const groovyMinimal = document.querySelector("#groovyMinimal");

  function checkIfActivatedMiniplayer() {
    if (
      cardBtn.classList.contains("activeMini") &&
      !lyricBtn.classList.contains("activeMini")
    ) {
      groovyMinimal.classList.remove("lg:flex");
      onlyCard.classList.add("lg:flex");
      onlyLyric.classList.remove("lg:flex");
      bothCardAndLyric.classList.remove("lg:flex");
    } else if (
      !cardBtn.classList.contains("activeMini") &&
      lyricBtn.classList.contains("activeMini")
    ) {
      onlyLyric.classList.add("lg:flex");
      groovyMinimal.classList.remove("lg:flex");
      onlyCard.classList.remove("lg:flex");
      bothCardAndLyric.classList.remove("lg:flex");
    } else if (
      cardBtn.classList.contains("activeMini") &&
      lyricBtn.classList.contains("activeMini")
    ) {
      bothCardAndLyric.classList.add("lg:flex");
      groovyMinimal.classList.remove("lg:flex");
      onlyLyric.classList.remove("lg:flex");
      onlyCard.classList.remove("lg:flex");
    } else {
      groovyMinimal.classList.add("lg:flex");
      onlyCard.classList.remove("lg:flex");
      onlyLyric.classList.remove("lg:flex");
      bothCardAndLyric.classList.remove("lg:flex");
    }
  }
});

const minimalPlayer = document.querySelector("#minimalPlayerPage");
const fadeMinimal = document.querySelectorAll(".fadeMinimal");
const bodyOfMinimal = document.querySelectorAll("#bodyOfMinimal");
const visibilityToggleMinimalBtn = document.querySelector(
  "#visibilityToggleMinimalBtn"
);

const goToMiniPlayer = document.querySelector("#goToMiniPlayer");
goToMiniPlayer.addEventListener("click", () => {
  minimalPlayer.classList.add("lg:inline-block");
});

const backFromMiniPlayer = document.querySelector("#backFromMiniPlayer");
backFromMiniPlayer.addEventListener("click", () => {
  minimalPlayer.classList.remove("lg:inline-block");
});

visibilityToggleMinimalBtn.addEventListener("click", minimalHeaderToggler);

function minimalHeaderToggler() {
  fadeMinimal.forEach((elem) => {
    elem.classList.toggle("activeHeaderMini");
    elem.classList.toggle("inactiveHeaderMini");
  });
}
