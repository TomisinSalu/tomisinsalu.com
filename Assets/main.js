const nav = document.querySelector('nav');

window.addEventListener('scroll', function() { 
    if(window.scrollY > 150)
      nav.classList.add('scroll');
    else 
      nav.classList.remove('scroll');
  });

//SLIDESHOW
// var i = 0;
// var time = 2000;
// imgClasses = ['bg-bridge', 'bg-mountain', 'bg-bridge'];
// const header = document.getElementsById("bg")

// function changeImg(){
//   header.classList.toggle = "bg-bridge";

//   if (i < images.length - 1){
//     i++;
//   }else{
//     i = 0;
//   }
//   console.log(i)
//   setTimeout("changeImg()", time)
// };

// window.onload = changeImg;


