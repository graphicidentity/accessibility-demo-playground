const cards = [...document.querySelectorAll('.demo-card')];
const toggleAllButton = document.getElementById('toggleAll');
const resetAllButton = document.getElementById('resetAll');
let trapActive = false;

function setCardFixed(card, fixed) {
  card.querySelector('.bad-example').hidden = fixed;
  card.querySelector('.fix-example').hidden = !fixed;
  const button = card.querySelector('.card-toggle');
  button.textContent = fixed ? 'Show the issue' : 'Show the fix';
  button.setAttribute('aria-expanded', String(fixed));
}

function showAllFixes(show) {
  cards.forEach((card) => setCardFixed(card, show));
  toggleAllButton.textContent = show ? 'Show all issues' : 'Show all fixes';
}

cards.forEach((card) => {
  const toggle = card.querySelector('.card-toggle');
  toggle.addEventListener('click', () => {
    setCardFixed(card, card.querySelector('.fix-example').hidden);
  });
});

toggleAllButton.addEventListener('click', () => {
  const shouldShow = toggleAllButton.textContent === 'Show all fixes';
  showAllFixes(shouldShow);
});

function stopTrap(announce = true) {
  if (!trapActive) return;
  trapActive = false;
  document.removeEventListener('keydown', loopFocus);
  document.getElementById('trapOne').hidden = true;
  document.getElementById('trapTwo').hidden = true;
  document.getElementById('stopTrap').hidden = true;
  document.getElementById('startTrap').hidden = false;
  document.getElementById('trapStatus').textContent = announce ? 'Simulation ended. Focus returned to the start button.' : 'Simulation is off.';
  document.getElementById('startTrap').focus();
}

function loopFocus(event) {
  if (event.key === 'Escape') {
    event.preventDefault();
    stopTrap();
    return;
  }
  if (event.key !== 'Tab') return;
  const controls = [document.getElementById('trapOne'), document.getElementById('trapTwo')];
  const current = controls.indexOf(document.activeElement);
  event.preventDefault();
  const next = event.shiftKey
    ? (current <= 0 ? controls.length - 1 : current - 1)
    : (current < 0 || current === controls.length - 1 ? 0 : current + 1);
  controls[next].focus();
}

document.getElementById('startTrap').addEventListener('click', () => {
  trapActive = true;
  document.getElementById('startTrap').hidden = true;
  document.getElementById('trapOne').hidden = false;
  document.getElementById('trapTwo').hidden = false;
  document.getElementById('stopTrap').hidden = false;
  document.getElementById('trapStatus').textContent = 'Simulation active. Tab cycles between the two controls. Press Escape at any time to exit.';
  document.addEventListener('keydown', loopFocus);
  document.getElementById('trapOne').focus();
});
document.getElementById('stopTrap').addEventListener('click', () => stopTrap());

const dialog = document.getElementById('demoDialog');
const openDialog = document.getElementById('openDialog');
openDialog.addEventListener('click', () => dialog.showModal());
document.getElementById('closeDialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => openDialog.focus());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

function showSavedMessage(element) {
  element.textContent = '';
  window.setTimeout(() => {
    element.textContent = 'Your changes have been saved.';
  }, 50);
}
document.getElementById('announceBefore').addEventListener('click', () => showSavedMessage(document.getElementById('messageBefore')));
document.getElementById('announceAfter').addEventListener('click', () => showSavedMessage(document.getElementById('messageAfter')));

resetAllButton.addEventListener('click', () => {
  if (trapActive) stopTrap(false);
  showAllFixes(false);
  document.getElementById('messageBefore').hidden = true;
  document.getElementById('messageBefore').textContent = '';
  document.getElementById('messageBefore').hidden = false;
  document.getElementById('messageAfter').textContent = '';
});
