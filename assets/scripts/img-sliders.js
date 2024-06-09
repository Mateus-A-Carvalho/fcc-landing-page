const bodyEl = document.querySelector('body');
// Img containers
const firstImgSlider = document.querySelector('#img-slider-01');
const secondImgSlider = document.querySelector('#img-slider-02');

// Getting the width of container slider;
const imgWidthValue = firstImgSlider.offsetWidth;

// Imgs id's
const firstContainerProductsImgEl = document.querySelectorAll('.first-container-product__photo');
const secondContainerProductsImgEl = document.querySelectorAll('.second-container-product__photo');

// First containers btns;
const firstBtnNextEl = document.querySelector('#first-container__btn-next');
const firstBtnPrevEl = document.querySelector('#first-container__btn-prev');

// Second containers btns;
const secondBtnNextEl = document.querySelector('#second-container__btn-next');
const secondBtnPrevEl = document.querySelector('#second-container__btn-prev');

// Img control;
let firstCurrentImg = 1;
let secondCurrentImg = 1;

bodyEl.addEventListener('click', (e) => {
  if(e.target.classList.contains('first-container__btn-next')) {
    updateImg('first', e.target);
  }

  if(e.target.classList.contains('first-container__btn-prev')) {
    updateImg('first', e.target);
  }

  if(e.target.classList.contains('second-container__btn-next')) {
    updateImg('second', e.target);
  }

  if(e.target.classList.contains('second-container__btn-prev')) {
    updateImg('second', e.target);
  }
})

function updateImg(containerNumber, btnType) {
    
    // Checking the parameter
    if(containerNumber === 'first' && btnType.classList.contains('btn-next')) {
      firstCurrentImg++;   
      
      // Img control
      if(firstCurrentImg > firstContainerProductsImgEl.length) {
        firstCurrentImg = 1;
      } else if(firstCurrentImg < 1) {
        firstCurrentImg = firstContainerProductsImgEl.length;
      }

      firstImgSlider.style.transform = `translateX(-${(firstCurrentImg - 1) * imgWidthValue}px)`;
      
    }

    if(containerNumber === 'first' && btnType.classList.contains('btn-prev')) {
      firstCurrentImg--;   
      
      // Img control
      if(firstCurrentImg > firstContainerProductsImgEl.length) {
        firstCurrentImg = 1;
      } else if(firstCurrentImg < 1) {
        firstCurrentImg = firstContainerProductsImgEl.length;
      }

      firstImgSlider.style.transform = `translateX(-${(firstCurrentImg - 1) * imgWidthValue}px)`;
     
    }

    if(containerNumber === 'second' && btnType.classList.contains('btn-next')) {
      secondCurrentImg++;   
      
      // Img control
      if(secondCurrentImg > secondContainerProductsImgEl.length) {
        secondCurrentImg = 1;
      } else if(secondCurrentImg < 1) {
        secondCurrentImg = secondContainerProductsImgEl.length;
      }

      secondImgSlider.style.transform = `translateX(-${(secondCurrentImg - 1) * imgWidthValue}px)`;
      
    }

    if(containerNumber === 'second' && btnType.classList.contains('btn-prev')) {
      secondCurrentImg--;   
      
      // Img control
      if(secondCurrentImg > secondContainerProductsImgEl.length) {
        secondCurrentImg = 1;
      } else if(secondCurrentImg < 1) {
        secondCurrentImg = secondContainerProductsImgEl.length;
      }

      secondImgSlider.style.transform = `translateX(-${(secondCurrentImg - 1) * imgWidthValue}px)`;
      
    }

}