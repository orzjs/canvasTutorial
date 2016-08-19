var canvasbg = document.getElementById('canvasbg');
var ctxbg = canvasbg.getContext('2d');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var total = (Math.PI/180)*50

CanvasRenderingContext2D.prototype.sector = function (x, y, radius, sDeg, eDeg) {
  
  this.save();
  this.translate(x, y);
  this.beginPath();
  this.arc(0,0,radius,sDeg, eDeg);
  this.lineTo(0,0);
  this.closePath();
  this.restore();
  return this;

}

function easeInOutQuint(t) {
  return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
}

function drawBg() {
  ctxbg.sector(250, 250, 200, 0, Math.PI*2/3);
  var radgrad = ctxbg.createRadialGradient(250,250,0,250,250,200);
  radgrad.addColorStop(0, '#B40404');
  radgrad.addColorStop(1, '#FE2E64');
  ctxbg.fillStyle = radgrad;
  ctxbg.fill();
  ctxbg.sector(250, 250, 200, Math.PI*2/3, Math.PI*2/3*2);
  var radgrad2 = ctxbg.createRadialGradient(250,250,0,250,250,200);
  radgrad2.addColorStop(0, '#0101DF');
  radgrad2.addColorStop(1, '#2E64FE');
  ctxbg.fillStyle = radgrad2;
  ctxbg.fill();
  ctxbg.sector(250, 250, 200, Math.PI*2/3*2, Math.PI*2);
  var radgrad3 = ctxbg.createRadialGradient(250,250,0,250,250,200);
  radgrad3.addColorStop(0, '#FFBF00');
  radgrad3.addColorStop(1, '#F3F781');
  ctxbg.fillStyle = radgrad3;
  ctxbg.fill();
}

function drawLogo() {
  if(total - (Math.PI/180)*50 >= Math.PI) {
    total = (Math.PI/180)*50;
  }
  var part = total / Math.PI;
  var speed = easeInOutQuint(part);
  ctx.beginPath();
  ctx.translate(250, 250);
  ctx.rotate((Math.PI/180)*6*speed);
  total += (Math.PI/180)*6*speed;
  ctx.translate(-250, -250);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.moveTo(260, 225);
  ctx.lineTo(330, 100);
  ctx.lineTo(170, 100);
  ctx.lineTo(330, 400);
  ctx.lineTo(170, 400);
  ctx.lineTo(240, 275);
  //线端变圆
  ctx.lineCap = 'round';
  //拐角处变圆
  ctx.lineJoin = 'round';
  ctx.lineWidth = 15;
  ctx.stroke();
}

function clear() {
  ctx.clearRect(0, 0, 500, 500);
}

function render() {
  clear();
  drawBg();
  drawLogo();
  requestAnimationFrame(render);
}
render();