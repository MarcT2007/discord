const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Regex za preverjanje e-pošte
const phoneRegex = /^\+?\d{7,15}$/;                // Enostaven regex za telefon

/*togglePassword.addEventListener('click', function () {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  // Še lahko spremeniš ikono očesa glede na stanje:
  this.textContent = type === 'password' ? '\u{1D110}' : '\u{1D111}';
});*/

document.querySelector('form').addEventListener('submit', function(e) {
	const identifier = document.querySelector('input[type="text"]');
    let username = document.querySelector('input[type="text"]');
    let password = document.querySelector('input[type="password"]');
	
	if (!(emailRegex.test(identifier.value) || phoneRegex.test(identifier.value))) {
    e.preventDefault();
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please check!'
    });
		return;
	}
    if (!username.value.trim() || !password.value.trim()) {
        e.preventDefault();
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Please enter password and username.',
			confirmButtonColor: '#5865F2', // vpiši željeno barvo (hex, rgb ali ime barve)
			iconColor: 'red', // Vpiši željeno barvo (hex, rgb ali ime barve)
        });
    } else {
        e.preventDefault(); // odstranite ta preventDefault, če želite, da se form dejansko odda
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'LogIn successfully!',
			confirmButtonColor: '#5865F2' // vpiši željeno barvo (hex, rgb ali ime barve)
        }).then(() => {
			window.location.href = 'https://discord.com/';
			// Poišči obrazec
			const form = document.querySelector('form');

			// Izprazni vsa polja obrazca
			form.reset();
		});
    }
});



