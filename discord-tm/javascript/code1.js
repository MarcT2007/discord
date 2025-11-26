const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Regex za preverjanje e-pošte
const phoneRegex = /^\+?\d{7,15}$/;                // Enostaven regex za telefon

togglePassword.addEventListener('click', function () {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  // Še lahko spremeniš ikono očesa glede na stanje:
  this.textContent = type === 'password' ? '👁️' : '🙈';
});

document.querySelector('form').addEventListener('submit', function(e) {
	const identifier = document.querySelector('input[type="text"]');
    let username = document.querySelector('input[type="text"]');
    let password = document.querySelector('input[type="password"]');
	
	if (!(emailRegex.test(identifier.value) || phoneRegex.test(identifier.value))) {
    e.preventDefault();
    Swal.fire({
        icon: 'error',
        title: 'Napaka',
        text: 'Prosim, vnesite veljaven elektronski naslov ali telefonsko številko.'
    });
		return;
	}
    if (!username.value.trim() || !password.value.trim()) {
        e.preventDefault();
        Swal.fire({
            icon: 'error',
            title: 'Napaka',
            text: 'Prosimo, vnesite uporabniško ime in geslo.',
			confirmButtonColor: '#5865F2', // vpiši željeno barvo (hex, rgb ali ime barve)
			iconColor: 'red', // Vpiši željeno barvo (hex, rgb ali ime barve)
        });
    } else {
        e.preventDefault(); // odstranite ta preventDefault, če želite, da se form dejansko odda
        Swal.fire({
            icon: 'success',
            title: 'Uspeh!',
            text: 'Prijava uspešna!',
			confirmButtonColor: '#5865F2' // vpiši željeno barvo (hex, rgb ali ime barve)
        }).then(() => {
			// Poišči obrazec
			const form = document.querySelector('form');

			// Izprazni vsa polja obrazca
			form.reset();
		});
    }
});
