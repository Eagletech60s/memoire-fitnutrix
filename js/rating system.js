const addFeedbackBtn = document.querySelector('.add-feedback-btn');
const modalOverlay = document.querySelector('.modal-overlay');

addFeedbackBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'block';
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    modalOverlay.style.display = 'none';
  }
});