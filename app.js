
const circles = document.querySelectorAll('.circle');// all the divs with the number
const btn = document.getElementById('btn'); // btn
const span = document.querySelector('.inside-rating'); // empty span that will hold the selected number
const thankYou = document.querySelector('.container-thankyou'); // thank you container
const containerOne = document.querySelector('.container');// first container

// loops through all the divs with the number
for ( let i = 0; i < circles.length; i++) {
        //listening to click events on each number of div
        circles[i].addEventListener('click', () => {

            //gets the clicked number and stores it.
            let circle = circles[i].innerHTML;

            //highlights the one selected and also removes the class when another is selected
            for(let i = 0; i < circles.length; i++){
                circles[i].classList.contains('selected');
                circles[i].classList.remove('selected');
            }

            //now add the class selected to the circle divs
            circles[i].classList.add('selected');

            //now listen to click event to the button
            btn.addEventListener('click', () => {
                containerOne.style.display = 'none';
                thankYou.style.display = 'block';
                span.innerHTML = circle;
            })
        })
}