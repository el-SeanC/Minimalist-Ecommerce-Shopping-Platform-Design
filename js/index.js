
window.onscroll = function(){
    scrollFunc();
}

function scrollFunc(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        document.getElementById('nvb').style.top = '0';
    }else{
        document.getElementById('nvb').style.top = '-70px';
    }
}

    
gsap.from( '.hero-text', { opacity:0, duration: 1.5, ease: "bounce.out", y: -50});

gsap.from('.hero-image', { opacity:0, duration: 1.5,delay: 1, ease: "power1.out",y: -20});



let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click',()=>{
    if(mainNav.style.display === 'none'){
        mainNav.style.display = 'block';
    }else{
        mainNav.style.display = 'none';
    }
})

