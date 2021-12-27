
  var ball=document.getElementById("animate");
  ball.style.backgroundColor="white";
  ball.style.width="70px";
  ball.style.height="70px";
  ball.style.borderRadius="50%";
  ball.style.position="relative";
  

  var container =document.getElementById("con");
  container.style.backgroundColor="red";
  container.style.width="40%";
  container.style.height="570px";
  
  function mymove() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var anim= setInterval(frame, 5);
    function frame() {
      if (pos == 500) {
        clearInterval(anim);
        mymove1()
       } 
       else {
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
      }
    }
  }
   function mymove1() {
    var elem1 = document.getElementById("animate");
    var pos1 = 500;
    var anim1= setInterval(frame, 5);
    function frame() {
      if (pos1 == 0) {
        ball.style.borderRadius="0px"
        clearInterval(anim1);
        mymove2()
       } 
       else {
        pos1--;
        elem1.style.top= pos1 + 'px';
       }
      }
    }
    
   var ball2=document.getElementById("animate1");
    ball2.style.background="white"
    ball2.style.width="70px";
    ball2.style.height="70px";
    ball2.style.borderRadius="50%";
    ball2.style.position="relative";
    ball2.style.display="none";
    ball2.style.top="430px";
    ball2.style.left="90px"
    function mymove2() {
      var elem2 = document.getElementById("animate");
      var pos2 = 0;
      var lpos2=500;
      var anim2= setInterval(frame, 5);
      function frame() {
        if (pos2 == 500) {
          ball.style.borderRadius="50%";
          ball2.style.display="block";
          clearInterval(anim2);
          mymove3()
         } 
         else {
          pos2++;
          elem2.style.top= pos2 + 'px';
          lpos2--;
          elem2.style.left= lpos2 + 'px';
          }
      }
     }

     function mymove3() {
      var elem3 = document.getElementById("animate");
      var pos3 = 500;
      var anim3= setInterval(frame, 5);
      function frame() {
        if (pos3 == 0) {
         clearInterval(anim3);
          mymove4()
         } 
         else {
          pos3--;
          elem3.style.top= pos3 + 'px';
         }
        }
      }

      function mymove4() {
        var elem4 = document.getElementById("animate1");
        var pos4 = 100;
        var anim4= setInterval(frame, 5);
        function frame() {
          if (pos4 == 500) {
           clearInterval(anim4);
           } 
           else {
            pos4++;
            elem4.style.left= pos4 + 'px';
           }
          }
        }

    
      


  
  
  
  