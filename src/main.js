const ageGate = document.querySelector('[data-age-gate]');
const acceptAge = document.querySelector('[data-accept-age]');
const rejectAge = document.querySelector('[data-reject-age]');
const navToggle = document.querySelector('[data-nav-toggle]');
const siteNav = document.querySelector('[data-site-nav]');
const bookingForm = document.querySelector('[data-booking-form]');
const ageKeys = ['braggCreekAgeConfirmed', 'bragCreekAgeConfirmed'];

if (ageGate) {
  const isConfirmed = ageKeys.some((key) => localStorage.getItem(key) === 'true');
  if (isConfirmed) {
    ageGate.hidden = true;
    document.body.classList.remove('is-gated');
  } else {
    document.body.classList.add('is-gated');
  }
}

acceptAge?.addEventListener('click', () => {
  ageKeys.forEach((key) => localStorage.setItem(key, 'true'));
  ageGate.hidden = true;
  document.body.classList.remove('is-gated');
});

rejectAge?.addEventListener('click', () => {
  const note = document.querySelector('[data-age-note]');
  if (note) {
    note.textContent = 'This private rum site is intended for adults 21 and over.';
  }
});

navToggle?.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  siteNav?.classList.toggle('is-open', !isOpen);
});

bookingForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = bookingForm.querySelector('[data-form-status]');
  const formData = new FormData(bookingForm);
  const name = formData.get('name') || 'Your request';
  bookingForm.reset();
  if (status) {
    status.textContent = `${name} has been penciled into the request book. Snake will review the booking details before confirming.`;
  }
});
