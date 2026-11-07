const toggleFixesButton = document.getElementById('toggleFixes');
const resetDemoButton = document.getElementById('resetDemo');
const demoCards = Array.from(document.querySelectorAll('.demo-card'));

const setCardState = (card, isFixed) => {
  const badPanels = card.querySelectorAll('.bad-example');
  const fixPanels = card.querySelectorAll('.fix-example');
  const toggleButton = card.querySelector('.demo-toggle');

  badPanels.forEach((panel) => panel.classList.toggle('hidden', isFixed));
  fixPanels.forEach((panel) => panel.classList.toggle('hidden', !isFixed));

  if (toggleButton) {
    toggleButton.textContent = isFixed ? 'Hide fix' : 'Show fix';
  }
};

const toggleAllCards = (showFixes) => {
  demoCards.forEach((card) => setCardState(card, showFixes));
  toggleFixesButton.textContent = showFixes ? 'Hide fixes' : 'Show fixes';
};

demoCards.forEach((card) => {
  const toggle = card.querySelector('.demo-toggle');

  toggle.addEventListener('click', () => {
    const isCurrentlyFixed = !card.querySelector('.bad-example:not(.hidden)');
    setCardState(card, !isCurrentlyFixed);
  });
});

toggleFixesButton.addEventListener('click', () => {
  const showingFixes = toggleFixesButton.textContent === 'Hide fixes';
  toggleAllCards(!showingFixes);
});

resetDemoButton.addEventListener('click', () => {
  demoCards.forEach((card) => setCardState(card, false));
  toggleFixesButton.textContent = 'Show fixes';
});
