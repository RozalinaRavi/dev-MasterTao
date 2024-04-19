$('select').niceSelect();

$('#first-screen-slider').slick({
     
  dots: true,
  appendArrows: $('.first-screen-arrows'),

  responsive: [{
    breakpoint: 1024,
    settings: {
        arrows: false,
    }
}, ]
});


$('.slider-template').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false
});
  
  const hamburger = document.querySelector('.hamburger')
  const headerNav = document.querySelector('.header-nav')
  const fileInput = document.querySelector('#calculation-file');
  const fileName = document.querySelector('#file-name')

  hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('is-active')
    headerNav.classList.toggle('show')
  })

  fileInput.addEventListener('change', () => {
    fileName.innerHTML = fileInput.files[0].name;
});

  const controlledField = document.querySelectorAll('[type="checkbox"]')
  const fileField = document.querySelectorAll('[type=file')
  const formBtns = document.querySelectorAll('form .col button')
 


  const addParentClass = (array, parent, className) => {
    array.forEach(item => {
    item.closest(parent).classList.add(className)
    })
  }

  addParentClass(controlledField, '.input-wrapper', 'controlled-wrapper')
  addParentClass(controlledField, '.col', 'controlled-col')
  addParentClass(fileField, '.input-wrapper', 'file-wrapper')
  addParentClass(formBtns, '.col', 'mobile-center')