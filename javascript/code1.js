const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Regex za preverjanje e-pošte
const phoneRegex = /^\+?\d{7,15}$/;                // Enostaven regex za telefon
const recordsToggle = document.getElementById('records');
const recordsBox = document.getElementById('Box');

/*togglePassword.addEventListener('click', function () {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  // Še lahko spremeniš ikono očesa glede na stanje:
  this.textContent = type === 'password' ? '\u{1D110}' : '\u{1D111}';
});*/
recordsToggle.addEventListener('click', () => {
    recordsBox.classList.toggle('prikazano');
    recordsBox.classList.toggle('skrito');
		
	if (recordsBox.classList.contains('prikazano')) {
        recordsToggle.textContent = "Skrij records ▲";
    } else {
        recordsToggle.textContent = "Pokaži records ▼";
    }
});

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
    const form = document.querySelector('form');

    // najprej resetiraj, nato preusmeri
    if (form) form.reset();

    window.location.href = 'https://discord.com/';
}).catch(err => {
    console.error("Napaka:", err);
});
    }
});








