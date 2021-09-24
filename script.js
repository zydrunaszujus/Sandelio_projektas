function myFunction1() {
     window.open("link/varikliai.html");
    
  }
  function myFunction2() {
    window.open("link/kabeliai.html");
  }
  function myFunction3() {
    window.open("link/keitikliai.html");
  }
  function myFunction4() {
    window.open("link/paleidejai.html");
  }
  function myFunction5() {
    window.open("link/reles.html");
  }
  function myFunction6() {
    window.open("link/davikliai.html");
  }
  
  // function sinchroniniai(){
  //   var element = document.getElementById("sinchron");
  //   emitEvent(element, 'sinch');
  // }
  
  function sinchroniniai() {
    if ( document.getElementById ) {
    target = document.getElementById("sinchron");
    if ( target.style.display == "none" ) {
    target.style.display = "";
    } else {
    target.style.display = "none";
    }
    }
   }
   