var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});


function initThemeSelector(){
    const themeSelect = document.getElementById("themeSelect");
    const themeSylesheetLink = document.getElementById("themeSylesheetLink");
    const currentTheme = localStorage.getItem("theme") || "default";

    function activateTheme(themeName){
      themeSylesheetLink.setAttribute("href", `./temas/${themeName}.css`);
    }

    themeSelect.addEventListener("change", () => {
      activateTheme(themeSelect.value);
      localStorage.setItem("theme", themeSelect.value);
    });

    activateTheme(currentTheme)
  }

  initThemeSelector();