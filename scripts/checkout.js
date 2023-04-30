let popup = document.getElementById("popup");
// let clicked_popup = false;

var dark = document.getElementById("black");

function openPopup() {
  // popup.classList.add("open-popup");
  popup.style.display = "flex";
  dark.style.display = "flex";
//   change(container);
  setTimeout(closePopup,3000);
}
function closePopup() {
  popup.style.display = "none";
  dark.style.display = "none";
}
