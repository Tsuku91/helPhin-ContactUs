const mobileNavTrigger = document.querySelector("#mobile-nav-trigger");
const mobileNav = document.querySelector("#mobile-nav");

mobileNavTrigger.addEventListener("click", () =>
  mobileNav.classList.toggle("-translate-x-full")
);
window.addEventListener(
  "resize",
  () => window.innerWidth >= 640 && mobileNav.classList.add("-translate-x-full")
);

const headerLogo = document.querySelector("#header-logo");
const aboutSection = document.querySelector("#about");
if (headerLogo) {
  window.addEventListener("scroll", () => {
    headerLogo.classList.toggle(
      "opacity-0",
      window.scrollY < aboutSection.offsetTop - 300
    );
  });
}

// Page Contact Us
function hubungiKami() {
  console.log("Tombol Hubungi Kami ditekan");
  const konten = document.getElementById("konten");
  konten.classList.add("hidden");

  const iconAnim = document.getElementById("hiddenIcon");
  iconAnim.classList.remove("hidden");

  const gelombang_n = document.getElementById("gelombang-n");
  gelombang_n.classList.add("hidden");
}
