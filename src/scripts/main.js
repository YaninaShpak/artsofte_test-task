window.addEventListener('DOMContentLoaded', ()=> {
  const modal = document.querySelector('.modal'),
        closeBtn = modal.querySelector('.close-button'),
        backBtn = modal.querySelector('.back-button');

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  backBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  document.body.addEventListener("click", (e) => {
    const isShowModal =
      e.target.classList.contains("modal") && modal.classList.contains("show");
  
    if (isShowModal) modal.classList.remove("show");
  });
})