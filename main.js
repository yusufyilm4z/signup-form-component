document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.sign-up-form');
  const submitButton = form.querySelector('button[type="submit"]');

  submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const inputs = form.querySelectorAll('input[name]');
    let areFieldsFilled = true;
    let validEmailFormat = true;

    inputs.forEach(input => {
      if (input.value.trim() === '') {
        allFieldsFilled = false;
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }

      if (input.name === 'email' && !isValidEmail(input.value)) {
        validEmailFormat = false;
        input.classList.add('error');
      } else if (input.name === 'email') {
        input.classList.remove('error');
      }
    });

    if (!areFieldsFilled) {
      alert('Please fill in all fields.');
    } else if (!validEmailFormat) {
      alert('Please enter a valid email address.');
    } else {
      alert('Sign-up successful!');
      // form.submit();
    }
  });
});

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}









