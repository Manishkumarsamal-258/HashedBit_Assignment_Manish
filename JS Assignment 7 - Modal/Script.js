  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtns = document.querySelectorAll('.closeBtns');
  const modal = document.getElementById('modal');

  openModalBtn.addEventListener('click', function() {
      modal.style.display = 'block';
  });

  closeModalBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
          modal.style.display = 'none';
      });
  });

  window.addEventListener('click', function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  });