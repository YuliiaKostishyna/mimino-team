(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-price-3p-open]'),
    closeModalBtn: document.querySelector('[data-modal-price-3p-close]'),
    modal: document.querySelector('[data-modal-price-3p]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();