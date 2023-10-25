function toggleModal(open) {
  document.querySelector('.modal_wrapper').style.display = open ? 'block' : 'none';
}

document.querySelector('.modal .send').addEventListener('click', (e) => {
  const name = document.querySelector('.modal #name').value,
    phone = document.querySelector('.modal #phone').value;

  let error = null;  

  if (!name || !phone) {
    error = 'Поля должны быть заполнены';
  } else if (!/^[А-яA-z]+$/.test(name)) {
    error = 'Поле "Имя" не допускает числа';
  } else if (!/^[\d]+$/.test(phone)) {
    error = 'Поле "Телефон" не допускает буквенные символы';
  }

  if (error !== null) {
    alert(error);
  } else {
    alert('Спасибо! Мы свяжемся с Вами');
    toggleModal(false);
  }
});

/* const mainSliderImg = document.querySelector('#photo_main');
Array.from(document.querySelectorAll('.case_portfolio .slides img')).forEach((e) => {
  const img = e.target;
  img.addEventListener('click', () => {
    mainSliderImg.src = img.src;
  })
}); */

const mainPhoto = document.querySelector('.main_slides_wrapper img');
const slides = Array.from(document.querySelectorAll('.desktop_slides img'));
let current = 0;

function setSlide(index) {
  mainPhoto.src = slides[index].src;
  slides.forEach((slide) => slide.classList.remove('current'));
  slides[index].classList.add('current');
}

document.querySelector('.desktop_slides .next').addEventListener('click', () => {
  if (++current > slides.length - 1) {
    current = 0;
  }
  setSlide(current);
});

document.querySelector('.desktop_slides .prev').addEventListener('click', () => {
  if (--current < 0) {
    current = slides.length - 1;
  }
  setSlide(current);
});

