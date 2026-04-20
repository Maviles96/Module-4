// 
// 
// 

function contact(event) {
    event.preventDefault();
const loading = document.querySelector('.modal__overlay--loading');
    constsuccess = document.querySelector('.modal__overlay--success');
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
  return document.body.classList.removel("modal--open");
 }
 isModalOpen = true
  document.body.classList += "modal--open";
}