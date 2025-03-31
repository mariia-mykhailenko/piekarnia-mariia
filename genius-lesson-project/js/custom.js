document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.createElement("button");
  themeToggleButton.classList.add("custom");
  themeToggleButton.innerHTML = "🌙"; 

 
  const headerNav = document.querySelector(".header__nav");
  headerNav.insertAdjacentElement("beforeend", themeToggleButton);

  themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeToggleButton.innerHTML = document.body.classList.contains("dark-theme")
      ? "🌞" 
      : "🌙"; 
  });
});

/*document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.createElement("button");
  backToTopButton.textContent = "🠕";
  backToTopButton.classList.add("back-to-top");
  document.body.appendChild(backToTopButton);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  let lastScrollPosition = 0;

  const observer = new IntersectionObserver(
    (entries) => {
      const currentScrollPosition = window.scrollY;

      entries.forEach((entry) => {
        if (entry.isIntersecting && currentScrollPosition > lastScrollPosition) {
          
          entry.target.classList.add("visible");
        } else if (!entry.isIntersecting && currentScrollPosition < lastScrollPosition) {
         
          entry.target.classList.remove("visible");
        }
      });

      lastScrollPosition = currentScrollPosition;
    },
    { threshold: 0.2 } 
  );

  sections.forEach((section) => observer.observe(section));
});
*/

document.addEventListener("DOMContentLoaded", () => {
    const timer = document.querySelector("#timer");
    const targetDate = new Date("2025-03-30T23:59:59");

    const updateTimer = () => {
        const now = new Date();
        const diff = targetDate - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        timer.innerHTML = `
            <span>Do otwarcia:</span>
            <span>${days} dni</span>
            <span>${hours} godzin</span>
            <span>${minutes} minuty</span>
            <span>${seconds} sekund</span>
        `;
    };

    updateTimer();
    setInterval(updateTimer, 1000);
});


