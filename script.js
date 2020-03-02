//Fonctionnalité 1 & 1bis :
let n = 0;
document.getElementsByTagName('footer')[0].addEventListener( 'click', () => {
   n++;
   console.log(`clic numéro ${n}`)
});


//Fonctionnalité 2 :
document.querySelector('button.navbar-toggler').addEventListener( 'click', () => {
   document.getElementById( 'navbarHeader').classList.toggle('collapse');
});


//Fonctionnalité 3 :
document.querySelector( '.btn-outline-secondary').addEventListener( 'click', event => event.target.style.color = "red" );


//Fonctionnalité 4 :
document.getElementsByClassName( 'btn-outline-secondary')[1].addEventListener( 'click', event => {
   const btn = event.target;
   btn.style.color === 'green' ? btn.style.color = '#6c757d' : btn.style.color = 'green'
});


//Fonctionnalité 5 :
//Fonctionnalité 6 :
//Fonctionnalité 7 :
//Fonctionnalité 8 :
//Fonctionnalité 9 :
