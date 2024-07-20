document.addEventListener('DOMContentLoaded', function() {
  const revealButton = document.getElementById('revealProposal');
  const proposalContent = document.getElementById('proposalContent');
  const initialText = document.getElementById('initialText');

  // Display initial text
  setTimeout(function() {
      initialText.style.opacity = 1; // Assuming you're fading in text
  }, 1500);

  // Handle proposal reveal
  revealButton.addEventListener('click', function() {
      if (proposalContent.style.display === 'none') {
          proposalContent.style.display = 'block'; // Show the proposal content
          initialText.style.display = 'none'; // Optionally hide the initial text
      } else {
          proposalContent.style.display = 'none'; // Hide proposal
          initialText.style.display = 'block'; // Show initial text
      }
  });

  document.getElementById('yesButton').addEventListener('click', function() {
      alert('You said yes! 🎉');
      // Additional logic for "Yes" response
  });

  document.getElementById('noButton').addEventListener('click', function() {
      alert('You said no. 😢');
      // Additional logic for "No" response
  });
});

