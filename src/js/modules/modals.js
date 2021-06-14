const modals = (width) => {
  function bindModals(trigersSelector, modalSelector, closeSelector = '.popup-close') {
    const triggers = document.querySelectorAll(trigersSelector),
          modal = document.querySelector(modalSelector),
          close = modal.querySelector(closeSelector),
          windows = document.querySelectorAll('div[data-modal]');

    let nextModal;

    triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {

        if (e.target) {
          e.preventDefault();
        }

        nextModal = true;

        if (nextModal) {
          windows.forEach(window => {
            window.style.display = 'none';
          });
          
          openModal(modal);
                  
        }
      });
    });

    close.addEventListener('click', () => closeModal(modal));

    modal.addEventListener('click', (e) => {
      if (!e.target.closest('.popup-content')) {
        closeModal(modal);
      }
    });
  }

  function showModalByTime(modalSelector, time) {
    setTimeout(function () {
      const modal = document.querySelector(modalSelector);

      let display;
  
      document.querySelectorAll('[data-modal]').forEach(modal => {
        if(window.getComputedStyle(modal).display != 'none') {
          display = 'block';
        }
      });

      if (!display) {
        openModal(modal);
      }
      
    }, time);
  }
  
  function openModal(modalEl) {
    const fixedElement = document.querySelector('.fixed-gift');
    
    modalEl.style.display = 'block';
    document.body.classList.add('modal-open');
    document.body.style.paddingRight = width + 'px';
  
    if (fixedElement) {
      fixedElement.style.right = (20 + width) + 'px';
    }          
  }

  bindModals('.button-design', '.popup-design');
  bindModals('.button-consultation', '.popup-consultation');

  showModalByTime('.popup-consultation', 5000);
};


function closeModal(modalEl, next = true) {
  const fixedElement = document.querySelector('.fixed-gift');

  if(next) {
    modalEl.style.display = 'none';
    document.body.classList.remove('modal-open');
    document.body.style.paddingRight = 0;

    if(fixedElement) {
      fixedElement.style.right = '20px';
    }
  }
}

export default modals;