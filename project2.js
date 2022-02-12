function passvalues(){
  let n = document.querySelector('#keeler');
  let b = document.querySelector('#price');
  sessionStorage.setItem('name', 'KEELER');
 sessionStorage.setItem('price', '$400');
  }
  function passvalues1(){
    let n = document.querySelector('#auto');
    let b = document.querySelector('#pri');
    sessionStorage.setItem('name', 'AUTOREFRACTOR');
   sessionStorage.setItem('price', '$2000');
    }
    function passvalues2(){
      let n = document.querySelector('#hand');
      let b = document.querySelector('#pri1');
      sessionStorage.setItem('name', 'TONOMETER');
     sessionStorage.setItem('price', '$1500');
      }
      function passvalues3(){
        let n = document.querySelector('#stet');
        let b = document.querySelector('#pri2');
        sessionStorage.setItem('name', 'STETHOSCOPE');
       sessionStorage.setItem('price', '$200');
        }
        function passvalues4(){
          let n = document.querySelector('#field');
          let b = document.querySelector('#pri3');
          sessionStorage.setItem('name', 'VISUAL FIELDS MACHINE');
         sessionStorage.setItem('price', '$9000');
          }
          function passvalues5(){
            let n = document.querySelector('#retina');
            let b = document.querySelector('#pri4');
            sessionStorage.setItem('name', 'FUNDUS CAMERA');
           sessionStorage.setItem('price', '$2000');
            }
// Rotate LOGO
var looper;
let degrees = 0;
rotateAnimation('logo', 20);
function rotateAnimation(el,speed){
  var elem = document.getElementById(el);
  elem.style.transform = 'rotate('+degrees+'deg)';
looper = setTimeout('rotateAnimation(\''+el+'\', '+speed+')',speed);
degrees++;
if(degrees>359){
  degrees =1;
}
}
  var logo = document.getElementById('#logo');
  rotateAnimation('logo',20);

//At mouseover on catalogue picture should change
let keeler1 = document.querySelector('.myKeeler');
keeler1.addEventListener('mouseover', function(){
  keeler1.src='images/caseKeeler.jpg';
});
keeler1.addEventListener('mouseout', function(){
  keeler1.src='images/keelerOph.jpg';
})
let myAutor = document.querySelector('.myAuto');
myAutor.addEventListener('mouseover', function(){
  myAutor.src='images/autorBackk.jpg';
});
myAutor.addEventListener('mouseout', function(){
  myAutor.src='images/autorefractor.jpeg';
});
//
let tonom = document.querySelector('.ton');
tonom.addEventListener('mouseover', function(){
  tonom.src='images/tonoSet.jpg';
});
tonom.addEventListener('mouseout', function(){
  tonom.src='images/tono.jpg';
});
//
let stethos = document.querySelector('.stet');
stethos.addEventListener('mouseover', function(){
  stethos.src='images/stetosBack.jpg';
});
stethos.addEventListener('mouseout', function(){
  stethos.src='images/stetos.jpg';
});

let optopol = document.querySelector('.opto');
optopol.addEventListener('mouseover', function(){
  optopol.src='https://www.optopolusa.com/wp-content/uploads/2020/03/pts_920_460x430px_skos_new-454x424.png';
});
optopol.addEventListener('mouseout', function(){
  optopol.src='images/optopol.jpg';
});


let phelcom = document.querySelector('.eyer');
phelcom.addEventListener('mouseover', function(){
  phelcom.src='https://p9y6b3u2.stackpathcdn.com/wp-content/uploads/2020/07/0101-3-scaled.jpg';
});
phelcom.addEventListener('mouseout', function(){
  phelcom.src='images/retCamera.jpg';
});

//Change status of ADD TO BAG
let addToBag = document.querySelector('.open');

addToBag.addEventListener('click', function(){
  addToBag.innerHTML= "ADDING TO BAG";

});
addToBag.addEventListener('mouseover', function(){
  addToBag.innerHTML= "ADD TO BAG";
});
//
let addToBag1 = document.querySelector('#open1');
addToBag1.addEventListener('click', function(){
  addToBag1.innerHTML= "ADDING TO BAG";

});
addToBag1.addEventListener('mouseover', function(){
  addToBag1.innerHTML= "ADD TO BAG";
});
//
let addToBag2 = document.querySelector('#open2');
addToBag2.addEventListener('click', function(){
  addToBag2.innerHTML= "ADDING TO BAG";

});
addToBag2.addEventListener('mouseover', function(){
  addToBag2.innerHTML= "ADD TO BAG";
});
//
let addToBag3 = document.querySelector('#open3');
addToBag3.addEventListener('click', function(){
  addToBag3.innerHTML= "ADDED TO BAG";

});
addToBag3.addEventListener('mouseover', function(){
  addToBag3.innerHTML= "ADD TO BAG";
});
