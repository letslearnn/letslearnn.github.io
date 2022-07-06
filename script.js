function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(5) + 8;
  return `
    background-color: rgba(${r},${g},${b},1);
    color: rgba(${r},${g},${b},0.7); 
    box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
    margin: ${mt}px 0 0 ${ml}px;
    animation: float ${dur}s ease-in 1 forwards
    `;
}

function createBalloons(num) {
  var balloonContainer = document.getElementById("balloon-container");
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}

function createName() {
  var balloonContainer = document.getElementById("balloon-container");
  var heading = document.createElement("h1");
  heading.innerHTML = "Happy Birthday Devaaaaaaa";
  heading.className = "heading";
  document.body.append(heading);
  balloonContainer.remove();
  
  img_1 = document.createElement("img");
  img_1.src = "anime.jpg";
  img_1.className = "prabha_img img_1";

  img_2 = document.createElement("img");
  img_2.src = "candles.jpg";
  img_2.className = "prabha_img img_2";

  img_3 = document.createElement("img");
  img_3.src = "gym.jpg";
  img_3.className = "prabha_img img_3";

  img_4 = document.createElement("img");
  img_4.src = "yoga.jpg";
  img_4.className = "prabha_img img_4";

  document.querySelector(".naga").style.bottom = "20px";
  document.body.append(img_1);
  document.body.append(img_2);
  document.body.append(img_3);
  document.body.append(img_4);
  audio = document.createElement("audio");
  audio.src = "./atrangi.mp3";
  audio.play();
  setTimeout(function () {
    $("body").fireworks();
  }, 3000);
  
 <html>
<body>

<p>Click the "Try it" button to create a BUTTON element with a "Click me" text.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  var x = document.createElement("BUTTON");
  var t = document.createTextNode("Click me");
  x.appendChild(t);
  document.body.appendChild(x);
}
</script>

</body>
</html>

}

header = document.querySelector(".header");
function start() {
  header.style.animation = "remove 2s ease-in-out forwards";
  setTimeout(function () {
    header.remove();
  }, 2500);
  createBalloons(30);
  setTimeout(createName, 10000);
}
