burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')




burger.addEventListener('click', ()=>{
 
    navlist.classList.toggle('vresp');
    navbar.classList.toggle('hresp');

});

