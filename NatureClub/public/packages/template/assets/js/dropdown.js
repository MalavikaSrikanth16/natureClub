function speciesDropdown() {
    document.getElementById("speciesDropdown").classList.toggle("show");
}
function infoDropdown() {
    document.getElementById("infoDropdown").classList.toggle("show");
}


window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");

    for (var d = 0; d < dropdowns.length; d++) {
      var openDropdown = dropdowns[d];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}