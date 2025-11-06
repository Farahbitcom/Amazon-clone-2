const imgs = document.querySelectorAll('.header-slider img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n = 0;

function changeSlide() {
  imgs.forEach((img, index) => {
    img.style.display = (index === n) ? 'block' : 'none';
  });
}

changeSlide();

prev_btn.addEventListener('click', (e) => {
  e.preventDefault();
  n = (n - 1 + imgs.length) % imgs.length;
  changeSlide();
});

next_btn.addEventListener('click', (e) => {
  e.preventDefault();
  n = (n + 1) % imgs.length;
  changeSlide();
});

const ScrollContainer = document.querySelectorAll('.products');
for (const item of ScrollContainer) {
  item.addEventListener('wheel',(e)=>{
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
  })
}