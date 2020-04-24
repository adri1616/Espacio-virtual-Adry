var slideIndex=1; 

mostrarSlides(slideIndex);



function mostrarSlides(n) {

var i;
var slides = document.getElementsByClassName('miSlider'); //EN ESTA LINEA ESTAMOS ASIGNANDOLE A LA VARIABLE LOS ELEMENTOS
var puntitoS = document.getElementsByClassName('puntito');//EN ESTA LINEA ESTAMOS ASIGNANDOLE A LA VARIABLE LOS ELEMENTOS

if (n>slides.length) {slideIndex=1;}
if (n<1) {slideIndex=slides.length;}
for(i = 0; i < slides.length; i++){
    slides[i].style.display="none";
}
for ( i = 0; i < puntitoS.length; i++) {
	puntitoS[i].className=puntitoS[i].className.replace("activo","");
}
slides[slideIndex-1].style.display="block";
puntitoS[slideIndex-1].className+="activo";
}

function plusSlides(n) {//FUNCTION: REALIZA UNA TAREA O CALCULA UN VALOR
	//body
	mostrarSlides(slideIndex+=n);
}
function currentSlide(n) {
	//body
	mostrarSlides(slideIndex=n);
}