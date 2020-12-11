var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function () {
  if (this.checked) {
    trans();
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    trans();
    document.documentElement.removeAttribute('data-theme');
  }
});

let trans = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition');
  }, 1000);
};

// Theme switch
var themeSwitch = document.getElementById('themeSwitch');
if (themeSwitch) {
  initTheme(); // if user has already selected a specific theme -> apply it
  themeSwitch.addEventListener('change', function (event) {
    resetTheme(); // update color theme
  });

  function initTheme() {
    var darkThemeSelected =
      localStorage.getItem('themeSwitch') !== null &&
      localStorage.getItem('themeSwitch') === 'dark';
    // update checkbox
    themeSwitch.checked = darkThemeSelected;
    // update body data-theme attribute
    darkThemeSelected
      ? document.documentElement.setAttribute('data-theme', 'dark')
      : document.documentElement.removeAttribute('data-theme');
  }

  function resetTheme() {
    if (themeSwitch.checked) {
      // dark theme has been selected
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('themeSwitch', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.removeItem('themeSwitch');
    }
  }
}

function setDark() {
  checkbox.checked = true;
  trans();
  document.documentElement.setAttribute('data-theme', 'dark');
  resetTheme();
}

function setLight() {
  checkbox.checked = false;
  trans();
  document.documentElement.removeAttribute('data-theme');
  resetTheme();
}
