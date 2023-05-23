function changeTab(tabId) {
  // Ocultar todos los contenidos de las pestañas
  var tabContents = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }
  var intro = document.getElementById('intro');
  intro.style.display = "none"
  // Mostrar el contenido de la pestaña seleccionada
  var selectedTabContent = document.getElementById(tabId + "-content");
  if (selectedTabContent) {
    selectedTabContent.style.display = "block";
  }
  Plotly.Plots.resize();
}

document.addEventListener("click", function(){
  window.dispatchEvent(new Event('resize'));
});
window.addEventListener("scroll", function() {
  var scrollButton = document.getElementById("scroll-to-top");
  if (window.pageYOffset > 400) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
});

window.addEventListener("DOMContentLoaded", function() {
  var scrollButton = document.createElement("div");
  scrollButton.id = "scroll-to-top";
  scrollButton.textContent = "↑";
  document.body.appendChild(scrollButton);
  
  scrollButton.addEventListener("click", function() {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  });
});