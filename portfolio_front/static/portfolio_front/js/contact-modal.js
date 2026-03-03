// Contact Modal Handler
document.addEventListener('DOMContentLoaded', function() {
  const contactBtn = document.getElementById('contactBtn');
  const contactModal = document.getElementById('contactModal');
  const closeContactModal = document.getElementById('closeContactModal');
  const contactBackdrop = document.getElementById('contactBackdrop');

  if (!contactBtn || !contactModal) return;

  // Open modal
  contactBtn.addEventListener('click', function(e) {
    e.preventDefault();
    contactModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  // Close modal function
  function closeModal() {
    contactModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  // Close with X button
  if (closeContactModal) {
    closeContactModal.addEventListener('click', closeModal);
  }

  // Close with backdrop click
  if (contactBackdrop) {
    contactBackdrop.addEventListener('click', closeModal);
  }

  // Close with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && contactModal.classList.contains('active')) {
      closeModal();
    }
  });

  // Prevent modal content clicks from closing modal
  const modalContent = document.querySelector('.contact-modal-content');
  if (modalContent) {
    modalContent.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
});