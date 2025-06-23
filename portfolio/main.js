const toggle = document.getElementById('toggleLight');
const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-brightness-high-fill');
    if(this.classList.toggle('bi-moon')){
        body.style.background='#e3f2fd';
        body.style.color='#0e3653';
        body.style.transition='2s';
        navbar.style.background='#e3f2fd';
    }
    else{
        body.style.background='#0e3653';
        body.style.color='#e3f2fd';
        body.style.transition='2s';
        navbar.style.background='#0e3653';
    }
});

window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("preloader").style.display = "none";
    body.style.background = '#0e3653';
    body.style.color = '#e3f2fd';
    navbar.style.background='#0e3653';
    body.style.transition = '2s';
});

const messages = ["Hello","नमस्ते", "Wassup?", "Bonjour", "राम राम"];
    const delay = 2000; // 2 seconds per message

    const textDisplay = document.getElementById("text-display");

    let index = 0;

    function showMessage() {
      textDisplay.innerText = messages[index];
      index = (index + 1) % messages.length; // loop through messages
      setTimeout(showMessage, delay);
    }

    // Start showing the first message
    showMessage();




var typed= new Typed(".text",{
    strings:["Web Developer","Curious Learner","Problem Solver"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


function copyEmail() {
  const emailText = document.getElementById("email").innerText;
  navigator.clipboard.writeText(emailText).then(() => {
    showToast();
  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
}

function showToast() {
  const toast = document.getElementById("toast");
  toast.className = "show";
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000); // Toast visible for 3 seconds
}

                    