document.addEventListener('DOMContentLoaded', function() {
    const signinButton = document.getElementById('signin-button');
    if (signinButton) {
      signinButton.addEventListener('click', function(event) {
        event.preventDefault();
  
        window.location.href = '/staff';
      });
    }
  });