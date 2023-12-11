function activateCon(contentId) {
  const activeContent = document.getElementById(contentId);

  setTimeout(function timeForCon() {
    activeContent.style.display = "inline-block";
  }, 5);
}
function queuedFile(songId) {
  console.log(songId);
}