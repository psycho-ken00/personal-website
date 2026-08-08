(function () {
  const storageKey = "zefeng-site-language";
  const root = document.documentElement;
  const toggle = document.querySelector("[data-language-toggle]");
  const saved = localStorage.getItem(storageKey);
  let language = saved === "en" ? "en" : "zh";

  function applyLanguage(next) {
    language = next;
    root.lang = next === "zh" ? "zh-CN" : "en";
    root.dataset.language = next;
    document.querySelectorAll("[data-zh][data-en]").forEach(function (element) {
      element.textContent = element.dataset[next];
    });
    document.querySelectorAll("[data-aria-zh][data-aria-en]").forEach(function (element) {
      element.setAttribute("aria-label", element.dataset[next === "zh" ? "ariaZh" : "ariaEn"]);
    });
    document.querySelectorAll("[data-language-toggle]").forEach(function (button) {
      button.textContent = next === "zh" ? "EN" : "中文";
      button.setAttribute("aria-label", next === "zh" ? "Switch to English" : "切换到中文");
    });
    localStorage.setItem(storageKey, next);
  }

  applyLanguage(language);
  if (toggle) toggle.addEventListener("click", function () { applyLanguage(language === "zh" ? "en" : "zh"); });

  const navLinks = Array.from(document.querySelectorAll('.portfolio-links a[href^="#"]'));
  const sections = navLinks.map(function (link) { return document.querySelector(link.getAttribute("href")); }).filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          const active = link.getAttribute("href") === "#" + entry.target.id;
          link.classList.toggle("is-active", active);
          if (active) link.setAttribute("aria-current", "location"); else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-25% 0px -60%", threshold: 0 });
    sections.forEach(function (section) { observer.observe(section); });
  }
})();
