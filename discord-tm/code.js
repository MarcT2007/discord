const termsCheckbox = document.getElementById('terms');
const updatesCheckbox = document.getElementById('updates');
const submitButton = document.getElementById('submitBtn');
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const usernameInput = document.getElementById('username');
const helpText = document.getElementById('usernameHelp');



togglePassword.addEventListener('click', function () {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  this.textContent = type === 'password' ? '👁️' : '🙈';
});

// Funkcija za preverjanje, če sta checkboxa označena in onemogoči ali omogoči gumb
function toggleSubmitButton() {
  submitButton.disabled = !(termsCheckbox.checked && updatesCheckbox.checked);
}

// Poslušaj spremembe na checkboxih
termsCheckbox.addEventListener('change', toggleSubmitButton);
updatesCheckbox.addEventListener('change', toggleSubmitButton);

// Inicializiraj stanje ob naložitvi strani
toggleSubmitButton();

usernameInput.addEventListener('focus', () => {
    helpText.style.display = 'block'; // pokaže pomoč ob kliku v polje
  });
  
usernameInput.addEventListener('blur', () => {
    helpText.style.display = 'none'; // skrije pomoč, ko polje zapustiš
  });
  
document.querySelector('form').addEventListener('submit', function(e) {
    let email = document.querySelector('input[type="email"]');
    let password = document.querySelector('input[type="password"]');
    let day = document.querySelector('select:nth-of-type(1)');
    let month = document.querySelector('select:nth-of-type(2)');
    let year = document.querySelector('select:nth-of-type(3)');
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
            title: 'Napaka',
            text: 'Izpolnite vsa zahtevana polja in potrdite pogoje.'
        });
    } else {
        e.preventDefault(); // Prepreči privzeto obnašanje (osvežitev)
        Swal.fire({
            icon: 'success',
            title: 'Uspeh!',
            text: 'Uspešno ste registrirani!'
        }).then(() => {
            // Po potrditvi sporočila preusmeri na index.html
            window.location.href = 'index.html';
        });
    }
});