// input البحث
const searchInput = document.querySelector(".search input");

// زرار SEARCH
const searchBtn = document.querySelector(".search .btn");

// كل الكروت
const cards = document.querySelectorAll(".card");

function filterCards() {
  const value = searchInput.value.toLowerCase().trim();

  cards.forEach(card => {
    const characterName = card.querySelector("h3").textContent.toLowerCase();
    const animeName = card.querySelector("b").textContent.toLowerCase();

    if (
      characterName.includes(value) ||
      animeName.includes(value)
    ) {
      card.style.display = "block";
      card.style.opacity = "1";
      card.style.transform = "scale(1)";
    } else {
      card.style.display = "none";
    }
  });
}

// بحث مباشر أثناء الكتابة
searchInput.addEventListener("input", filterCards);

// بحث عند الضغط على زر SEARCH
searchBtn.addEventListener("click", function () {
  filterCards();
});

// Enter من الكيبورد
searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    filterCards();
  }
});

const sliders = document.querySelectorAll(".cards");

sliders.forEach(slider => {
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.style.cursor = "grabbing";
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.style.cursor = "grab";
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.style.cursor = "grab";
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // سرعة السحب
    slider.scrollLeft = scrollLeft - walk;
  });
});