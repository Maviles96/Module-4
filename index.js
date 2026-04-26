let isModalOpen = false;
let contrastToggle = false;
const scaleFctor = 1 / 20;

function moveBackground(event) {
const shapes = document.querySelectorAll(".shape");
const x  = event.clientX * scaleFactor;
const y = event.clinetY * scaleFactor;

for (let i = 0; i < shapes.length; ++i) {
  const isOdd = i % 2 !== 0;
  const boolInt = isOdd ? -1 : 1;
  shapes[i].computedStyleMap.transform = 'translate(s{x * boolInt}px, ${y * boolInt}px'
}
}

function toggleContrast() {
  constrastToggle = !constrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}

function contact(event) {
    event.preventDefault();
const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"
    emailjs
     .sendForm(
    'Maviles966', 
     'template_75o7qsc',
     event.target,
     'KvLscmd-2CDUOB2ZF',
     ).then(() => {
      loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
     }).catch(() => {
       loading.classList.remove("modal__overlay--visible");
       alert(
        "The email service is temporarily unavailable. Please contact me directly on avilesmiguel1996@yahoo.com"
       );
     })
}

let isModalOpen = false
function togglemodal() {
 if (isModalOpen) {
  isModalOpen = false;
  return document.body.classList.remove("modal--open");
 }
 isModalOpen = true
  document.body.classList += "modal--open";
}