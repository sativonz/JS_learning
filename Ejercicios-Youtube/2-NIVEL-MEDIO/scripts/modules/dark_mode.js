const d = document,
      ls = localStorage,
      moon = "🌙",
      sun = "☀️";

export function darkMode(btn, classDark) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      activeDarkTheme({ btn, classDark, isChanged: true });
    }
  });
}

export function activeDarkTheme({ btn, classDark, isChanged = false }) {
  //console.log("ver",isChanged);
  const $btnDark = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]");

  let isActive = JSON.parse(ls.getItem("dark-theme"));

  if (ls.getItem("dark-theme") === null) ls.setItem("dark-theme", false);

  if (isChanged) ls.setItem("dark-theme", !isActive);

  isActive = isChanged ? !isActive : isActive;

  $btnDark.textContent = isActive ? sun : moon;

  if (isActive) {
    $selectors.forEach((el) => el.classList.add(classDark));
  } else {
    $selectors.forEach((el) => el.classList.remove(classDark));
  }
}