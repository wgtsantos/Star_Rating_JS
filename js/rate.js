
function  classificar(x) {

  x.max === undefined ? x.max = 5 : false
  x.min === undefined ? x.min = 0 : false
  x.min > x.max ? x.min = x.max : false
  x.disabled === undefined ? x.disabled = false : true

  x.target.classList.add("elemento");
  
  for (let i = 1; i <= x.max; i++) {

    let s = document.createElement("div");
    s.className = "star";
    x.target.appendChild(s);

    if (i <= x.min) { 
      s.classList.add("on");
    }

    if (!x.disabled) {

      s.onmouseover = () => {
        let all = x.target.getElementsByClassName("star");
        for (let j = 0; j < all.length; j++) {
          if (j < i) { 
            all[j].classList.add("on"); 
          }
          else {
             all[j].classList.remove("on");
          }
        }
      };

        if (x.click) { 
          s.onclick = () => { 
            x.click(i); 
          }; 
        }
    }
  }

  // x.target.getstars = () => {
  //   return x.target.querySelectorAll(".on").length;
  // };

}

classificar({
  target: document.getElementById("avaliar"),
  max: 5,
  min: 0,
  click : (stars) => { 
    // alert(stars); 
    document.getElementById('msg').innerHTML = "Você avaliou em " + stars + " estrelas";
  }
});

// var stars = document.getElementById("avaliar").getstars();
// console.log(stars);
