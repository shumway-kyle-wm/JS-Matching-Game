var p = Math.random() * 400;
var d = Math.random() * 100;
var s = Math.round(d);
var m = Math.round(p);


      function  img(){
      var elem = document.createElement("img");
      elem.src = 'https://img.pandawhale.com/post-30626-french-bulldog-pizza-gif-0WQm.gif';
      elem.width = '50';
      elem.height = '50';
      elem.id = 'oddImg';
      elem.style.left = m + 'px';
      elem.style.top = s + '%';
      
      document.getElementById("rightSide").appendChild(elem);

}


            var z = 1;
          function imgTwo(){
            for (var i = 0; i < 5; i++) {
              var p = Math.random() * 400;
              var d = Math.random() * 100;
              var s = Math.round(d);
              var m = Math.round(p);
            var elem = document.createElement("img");
            elem.src = 'https://img.pandawhale.com/post-30626-french-bulldog-pizza-gif-0WQm.gif'
            elem.width = '50';
            elem.height = '50';
            elem.id = 'newImg';
            elem.style.left = m + 'px';
            elem.style.top = s + '%';
            document.getElementById("leftSide").appendChild(elem);

            var elem2 = document.createElement("img");
            elem2.src = 'https://img.pandawhale.com/post-30626-french-bulldog-pizza-gif-0WQm.gif'
            elem2.width = '50';
            elem2.height = '50';
            elem2.id = 'newImg';
            elem2.style.left = m + 'px';
            elem2.style.top = s + '%';
            document.getElementById("rightSide").appendChild(elem2);
            }

          }

          img();
          imgTwo();
          document.getElementById('oddImg').addEventListener("click", imgTwo);
