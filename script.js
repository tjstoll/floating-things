function test() {
  // Testing to see if this works...
  var division = document.getElementById('test');
  for (i=0; i<10; i++) {
    var para = document.createElement('p');
    var node = document.createTextNode('I am ' + i);
    if (i == 3) {para.setAttribute('id', 'highlight');};
    para.appendChild(node);

    division.appendChild(para);
  };
};

// The real code =========================================================

function generateColour() {
  var colours = ['#39BAC1','#367B8C','#FF4C49','#DFA431'];
  var colour = Math.floor(Math.random()*(colours.length));
  return colours[colour];
}

function move(elem, bottom,left) {
  // Apply random y motion speeds for now

  var x = 0;
  var y = 0;
  var incy = true;
  var step = 0.1;
  var ranFrame = Math.floor(Math.random()*(11))+40;

  setInterval(frame, ranFrame);
  function frame() {
    if (y+bottom<100 && incy) {
      y+=step;
      elem.style.bottom = y+bottom+'%';
    } else {
      incy=false;
      y-=step;
      elem.style.bottom = y+bottom+'%';
      if (y+bottom<0) {
        incy=true;
      }
    }
  };
};

function makeCircles() {
  // Makes a set of circle with random position, colour, size, and blur

  var division = document.getElementById('animation');
  var circles = new Array();

  // Max and min circle radii in em and blur in px
  var max = 7;
  var min = 1;

  for (i=0; i<10; i++) {
    var ranBottom = Math.floor(Math.random() * 100);
    var ranLeft = Math.floor(Math.random() * 100);
    var ranRadius = Math.floor(Math.random()*(max-min+1))+min;
    var ranBlur = Math.floor(Math.random()*(max-min+1))+min;
    var circle = document.createElement('div');

    circle.setAttribute('id', 'circle');
    circle.style.height = ranRadius + 'em';
    circle.style.width = ranRadius + 'em';

    // Make the rest of the circles fuzzy
    if (i>4) {
      circle.style.filter = 'blur('+ranBlur+'px)';
    };

    circle.style.background = generateColour();
    circle.style.bottom = ranBottom + '%';
    circle.style.left = ranLeft + '%';
    move(circle, ranBottom, ranLeft);

    division.appendChild(circle);
  };
};

// Run automatically
makeCircles();
