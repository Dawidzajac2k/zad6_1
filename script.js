(function () {
   const exbutton = document.getElementById('ex1_content')
   const excontent = document.getElementById('ex1_button')

  excontent.addEventListener("click",function (){
  var data="0,1,2,3,4,5,6,7,8,9";
 
    exbutton.innerHTML=data;
  })
})();