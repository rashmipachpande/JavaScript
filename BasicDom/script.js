/*Q1. Create 2 div elements one having id=”root” and another having class=”blue-white” and have some header elements inside.

create 2

tags one having no attributes to it and another having class=”blue-white” and have some text inside.

I) change the text color of the element with id=”root” to red on mouseover event.

ii) for the class=”blue-white” set the CSS properties as background color blue and text color white on mouseover event.

iii) for p tag which doesn't have any attributes, change the font size to 50px on mouseover event;   */

// Changecolor on mouseover
function Color()
  {
    document.getElementById("root").style.color="red";
  }

// Chante background and text color on mouseover
function ColorText()
  {
       var event = document.getElementsByClassName("blue-white")
    paraTag = document.getElementsByTagName("p")
    event[0].style.backgroundColor = "blue"
     event[0].style.color = "white"
    paraTag[0].style.backgroundColor = "blue"
    paraTag[0].style.color = "white"
}
// Change fontsize onmouseover
function FontSize()
  {
    var paraData = document.getElementsByTagName("p")
    paraData[1].style.fontSize = "50px";
  }
