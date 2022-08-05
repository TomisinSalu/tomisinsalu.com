//Change nav style on scroll

// window.addEventListener('scroll', () =>{
//     document.queryselector('nav').classList.toggle('nav-scroll'), window.scrollY > 0;
// }
// )
const nav = document.querySelector('nav');

window.addEventListener('scroll', function() { 
    if(window.scrollY > 20)
      nav.classList.add('scroll');
    else 
      nav.classList.remove('scroll');
  });

const title = document.getElementById("title")

var animateText = function(){
    strimgs
}

window.setInterval(animateText, 3000);
