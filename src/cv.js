//script pour blur le header on scroll
window.onscroll = function() {
    scrollFunction()
};
var navBar = document.getElementById("header");
function scrollFunction() {
    if (window.scrollY > 10) {
        navBar.setAttribute("style", "backdrop-filter:blur(10px)")
    } else {
        navBar.setAttribute("style", "backdrop-filter:blur(0)")
}    
}

//script pour l'anim de texte 
const ratio=.6
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
 }
const handleIntersect = function(entries, observer){
    entries.forEach(function (entry) {
        if(entry.intersectionRatio > ratio){
          entry.target.classList.add('reveal-visible')
          observer.unobserve(entry.target) 
        }
        
    }) 
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="reveal-"]').forEach(function (r){
    observer.observe(r)
})




//script pour le parallax   
var headerBg = document.getElementById('bg')
    window.addEventListener('scroll', function(){
        headerBg.style.opacity = 1 - +window.pageYOffset/1500+''
        headerBg.style.top= +window.pageYOffset+'px'
        headerBg.style.backgroundPositionY=- +window.pageYOffset *1.5+'px'
    })

    var main3Bg = document.getElementById('bg2')
    window.addEventListener('scroll', function(){
      main3Bg.style.opacity=1+window.pageYOffset/400+''
      })

//script pour interdire de déplacer les images
$('#myImage').attr('draggable', false);
document.getElementById('myImage').setAttribute('draggable', false);
