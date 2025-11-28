const termsCheckbox = document.getElementById('terms');
const updatesCheckbox = document.getElementById('updates');
const submitButton = document.getElementById('submitBtn');
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const usernameInput = document.getElementById('username');
const helpText = document.getElementById('usernameHelp');
const birthYearSelect = document.getElementById('birthYear');
const monthSelect = document.getElementById('month');
const daySelect = document.getElementById('day');
const currentYear = new Date().getFullYear();
const maxAge = 70;
const minAge = 6;

// padajoče letnice (od najmlajše navzgor)
for (let year = currentYear - minAge; year >= currentYear - maxAge; year--) {
  const option = document.createElement('option');
  option.value = year;
  option.textContent = year;
  birthYearSelect.appendChild(option);
}

// Funkcija za prestopno leto
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Dinamičen izpis dni za izbrano leto in mesec
function updateDays() {
  const year = parseInt(birthYearSelect.value, 10);
  const month = parseInt(monthSelect.value, 10);
  let daysInMonth = 31;
  if ([4, 6, 9, 11].includes(month)) {
    daysInMonth = 30;
  } else if (month === 2) {
    daysInMonth = isLeapYear(year) ? 29 : 28;
  }
  daySelect.innerHTML = '';
  for (let d = 1; d <= daysInMonth; d++) {
    const option = document.createElement('option');
    option.value = d;
    option.textContent = d;
    daySelect.appendChild(option);
  }
}

birthYearSelect.addEventListener('change', updateDays);
monthSelect.addEventListener('change', updateDays);
updateDays();

/*togglePassword.addEventListener('click', function () {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  this.innerHTML = type === 'password'
    ? '<img src="../picture/view.png" alt="Show password">'
    : '<img src="../picture/hide.png" alt="Hide password">';
});*/

function toggleSubmitButton() {
  submitButton.disabled = !(termsCheckbox.checked && updatesCheckbox.checked);
}
termsCheckbox.addEventListener('change', toggleSubmitButton);
updatesCheckbox.addEventListener('change', toggleSubmitButton);
toggleSubmitButton();

usernameInput.addEventListener('focus', () => {
  helpText.style.display = 'block';
});
usernameInput.addEventListener('blur', () => {
  helpText.style.display = 'none';
});

document.querySelector('form').addEventListener('submit', function(e) {
  let email = document.querySelector('input[type="email"]');
  let password = document.querySelector('input[type="password"]');
  let day = document.getElementById('day');
  let month = document.getElementById('month');
  let year = document.getElementById('birthYear');
  let terms = document.getElementById('terms');
  let updates = document.getElementById('updates');
  if (
    !email.value.trim() ||
    !password.value.trim() ||
    !day.value.trim() ||
    !month.value.trim() ||
    !year.value.trim() ||
    !terms.checked ||
    !updates.checked
  ) {
    e.preventDefault();
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Please fill in all required fields and accept the terms.',
	  confirmButtonColor: '#5865F2' // vpiši željeno barvo (hex, rgb ali ime barve)
    });
  } else {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Succeed!',
      text: 'You have successfully registered!',
	  confirmButtonColor: '#5865F2' // vpiši željeno barvo (hex, rgb ali ime barve)
    }).then(() => {
      window.location.href = '../index.html';
    });
  }
});

