m = 0;
var y;
document.getElementById("stop").style.display = "none";
function start() {
  document.getElementById("start").style.display = "none";
  document.getElementById("stop").style.display = "block";
  y = setInterval(run, 10);

  function run() {
    if (m == 1180) {
      //clearInterval(y);
      m = 0;
    } else {
      m += 5;
      var x = document.getElementById("img");
      x.style.marginLeft = m + "px";
    }
  }
}

function stop() {
  document.getElementById("start").style.display = "block";
  document.getElementById("stop").style.display = "none";
  clearInterval(y);
}
