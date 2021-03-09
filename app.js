function change() {
  var x = document.getElementById("bars");
  x.classList.toggle("change");
};

function navBar(){
  var navBar = document.getElementById("myLinks");
  if (navBar.style.display === "block") {
    navBar.style.display = "none";
  } else {
    navBar.style.display = "block";
  }
};

  function myFunction(){
     change();
     navBar();
      }