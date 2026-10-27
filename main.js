"use strict";

const filterGroup = document.querySelector(".menu-filters");
const menuCards = [...document.querySelectorAll(".menu-card[data-category]")];
const menuStatus = document.querySelector("#menu-status");

if (filterGroup && menuCards.length && menuStatus) {
  // Без JavaScript фильтры скрыты, всё меню остаётся доступно.
  filterGroup.hidden = false;
  filterGroup.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button || !filterGroup.contains(button)) return;
    const category = button.dataset.filter;
    let visibleCount = 0;
    for (const card of menuCards) {
      card.hidden = category !== "all" && card.dataset.category !== category;
      if (!card.hidden) visibleCount += 1;
    }
    for (const control of filterGroup.querySelectorAll("button")) {
      control.setAttribute("aria-pressed", String(control === button));
    }
    menuStatus.textContent = `Категория: ${button.textContent}. Разделов: ${visibleCount}.`;
  });
}
