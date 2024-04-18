document.getElementById('test-drive-button').addEventListener('click', function() {
    alert('Book your test drive now!');
  });
  document.getElementById('launch-button').addEventListener('click', function() {
    var rocket = document.getElementById('rocket');
    var launchPad = document.getElementById('launch-pad');
    var celebration = document.getElementById('celebration');
  
    // Launch the rocket
    rocket.style.transform = 'translateY(-100%)';
  
    // Hide the launch pad after 2 seconds
    setTimeout(function() {
      launchPad.style.display = 'none';
      celebration.classList.remove('hidden');
    }, 2000);
  });
  
  document.getElementById('stop-celebration-button').addEventListener('click', function() {
    var rocket = document.getElementById('rocket');
    var launchPad = document.getElementById('launch-pad');
    var celebration = document.getElementById('celebration');
  
    // Reset the rocket position
    rocket.style.transform = 'translateY(0)';
  
    // Show the launch pad again
    launchPad.style.display = 'block';
  
    // Hide the celebration
    celebration.classList.add('hidden');
  });
  