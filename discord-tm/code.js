const termsCheckbox = document.getElementById('terms');
const updatesCheckbox = document.getElementById('updates');
const submitButton = document.getElementById('submitBtn');
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', function () {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  // Še lahko spremeniš ikono očesa glede na stanje:
  this.textContent = type === 'password' ? '👁️' : '🙈';
});


// Funkcija za preverjanje, če sta checkboxa označena
function toggleSubmitButton() {
  submitButton.disabled = !(termsCheckbox.checked && updatesCheckbox.checked);
}

// Poslušaj spremembe na obeh checkboxih
termsCheckbox.addEventListener('change', toggleSubmitButton);
updatesCheckbox.addEventListener('change', toggleSubmitButton);

// Iniciraj stanje ob naložitvi strani
toggleSubmitButton();

document.querySelector('form').addEventListener('submit', function(e) {
    let email = document.querySelector('input[type="email"]');
    let password = document.querySelector('input[type="password"]:nth-of-type(3)');
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
            text: 'Izpolnite vsa zahtevana polja.'
        });
    } else {
        e.preventDefault(); // če želiš res poslati podatke, odstrani to vrstico
        Swal.fire({
            icon: 'success',
            title: 'Uspeh!',
            text: 'Uspesno ste registrirani!'
        }).then(() => {
            window.location.href = 'index.html';
        });
    }
});
