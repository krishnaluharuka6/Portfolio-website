const toggle = document.getElementById('toggleLight');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-brightness-high-fill');
    if(this.classList.toggle('bi-moon')){
        body.style.background='#e3f2fd';
        body.style.color='#0e3653';
        body.style.transition='2s';
    }
    else{
        body.style.background='#0e3653';
        body.style.color='#e3f2fd';
        body.style.transition='2s';
    }
});

window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("preloader").style.display = "none";
    body.style.background = '#0e3653';
    body.style.color = '#e3f2fd';
    // body.style.transition = '2s';
});




var typed= new Typed(".text",{
    strings:["Web Developer","Curious Learner","Listener"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
