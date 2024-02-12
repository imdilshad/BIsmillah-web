document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Perform form validation here
  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirm-password').value;

  // Perform any additional validation you need

  // Example: Check if passwords match
  if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
  }

  // If validation passes, you can send the data to your backend or perform further actions
  // For now, let's just log the data
  console.log('Username:', username);
  console.log('Email:', email);
  console.log('Password:', password);

  // Reset the form (optional)
  event.target.reset();
});
