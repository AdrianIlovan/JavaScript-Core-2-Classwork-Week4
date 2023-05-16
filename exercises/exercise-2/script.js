/*

Using setTimeout and setInterval
----------

- Open index.html using Live Server
- Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
- Update your code to make the colour change every 5 seconds to something different.
  Hint: try searching for setInterval.

*/


function changeColour() {
  const backGround = document.getElementById('main');
  const colors = ['blue', 'red', 'yellow'];


let arrayOfColors = 0;
setInterval(() =>  {
  backGround.style.color = colors[arrayOfColors];
  arrayOfColors = (arrayOfColors + 1) % colors.length;
}, 5000);
}
changeColour();

