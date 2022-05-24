(function () {
   const exbutton = document.getElementById('ex1_content')
   const excontent = document.getElementById('ex1_button')
   const extext = document.getElementById('ex2_text')
  
  excontent.addEventListener("click",function (){
  var data="0,1,2,3,4,5,6,7,8,9";
 
    exbutton.innerHTML=data;
  })
  extext.addEventListener("input",function (){
  const popr = "Długość numeru musi być równa 9"
  var nr = document.getElementById("ex2_text");
  const log = document.getElementById('ex2_content');
    nr.addEventListener("imput", function(){
      
      if (nr.value.match(/^[0-9]+$/) && nr.value.lenght ==9)
        log.textContent = "Numer telefon jest poprawny";
      
    });
   
                                         
  })
})();