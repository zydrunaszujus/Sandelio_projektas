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
  
  var varikliai=getElementById("varikliai");
  var mygtukasS=document.getElementById("mygtasS");
  var mygtukasA=document.getElementById("mygtasA");
  var mygtukasZ=document.getElementById("mygtasZ");

  var sinchro=document.getElementById("sinch");   
  var asinchro=document.getElementById("asinch"); 
  var zings=document.getElementById("zingsn");
 
  function varikliai(){
    style.display="none";
  }

   mygtukasS.onclick=function(){
    sinchro.style.display="block";
   }

   mygtukasA.onclick=function(){
    asinchro.style.display="block"; 
   }

   mygtukasZ.onclick=function(){
     zings.style.display="block";
   }


    
  var uzdarytiVariklius=getElementById("varikliai")
  window.onclick=function(event){
    if(event.target==varikliai){
      sinchro.style.display="none";
      asinchro.style.display="none";
      zings.style.display="none";
    }
  }


