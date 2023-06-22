// Your code goes here
document.addEventListener("DOMContentLoaded", function (){
   console.log("The DOM has loaded")
   content();
})

const content = () => {
    const textToShow = document.getElementById("text");
    textToShow.textContent= "This is really cool!";

};
