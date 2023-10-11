/*window.addEventListener: This is a method used in JavaScript to attach an event listener to an HTML element,
 in this case, the window object. The window object represents the browser window or the global environment in a web page.*/

/*'mousemove': This is the type of event that the code is listening for. In this case,
 it's the mousemove event, which is triggered whenever the mouse pointer is moved over the web page.*/

/*function(details) { ... }: This is an anonymous function that gets executed when the mousemove event occurs. 
It takes one parameter, details, which represents the event object containing information about the mouse movement. 
The function is defined using the function keyword. we can write anything in place of details as it is a word not a keyword*/


//===============================================JavaScript======================================================

//writing these at top so that they can globally accessable easyly
let circle = document.querySelector('#circle');//id Selection
const btn = document.querySelector('#btn');//id selection
const svgelem = document.querySelector('svg');//id selection
var timeline = gsap.timeline();//we have created a variable named timeline and assigned a gsap.timeline() function to it, so that we can perform annimation one by one

window.addEventListener('mousemove', function (details) {
  // console.log(details.clientX, details.clientY);
  let xValue = details.clientX;
  let yValue = details.clientY;

  setTimeout(function () {
    circle.style.top = `${yValue}px`; //niche wala ke jasa bhi likha ja sakta hai
    circle.style.left = xValue + 'px'; //or it can be writeen as xValue + px

  }, 50);

});


//When i click on button which has id "btn" then this function will run==>

btn.addEventListener('click', function () { timeline.reverse();/*this will reverse animation*/ setTimeout(function () {svgelem.classList.add('animate') }, 2000) });






//===============================================GSAP FROM HERE:==================================================

//we have created a variable named timeline and assigned a gsap.timeline() function to it,
// so that we can perform annimation one by one

timeline

  .from('#wrapper', { duration: 4, scale: .7, ease: 'Expo.easeInOut', opacity: 0 })

  .from('#whitestrip', { duration: 2, width: 0, ease: 'Expo.easeInOut', opacity: 0 }, '-=2.5') // -= for reducing the time to animate and += for extending the time to start animation.

  .from('#blackcard', { duration: 1.5, x: 50, ease: 'Expo.easeInOut', opacity: 0 }, '-=1')

  .from('#linelem', { duration: 1.5, x: 50, ease: 'Expo.easeInOut', opacity: 0 }, '-=2.5')

  .from('#linelem .line', { duration: 2.5, width: 50, ease: 'Expo.easeInOut', opacity: 0 }, '-=1')

  .from('#blackcard p', { duration: 1, y: 30, ease: 'Expo.easeInOut', opacity: 0 }, '-=1.5')

  .from('#sidetext', { duration: 3, x: 10, ease: 'Expo.easeInOut', opacity: 0 }, '-=1')

