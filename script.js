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
  document.body.style.backgroundImage = "url('dev.jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  
  
  var button = document.createElement("button");
  button.innerHTML = "click me to watch different phases of Devansh Mittal";
  button.style.position = "absolute";
  button.style.left = "50%";
  button.style.transform = "translateX(-50%)";
  button.style.width = '200px'; // setting the width to 200px
button.style.height = '200px'; // setting the height to 200px
button.style.background = 'teal'; // setting the background color to teal
button.style.color = 'white'; // setting the color to white
button.style.fontSize = '20px';
  

  // 2. Append somewhere
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(button);

  // 3. Add event handler
  button.addEventListener ("click", function() {
  location.href = 'slides.html';
});
  
  document.querySelector(".naga").style.bottom = "20px";
  audio = document.createElement("audio");
  audio.src = "./atrangi.mp3";
  audio.play();
  setTimeout(function () {
    $("body").fireworks();
  }, 3000);
  

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
